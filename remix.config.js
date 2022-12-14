/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  serverDependenciesToBundle: ['react-leaflet', '@react-leaflet', /leaflet/],
  serverBuildTarget: 'vercel',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*', '**/stories/*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
};
