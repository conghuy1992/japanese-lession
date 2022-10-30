'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9d59d97e01bf0a3e105a0f32f64d0244",
".git/config": "e21088a4d0b90b0e852dbce7e88fd456",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "21c3eb1c26297e83723460290bdb5fbc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0874b2f1711b60e28c7018b0364062be",
".git/logs/refs/heads/main": "0874b2f1711b60e28c7018b0364062be",
".git/logs/refs/remotes/origin/HEAD": "f63c3de484a78a1f7f8d6b3758f8f1e3",
".git/logs/refs/remotes/origin/main": "4cbae92dd488255cd7b65ffe1cfd272c",
".git/objects/04/68ce91cb259057cdf581d784b28a14f27fb382": "0d8e2b4491fb6b2438783ad366fe989f",
".git/objects/16/d2641da8972b6814c73a65d8d1edd1c1e6b3d5": "9cf5f2dfa38cfb08df1deea5bb7cc7c1",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/38/30cd2d855da8ece8c16db197fdf1982ebe278a": "752081434579cd80e5e2a1b64adcb3d3",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/51/1b57a51c34b0c2a2dc7d5d28bc327b72665b70": "9dffefb669514879d49c95cd1fb2f6fa",
".git/objects/55/1433e24f110ce6f3b798ca6e88598fd0e61758": "b6979ba17440de4d91f1f591129fed68",
".git/objects/6c/914aae65e8affd64c60825075e7ea70bb02df5": "f940ec6ef59fe1b97c1bc3ebadcd1b20",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/90/d8b29a5c235effd25b2b2477567e7fcb74b657": "c147a385052514d354d56a7157446be2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/d00ad2ef8483aea5d1c5ecc8a716ab0e0c94a3": "d7dd4032eab2eeaa884b157333688d49",
".git/objects/9a/8a287d558b6e45a77d118e5f2632ad65206b24": "bf13282c25dffbc2b0494249afa4e04a",
".git/objects/a5/1971662189a807a8b0f735c29369b644c9f048": "1fac68b342ecbe8eab2fe6a5cf4a9f42",
".git/objects/b1/828bd7fd511ba8af7b5e61b8d5c874eb587aa7": "76a37ad6a8fb1130fbdaa0cdd4f40249",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/cb/ebd12402ff423241a1cb803ba8908a0d380f5c": "ff84fc7580334dcf60d33f2d2a40781f",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/2ebbad1a6c75a0ba108f43b17944ad96dc0f1a": "555db77959aaa475f8f41cedddb8852f",
".git/objects/e7/a4e3484e078d501f7951f8debc1e5324de338e": "a2b387da504029dee211253b1fdfb476",
".git/objects/f7/8351858f29c4e70796b7db2d6a4b965247f727": "7f79497c460a9eff19b6ae6c1b8f18eb",
".git/objects/pack/pack-a9a792e8dd0be7b81f3ad1af42d7b836f262ca13.idx": "b28a2fa9eee29c60c6eec082350a455d",
".git/objects/pack/pack-a9a792e8dd0be7b81f3ad1af42d7b836f262ca13.pack": "74518dc3261cc90835f53493be0a46f6",
".git/packed-refs": "0de2ce93badd2dc6f825f408d039d8e3",
".git/refs/heads/main": "490a44b094865bbddb010b3d039d7a29",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "490a44b094865bbddb010b3d039d7a29",
"assets/AssetManifest.json": "85069f081d47c4ee870106a3119c260b",
"assets/assets/fonts/google_sans.ttf": "e4bbdbbd1865865732c8183dad65d983",
"assets/assets/images/ic_alert.png": "ecbf45cc567821223fda1d7fd824b633",
"assets/assets/images/ic_eraser.png": "b7746378e6f2e72330837b76c57335e4",
"assets/assets/images/ic_highlighter.png": "2cdc543a1a77b0ff867fa08604458dd4",
"assets/assets/images/ic_tip.png": "da32489eda1fbe4cb64737af5740649c",
"assets/assets/sudoku_level.txt": "bcf6ce745ef9687e406e9aaadbe6ba4d",
"assets/FontManifest.json": "8b8da91e43aa488be84dc5706b1a7e3f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e1b0fcd55d5dec5dae995d8a37444262",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "22e418af10ee4bfc4bc4c8425c01f042",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ec2cdd81103c444405ee9124f6e1a30",
"/": "9ec2cdd81103c444405ee9124f6e1a30",
"main.dart.js": "70bc0791566192875eb9badbf4568d32",
"manifest.json": "0644a2f68493bcc3745aa4648bb0bfae",
"README.md": "e5934608f1c3cc7dac622c1a41cb0c62",
"version.json": "185f26ebeddf704501049ca172567d3d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
