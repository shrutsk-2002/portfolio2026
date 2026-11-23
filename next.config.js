/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      // Serve the static homepage at the bare domain (no redirect, no "Portfolio" page in between)
      beforeFiles: [{ source: "/", destination: "/index.html" }],
    };
  },
};

module.exports = nextConfig;
