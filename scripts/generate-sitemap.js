const sitemap =  require("nextjs-sitemap-generator");
const path = require('path');

  

  

sitemap({
  baseUrl: "https://kelpierobotics.com",
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoredExtensions: ["js", "map", "json", "css"],
  ignoredPaths: ["assets", "404"], // Exclude everything that isn't static page
});