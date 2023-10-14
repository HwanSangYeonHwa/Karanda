'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e34ceecb1135bb043ec4fe3caf3b04ba",
"assets/AssetManifest.json": "c2cd921e896885ead4b7e93890688a76",
"assets/assets/brand/karanda_full_name_logo.png": "476c1d62d9825825bc901679afdfbab8",
"assets/assets/brand/karanda_mix.png": "81ea27748342e7f228036ba75489eaaa",
"assets/assets/brand/karanda_shape.png": "ac6d17b09856feee9ce845eb1eddd267",
"assets/assets/data/combination.json": "2119dd3792cbfb266d48d8bd410e341f",
"assets/assets/data/lightStones.json": "68efebc19375c2dfa6e78b54818a528a",
"assets/assets/data/shipExtension.json": "8469287cdff629803f8a468a7a9ab42e",
"assets/assets/data/shipExtensionItem.json": "b69915cac334bfab978c1fedb0c06699",
"assets/assets/data/tradeLevel.json": "978bfe4a2e5c414367434d656a0fc0f1",
"assets/assets/icons/bdo.png": "eff04c86848ea70cee3fa0713123ec59",
"assets/assets/icons/bdocodex.png": "76fc0a3168b917540cf97c3c08345f68",
"assets/assets/icons/bdolytics.png": "7a5701505da0fe8dce23f8dde5816368",
"assets/assets/icons/discord.png": "d74865e1094f5ac0a0e782875449ff66",
"assets/assets/icons/garmoth.png": "1942da7e4277df31dae8294f6cecaca0",
"assets/assets/icons/inven.png": "227132c3009171ab9301509c5f4701ae",
"assets/assets/icons/lotus.png": "d54b80cda246768001826a26182ff100",
"assets/assets/icons/moon.png": "fef1ab5987944681272fa4000779c058",
"assets/assets/icons/onTopReplica.png": "1c95d5209c23437e7452b107010eb3cf",
"assets/assets/icons/sun.png": "5cda771bc5b455d8634e78ad16edcac7",
"assets/assets/image/logo/initial.png": "f87255e8d9c0e124dc30a0946f9f6a5c",
"assets/assets/image/logo/karanda_logo.png": "577324048eea925ebddb864d3e7784b9",
"assets/assets/image/logo/karanda_logo_sqaure.png": "23856322dca29d762fe47527da3cbe1e",
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
"assets/FontManifest.json": "2503cf1117fe7381aec2b3b6c9361ecc",
"assets/fonts/Maplestory%2520Bold.ttf": "b0a6a2693556296fa674f5e4de61810b",
"assets/fonts/Maplestory%2520Light.ttf": "fb932d042f385927ba59e9a690538709",
"assets/fonts/MaterialIcons-Regular.otf": "ef0a07f571d6b24cfde3e8cf3f38bc51",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFB.otf": "d1b7d1fc8bfe4eccc8aeb7ff95bad663",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFEB.otf": "80d60e4eb529133db2d93250100760f5",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFL.otf": "75662d6e584f51c83a805698c3de0f20",
"assets/fonts/nanum-square-round/NanumSquareRoundOTFR.otf": "30caed9c2deb38480396e8ed892dc3cc",
"assets/fonts/NotoSansKR/NotoSansKR-Black.ttf": "15e2e9d1b8e380eafc51a606a7e671d6",
"assets/fonts/NotoSansKR/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/fonts/NotoSansKR/NotoSansKR-ExtraBold.ttf": "db13746e4342665b3fb5571c353f8c46",
"assets/fonts/NotoSansKR/NotoSansKR-ExtraLight.ttf": "33e4ba0602de9a23075c13d344127395",
"assets/fonts/NotoSansKR/NotoSansKR-Light.ttf": "e61301e66b058697c6031c39edb7c0d2",
"assets/fonts/NotoSansKR/NotoSansKR-Medium.ttf": "4dee649c78a37741c4f5d9fdb69ea434",
"assets/fonts/NotoSansKR/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/fonts/NotoSansKR/NotoSansKR-SemiBold.ttf": "90c2026b48704ad2560e68249b15b7f5",
"assets/fonts/NotoSansKR/NotoSansKR-Thin.ttf": "b59719d81a60f284b7c372c7891689fd",
"assets/NOTICES": "4d8295f2eb5c4884bf58af64b05f4332",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "6b2c40f0cd009f01f65b44a4926cbee3",
"icons/android-chrome-512x512.png": "4400fc1c4c0c94f5f007f771d573c621",
"icons/apple-touch-icon.png": "3f98cc531166253b3d4c45465ec02390",
"icons/favicon-16x16.png": "dbb9ad04c6bcfebebd4fdea7ccb2dc14",
"icons/favicon-32x32.png": "bf8ae1f0210a568b65cc2d4208004cdd",
"icons/favicon.ico": "a4a2e9bd7f38cd26922a4ad9ac9a8714",
"img/flutter-logo.png": "680596443602745483f66870e07d7e94",
"index.html": "d4328e030e3bab18cf478d5140830800",
"/": "d4328e030e3bab18cf478d5140830800",
"install.js": "2c8700fd8bf96f556c179c5eaea8e8a2",
"main.dart.js": "52d20b981d5c4db9b3392fcc64f84b26",
"manifest.json": "cee3ff988c33441e88211224b05a88fb",
"styles.css": "163855fd240b2a8d4e378c5187267607",
"version.json": "97820017695a18a7d6c1ba49dbbe6582"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
