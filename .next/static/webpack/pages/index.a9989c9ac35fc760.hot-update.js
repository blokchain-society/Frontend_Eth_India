/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CardsWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardsWrapper */ \"./components/CardsWrapper.jsx\");\n/* harmony import */ var _components_Community__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Community */ \"./components/Community.jsx\");\n/* harmony import */ var _components_GamesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GamesList */ \"./components/GamesList.jsx\");\n/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HeroSection */ \"./components/HeroSection.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Recent */ \"./components/Recent.jsx\");\n/* harmony import */ var _components_Vision__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Vision */ \"./components/Vision.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Tabs */ \"./components/Tabs.js\");\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Tabs__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeroSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Tabs__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Vision__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GamesList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Community__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0U7QUFDdUI7QUFDTjtBQUNBO0FBQ0k7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNKO0FBQ3RCLFNBQVNXLElBQUksR0FBRztJQUM3QixxQkFDRTs7MEJBQ0MsOERBQUNMLDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDRCwrREFBVzs7OztvQkFBRzswQkFDZiw4REFBQ0ssMERBQUk7Ozs7b0JBQUU7MEJBQ1AsOERBQUNGLDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDSiw2REFBUzs7OztvQkFBRzswQkFDYiw4REFBQ0csMERBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNKLDZEQUFTOzs7O29CQUFHOzBCQUNiLDhEQUFDTSwyREFBTTs7OztvQkFBRzs7b0JBQ1IsQ0FDSjtBQUNILENBQUM7QUFidUJFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBDYXJkc1dyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkc1dyYXBwZXInXG5pbXBvcnQgQ29tbXVuaXR5IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbXVuaXR5J1xuaW1wb3J0IEdhbWVzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVzTGlzdCdcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBSZWNlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNlbnQnXG5pbXBvcnQgVmlzaW9uIGZyb20gJy4uL2NvbXBvbmVudHMvVmlzaW9uJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFicydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPE5hdmJhciAvPlxuICAgICA8SGVyb1NlY3Rpb24gLz5cbiAgICAgPFRhYnMvPlxuICAgICA8VmlzaW9uIC8+XG4gICAgIDxHYW1lc0xpc3QgLz5cbiAgICAgPFJlY2VudCAvPlxuICAgICA8Q29tbXVuaXR5IC8+XG4gICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkNhcmRzV3JhcHBlciIsIkNvbW11bml0eSIsIkdhbWVzTGlzdCIsIkhlcm9TZWN0aW9uIiwiTmF2YmFyIiwiUmVjZW50IiwiVmlzaW9uIiwiRm9vdGVyIiwiVGFicyIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});