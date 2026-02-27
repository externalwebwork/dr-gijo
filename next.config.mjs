/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent Next.js from treating the Desktop folder as the workspace root
  // when it finds another package-lock.json above this project.
  outputFileTracingRoot: "C:\\Users\\dell\\Desktop\\kooplicat",
};

export default nextConfig;

