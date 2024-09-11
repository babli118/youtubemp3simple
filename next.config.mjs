/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const prod = process.env.NODE_ENV === "production";

const pwaConfig = withPWA({
  dest: "public",
  disable: !prod,
});

const nextConfig = {
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "img.youtube.com"],
  },
};

export default pwaConfig(nextConfig);
