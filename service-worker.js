/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa076cc671ed6da8e1319687327932aa"
  },
  {
    "url": "assets/css/2.styles.db1af2ec.css",
    "revision": "a026118f2b526d5830f40c828b107ad3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a830fcd9.js",
    "revision": "908ae761e0068c9a54f1dbaec5f22776"
  },
  {
    "url": "assets/js/1.cd0aea5c.js",
    "revision": "cbd1e62a0f940e60d9003e9e74236618"
  },
  {
    "url": "assets/js/app.15ef02ec.js",
    "revision": "db4d56f360f92a773c39684a8fd08c8d"
  },
  {
    "url": "guide/index.html",
    "revision": "5013b71203f39dd53692a20795e44037"
  },
  {
    "url": "index.html",
    "revision": "d646a4504c59c86a3eff35605bf1e600"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
