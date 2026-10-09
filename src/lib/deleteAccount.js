// ============================================
// Alur hapus akun dari web (/me/delete-account):
// login email+password -> OTP login -> DELETE /users/me.
// Token cuma disimpan di memori halaman, gak pernah ke localStorage.
// ============================================

import { apiUrl } from "./api";

/** Error dari API, membawa status HTTP & error_code (kalau ada). */
export class ApiError extends Error {
  constructor(status, message, errorCode) {
    super(message);
    this.status = status;
    this.errorCode = errorCode;
  }
}

async function request(path, { method = "POST", body, token } = {}) {
  let res;
  try {
    res = await fetch(apiUrl(path), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(0, "network");
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(res.status, json.message ?? "", json.error_code);
  return json.data;
}

/** POST /auth/login — `otp_required` true (OTP dikirim) atau token langsung keisi. */
export const login = (email, password) =>
  request("/auth/login", { body: { email, password } });

/** POST /auth/otp/verify (purpose login) — balikin access_token + user. */
export const verifyLoginOtp = (email, code) =>
  request("/auth/otp/verify", { body: { email, code, purpose: "login" } });

/** POST /auth/otp/resend (purpose login). */
export const resendLoginOtp = (email) =>
  request("/auth/otp/resend", { body: { email, purpose: "login" } });

/** DELETE /users/me — hapus akun permanen, password dikirim ulang sebagai konfirmasi. */
export const deleteMyAccount = (token, password) =>
  request("/users/me", { method: "DELETE", token, body: { password } });
