import { useCallback, useEffect, useRef } from "react";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/** Derajat per piksel geseran horizontal (≈ 1 putaran penuh per 800px). */
const DRAG_DEG_PER_PX = 0.45;
/** Kemiringan maksimum dari geseran vertikal & dari hover kursor. */
const MAX_PITCH = 28;
const HOVER_TILT = 9;
/** Di bawah kecepatan ini (deg/detik) kartu berhenti meluncur & mulai "nempel". */
const SETTLE_SPEED = 220;
/** Pegas: kaku & redaman (rasio redaman ~0.7 -> sedikit memantul). */
const SPRING_K = 90;
const SPRING_C = 13;

/**
 * Kartu 3D yang bisa diputar 360°: geser (mouse / jari) untuk memutar bebas,
 * lepas -> meluncur dengan momentum lalu "nempel" ke sisi depan / belakang
 * terdekat dengan efek pegas. Hover mouse = miring sedikit ke arah kursor.
 * Masuk halaman dengan animasi berputar ke posisi.
 *
 * Ditulis langsung ke style elemen lewat requestAnimationFrame (tanpa
 * re-render). Class `is-dragging` / `is-hovering` + CSS variable
 * --glare-x/--glare-y untuk pantulan cahaya (lihat HelperVerification.css).
 * Mati otomatis kalau pengguna memilih "reduce motion".
 *
 * @param {{active?: boolean}} [options] active = kartu sedang tampil
 *   (elemennya baru ada setelah data dimuat; efek dipasang saat ini true).
 * @returns {{ref: import("react").RefObject<HTMLElement>, flip: () => void}}
 */
export default function useCardSpin({ active = true } = {}) {
  const ref = useRef(null);
  const flipRef = useRef(() => {});

  useEffect(() => {
    const el = ref.current;
    if (!active || !el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const s = {
      // Posisi & kecepatan (deg, deg/detik). Mulai sedikit berputar = animasi masuk.
      ry: reduceMotion ? 0 : -38,
      rx: reduceMotion ? 0 : 14,
      vy: 0,
      vx: 0,
      target: 0,
      mode: "settle", // "drag" | "glide" | "settle"
      // Kemiringan hover (sekarang & tujuan)
      hx: 0,
      hy: 0,
      thx: 0,
      thy: 0,
      pointerId: null,
      lastX: 0,
      lastY: 0,
      lastT: 0,
    };
    let raf = 0;
    let prev = 0;

    const render = () => {
      el.style.transform = `rotateX(${(s.rx + s.hx).toFixed(2)}deg) rotateY(${(s.ry + s.hy).toFixed(2)}deg)`;
    };

    const step = (now) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const ease = Math.min(1, dt * 10);
      s.hx += (s.thx - s.hx) * ease;
      s.hy += (s.thy - s.hy) * ease;

      if (s.mode === "glide") {
        s.ry += s.vy * dt;
        s.vy *= Math.pow(0.08, dt); // gesekan
        if (Math.abs(s.vy) < SETTLE_SPEED) {
          s.mode = "settle";
          s.target = Math.round(s.ry / 180) * 180;
        }
      } else if (s.mode === "settle") {
        s.vy += (-SPRING_K * (s.ry - s.target) - SPRING_C * s.vy) * dt;
        s.ry += s.vy * dt;
      }
      if (s.mode !== "drag") {
        s.vx += (-SPRING_K * s.rx - SPRING_C * s.vx) * dt;
        s.rx += s.vx * dt;
      }
      render();

      const resting =
        s.mode === "settle" &&
        Math.abs(s.ry - s.target) < 0.05 &&
        Math.abs(s.vy) < 0.05 &&
        Math.abs(s.rx) < 0.05 &&
        Math.abs(s.vx) < 0.05 &&
        Math.abs(s.hx - s.thx) < 0.05 &&
        Math.abs(s.hy - s.thy) < 0.05;
      if (resting || s.mode === "drag") {
        raf = 0;
        if (resting) {
          // Normalisasi biar angka gak terus membesar setelah banyak putaran.
          s.ry = s.target = ((s.target % 360) + 360) % 360;
          render();
        }
        return;
      }
      raf = requestAnimationFrame(step);
    };

    const kick = () => {
      if (reduceMotion) {
        s.ry = s.target;
        s.rx = 0;
        s.hx = s.hy = 0;
        render();
        return;
      }
      if (!raf) {
        prev = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    const setGlare = (e) => {
      const r = el.getBoundingClientRect();
      const x = clamp((e.clientX - r.left) / r.width, 0, 1);
      const y = clamp((e.clientY - r.top) / r.height, 0, 1);
      el.style.setProperty("--glare-x", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-y", `${(y * 100).toFixed(1)}%`);
      return [x, y];
    };

    const onDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      s.mode = "drag";
      s.pointerId = e.pointerId;
      s.lastX = e.clientX;
      s.lastY = e.clientY;
      s.lastT = performance.now();
      s.vy = s.vx = 0;
      s.thx = s.thy = 0;
      s.hx = s.hy = 0;
      el.setPointerCapture?.(e.pointerId);
      el.classList.add("is-dragging");
      setGlare(e);
    };

    const onMove = (e) => {
      if (s.mode === "drag" && e.pointerId === s.pointerId) {
        const now = performance.now();
        const dt = Math.max(1, now - s.lastT) / 1000;
        const dRy = (e.clientX - s.lastX) * DRAG_DEG_PER_PX;
        s.ry += dRy;
        s.rx = clamp(s.rx - (e.clientY - s.lastY) * 0.3, -MAX_PITCH, MAX_PITCH);
        // Kecepatan dihaluskan biar lemparan terasa natural.
        s.vy = clamp(0.75 * (dRy / dt) + 0.25 * s.vy, -2400, 2400);
        s.lastX = e.clientX;
        s.lastY = e.clientY;
        s.lastT = now;
        setGlare(e);
        render();
        return;
      }
      if (e.pointerType === "mouse" && s.mode !== "drag") {
        const [x, y] = setGlare(e);
        // Di sisi belakang arah kiri-kanan terbalik.
        const facing = Math.cos(((s.ry + s.hy) * Math.PI) / 180) >= 0 ? 1 : -1;
        s.thx = (0.5 - y) * 2 * HOVER_TILT;
        s.thy = (x - 0.5) * 2 * HOVER_TILT * facing;
        el.classList.add("is-hovering");
        kick();
      }
    };

    const release = (e) => {
      if (s.mode !== "drag" || (e && e.pointerId !== s.pointerId)) return;
      el.classList.remove("is-dragging");
      // Jeda lama sebelum dilepas = bukan lemparan.
      if (performance.now() - s.lastT > 90) s.vy = 0;
      s.mode = Math.abs(s.vy) > SETTLE_SPEED ? "glide" : "settle";
      s.target = Math.round(s.ry / 180) * 180;
      s.pointerId = null;
      kick();
    };

    const onLeave = () => {
      s.thx = s.thy = 0;
      el.classList.remove("is-hovering");
      kick();
    };

    const flip = () => {
      s.mode = "settle";
      s.target = Math.round(s.ry / 180) * 180 + 180;
      kick();
    };
    flipRef.current = flip;

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("dblclick", flip);
    render();
    kick();

    return () => {
      cancelAnimationFrame(raf);
      flipRef.current = () => {};
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", release);
      el.removeEventListener("pointercancel", release);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("dblclick", flip);
    };
  }, [active]);

  const flip = useCallback(() => flipRef.current(), []);
  return { ref, flip };
}
