/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    PUBLIC_KEY_WEATHER_KEY: "b4c1a0a746d19d55539fd92c84b40d41",
  },
  images: {
    domains: ["images.unsplash.com", "openweathermap.org"],
  },
};
