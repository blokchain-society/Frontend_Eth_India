"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/DashboardGrid/DashboardGrid.js":
/*!***************************************************!*\
  !*** ./components/DashboardGrid/DashboardGrid.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar DASHBOARD_BOXES = [\n    {\n        title: \"Total Users\",\n        className: \"purple\"\n    },\n    {\n        title: \"Total Rented Nfts\",\n        className: \"green\"\n    },\n    {\n        title: \"Total Nfts \"\n    },\n    {\n        title: \"Projects Completed\"\n    }, \n];\nfunction DashboardGrid() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboardGrid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboardGrid-boxes\",\n                children: DASHBOARD_BOXES.map(function(box, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"dashboardGrid-boxes-item\",\n                        centered: true,\n                        raised: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {\n                            className: box.className ? box.className : \"\",\n                            as: \"h4\",\n                            label: box.title,\n                            value: \"89\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = DashboardGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardGrid);\nvar _c;\n$RefreshReg$(_c, \"DashboardGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZEdyaWQvRGFzaGJvYXJkR3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUEwQjtBQUMwQjtBQUVwRCxJQUFNRyxlQUFlLEdBQUc7SUFDdEI7UUFDRUMsS0FBSyxFQUFFLGFBQWE7UUFDcEJDLFNBQVMsRUFBRSxRQUFRO0tBQ3BCO0lBQ0Q7UUFDRUQsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQkMsU0FBUyxFQUFFLE9BQU87S0FDbkI7SUFDRDtRQUNFRCxLQUFLLEVBQUUsYUFBYTtLQUNyQjtJQUNEO1FBQ0VBLEtBQUssRUFBRSxvQkFBb0I7S0FDNUI7Q0FDRjtBQUVELFNBQVNFLGFBQWEsR0FBRzs7SUFDdkIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0YsU0FBUyxFQUFDLGVBQWU7OzBCQUM1Qiw4REFBQ0UsS0FBRztnQkFBQ0YsU0FBUyxFQUFDLHFCQUFxQjswQkFDakNGLGVBQWUsQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBRUMsQ0FBQzt5Q0FDMUIsOERBQUNULG1EQUFJO3dCQUFDSSxTQUFTLEVBQUMsMEJBQTBCO3dCQUFDTSxRQUFRO3dCQUFDQyxNQUFNO2tDQUN4RCw0RUFBQ1Ysd0RBQVM7NEJBQ1JHLFNBQVMsRUFBRUksR0FBRyxDQUFDSixTQUFTLEdBQUdJLEdBQUcsQ0FBQ0osU0FBUyxHQUFHLEVBQUU7NEJBQzdDUSxFQUFFLEVBQUMsSUFBSTs0QkFDUEMsS0FBSyxFQUFFTCxHQUFHLENBQUNMLEtBQUs7NEJBQ2hCVyxLQUFLLEVBQUMsSUFBSTs7Ozs7aUNBQ1Y7Ozs7OzZCQUNHO2lCQUNSLENBQUM7Ozs7O29CQUNFOzBCQUNOLDhEQUFDUixLQUFHOzs7O29CQUVFOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztBQXBCUUQsS0FBQUEsYUFBYTtBQXNCdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhc2hib2FyZEdyaWQvRGFzaGJvYXJkR3JpZC5qcz8zYzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIFN0YXRpc3RpYyB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jb25zdCBEQVNIQk9BUkRfQk9YRVMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJUb3RhbCBVc2Vyc1wiLFxuICAgIGNsYXNzTmFtZTogXCJwdXJwbGVcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRvdGFsIFJlbnRlZCBOZnRzXCIsXG4gICAgY2xhc3NOYW1lOiBcImdyZWVuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUb3RhbCBOZnRzIFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUHJvamVjdHMgQ29tcGxldGVkXCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmRHcmlkKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkR3JpZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRHcmlkLWJveGVzXCI+XG4gICAgICAgIHtEQVNIQk9BUkRfQk9YRVMubWFwKChib3gsIGkpID0+IChcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJkYXNoYm9hcmRHcmlkLWJveGVzLWl0ZW1cIiBjZW50ZXJlZCByYWlzZWQ+XG4gICAgICAgICAgICA8U3RhdGlzdGljXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94LmNsYXNzTmFtZSA/IGJveC5jbGFzc05hbWUgOiBcIlwifVxuICAgICAgICAgICAgICBhcz1cImg0XCJcbiAgICAgICAgICAgICAgbGFiZWw9e2JveC50aXRsZX1cbiAgICAgICAgICAgICAgdmFsdWU9XCI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiogV2UnbGwgYWRkIHRoZSBjaGF0IGhlcmUgbGF0ZXIgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkR3JpZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJTdGF0aXN0aWMiLCJEQVNIQk9BUkRfQk9YRVMiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkRhc2hib2FyZEdyaWQiLCJkaXYiLCJtYXAiLCJib3giLCJpIiwiY2VudGVyZWQiLCJyYWlzZWQiLCJhcyIsImxhYmVsIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DashboardGrid/DashboardGrid.js\n"));

/***/ })

});