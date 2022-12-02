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

/***/ "./utils/Context.js":
/*!**************************!*\
  !*** ./utils/Context.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isConnect = ref[0], setIsConnect = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        walletConnection();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContextProvider, \"OqZresaVoyFuPqJ1yoCpSqpXEYs=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9Db250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQWdFO0FBQy9CO0FBQzFCLElBQU1LLFdBQVcsaUJBQUVKLG9EQUFhLEVBQUUsQ0FBQztBQUMxQyxJQUFNSyxlQUFlLEdBQUcsZ0JBQWdCO1FBQWRDLFFBQVEsU0FBUkEsUUFBUTs7SUFDOUIsSUFBK0JKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdkNLLFNBQVMsR0FBZUwsR0FBZSxHQUE5QixFQUFDTSxZQUFZLEdBQUVOLEdBQWUsR0FBakI7SUFDN0IsSUFBeUNBLElBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDTyxTQUFTLENBQUMsRUFBckRDLGNBQWMsR0FBb0JSLElBQW1CLEdBQXZDLEVBQUNTLGlCQUFpQixHQUFFVCxJQUFtQixHQUFyQjtJQUd2QyxJQUFNVSxnQkFBZ0I7bUJBQUMsK0ZBQVM7Z0JBR3BCQyxJQUFJLEVBQ0pDLElBQUksRUFJSEMsS0FBSzs7Ozt3QkFQZFAsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7d0JBRUo7OzRCQUFNTCw4Q0FBTyxFQUFFOzBCQUFBOzt3QkFBdEJVLElBQUksR0FBRyxhQUFlO3dCQUNoQjs7NEJBQU1BLElBQUksQ0FBQ0csR0FBRyxDQUFDQyxXQUFXLEVBQUU7MEJBQUE7O3dCQUFsQ0gsSUFBSSxHQUFFLGFBQTRCO3dCQUN0Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUksQ0FBQyxDQUFDO3dCQUNsQkgsaUJBQWlCLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQk4sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7d0JBQ2ZPLEtBQUs7d0JBQ1ZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQzt3QkFDbkJQLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7UUFHNUIsQ0FBQzt3QkFiS0ksZ0JBQWdCOzs7T0FhckI7SUFFRFgsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZXLGdCQUFnQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUNQLHFCQUNFLDhEQUFDUixXQUFXLENBQUNnQixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDVCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtTQUFDO2tCQUMxQ04sUUFBUTs7Ozs7YUFDVSxDQUN4QjtBQUNILENBQUM7R0E1QktELGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQThCckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvQ29udGV4dC5qcz8wNTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFdlYjMgfSBmcm9tICcuL3dlYjMnO1xuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0PSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtpc0Nvbm5lY3Qsc2V0SXNDb25uZWN0XT11c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LHNldEN1cnJlbnRBY2NvdW50XT11c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG5cbiAgICBjb25zdCB3YWxsZXRDb25uZWN0aW9uPWFzeW5jKCk9PntcbiAgICAgICAgc2V0SXNDb25uZWN0KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICAgICAgICBsZXQgYWNjcz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY3MpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjc1swXSk7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgc2V0SXNDb25uZWN0KGZhbHNlKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHdhbGxldENvbm5lY3Rpb24oKTtcbiAgICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3dhbGxldENvbm5lY3Rpb259fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0V2ViMyIsIkRhdGFDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0Nvbm5lY3QiLCJzZXRJc0Nvbm5lY3QiLCJ1bmRlZmluZWQiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50Iiwid2FsbGV0Q29ubmVjdGlvbiIsIndlYjMiLCJhY2NzIiwiZXJyb3IiLCJldGgiLCJnZXRBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});