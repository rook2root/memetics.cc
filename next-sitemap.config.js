/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://memetics.co',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
