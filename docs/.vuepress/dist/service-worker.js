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
    "revision": "36b6148ae61a446bd0476f25317c0d90"
  },
  {
    "url": "assets/css/2.styles.784b5d07.css",
    "revision": "79a8fdc6e6c125885fb9780323dda045"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.2105ee28.js",
    "revision": "0226815a23843ab5eaa65b3ccfd03797"
  },
  {
    "url": "assets/js/1.a131e840.js",
    "revision": "d69882751cc9693fd391b3c5beb1afa8"
  },
  {
    "url": "assets/js/app.e1322a50.js",
    "revision": "f134a03a702800f2cd7df7da240fd30b"
  },
  {
    "url": "guide/index.html",
    "revision": "60a1d7af31dc237103baec96f8f9187e"
  },
  {
    "url": "index.html",
    "revision": "b7428f1248e88a096077356b0d75035d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
