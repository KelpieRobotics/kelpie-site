module.exports = {
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "refresh.kelpie-site.pages.dev" },
      { protocol: "https", hostname: "kelpie-site.pages.dev" },
      { protocol: "https", hostname: "kelpierobotics.ca" },
    ],
    unoptimized: true,
  },
};
