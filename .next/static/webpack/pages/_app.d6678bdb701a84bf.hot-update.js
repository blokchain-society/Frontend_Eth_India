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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var revise_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! revise-sdk */ \"./node_modules/revise-sdk/dist/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import { toast } from 'react-toastify';\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var AUTH_TOKEN = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZTkyNmUwLTA0MTgtNGFmYi05Yjg1LTVkODVlZDUxYTljMCIsImtleSI6InhoMG1mODRtIiwiaWF0IjoxNjcwMDU2NjI0fQ.H67LRci5ra0JjalrKI0UMb94EGOoSY308x1xNkNw33w\";\n    var revise = new revise_sdk__WEBPACK_IMPORTED_MODULE_3__.Revise({\n        auth: AUTH_TOKEN\n    });\n    // const addCollection=async(collectionName,collectionURI)=>{\n    //     try {\n    //         let res= await revise.addCollection(collectionName,collectionURI);\n    //         console.log(res);\n    //     } catch (error) {\n    //         console.log(error)\n    //     }\n    // }\n    var mintNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(_name, _image, _tokenId, _desc, prop) {\n            var tokenData, properties, newNFT, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        tokenData = {\n                            \"name\": _name,\n                            \"image\": _image,\n                            \"tokenId\": _tokenId,\n                            \"description?\": _desc\n                        };\n                        properties = [\n                            {\n                                fuel: 50\n                            },\n                            {\n                                game: \"gta 5\"\n                            }\n                        ];\n                        return [\n                            4,\n                            revise.addNFT(tokenData, properties)\n                        ];\n                    case 1:\n                        newNFT = _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function mintNft(_name, _image, _tokenId, _desc, prop) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getchSingleNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nft, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFT(\"fc451d76-20de-48e6-8300-c793ade33430\")\n                        ];\n                    case 1:\n                        nft = _state.sent();\n                        console.log(nft);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getchSingleNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAllNftsByCollectionId = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nfts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFTs(\"collection-id\")\n                        ];\n                    case 1:\n                        nfts = _state.sent();\n                        console.log(nfts);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAllNftsByCollectionId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setName = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _name) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setName(_name).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setName(nftId, _name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setDesc = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _desc) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setDescription(_desc).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setDesc(nftId, _desc) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _imgUrl) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setImage(_imgUrl).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setImage(nftId, _imgUrl) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isConnect = ref[0], setIsConnect = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // getchSingleNft();\n    // getAllNftsByCollectionId();\n    // addCollection(\"GTA-5\",\"https://testnets.opensea.io/collection/metaborrow\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection,\n            currentAccount: currentAccount,\n            isConnect: isConnect,\n            mintNft: mintNft,\n            getchSingleNft: getchSingleNft,\n            getAllNftsByCollectionId: getAllNftsByCollectionId,\n            setName: setName,\n            setDesc: setDesc,\n            setImage: setImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContextProvider, \"OqZresaVoyFuPqJ1yoCpSqpXEYs=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxLQUFLLEVBQUU7WUFBQ04sZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7WUFBQ0YsY0FBYyxFQUFkQSxjQUFjO1lBQUNILFNBQVMsRUFBVEEsU0FBUztZQUFDOUIsT0FBTyxFQUFQQSxPQUFPO1lBQzNFZSxjQUFjLEVBQWRBLGNBQWM7WUFDZEcsd0JBQXdCLEVBQXhCQSx3QkFBd0I7WUFDeEJHLE9BQU8sRUFBUEEsT0FBTztZQUNQSyxPQUFPLEVBQVBBLE9BQU87WUFDUEUsUUFBUSxFQUFSQSxRQUFRO1NBQUM7a0JBQ1JoQyxRQUFROzs7OzthQUNVLENBQ3hCO0FBQ0gsQ0FBQztHQWpIS0QsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBbUhyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9Db250ZXh0LmpzPzA1OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0V2ViMyB9IGZyb20gJy4vd2ViMyc7XG5pbXBvcnQge1JldmlzZX0gZnJvbSAncmV2aXNlLXNkayc7XG4vLyBpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQ9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgXG5cbmNvbnN0IEFVVEhfVE9LRU4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqYzNaVGt5Tm1Vd0xUQTBNVGd0TkdGbVlpMDVZamcxTFRWa09EVmxaRFV4WVRsak1DSXNJbXRsZVNJNkluaG9NRzFtT0RSdElpd2lhV0YwSWpveE5qY3dNRFUyTmpJMGZRLkg2N0xSY2k1cmEwSmphbHJLSTBVTWI5NEVHT29TWTMwOHgxeE5rTnczM3dcIjtcblxuY29uc3QgcmV2aXNlID0gbmV3IFJldmlzZSh7YXV0aDogQVVUSF9UT0tFTn0pO1xuICAgIC8vIGNvbnN0IGFkZENvbGxlY3Rpb249YXN5bmMoY29sbGVjdGlvbk5hbWUsY29sbGVjdGlvblVSSSk9PntcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGxldCByZXM9IGF3YWl0IHJldmlzZS5hZGRDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lLGNvbGxlY3Rpb25VUkkpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICBjb25zdCBtaW50TmZ0ID0gYXN5bmMoX25hbWUsX2ltYWdlLF90b2tlbklkLF9kZXNjLHByb3ApPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW5EYXRhID17XG4gICAgICAgICAgICBcIm5hbWVcIjogX25hbWUsXG4gICAgICAgICAgICBcImltYWdlXCI6IF9pbWFnZSxcbiAgICAgICAgICAgIFwidG9rZW5JZFwiOl90b2tlbklkLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvbj9cIjogX2Rlc2NcbiAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzPVt7ZnVlbDo1MH0se2dhbWU6XCJndGEgNVwifV1cbiAgICAgICAgY29uc3QgbmV3TkZUID0gYXdhaXQgcmV2aXNlLmFkZE5GVCh0b2tlbkRhdGEsIHByb3BlcnRpZXMpO1xuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGdldGNoU2luZ2xlTmZ0PWFzeW5jICgpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmZ0ID0gYXdhaXQgcmV2aXNlLmZldGNoTkZUKCdmYzQ1MWQ3Ni0yMGRlLTQ4ZTYtODMwMC1jNzkzYWRlMzM0MzAnKTtcbiAgICAgICAgY29uc29sZS5sb2cobmZ0KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuICBjb25zdCBnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQ9YXN5bmMgKCk9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgbmZ0cyA9IGF3YWl0IHJldmlzZS5mZXRjaE5GVHMoJ2NvbGxlY3Rpb24taWQnKTtcbiAgICAgICAgY29uc29sZS5sb2cobmZ0cylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2V0TmFtZT1hc3luYyhuZnRJZCxfbmFtZSk9PntcbiAgICB0cnkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IChhd2FpdCByZXZpc2UudXBkYXRlTkZUKG5mdElkKSkuc2V0TmFtZShfbmFtZSkuc2F2ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0RGVzYz1hc3luYyhuZnRJZCxfZGVzYyk9PntcbiAgICB0cnkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IChhd2FpdCByZXZpc2UudXBkYXRlTkZUKG5mdElkKSkuc2V0RGVzY3JpcHRpb24oX2Rlc2MpLnNhdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEltYWdlPWFzeW5jKG5mdElkLF9pbWdVcmwpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCAoYXdhaXQgcmV2aXNlLnVwZGF0ZU5GVChuZnRJZCkpLnNldEltYWdlKF9pbWdVcmwpLnNhdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuICAgIGNvbnN0IFtpc0Nvbm5lY3Qsc2V0SXNDb25uZWN0XT11c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LHNldEN1cnJlbnRBY2NvdW50XT11c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIFxuICAgIGNvbnN0IHdhbGxldENvbm5lY3Rpb249YXN5bmMoKT0+e1xuICAgICAgICBzZXRJc0Nvbm5lY3QodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd2ViMyA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgICAgICAgIGxldCBhY2NzPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjcyk7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NzWzBdKTtcbiAgICAgICAgICAgIHNldElzQ29ubmVjdChmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHNldElzQ29ubmVjdChmYWxzZSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgLy8gZ2V0Y2hTaW5nbGVOZnQoKTtcbiAgICAgICAgLy8gZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkKCk7XG4gICAgICAgIC8vIGFkZENvbGxlY3Rpb24oXCJHVEEtNVwiLFwiaHR0cHM6Ly90ZXN0bmV0cy5vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbWV0YWJvcnJvd1wiKTtcbiAgICB9LFtdKVxuICAgXG4gIHJldHVybiAoXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7d2FsbGV0Q29ubmVjdGlvbixjdXJyZW50QWNjb3VudCxpc0Nvbm5lY3QsbWludE5mdCxcbiAgICAgICAgZ2V0Y2hTaW5nbGVOZnQsXG4gICAgICAgIGdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZCxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgc2V0RGVzYyxcbiAgICAgICAgc2V0SW1hZ2V9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0V2ViMyIsIlJldmlzZSIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIkFVVEhfVE9LRU4iLCJyZXZpc2UiLCJhdXRoIiwibWludE5mdCIsIl9uYW1lIiwiX2ltYWdlIiwiX3Rva2VuSWQiLCJfZGVzYyIsInByb3AiLCJ0b2tlbkRhdGEiLCJwcm9wZXJ0aWVzIiwibmV3TkZUIiwiZXJyb3IiLCJmdWVsIiwiZ2FtZSIsImFkZE5GVCIsImNvbnNvbGUiLCJsb2ciLCJnZXRjaFNpbmdsZU5mdCIsIm5mdCIsImZldGNoTkZUIiwiZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkIiwibmZ0cyIsImZldGNoTkZUcyIsInNldE5hbWUiLCJuZnRJZCIsInJlcyIsInVwZGF0ZU5GVCIsInNhdmUiLCJzZXREZXNjIiwic2V0RGVzY3JpcHRpb24iLCJzZXRJbWFnZSIsIl9pbWdVcmwiLCJpc0Nvbm5lY3QiLCJzZXRJc0Nvbm5lY3QiLCJ1bmRlZmluZWQiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50Iiwid2FsbGV0Q29ubmVjdGlvbiIsIndlYjMiLCJhY2NzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});