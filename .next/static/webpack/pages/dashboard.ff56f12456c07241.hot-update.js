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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar DASHBOARD_BOXES = [\n    {\n        title: \"Total Users\",\n        className: \"purple\",\n        value: \"234\"\n    },\n    {\n        title: \"Total Rented Nfts\",\n        className: \"green\",\n        value: \"5\"\n    },\n    {\n        title: \"Total Nfts \",\n        value: value\n    },\n    {\n        title: \"Total Balance\"\n    }, \n];\nfunction DashboardGrid() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboardGrid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboardGrid-boxes\",\n                children: DASHBOARD_BOXES.map(function(box, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"dashboardGrid-boxes-item\",\n                        centered: true,\n                        raised: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Statistic, {\n                            className: box.className ? box.className : \"\",\n                            as: \"h4\",\n                            label: box.title,\n                            value: \"89\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/DashboardGrid/DashboardGrid.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = DashboardGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardGrid);\nvar _c;\n$RefreshReg$(_c, \"DashboardGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZEdyaWQvRGFzaGJvYXJkR3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUEwQjtBQUMwQjtBQUVwRCxJQUFNRyxlQUFlLEdBQUc7SUFDdEI7UUFDRUMsS0FBSyxFQUFFLGFBQWE7UUFDcEJDLFNBQVMsRUFBRSxRQUFRO1FBQ25CQyxLQUFLLEVBQUMsS0FBSztLQUNaO0lBQ0Q7UUFDRUYsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQkMsU0FBUyxFQUFFLE9BQU87UUFDbEJDLEtBQUssRUFBQyxHQUFHO0tBQ1Y7SUFDRDtRQUNFRixLQUFLLEVBQUUsYUFBYTtRQUNwQkUsS0FBSyxFQUFMQSxLQUFLO0tBQ047SUFDRDtRQUNFRixLQUFLLEVBQUUsZUFBZTtLQUN2QjtDQUNGO0FBRUQsU0FBU0csYUFBYSxHQUFHOztJQUN2QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDSCxTQUFTLEVBQUMsZUFBZTs7MEJBQzVCLDhEQUFDRyxLQUFHO2dCQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBCQUNqQ0YsZUFBZSxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFFQyxDQUFDO3lDQUMxQiw4REFBQ1YsbURBQUk7d0JBQUNJLFNBQVMsRUFBQywwQkFBMEI7d0JBQUNPLFFBQVE7d0JBQUNDLE1BQU07a0NBQ3hELDRFQUFDWCx3REFBUzs0QkFDUkcsU0FBUyxFQUFFSyxHQUFHLENBQUNMLFNBQVMsR0FBR0ssR0FBRyxDQUFDTCxTQUFTLEdBQUcsRUFBRTs0QkFDN0NTLEVBQUUsRUFBQyxJQUFJOzRCQUNQQyxLQUFLLEVBQUVMLEdBQUcsQ0FBQ04sS0FBSzs0QkFDaEJFLEtBQUssRUFBQyxJQUFJOzs7OztpQ0FDVjs7Ozs7NkJBQ0c7aUJBQ1IsQ0FBQzs7Ozs7b0JBQ0U7MEJBQ04sOERBQUNFLEtBQUc7Ozs7b0JBRUU7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0FBcEJRRCxLQUFBQSxhQUFhO0FBc0J0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkR3JpZC9EYXNoYm9hcmRHcmlkLmpzPzNjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgU3RhdGlzdGljIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNvbnN0IERBU0hCT0FSRF9CT1hFUyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlRvdGFsIFVzZXJzXCIsXG4gICAgY2xhc3NOYW1lOiBcInB1cnBsZVwiLFxuICAgIHZhbHVlOlwiMjM0XCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRvdGFsIFJlbnRlZCBOZnRzXCIsXG4gICAgY2xhc3NOYW1lOiBcImdyZWVuXCIsXG4gICAgdmFsdWU6XCI1XCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRvdGFsIE5mdHMgXCIsXG4gICAgdmFsdWVcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRvdGFsIEJhbGFuY2VcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIERhc2hib2FyZEdyaWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRHcmlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZEdyaWQtYm94ZXNcIj5cbiAgICAgICAge0RBU0hCT0FSRF9CT1hFUy5tYXAoKGJveCwgaSkgPT4gKFxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImRhc2hib2FyZEdyaWQtYm94ZXMtaXRlbVwiIGNlbnRlcmVkIHJhaXNlZD5cbiAgICAgICAgICAgIDxTdGF0aXN0aWNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3guY2xhc3NOYW1lID8gYm94LmNsYXNzTmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICAgIGFzPVwiaDRcIlxuICAgICAgICAgICAgICBsYWJlbD17Ym94LnRpdGxlfVxuICAgICAgICAgICAgICB2YWx1ZT1cIjg5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgey8qKiBXZSdsbCBhZGQgdGhlIGNoYXQgaGVyZSBsYXRlciAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRHcmlkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIlN0YXRpc3RpYyIsIkRBU0hCT0FSRF9CT1hFUyIsInRpdGxlIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJEYXNoYm9hcmRHcmlkIiwiZGl2IiwibWFwIiwiYm94IiwiaSIsImNlbnRlcmVkIiwicmFpc2VkIiwiYXMiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DashboardGrid/DashboardGrid.js\n"));

/***/ })

});