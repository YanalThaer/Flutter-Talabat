'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f01718928eb62fd9309d99786a382189",
"assets/AssetManifest.bin.json": "a81a7297b6a5f1626b89e8361eef6ac2",
"assets/AssetManifest.json": "7b51984470defad75733d5e156fa30ef",
"assets/assets/animation_icon/cancelled_icon.json": "aad1e4288c7d1e66a3890897bad0adc3",
"assets/assets/animation_icon/delivery_icon.json": "a60647bc9a41763c7ae2efc01f731d69",
"assets/assets/animation_icon/order_placed_icon.json": "ea0c6d41e5b9dbf01e5d33fd52df8c0e",
"assets/assets/animation_icon/order_recieved_icon.json": "1b8e21441ef5a285d31f7e30e4f0c3eb",
"assets/assets/animation_icon/prepare_icon.json": "689c8afef6bda7227f6c7834cee44cdb",
"assets/assets/fonts/dm_sans/DMSans-Black.ttf": "e4442a2c1cbe59d6bb90eb3f8c950990",
"assets/assets/fonts/dm_sans/DMSans-BlackItalic.ttf": "010892d88e6f0e0c83816464a2e1db4a",
"assets/assets/fonts/dm_sans/DMSans-Bold.ttf": "337352e89c0a500c19e7c3a1cd83161c",
"assets/assets/fonts/dm_sans/DMSans-BoldItalic.ttf": "0f6d2177fbc4e50c5cbd1e3ca7fb1626",
"assets/assets/fonts/dm_sans/DMSans-ExtraBold.ttf": "ebcd8d6147f734b6b411ee296741dca6",
"assets/assets/fonts/dm_sans/DMSans-ExtraBoldItalic.ttf": "611c8acc2d275c32f3a2fb5d24c9d8b6",
"assets/assets/fonts/dm_sans/DMSans-ExtraLight.ttf": "fec3b8ae381cd5a5df1f5c4bf1f3dcac",
"assets/assets/fonts/dm_sans/DMSans-ExtraLightItalic.ttf": "ac0a5cf03c0c0157f82e6729a1ceac30",
"assets/assets/fonts/dm_sans/DMSans-Italic.ttf": "5932d80bc9ab80212b075dfdeaa85f39",
"assets/assets/fonts/dm_sans/DMSans-Light.ttf": "e7520627eb609ab1e02dd88f972a3b2b",
"assets/assets/fonts/dm_sans/DMSans-LightItalic.ttf": "c7ae8efdba4bcf2c847894db2ae5cfc2",
"assets/assets/fonts/dm_sans/DMSans-Medium.ttf": "6244219cea1110e6ec49e950f070acf8",
"assets/assets/fonts/dm_sans/DMSans-MediumItalic.ttf": "c42434fa9ab2e23c864e1a994ecbd6f1",
"assets/assets/fonts/dm_sans/DMSans-Regular.ttf": "0305ad7453af42d8f036dd29294ae5c3",
"assets/assets/fonts/dm_sans/DMSans-SemiBold.ttf": "41de6d553ba4b1825e9cf023e97e2ee4",
"assets/assets/fonts/dm_sans/DMSans-SemiBoldItalic.ttf": "efcdd751eff609bda2f68f0943ab865f",
"assets/assets/fonts/dm_sans/DMSans-Thin.ttf": "dc3195b079d33dfa16de299901913db8",
"assets/assets/fonts/dm_sans/DMSans-ThinItalic.ttf": "a4c88b00713307f76c8b0ce450e54676",
"assets/assets/icons/apple_icon.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/icons/cash_icon.png": "849b360114e7730c71f8f77e97eeecae",
"assets/assets/icons/creditcard_icon.png": "f89e21225bb551382ecc5ffa0b0b6e9e",
"assets/assets/icons/delivery_icon.png": "90d3f72a970e66e6c6164ce8c9ead90c",
"assets/assets/icons/discount_icon.png": "68934266e3d31d41574974e9d4e32d1b",
"assets/assets/icons/email_icon.png": "36179cab6c72e89b07b0f115bb2fc2e4",
"assets/assets/icons/facebook_icon.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/icons/giveback_icon.png": "539a4f4da894c3c6be8e84f2d45160f0",
"assets/assets/icons/google_icon.png": "f564fc3bc613d9922753b6c17f447415",
"assets/assets/icons/happy_icon.png": "eb133a9a8e4a673f808d4b7783fb12c0",
"assets/assets/icons/help_icon.png": "986b36f52d6bf530e1cea519e36eb9c6",
"assets/assets/icons/home_icon.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/icons/location_icon.png": "a4a8c14e729be5c57c65b397f1af99dd",
"assets/assets/icons/notification_icon.png": "78ee0167cfb6094eae047280ea389d0a",
"assets/assets/icons/offer_icon.png": "e31d471eaef42b43d55b9ba25971cf0b",
"assets/assets/icons/orderlist_icon.png": "3e4f416d7b41a996e5800ae460553a14",
"assets/assets/icons/order_icon.png": "644626c617f0c957d27d5c59e3e71dea",
"assets/assets/icons/reorder_icon.png": "4cfbf24aeafe5977363c4cbdd1b27bab",
"assets/assets/icons/search_icon.png": "521740a6d006bd5f58a933046126a6e3",
"assets/assets/icons/star_icon.png": "cb1c33efccc8dd4413ae20acf428dac7",
"assets/assets/icons/talabat_icon.png": "647c69b6540aaf50192d24e58701bed3",
"assets/assets/icons/user_icon.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/icons/wallet_icon.png": "53f3a40ae307965d3cab3732802b38a0",
"assets/assets/images/background_splash.png": "bf4a240cd0debf2547083d568bf1dc52",
"assets/assets/images/banners/banner1.jpg": "e64e3ec55b185ef47a94660b39aa5d06",
"assets/assets/images/banners/banner2.jpg": "ffddcf77c1bdd9322206add33250658c",
"assets/assets/images/banners/banner3.jpg": "d8c3ef9ba2ac983648e82e5038687eee",
"assets/assets/images/banners/banner4.jpg": "14d61416dd9045906aa3689ed467c5ba",
"assets/assets/images/banners/banner5.jpg": "7062a5d5a0e2e465aefc03561f0dfe88",
"assets/assets/images/banners/martbanner1.jpg": "ae313a361b702c747495f890458352f2",
"assets/assets/images/banners/martbanner2.jpg": "85212823947d9af747b63ad9b28cf3c8",
"assets/assets/images/banners/martbanner3.jpg": "9174e67d9710a7ca2a4781520a55e4cd",
"assets/assets/images/banners/martbanner4.jpg": "71ac91dcc9a5e5e0fb68f6eae89f48f1",
"assets/assets/images/bazzoka_logo.jpg": "bdb3ad486b2a235cbeadd5e7d70254ba",
"assets/assets/images/carrefour_logo.png": "ef5ac4bc33bdf4b478232305747cd7e9",
"assets/assets/images/categories/baby_maternity_category.png": "2e548ad2b3d73361f67082454d24c3e6",
"assets/assets/images/categories/beauty_category.png": "99a9e8195c9cfad95d893ed2c7c172af",
"assets/assets/images/categories/body_care.png": "41f592fda9291077e688948ac4e6d2ab",
"assets/assets/images/categories/coffee_cat.png": "d616ed5fa0ee168901dc859686ba310d",
"assets/assets/images/categories/common_symptoms_category.png": "0d7af55a42b3361bf50deb88607d1d2a",
"assets/assets/images/categories/first_aid.png": "bd69a55142c73c84c0b89cb76568f422",
"assets/assets/images/categories/food_cat.png": "43f36e4d57d8a154b7da2305a3434a8e",
"assets/assets/images/categories/groceries_cat.png": "2d521a45ee0810694913dbaf31ff5c0d",
"assets/assets/images/categories/healthwellness_cat.png": "6f3c5354d70a3ead63c94a93e60f378f",
"assets/assets/images/categories/mart_cat.png": "cb13e711687ea85d653fa4606f8deb09",
"assets/assets/images/categories/more_cat.png": "c5ba3324b00edd4d0b887ee5bfbf7b10",
"assets/assets/images/chicken_plat.jpg": "33782edd367516effac98c4b922d2b3d",
"assets/assets/images/delivery_avatar.jpg": "db984e10da1c4faef14d7c33fde8b33f",
"assets/assets/images/delivery_man.png": "4fad7ac5da55a29343d76a6b21beddd7",
"assets/assets/images/main/background_home.png": "d0660c8e6954bf3d156d66b9c1d6d685",
"assets/assets/images/mart/bakery.png": "440e414a378d53a299c234aea1d57a74",
"assets/assets/images/mart/bascot.png": "e067fbff07fe676bcc3572e1a8d03f86",
"assets/assets/images/mart/beverages.png": "74c2005a2b4d68719912009edd7cad78",
"assets/assets/images/mart/cheese.png": "5eb9ea6d4be7e854d96fb38628e8d30d",
"assets/assets/images/mart/eggs.png": "c35d8c776417d7f6dd7d098d3effeea3",
"assets/assets/images/mart/fruit.png": "e53431b7904c03ccdcd856116ed00652",
"assets/assets/images/mart/icecreem.png": "7f3699c51a3936f85178990e49af5de8",
"assets/assets/images/mart/kiri.png": "7f62de4d85ab1c4339365813c19c74d4",
"assets/assets/images/mart/milk.png": "d68cd0f6eb40f474a6aa8881e07696b0",
"assets/assets/images/mart/seeds.png": "a9486811dfd8b4e3b6138641bca5bebb",
"assets/assets/images/mart/snacks.png": "93f455d9a9bb9794206e9f8e0f7986bc",
"assets/assets/images/mart/sweets.png": "0876ab77032ee9af6d4823ca4a873acd",
"assets/assets/images/remas_land_cove.jpg": "738a99c6246502512d28974ee650bb3b",
"assets/assets/images/remas_land_logo.jpg": "2e75399fce9e59a2f13be31ebdf05759",
"assets/assets/images/remas_product.jpg": "35cad4f65ec50f40ca4a340887325eaf",
"assets/assets/images/res_cover.png": "69e76696c9b247589725d95fc6cced35",
"assets/assets/images/saidlity_logo.png": "1b10c71a9550ecd4516bf64bbc3074f9",
"assets/assets/images/saidlity_product.jpeg": "e7fc43def10819ca74e6cf11dca1bed0",
"assets/assets/images/talabat_logo_splash.png": "b3bf1825233a69617caf283ceb808362",
"assets/assets/images/welcome/background_welcome_screen.png": "0d8300f89446a68303827cf8e8129305",
"assets/assets/images/zabady.jpeg": "32b2d32ac6d01582d604a79fa5695cae",
"assets/FontManifest.json": "2040722a894eda53d44831267ca73020",
"assets/fonts/MaterialIcons-Regular.otf": "f3cec22456c90be568413bb6650fbade",
"assets/NOTICES": "ae2bf8a5607cd2f98d995e3be1a0d510",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e6939d12e102d59a8bb0c1441b654e88",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1fe25c0a85e5a4e09b42306ad3a573cc",
"icons/Icon-192.png": "29e17d7cda02e117f7ea4633dadcd08e",
"icons/Icon-512.png": "8924c4b3eb5d1f60b288e7593cea7e20",
"icons/Icon-maskable-192.png": "29e17d7cda02e117f7ea4633dadcd08e",
"icons/Icon-maskable-512.png": "8924c4b3eb5d1f60b288e7593cea7e20",
"index.html": "3b3a2acedbeec1079b002dd9c9b01b94",
"/": "3b3a2acedbeec1079b002dd9c9b01b94",
"main.dart.js": "576fbbfe1bf651d885a28ea1beaae9a1",
"manifest.json": "a4e02f378dd83d74efe391c1f3c3287d",
"version.json": "47692cbd12d29c1f1bc1eacdf389b79f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
