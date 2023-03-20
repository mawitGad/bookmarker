/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest : "public",
    disable: process.env.NODE_ENV === 'development',
})
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "chrome-search://favicon/size/16@1.000000x/https://www.showwcase.com/",
    ],
  },
};

module.exports = withPWA(nextConfig) ;
