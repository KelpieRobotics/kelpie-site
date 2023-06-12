/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ["refresh.kelpie-site.pages.dev", "kelpie-site.pages.dev", "kelpierobotics.com"],
    unoptimized: true,
	},
}

module.exports = nextConfig
