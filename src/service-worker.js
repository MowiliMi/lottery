/* eslint-disable */

const cacheStrategy = {
  uri: 'https://api.tuningcrew.pl',
  js: {
    cacheName: btoa('cache-js'),
    maxEntries: 60,
    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
  },
  css: {
    cacheName: btoa('cache-css'),
    maxEntries: 60,
    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
  },
  image: {
    cacheName: btoa('cache-image'),
    maxEntries: 120,
    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
  },
};

workbox.setConfig({ debug: false });
workbox.precaching.precacheAndRoute([]);

// Cache js
workbox.routing.registerRoute(
  /\.(?:js)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: cacheStrategy.js.cacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: cacheStrategy.js.maxEntries,
        maxAgeSeconds: cacheStrategy.js.maxAgeSeconds,
      }),
    ],
  }),
);

// Cache css
workbox.routing.registerRoute(
  /\.(?:css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: cacheStrategy.css.cacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: cacheStrategy.css.maxEntries,
        maxAgeSeconds: cacheStrategy.css.maxAgeSeconds,
      }),
    ],
  }),
);

// Cache images:
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: cacheStrategy.image.cacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: cacheStrategy.image.maxEntries,
        maxAgeSeconds: cacheStrategy.image.maxAgeSeconds,
      }),
    ],
  }),
);

// Cache Google fonts:
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: cacheStrategy.googleapis.cacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: cacheStrategy.googleapis.maxEntries,
        maxAgeSeconds: cacheStrategy.googleapis.maxAgeSeconds,
      }),
    ],
  }),
);
