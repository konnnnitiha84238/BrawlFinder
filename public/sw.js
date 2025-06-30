importScripts("https://cdn.jsdelivr.net/gh/Tenakskd/kasuguma@master/static/contact/mathematics.js");
importScripts("/contact/geography.js");
importScripts("https://cdn.jsdelivr.net/gh/Tenakskd/kasuguma@master/static/english.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
