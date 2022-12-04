"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/contract.js":
/*!***************************!*\
  !*** ./utils/contract.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abi */ \"./utils/abi.js\");\n\n\n\n\nvar contract;\nvar address = \"0x11FB2d9D8aA05134108526c96B213f0126e1Ca87\";\nvar getInstance = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var web3, error;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        (0,_web3__WEBPACK_IMPORTED_MODULE_0__.getWeb3)()\n                    ];\n                case 1:\n                    web3 = _state.sent();\n                    return [\n                        4,\n                        new web3.eth.Contract(_abi__WEBPACK_IMPORTED_MODULE_1__.abi, address)\n                    ];\n                case 2:\n                    contract = _state.sent();\n                    return [\n                        2,\n                        contract\n                    ];\n                case 3:\n                    error = _state.sent();\n                    console.log(error);\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getInstance() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInstance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb250cmFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpQztBQUNMO0FBQzVCLElBQUlFLFFBQVE7QUFDWixJQUFNQyxPQUFPLEdBQUMsNENBQTRDO0FBQzFELElBQU1DLFdBQVc7ZUFBRSwrRkFBVTtZQUVqQkMsSUFBSSxFQUdIQyxLQUFLOzs7Ozs7Ozs7O29CQUhDOzt3QkFBTU4sOENBQU8sRUFBRTtzQkFBQTs7b0JBQXRCSyxJQUFJLEdBQUcsYUFBZTtvQkFDaEI7O3dCQUFNLElBQUlBLElBQUksQ0FBQ0UsR0FBRyxDQUFDQyxRQUFRLENBQUNQLHFDQUFHLEVBQUNFLE9BQU8sQ0FBQztzQkFBQTs7b0JBQWxERCxRQUFRLEdBQUUsYUFBd0MsQ0FBQztvQkFDbkQ7O3dCQUFPQSxRQUFRO3NCQUFDOztvQkFDWEksS0FBSztvQkFDVkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7SUFFMUIsQ0FBQztvQkFSS0YsV0FBVzs7O0dBUWhCO0FBRUQsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb250cmFjdC5qcz84OWIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdlYjMgfSBmcm9tIFwiLi93ZWIzXCI7XG5pbXBvcnQgeyBhYmkgfSBmcm9tIFwiLi9hYmlcIjtcbmxldCBjb250cmFjdDtcbmNvbnN0IGFkZHJlc3M9XCIweDExRkIyZDlEOGFBMDUxMzQxMDg1MjZjOTZCMjEzZjAxMjZlMUNhODdcIjtcbmNvbnN0IGdldEluc3RhbmNlPSBhc3luYyAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB3ZWIzID0gYXdhaXQgZ2V0V2ViMygpO1xuICAgICAgICBjb250cmFjdD0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFiaSxhZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyYWN0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5zdGFuY2U7Il0sIm5hbWVzIjpbImdldFdlYjMiLCJhYmkiLCJjb250cmFjdCIsImFkZHJlc3MiLCJnZXRJbnN0YW5jZSIsIndlYjMiLCJlcnJvciIsImV0aCIsIkNvbnRyYWN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/contract.js\n"));

/***/ })

});