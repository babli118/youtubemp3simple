if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),u={module:{uri:c},exports:t,require:r};a[c]=Promise.all(i.map((e=>u[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"54e9ee0e8d2202bd7b315311001d235d"},{url:"/_next/static/chunks/160b575a-c01df88edd4255fc.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/23-4e543a736135bbc2.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/370b0802-e8187cc4c4c22153.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/471-a4489f8768eea8ac.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/53c13509-ab43dc6cd4112404.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/615-bee714dc10eabc1e.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/8e1d74a4-d8b38d55a7547c49.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/95-ee6f4a349d82d13f.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/_not-found/page-3fb1e6d314c2d9fd.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/about/page-513c4acb228991f8.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/contact/page-50254db4cb033559.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/copyright/page-1e8b12877c54ce8a.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/layout-0e810aca814aa69d.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/not-found-8d2652901e9300ac.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/page-385a42d7c2471bc0.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/privacy-policy/page-84c505586f4ac93a.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/app/tos/page-14e4092b02524d42.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/fd9d1056-e158016523ed90e0.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/main-6cce58caa20e56d4.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/main-app-360cde300f85cbea.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-abb0ad8f2e25dba4.js",revision:"jL-GWm_dUaRUlubuHXKh2"},{url:"/_next/static/css/04439c0417eba380.css",revision:"04439c0417eba380"},{url:"/_next/static/css/76a6527ee87c422d.css",revision:"76a6527ee87c422d"},{url:"/_next/static/jL-GWm_dUaRUlubuHXKh2/_buildManifest.js",revision:"e88c2848769cd48e66d5be2ae2411821"},{url:"/_next/static/jL-GWm_dUaRUlubuHXKh2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/dfa2ccbeca9e77a8-s.woff2",revision:"4d88c8f550833714f8721257780b9000"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/logo1.e6985216.svg",revision:"b1368f3cb13bf11c9db50a776ae023e8"},{url:"/android-chrome-512x512.png",revision:"5c5f9e9e9c28a4581d28b699090da8ce"},{url:"/apple-touch-icon.png",revision:"a922baa43c98316ff3d98511874b7e3d"},{url:"/favicon-16x16.png",revision:"d32540042fa00d6d66333dc8ee09366d"},{url:"/favicon-32x32.png",revision:"86515e98d1d4a7a884ec4271a2483e0e"},{url:"/icon-192x192.png",revision:"9971a517362250935110e079a99f533d"},{url:"/icon-256x256.png",revision:"ea66733cea12aeaa7b48c82beb54be37"},{url:"/icon-384x384.png",revision:"a4be85cf1ff855ba5fd0a00f85a052c9"},{url:"/icon-512x512.png",revision:"c61608516acbf8cef21fa592309dcc8e"},{url:"/logo1.svg",revision:"b1368f3cb13bf11c9db50a776ae023e8"},{url:"/mstile-144x144.png",revision:"7b4fc2798f5d2916adbf60d7dfb4a231"},{url:"/mstile-150x150.png",revision:"2a76eaf6690164313517c42bba46e6b3"},{url:"/mstile-310x150.png",revision:"9ac0206f668e91fdd22069854d0200f2"},{url:"/mstile-310x310.png",revision:"37e8145fcd1b79e6c8ea7c51a2b7d358"},{url:"/mstile-70x70.png",revision:"b625108a68498051bcd2ce70a9be9aaa"},{url:"/robots.txt",revision:"5a7e66ccb73e7ffb5be4ac3f0deaec8b"},{url:"/safari-pinned-tab.svg",revision:"c5d22d5115bd0c87364382f537314829"},{url:"/sitemap-0.xml",revision:"133bf15a21a80075ca72340d53d4d670"},{url:"/sitemap.xml",revision:"56e3ee5c7a8d6c9152b24dd8e3477d98"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
