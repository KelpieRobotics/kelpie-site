const SitemapGenerator = require('nextjs-sitemap-generator');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["refresh.kelpie-site.pages.dev", "kelpie-site.pages.dev", "kelpierobotics.com"],
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Define your custom rewrites if needed
    ];
  },
  async redirects() {
    return [
      // Define your custom redirects if needed
    ];
  },
  webpack(config, options) {
    // Add any custom webpack configurations if needed
    return config;
  },
  async afterExport() {
    if (process.env.NODE_ENV === 'production') {
      // Generate the sitemap in the 'out' directory during the export process
      await new SitemapGenerator({
        baseUrl: 'https://www.example.com', // Replace with your site URL
        pagesDirectory: __dirname + '/pages',
        targetDirectory: 'out/',
        ignoredExtensions: ['js', 'map'],
        ignoredPaths: ['404'],
      }).generate();
    }
  },
};
