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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var revise_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! revise-sdk */ \"./node_modules/revise-sdk/dist/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import { toast } from 'react-toastify';\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var AUTH_TOKEN = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZTkyNmUwLTA0MTgtNGFmYi05Yjg1LTVkODVlZDUxYTljMCIsImtleSI6InhoMG1mODRtIiwiaWF0IjoxNjcwMDU2NjI0fQ.H67LRci5ra0JjalrKI0UMb94EGOoSY308x1xNkNw33w\";\n    var revise = new revise_sdk__WEBPACK_IMPORTED_MODULE_3__.Revise({\n        auth: AUTH_TOKEN\n    });\n    // const addCollection=async(collectionName,collectionURI)=>{\n    //     try {\n    //         let res= await revise.addCollection(collectionName,collectionURI);\n    //         console.log(res);\n    //     } catch (error) {\n    //         console.log(error)\n    //     }\n    // }\n    var mintNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var tokenData, properties, newNFT, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        tokenData = {\n                            \"name\": \"Lamborghini\",\n                            \"image\": \"string\",\n                            \"tokenId\": \"37781973573605582095880511607555594450371183149967330698384866539359313068033\",\n                            \"description?\": \"Rare and Royal .... Just for testing purpose of Metaborrow\"\n                        };\n                        properties = [\n                            {\n                                fuel: 50\n                            },\n                            {\n                                game: \"gta 5\"\n                            }\n                        ];\n                        return [\n                            4,\n                            revise.addNFT(tokenData, properties)\n                        ];\n                    case 1:\n                        newNFT = _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function mintNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getchSingleNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nft, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFT(\"fc451d76-20de-48e6-8300-c793ade33430\")\n                        ];\n                    case 1:\n                        nft = _state.sent();\n                        console.log(nft);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getchSingleNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAllNftsByCollectionId = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nfts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFTs(\"collection-id\")\n                        ];\n                    case 1:\n                        nfts = _state.sent();\n                        console.log(nfts);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAllNftsByCollectionId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setName = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _name) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setName(_name).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setName(nftId, _name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setDesc = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _desc) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setDescription(_desc).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setDesc(nftId, _desc) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _imgUrl) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setImage(_imgUrl).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setImage(nftId, _imgUrl) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isConnect = ref[0], setIsConnect = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // getchSingleNft();\n    // getAllNftsByCollectionId();\n    // addCollection(\"GTA-5\",\"https://testnets.opensea.io/collection/metaborrow\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection,\n            currentAccount: currentAccount,\n            isConnect: isConnect,\n            mintNft: mintNft,\n            getchSingleNft: getchSingleNft,\n            getAllNftsByCollectionId: getAllNftsByCollectionId,\n            setName: setName,\n            setDesc: setDesc,\n            setImage: setImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContextProvider, \"OqZresaVoyFuPqJ1yoCpSqpXEYs=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWRBLGNBQWM7WUFDZEcsd0JBQXdCLEVBQXhCQSx3QkFBd0I7WUFDeEJHLE9BQU8sRUFBUEEsT0FBTztZQUNQTSxPQUFPLEVBQVBBLE9BQU87WUFDUEcsUUFBUSxFQUFSQSxRQUFRO1NBQUM7a0JBQ1I3QixRQUFROzs7OzthQUNVLENBQ3hCO0FBQ0gsQ0FBQztHQWpIS0QsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBbUhyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9Db250ZXh0LmpzPzA1OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0V2ViMyB9IGZyb20gJy4vd2ViMyc7XG5pbXBvcnQge1JldmlzZX0gZnJvbSAncmV2aXNlLXNkayc7XG4vLyBpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQ9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgXG5cbmNvbnN0IEFVVEhfVE9LRU4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqYzNaVGt5Tm1Vd0xUQTBNVGd0TkdGbVlpMDVZamcxTFRWa09EVmxaRFV4WVRsak1DSXNJbXRsZVNJNkluaG9NRzFtT0RSdElpd2lhV0YwSWpveE5qY3dNRFUyTmpJMGZRLkg2N0xSY2k1cmEwSmphbHJLSTBVTWI5NEVHT29TWTMwOHgxeE5rTnczM3dcIjtcblxuY29uc3QgcmV2aXNlID0gbmV3IFJldmlzZSh7YXV0aDogQVVUSF9UT0tFTn0pO1xuICAgIC8vIGNvbnN0IGFkZENvbGxlY3Rpb249YXN5bmMoY29sbGVjdGlvbk5hbWUsY29sbGVjdGlvblVSSSk9PntcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGxldCByZXM9IGF3YWl0IHJldmlzZS5hZGRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lLGNvbGxlY3Rpb25VUkkpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICBjb25zdCBtaW50TmZ0ID0gYXN5bmMoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuRGF0YSA9e1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGFtYm9yZ2hpbmlcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidG9rZW5JZFwiOiBcIjM3NzgxOTczNTczNjA1NTgyMDk1ODgwNTExNjA3NTU1NTk0NDUwMzcxMTgzMTQ5OTY3MzMwNjk4Mzg0ODY2NTM5MzU5MzEzMDY4MDMzXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uP1wiOiBcIlJhcmUgYW5kIFJveWFsIC4uLi4gSnVzdCBmb3IgdGVzdGluZyBwdXJwb3NlIG9mIE1ldGFib3Jyb3dcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllcz1be2Z1ZWw6NTB9LHtnYW1lOlwiZ3RhIDVcIn1dXG4gICAgICAgIGNvbnN0IG5ld05GVCA9IGF3YWl0IHJldmlzZS5hZGRORlQodG9rZW5EYXRhLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBnZXRjaFNpbmdsZU5mdD1hc3luYyAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5mdCA9IGF3YWl0IHJldmlzZS5mZXRjaE5GVCgnZmM0NTFkNzYtMjBkZS00OGU2LTgzMDAtYzc5M2FkZTMzNDMwJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5mdClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbiAgY29uc3QgZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkPWFzeW5jICgpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IG5mdHMgPSBhd2FpdCByZXZpc2UuZmV0Y2hORlRzKCdjb2xsZWN0aW9uLWlkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5mdHMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG4gIGNvbnN0IHNldE5hbWU9YXN5bmMobmZ0SWQsX25hbWUpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCAoYXdhaXQgcmV2aXNlLnVwZGF0ZU5GVChuZnRJZCkpLnNldE5hbWUoX25hbWUpLnNhdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldERlc2M9YXN5bmMobmZ0SWQsX2Rlc2MpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCAoYXdhaXQgcmV2aXNlLnVwZGF0ZU5GVChuZnRJZCkpLnNldERlc2NyaXB0aW9uKF9kZXNjKS5zYXZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRJbWFnZT1hc3luYyhuZnRJZCxfaW1nVXJsKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpKS5zZXRJbWFnZShfaW1nVXJsKS5zYXZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbiAgICBjb25zdCBbaXNDb25uZWN0LHNldElzQ29ubmVjdF09dXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCxzZXRDdXJyZW50QWNjb3VudF09dXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBcbiAgICBjb25zdCB3YWxsZXRDb25uZWN0aW9uPWFzeW5jKCk9PntcbiAgICAgICAgc2V0SXNDb25uZWN0KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICAgICAgICBsZXQgYWNjcz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY3MpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjc1swXSk7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIC8vIGdldGNoU2luZ2xlTmZ0KCk7XG4gICAgICAgIC8vIGdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZCgpO1xuICAgICAgICAvLyBhZGRDb2xsZWN0aW9uKFwiR1RBLTVcIixcImh0dHBzOi8vdGVzdG5ldHMub3BlbnNlYS5pby9jb2xsZWN0aW9uL21ldGFib3Jyb3dcIik7XG4gICAgfSxbXSlcbiAgIFxuICByZXR1cm4gKFxuICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3dhbGxldENvbm5lY3Rpb24sY3VycmVudEFjY291bnQsaXNDb25uZWN0LG1pbnROZnQsXG4gICAgICAgIGdldGNoU2luZ2xlTmZ0LFxuICAgICAgICBnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIHNldERlc2MsXG4gICAgICAgIHNldEltYWdlfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFdlYjMiLCJSZXZpc2UiLCJheGlvcyIsIkRhdGFDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJBVVRIX1RPS0VOIiwicmV2aXNlIiwiYXV0aCIsIm1pbnROZnQiLCJ0b2tlbkRhdGEiLCJwcm9wZXJ0aWVzIiwibmV3TkZUIiwiZXJyb3IiLCJmdWVsIiwiZ2FtZSIsImFkZE5GVCIsImNvbnNvbGUiLCJsb2ciLCJnZXRjaFNpbmdsZU5mdCIsIm5mdCIsImZldGNoTkZUIiwiZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkIiwibmZ0cyIsImZldGNoTkZUcyIsInNldE5hbWUiLCJuZnRJZCIsIl9uYW1lIiwicmVzIiwidXBkYXRlTkZUIiwic2F2ZSIsInNldERlc2MiLCJfZGVzYyIsInNldERlc2NyaXB0aW9uIiwic2V0SW1hZ2UiLCJfaW1nVXJsIiwiaXNDb25uZWN0Iiwic2V0SXNDb25uZWN0IiwidW5kZWZpbmVkIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIndhbGxldENvbm5lY3Rpb24iLCJ3ZWIzIiwiYWNjcyIsImV0aCIsImdldEFjY291bnRzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});