"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/games/illuvion.jpeg":
/*!************************************!*\
  !*** ./public/games/illuvion.jpeg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/illuvion.4664e47d.jpeg\",\"height\":174,\"width\":290,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Filluvion.4664e47d.jpeg&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":5});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvZ2FtZXMvaWxsdXZpb24uanBlZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQyxzTUFBc00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2dhbWVzL2lsbHV2aW9uLmpwZWc/MmUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvaWxsdXZpb24uNDY2NGU0N2QuanBlZ1wiLFwiaGVpZ2h0XCI6MTc0LFwid2lkdGhcIjoyOTAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGaWxsdXZpb24uNDY2NGU0N2QuanBlZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjo1fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/games/illuvion.jpeg\n"));

/***/ }),

/***/ "./components/GamesList.jsx":
/*!**********************************!*\
  !*** ./components/GamesList.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamesList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_games_VALORANT_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/games/VALORANT.jpg */ \"./public/games/VALORANT.jpg\");\n/* harmony import */ var _public_games_CS_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/games/CS.jpeg */ \"./public/games/CS.jpeg\");\n/* harmony import */ var _public_games_VICECITY_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/games/VICECITY.jpeg */ \"./public/games/VICECITY.jpeg\");\n/* harmony import */ var _public_games_MINECRAFT_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/games/MINECRAFT.jpeg */ \"./public/games/MINECRAFT.jpeg\");\n/* harmony import */ var _public_games_FIFA_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/games/FIFA.jpeg */ \"./public/games/FIFA.jpeg\");\n/* harmony import */ var _public_games_six_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/games/six.webp */ \"./public/games/six.webp\");\n/* harmony import */ var _GamesCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GamesCard */ \"./components/GamesCard.jsx\");\n/* harmony import */ var _public_games_forza_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/games/forza.jpeg */ \"./public/games/forza.jpeg\");\n/* harmony import */ var _public_games_upland_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/games/upland.png */ \"./public/games/upland.png\");\n/* harmony import */ var _public_games_god_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/games/god.jpeg */ \"./public/games/god.jpeg\");\n/* harmony import */ var _public_games_star_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/games/star.jpeg */ \"./public/games/star.jpeg\");\n/* harmony import */ var _public_games_illuvion_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/games/illuvion.jpeg */ \"./public/games/illuvion.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar gamesList = [\n    {\n        imgSrc: _public_games_VALORANT_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        gameName: \"Valorant\"\n    },\n    {\n        imgSrc: _public_games_CS_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        gameName: \"Call of Duty: Online\"\n    },\n    {\n        imgSrc: _public_games_VICECITY_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        gameName: \"GTA Online\"\n    },\n    {\n        imgSrc: _public_games_MINECRAFT_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        gameName: \"Minecraft\"\n    },\n    {\n        imgSrc: _public_games_FIFA_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        gameName: \"EA Sports FIFA 22\"\n    },\n    {\n        imgSrc: _public_games_six_webp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        gameName: \"Axie Infinity\"\n    },\n    {\n        imgSrc: _public_games_upland_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        gameName: \"Upland\"\n    },\n    {\n        imgSrc: _public_games_FIFA_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        gameName: \"Illuvium\"\n    },\n    {\n        imgSrc: _public_games_six_webp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        gameName: \"Fortnite\"\n    },\n    {\n        imgSrc: _public_games_six_webp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        gameName: \"Star Atlas\"\n    },\n    {\n        imgSrc: _public_games_forza_jpeg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        gameName: \"Forza Horizon\"\n    },\n    {\n        imgSrc: _public_games_god_jpeg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        gameName: \"God of War\"\n    }\n];\nfunction GamesList() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-vision p-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center text-center\",\n                id: \"services\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-header text-3xl pb-8\",\n                        children: \"Trending  Games \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/GamesList.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-fontJost \",\n                        children: \"Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/GamesList.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/GamesList.jsx\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center lg:grid lg:grid-cols-3\",\n                children: gamesList.map(function(el) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GamesCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        imgSrc: el.imgSrc,\n                        gameName: el.gameName\n                    }, el.gameName, false, {\n                        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/GamesList.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/GamesList.jsx\",\n                lineNumber: 74,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/components/GamesList.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_c = GamesList;\nvar _c;\n$RefreshReg$(_c, \"GamesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVzTGlzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBb0Q7QUFDTDtBQUNRO0FBQ0E7QUFDTDtBQUNGO0FBQ1o7QUFDVztBQUNDO0FBQ0w7QUFDRTtBQUNRO0FBQ3JELElBQU1ZLFNBQVMsR0FBRztJQUVkO1FBQ0lDLE1BQU0sRUFBQ2Isa0VBQVE7UUFDZmMsUUFBUSxFQUFDLFVBQVU7S0FDdEI7SUFDRDtRQUNJRCxNQUFNLEVBQUNaLDZEQUFRO1FBQ2ZhLFFBQVEsRUFBQyxzQkFBc0I7S0FDbEM7SUFDRDtRQUNJRCxNQUFNLEVBQUNYLG1FQUFVO1FBQ2pCWSxRQUFRLEVBQUMsWUFBWTtLQUN4QjtJQUNEO1FBQ0lELE1BQU0sRUFBQ1Ysb0VBQVM7UUFDaEJXLFFBQVEsRUFBQyxXQUFXO0tBQ3ZCO0lBQ0Q7UUFDSUQsTUFBTSxFQUFDVCwrREFBUztRQUNoQlUsUUFBUSxFQUFDLG1CQUFtQjtLQUMvQjtJQUNEO1FBQ0lELE1BQU0sRUFBQ1IsOERBQVE7UUFDZlMsUUFBUSxFQUFDLGVBQWU7S0FDM0I7SUFBQztRQUNFRCxNQUFNLEVBQUNMLGdFQUFNO1FBQ2JNLFFBQVEsRUFBQyxRQUFRO0tBQ3BCO0lBQ0Q7UUFDSUQsTUFBTSxFQUFDVCwrREFBUztRQUNoQlUsUUFBUSxFQUFDLFVBQVU7S0FDdEI7SUFDRDtRQUNJRCxNQUFNLEVBQUNSLDhEQUFRO1FBQ2ZTLFFBQVEsRUFBQyxVQUFVO0tBQ3RCO0lBQ0Q7UUFDSUQsTUFBTSxFQUFDUiw4REFBUTtRQUNmUyxRQUFRLEVBQUMsWUFBWTtLQUN4QjtJQUNEO1FBQ0lELE1BQU0sRUFBQ04sZ0VBQUs7UUFDWk8sUUFBUSxFQUFDLGVBQWU7S0FDM0I7SUFDRDtRQUNJRCxNQUFNLEVBQUNKLCtEQUFHO1FBQ1ZLLFFBQVEsRUFBQyxZQUFZO0tBQ3hCO0NBRUo7QUFFYyxTQUFTQyxTQUFTLEdBQUU7O0lBQy9CLHFCQUNBLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUMvQiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdDQUF3QztnQkFBQ0MsRUFBRSxFQUFDLFVBQVU7O2tDQUNqRSw4REFBQ0MsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLDJCQUEyQjtrQ0FBQyxrQkFBZ0I7Ozs7OzRCQUFLO2tDQUMvRCw4REFBQ0csR0FBQzt3QkFBQ0gsU0FBUyxFQUFDLGdCQUFnQjtrQ0FBQywyTEFBeUw7Ozs7OzRCQUFJOzs7Ozs7b0JBQ3pOOzBCQUVOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbURBQW1EOzBCQUUxREwsU0FBUyxDQUFDUyxHQUFHLENBQUNDLFNBQUFBLEVBQUUsRUFBRTtvQkFDZCxxQkFDSSw4REFBQ2hCLGtEQUFTO3dCQUFDTyxNQUFNLEVBQUVTLEVBQUUsQ0FBQ1QsTUFBTTt3QkFBRUMsUUFBUSxFQUFFUSxFQUFFLENBQUNSLFFBQVE7dUJBQU9RLEVBQUUsQ0FBQ1IsUUFBUTs7Ozs2QkFBSSxDQUM1RTtnQkFDTCxDQUFDLENBQUM7Ozs7O29CQUVKOzs7Ozs7WUFDQSxDQUNMO0FBQ0wsQ0FBQztBQW5CdUJDLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lc0xpc3QuanN4P2Y4NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgaW1hZ2VPbmUgZnJvbSAnLi4vcHVibGljL2dhbWVzL1ZBTE9SQU5ULmpwZyc7XG5pbXBvcnQgaW1hZ2VUd28gZnJvbSAnLi4vcHVibGljL2dhbWVzL0NTLmpwZWcnO1xuaW1wb3J0IGltYWdlVGhyZWUgZnJvbSAnLi4vcHVibGljL2dhbWVzL1ZJQ0VDSVRZLmpwZWcnO1xuaW1wb3J0IGltYWdlRm91ciBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvTUlORUNSQUZULmpwZWcnO1xuaW1wb3J0IGltYWdlRml2ZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvRklGQS5qcGVnJztcbmltcG9ydCBpbWFnZVNpeCBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvc2l4LndlYnAnO1xuaW1wb3J0IEdhbWVzQ2FyZCBmcm9tICcuL0dhbWVzQ2FyZCc7XG5pbXBvcnQgZm9yemEgZnJvbSAnLi4vcHVibGljL2dhbWVzL2ZvcnphLmpwZWcnO1xuaW1wb3J0IHVwbGFuZCBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvdXBsYW5kLnBuZyc7XG5pbXBvcnQgZ29kIGZyb20gJy4uL3B1YmxpYy9nYW1lcy9nb2QuanBlZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvc3Rhci5qcGVnJztcbmltcG9ydCBpbGx1dmlvbiBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvaWxsdXZpb24uanBlZyc7XG5jb25zdCBnYW1lc0xpc3QgPSBbXG4gICBcbiAgICB7XG4gICAgICAgIGltZ1NyYzppbWFnZU9uZSxcbiAgICAgICAgZ2FtZU5hbWU6XCJWYWxvcmFudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZ1NyYzppbWFnZVR3byxcbiAgICAgICAgZ2FtZU5hbWU6XCJDYWxsIG9mIER1dHk6IE9ubGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZ1NyYzppbWFnZVRocmVlLFxuICAgICAgICBnYW1lTmFtZTpcIkdUQSBPbmxpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWdTcmM6aW1hZ2VGb3VyLFxuICAgICAgICBnYW1lTmFtZTpcIk1pbmVjcmFmdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZ1NyYzppbWFnZUZpdmUsXG4gICAgICAgIGdhbWVOYW1lOlwiRUEgU3BvcnRzIEZJRkEgMjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWdTcmM6aW1hZ2VTaXgsXG4gICAgICAgIGdhbWVOYW1lOlwiQXhpZSBJbmZpbml0eVwiXG4gICAgfSx7XG4gICAgICAgIGltZ1NyYzp1cGxhbmQsXG4gICAgICAgIGdhbWVOYW1lOlwiVXBsYW5kXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nU3JjOmltYWdlRml2ZSxcbiAgICAgICAgZ2FtZU5hbWU6XCJJbGx1dml1bVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZ1NyYzppbWFnZVNpeCxcbiAgICAgICAgZ2FtZU5hbWU6XCJGb3J0bml0ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZ1NyYzppbWFnZVNpeCxcbiAgICAgICAgZ2FtZU5hbWU6XCJTdGFyIEF0bGFzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nU3JjOmZvcnphLFxuICAgICAgICBnYW1lTmFtZTpcIkZvcnphIEhvcml6b25cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWdTcmM6Z29kLFxuICAgICAgICBnYW1lTmFtZTpcIkdvZCBvZiBXYXJcIlxuICAgIH1cblxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lc0xpc3QoKXtcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aXNpb24gcC0xMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIiBpZD1cInNlcnZpY2VzXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWhlYWRlciB0ZXh0LTN4bCBwYi04XCI+VHJlbmRpbmcgIEdhbWVzIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZm9udEpvc3QgXCI+VGhyb3VnaCBvd25lcnNoaXAgYW5kIHJld2FyZGluZyBtZXJpdCwgZ2FtZXMgYXJlIG5vdyBnb3Zlcm5lZCBieSB0aGUgcGxheWVycy4gSW5ub3ZhdGl2ZSBpbi1nYW1lIGVjb25vbWljcyByZXdhcmQgcGxheWVycyBmb3IgdGhlaXIgcGVyZm9ybWFuY2UsIGNyZWF0aW5nIGEgbmV3IGVjb25vbXkgaW4gdGhlIE1ldGF2ZXJzZS48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMyc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVzTGlzdC5tYXAoZWw9PntcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lc0NhcmQgaW1nU3JjPXtlbC5pbWdTcmN9IGdhbWVOYW1lPXtlbC5nYW1lTmFtZX0ga2V5PXtlbC5nYW1lTmFtZX0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJpbWFnZU9uZSIsImltYWdlVHdvIiwiaW1hZ2VUaHJlZSIsImltYWdlRm91ciIsImltYWdlRml2ZSIsImltYWdlU2l4IiwiR2FtZXNDYXJkIiwiZm9yemEiLCJ1cGxhbmQiLCJnb2QiLCJzdGFyIiwiaWxsdXZpb24iLCJnYW1lc0xpc3QiLCJpbWdTcmMiLCJnYW1lTmFtZSIsIkdhbWVzTGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJwIiwibWFwIiwiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GamesList.jsx\n"));

/***/ })

});