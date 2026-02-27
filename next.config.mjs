/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the current working directory as the tracing root.
  // This is absolute in both local dev and on Vercel.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;

