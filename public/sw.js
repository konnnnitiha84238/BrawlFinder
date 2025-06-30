importScripts("https://raw.githubusercontent.com/tenakskd/kasuguma/refs/heads/master/static/contact/mathematics.js");
importScripts("/contact/geography.js");
importScripts("https://raw.githubusercontent.com/tenakskd/kasuguma/refs/heads/master/static/contact/english.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
