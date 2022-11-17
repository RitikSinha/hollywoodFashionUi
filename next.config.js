/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};

module.exports = nextConfig;
