import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../lib/api";

/**
 * Profil publik Tukang Tulung dari GET /api/v1/public/helpers/:id (tanpa
 * login) — dipakai halaman verifikasi yang dibuka dari QR Kartu Tetulung.
 * @returns {{status: "loading"|"ready"|"notfound"|"error", helper: object|null, retry: () => void}}
 */
export default function usePublicHelper(id) {
  const [attempt, setAttempt] = useState(0);
  const requestKey = `${id}:${attempt}`;
  // Hasil disimpan bersama key request-nya; selama key belum cocok (id baru
  // / coba lagi) statusnya otomatis "loading".
  const [result, setResult] = useState({ key: null, status: "loading", helper: null });

  useEffect(() => {
    const controller = new AbortController();
    const done = (status, helper = null) => setResult({ key: requestKey, status, helper });

    fetch(apiUrl(`/public/helpers/${encodeURIComponent(id ?? "")}`), {
      signal: controller.signal,
    })
      .then(async (res) => {
        if (res.status === 404) return done("notfound");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const body = await res.json();
        done("ready", body.data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") done("error");
      });

    return () => controller.abort();
  }, [id, requestKey]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  if (result.key !== requestKey) return { status: "loading", helper: null, retry };
  return { status: result.status, helper: result.helper, retry };
}
