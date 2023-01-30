'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7a5ac0e20e5b189188ec52c78734c792",
"assets/assets/data/combination.json": "2119dd3792cbfb266d48d8bd410e341f",
"assets/assets/data/lightStones.json": "68efebc19375c2dfa6e78b54818a528a",
"assets/assets/data/shipExtension.json": "8469287cdff629803f8a468a7a9ab42e",
"assets/assets/data/shipExtensionItem.json": "ce813c08bd486d5b24a4c16f826d6762",
"assets/assets/icons/bdo.png": "eff04c86848ea70cee3fa0713123ec59",
"assets/assets/icons/bdocodex.png": "76fc0a3168b917540cf97c3c08345f68",
"assets/assets/icons/garmoth.png": "1942da7e4277df31dae8294f6cecaca0",
"assets/assets/icons/inven.png": "227132c3009171ab9301509c5f4701ae",
"assets/assets/icons/lotus.png": "d54b80cda246768001826a26182ff100",
"assets/assets/icons/onTopReplica.png": "1c95d5209c23437e7452b107010eb3cf",
"assets/assets/image/shipExtension/0001.png": "d0365e88c888aa4562ccf0a89645c4c9",
"assets/assets/image/shipExtension/0002.png": "0564c825025c5cc065aacbb2207fc574",
"assets/assets/image/shipExtension/0003.png": "dea317015431d50d358353edf3efd28f",
"assets/assets/image/shipExtension/0004.png": "be689018377358205257ebbac255e211",
"assets/assets/image/shipExtension/0005.png": "c3db290258ab6a34661c2f5c304ff6ca",
"assets/assets/image/shipExtension/0006.png": "475273546f22c0548d90638d402576db",
"assets/assets/image/shipExtension/0007.png": "02da8b06383d82e7151ee4e1225acb90",
"assets/assets/image/shipExtension/0008.png": "bb54451c1c6e32dfafe078a0659eb0a0",
"assets/assets/image/shipExtension/0009.png": "38ce399f0f602042ecf31601c29a49b8",
"assets/assets/image/shipExtension/0010.png": "43df180dd7d6d536bb9acadfd08cb256",
"assets/assets/image/shipExtension/0011.png": "bc4077b2d09bc1ff096b62f334e9b376",
"assets/assets/image/shipExtension/0012.png": "bf6d0d7847a56c936fe604d568e9b9fb",
"assets/assets/image/shipExtension/0013.png": "38ce399f0f602042ecf31601c29a49b8",
"assets/assets/image/shipExtension/0014.png": "b9734fb548259b738a13731690bbfc4e",
"assets/assets/image/shipExtension/0015.png": "42b219e7735cab071c05d9c716759657",
"assets/assets/image/shipExtension/0016.png": "c93c9913a6c3a2f528806a210fc7a91d",
"assets/assets/image/shipExtension/0017.png": "c28c2eff088c9172f2c3bd7c12454d5b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ee99c08f1be61f3cf7a63a37ff8b68fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "6fe4aad827cc40e2d859065d4101e060",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/apple-touch-icon.png": "90815d0469d373bdee5a768a6d6879df",
"icons/Icon-192.png": "7cecf8bd4af033296c15c265748c64c4",
"icons/Icon-512.png": "aa168bb0710316152a0a3312009625f2",
"icons/Icon-maskable-192.png": "7cecf8bd4af033296c15c265748c64c4",
"icons/Icon-maskable-512.png": "aa168bb0710316152a0a3312009625f2",
"img/flutter-logo.png": "680596443602745483f66870e07d7e94",
"index.html": "d821fc15896aeaa308675909ba74972d",
"/": "d821fc15896aeaa308675909ba74972d",
"install.js": "2c8700fd8bf96f556c179c5eaea8e8a2",
"main.dart.js": "82f54959369d66c941e00c1495c77b95",
"manifest.json": "8ef6f3a3ce5c91b0baf47394ff0ccd03",
"styles.css": "163855fd240b2a8d4e378c5187267607",
"version.json": "8dc6cdf36acaf4c160ed520b74025499"
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
