/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/events/route";
exports.ids = ["app/api/events/route"];
exports.modules = {

/***/ "(rsc)/./config/mongodb.ts":
/*!***************************!*\
  !*** ./config/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n// Use a global variable to preserve the connection across hot reloads in development\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI).then((mongoose)=>{\n            console.log('Successfully connected to MongoDB'); // <-- Log success here\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQ1I7QUFFSjtBQUVBLHFGQUFxRjtBQUNyRixJQUFJQyxTQUFTLE9BQWdCTCxRQUFRO0FBRXJDLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTLE9BQWdCTCxRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDbEU7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVUsSUFBSSxDQUFDLENBQUNYO1lBQ25EWSxRQUFRQyxHQUFHLENBQUMsc0NBQXVDLHVCQUF1QjtZQUMxRSxPQUFPYjtRQUNUO0lBQ0Y7SUFDQUssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGFrYXlvXFxEb2N1bWVudHNcXEdpdEh1YlxcUGxhbi1pdC1Qcm9zXFxjb25maWdcXG1vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gICk7XHJcbn1cclxuXHJcbi8vIFVzZSBhIGdsb2JhbCB2YXJpYWJsZSB0byBwcmVzZXJ2ZSB0aGUgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHMgaW4gZGV2ZWxvcG1lbnRcclxubGV0IGNhY2hlZCA9IChnbG9iYWwgYXMgYW55KS5tb25nb29zZTtcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxuICB9XHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJKS50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBNb25nb0RCJyk7ICAvLyA8LS0gTG9nIHN1Y2Nlc3MgaGVyZVxyXG4gICAgICByZXR1cm4gbW9uZ29vc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_akayo_Documents_GitHub_Plan_it_Pros_src_app_api_events_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/events/route.ts */ \"(rsc)/./src/app/api/events/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/events/route\",\n        pathname: \"/api/events\",\n        filename: \"route\",\n        bundlePath: \"app/api/events/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\akayo\\\\Documents\\\\GitHub\\\\Plan-it-Pros\\\\src\\\\app\\\\api\\\\events\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_akayo_Documents_GitHub_Plan_it_Pros_src_app_api_events_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNha2F5byU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q1BsYW4taXQtUHJvcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDYWtheW8lNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNQbGFuLWl0LVByb3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxha2F5b1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBsYW4taXQtUHJvc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxldmVudHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2V2ZW50cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2V2ZW50c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZXZlbnRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYWtheW9cXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQbGFuLWl0LVByb3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZXZlbnRzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/events/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/events/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var _models_itemSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/itemSchema */ \"(rsc)/./src/models/itemSchema.ts\");\n// app/api/events/route.ts\n\n\n\n// 🔍 This is the updated GET handler (FILTERING INCLUDED)\nasync function GET(request) {\n    await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(request.url);\n    const location = searchParams.get('location');\n    const date = searchParams.get('date');\n    const filter = {};\n    if (location) {\n        // Case-insensitive partial match for location\n        filter.location = {\n            $regex: location,\n            $options: 'i'\n        };\n    }\n    if (date) {\n        const start = new Date(date);\n        const end = new Date(date);\n        end.setDate(start.getDate() + 1);\n        filter.date = {\n            $gte: start,\n            $lt: end\n        };\n    }\n    try {\n        const events = await _models_itemSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(filter).sort({\n            date: 1,\n            time: 1\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(events, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error fetching events',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ Keep your POST handler too (for creating new events)\nasync function POST(request) {\n    await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const body = await request.json();\n    try {\n        const newEvent = new _models_itemSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            name: body.name,\n            location: body.location,\n            date: new Date(body.date),\n            time: body.time,\n            photo: body.photo || null\n        });\n        const saved = await newEvent.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Event created',\n            event: saved\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error creating event',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ldmVudHMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwQkFBMEI7QUFDOEI7QUFDTDtBQUNKO0FBRS9DLDBEQUEwRDtBQUNuRCxlQUFlRyxJQUFJQyxPQUFvQjtJQUM1QyxNQUFNSCwyREFBU0E7SUFFZixNQUFNLEVBQUVJLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7SUFDNUMsTUFBTUMsV0FBV0gsYUFBYUksR0FBRyxDQUFDO0lBQ2xDLE1BQU1DLE9BQU9MLGFBQWFJLEdBQUcsQ0FBQztJQUU5QixNQUFNRSxTQUFjLENBQUM7SUFFckIsSUFBSUgsVUFBVTtRQUNaLDhDQUE4QztRQUM5Q0csT0FBT0gsUUFBUSxHQUFHO1lBQUVJLFFBQVFKO1lBQVVLLFVBQVU7UUFBSTtJQUN0RDtJQUVBLElBQUlILE1BQU07UUFDUixNQUFNSSxRQUFRLElBQUlDLEtBQUtMO1FBQ3ZCLE1BQU1NLE1BQU0sSUFBSUQsS0FBS0w7UUFDckJNLElBQUlDLE9BQU8sQ0FBQ0gsTUFBTUksT0FBTyxLQUFLO1FBQzlCUCxPQUFPRCxJQUFJLEdBQUc7WUFBRVMsTUFBTUw7WUFBT00sS0FBS0o7UUFBSTtJQUN4QztJQUVBLElBQUk7UUFDRixNQUFNSyxTQUFTLE1BQU1uQiwwREFBS0EsQ0FBQ29CLElBQUksQ0FBQ1gsUUFBUVksSUFBSSxDQUFDO1lBQUViLE1BQU07WUFBR2MsTUFBTTtRQUFFO1FBQ2hFLE9BQU94QixxREFBWUEsQ0FBQ3lCLElBQUksQ0FBQ0osUUFBUTtZQUFFSyxRQUFRO1FBQUk7SUFDakQsRUFBRSxPQUFPQyxPQUFZO1FBQ25CLE9BQU8zQixxREFBWUEsQ0FBQ3lCLElBQUksQ0FDdEI7WUFBRUcsU0FBUztZQUF5QkQsT0FBT0EsTUFBTUMsT0FBTztRQUFDLEdBQ3pEO1lBQUVGLFFBQVE7UUFBSTtJQUVsQjtBQUNGO0FBRUEseURBQXlEO0FBQ2xELGVBQWVHLEtBQUt6QixPQUFnQjtJQUN6QyxNQUFNSCwyREFBU0E7SUFFZixNQUFNNkIsT0FBTyxNQUFNMUIsUUFBUXFCLElBQUk7SUFFL0IsSUFBSTtRQUNGLE1BQU1NLFdBQVcsSUFBSTdCLDBEQUFLQSxDQUFDO1lBQ3pCOEIsTUFBTUYsS0FBS0UsSUFBSTtZQUNmeEIsVUFBVXNCLEtBQUt0QixRQUFRO1lBQ3ZCRSxNQUFNLElBQUlLLEtBQUtlLEtBQUtwQixJQUFJO1lBQ3hCYyxNQUFNTSxLQUFLTixJQUFJO1lBQ2ZTLE9BQU9ILEtBQUtHLEtBQUssSUFBSTtRQUN2QjtRQUVBLE1BQU1DLFFBQVEsTUFBTUgsU0FBU0ksSUFBSTtRQUNqQyxPQUFPbkMscURBQVlBLENBQUN5QixJQUFJLENBQUM7WUFBRUcsU0FBUztZQUFpQlEsT0FBT0Y7UUFBTSxHQUFHO1lBQUVSLFFBQVE7UUFBSTtJQUNyRixFQUFFLE9BQU9DLE9BQVk7UUFDbkIsT0FBTzNCLHFEQUFZQSxDQUFDeUIsSUFBSSxDQUN0QjtZQUFFRyxTQUFTO1lBQXdCRCxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FDeEQ7WUFBRUYsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtheW9cXERvY3VtZW50c1xcR2l0SHViXFxQbGFuLWl0LVByb3NcXHNyY1xcYXBwXFxhcGlcXGV2ZW50c1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9ldmVudHMvcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvbW9uZ29kYic7XHJcbmltcG9ydCBFdmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaXRlbVNjaGVtYSc7XHJcblxyXG4vLyDwn5SNIFRoaXMgaXMgdGhlIHVwZGF0ZWQgR0VUIGhhbmRsZXIgKEZJTFRFUklORyBJTkNMVURFRClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2hQYXJhbXMuZ2V0KCdsb2NhdGlvbicpO1xyXG4gIGNvbnN0IGRhdGUgPSBzZWFyY2hQYXJhbXMuZ2V0KCdkYXRlJyk7XHJcblxyXG4gIGNvbnN0IGZpbHRlcjogYW55ID0ge307XHJcblxyXG4gIGlmIChsb2NhdGlvbikge1xyXG4gICAgLy8gQ2FzZS1pbnNlbnNpdGl2ZSBwYXJ0aWFsIG1hdGNoIGZvciBsb2NhdGlvblxyXG4gICAgZmlsdGVyLmxvY2F0aW9uID0geyAkcmVnZXg6IGxvY2F0aW9uLCAkb3B0aW9uczogJ2knIH07XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0ZSkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgZW5kLnNldERhdGUoc3RhcnQuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICBmaWx0ZXIuZGF0ZSA9IHsgJGd0ZTogc3RhcnQsICRsdDogZW5kIH07XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgRXZlbnQuZmluZChmaWx0ZXIpLnNvcnQoeyBkYXRlOiAxLCB0aW1lOiAxIH0pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGV2ZW50cywgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ0Vycm9yIGZldGNoaW5nIGV2ZW50cycsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOKchSBLZWVwIHlvdXIgUE9TVCBoYW5kbGVyIHRvbyAoZm9yIGNyZWF0aW5nIG5ldyBldmVudHMpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgRXZlbnQoe1xyXG4gICAgICBuYW1lOiBib2R5Lm5hbWUsXHJcbiAgICAgIGxvY2F0aW9uOiBib2R5LmxvY2F0aW9uLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZShib2R5LmRhdGUpLFxyXG4gICAgICB0aW1lOiBib2R5LnRpbWUsXHJcbiAgICAgIHBob3RvOiBib2R5LnBob3RvIHx8IG51bGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IG5ld0V2ZW50LnNhdmUoKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFdmVudCBjcmVhdGVkJywgZXZlbnQ6IHNhdmVkIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IG1lc3NhZ2U6ICdFcnJvciBjcmVhdGluZyBldmVudCcsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiQ29ubmVjdCIsIkV2ZW50IiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImxvY2F0aW9uIiwiZ2V0IiwiZGF0ZSIsImZpbHRlciIsIiRyZWdleCIsIiRvcHRpb25zIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwic2V0RGF0ZSIsImdldERhdGUiLCIkZ3RlIiwiJGx0IiwiZXZlbnRzIiwiZmluZCIsInNvcnQiLCJ0aW1lIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSIsIlBPU1QiLCJib2R5IiwibmV3RXZlbnQiLCJuYW1lIiwicGhvdG8iLCJzYXZlZCIsInNhdmUiLCJldmVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/events/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/itemSchema.ts":
/*!**********************************!*\
  !*** ./src/models/itemSchema.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst eventSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        required: true\n    },\n    time: {\n        type: String,\n        required: true\n    },\n    photo: {\n        type: String\n    } // Optional field for a photo URL\n});\n// The third parameter 'Planevents' tells Mongoose to use that collection name exactly.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Event || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Event', eventSchema, 'Planevents'));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL2l0ZW1TY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBVXRELE1BQU1FLGNBQThCLElBQUlELDRDQUFNQSxDQUFDO0lBQzdDRSxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsVUFBVTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNFLE1BQU07UUFBRUosTUFBTUs7UUFBTUgsVUFBVTtJQUFLO0lBQ25DSSxNQUFNO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0ssT0FBTztRQUFFUCxNQUFNQztJQUFPLEVBQUUsaUNBQWlDO0FBQzNEO0FBRUEsdUZBQXVGO0FBQ3ZGLGlFQUFlTCx3REFBZSxDQUFDYSxLQUFLLElBQUliLHFEQUFjLENBQVMsU0FBU0UsYUFBYSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWtheW9cXERvY3VtZW50c1xcR2l0SHViXFxQbGFuLWl0LVByb3NcXHNyY1xcbW9kZWxzXFxpdGVtU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgZGF0ZTogRGF0ZTtcclxuICB0aW1lOiBzdHJpbmc7XHJcbiAgcGhvdG8/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGZpZWxkIGZvciBhIHBob3RvIFVSTFxyXG59XHJcblxyXG5jb25zdCBldmVudFNjaGVtYTogU2NoZW1hPElFdmVudD4gPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBsb2NhdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHRpbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHBob3RvOiB7IHR5cGU6IFN0cmluZyB9IC8vIE9wdGlvbmFsIGZpZWxkIGZvciBhIHBob3RvIFVSTFxyXG59KTtcclxuXHJcbi8vIFRoZSB0aGlyZCBwYXJhbWV0ZXIgJ1BsYW5ldmVudHMnIHRlbGxzIE1vbmdvb3NlIHRvIHVzZSB0aGF0IGNvbGxlY3Rpb24gbmFtZSBleGFjdGx5LlxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuRXZlbnQgfHwgbW9uZ29vc2UubW9kZWw8SUV2ZW50PignRXZlbnQnLCBldmVudFNjaGVtYSwgJ1BsYW5ldmVudHMnKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiZXZlbnRTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibG9jYXRpb24iLCJkYXRlIiwiRGF0ZSIsInRpbWUiLCJwaG90byIsIm1vZGVscyIsIkV2ZW50IiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/itemSchema.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cakayo%5CDocuments%5CGitHub%5CPlan-it-Pros&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();