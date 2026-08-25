export default function LoginPage({
  searchParams,
}: {
  searchParams: { redirect?: string; error?: string };
}) {
  const redirect = searchParams.redirect || "/case-studies";
  const hasError = searchParams.error === "1";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#0f0f0f",
        color: "#f5f5f5",
      }}
    >
      <form
        action="/api/case-studies/verify"
        method="POST"
        style={{
          width: "320px",
          padding: "32px",
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          background: "#161616",
        }}
      >
        <h1 style={{ fontSize: "18px", marginBottom: "8px" }}>
          This case study is private
        </h1>
        <p style={{ fontSize: "14px", color: "#9a9a9a", marginBottom: "20px" }}>
          Enter the password shared with you to continue.
        </p>

        <input type="hidden" name="redirect" value={redirect} />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#0f0f0f",
            color: "#fff",
            marginBottom: "12px",
            fontSize: "14px",
          }}
        />

        {hasError && (
          <p style={{ color: "#ff6b6b", fontSize: "13px", marginBottom: "12px" }}>
            That password isn't right. Try again.
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "none",
            background: "#f5f5f5",
            color: "#0f0f0f",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          View case study
        </button>
      </form>
    </main>
  );
}
