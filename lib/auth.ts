// Computes a deterministic token from the shared password + a secret salt.
// Both the login route and the middleware derive the same token independently,
// so we never need to store sessions anywhere — just compare the cookie value
// against this computed token.

export const AUTH_COOKIE_NAME = "cs_auth";

export async function getExpectedToken(): Promise<string> {
  const password = process.env.CASE_STUDY_PASSWORD || "";
  const salt = process.env.CASE_STUDY_SALT || "portfolio-salt";

  const data = new TextEncoder().encode(`${password}:${salt}`);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
