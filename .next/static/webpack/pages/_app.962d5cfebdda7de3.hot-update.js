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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var revise_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! revise-sdk */ \"./node_modules/revise-sdk/dist/index.js\");\n/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contract */ \"./utils/contract.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { toast } from 'react-toastify';\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isConnect = ref[0], setIsConnect = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var AUTH_TOKEN = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmZWQzNjc0LTZjMmUtNGJiYi1iYWU0LWMxMTU3MWMwMmVmZSIsImtleSI6ImdoaDVvNndwIiwiaWF0IjoxNjcwMTAyNzEwfQ.TpJ549CYxjxcEo7UOxq1AZk7fkUoxHG2oa5DRhVjo-U\";\n    var revise = new revise_sdk__WEBPACK_IMPORTED_MODULE_3__.Revise({\n        auth: AUTH_TOKEN\n    });\n    // const addCollection=async(collectionName,collectionURI)=>{\n    //     try {\n    //         let res= await revise.addCollection(collectionName,collectionURI);\n    //         console.log(res);\n    //     } catch (error) {\n    //         console.log(error)\n    //     }\n    // }\n    var mintNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(_name, _image, _tokenId, _desc, props) {\n            var tokenData, properties, newNFT, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        tokenData = {\n                            \"name\": _name,\n                            \"image\": _image,\n                            \"tokenId\": _tokenId,\n                            \"description?\": _desc\n                        };\n                        properties = props;\n                        console.log(tokenData);\n                        console.log(properties);\n                        return [\n                            4,\n                            revise.addNFT(tokenData, properties)\n                        ];\n                    case 1:\n                        newNFT = _state.sent();\n                        console.log(newNFT);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function mintNft(_name, _image, _tokenId, _desc, props) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getchSingleNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var nft, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFT(\"fc451d76-20de-48e6-8300-c793ade33430\")\n                        ];\n                    case 1:\n                        nft = _state.sent();\n                        console.log(nft);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getchSingleNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAllNftsByCollectionId = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var nfts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFTs()\n                        ];\n                    case 1:\n                        nfts = _state.sent();\n                        console.log(\"nfts\", nfts);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAllNftsByCollectionId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setProperties = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var nftId, prop, res, error;\n            var _arguments = arguments;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        nftId = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : \"\", prop = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : \"\";\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(\"94c768e1-2356-487a-9899-bc4456921f22\")\n                        ];\n                    case 2:\n                        return [\n                            4,\n                            _state.sent().setProperty(\"availableMag\", \"20\")\n                        ];\n                    case 3:\n                        res = _state.sent();\n                        console.log(\"res\", res);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setProperties() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setName = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(nftId, _name) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setName(_name).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setName(nftId, _name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setDesc = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(nftId, _desc) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setDescription(_desc).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setDesc(nftId, _desc) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(nftId, _imgUrl) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setImage(_imgUrl).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setImage(nftId, _imgUrl) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        console.log(currentAccount);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // getchSingleNft();\n        // getAllNftsByCollectionId();\n        var contract = (0,_contract__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        console.log(contract);\n        // addCollection(\"GTA-5\",\"https://testnets.opensea.io/collection/metaborrow\");\n        walletConnection();\n    }, []);\n    setProperties();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection,\n            currentAccount: currentAccount,\n            isConnect: isConnect,\n            mintNft: mintNft,\n            getchSingleNft: getchSingleNft,\n            getAllNftsByCollectionId: getAllNftsByCollectionId,\n            setName: setName,\n            setDesc: setDesc,\n            setImage: setImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContextProvider, \"x/Q10vgp1oTQWmdpAvsrvZM5yEc=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFROzs7OzthQUNVLENBQzFCO0FBQ0wsQ0FBQztHQXBJS0QsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBc0lyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9Db250ZXh0LmpzPzA1OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFdlYjMgfSBmcm9tICcuL3dlYjMnO1xuaW1wb3J0IHsgUmV2aXNlIH0gZnJvbSAncmV2aXNlLXNkayc7XG5pbXBvcnQgZ2V0SW5zdGFuY2UgZnJvbSAnLi9jb250cmFjdCc7XG4vLyBpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICBjb25zdCBbaXNDb25uZWN0LCBzZXRJc0Nvbm5lY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBBVVRIX1RPS0VOID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJamhtWldRek5qYzBMVFpqTW1VdE5HSmlZaTFpWVdVMExXTXhNVFUzTVdNd01tVm1aU0lzSW10bGVTSTZJbWRvYURWdk5uZHdJaXdpYVdGMElqb3hOamN3TVRBeU56RXdmUS5UcEo1NDlDWXhqeGNFbzdVT3hxMUFaazdma1VveEhHMm9hNURSaFZqby1VXCI7XG5cbiAgICBjb25zdCByZXZpc2UgPSBuZXcgUmV2aXNlKHsgYXV0aDogQVVUSF9UT0tFTiB9KTtcbiAgICAvLyBjb25zdCBhZGRDb2xsZWN0aW9uPWFzeW5jKGNvbGxlY3Rpb25OYW1lLGNvbGxlY3Rpb25VUkkpPT57XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBsZXQgcmVzPSBhd2FpdCByZXZpc2UuYWRkQ29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSxjb2xsZWN0aW9uVVJJKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBjb25zdCBtaW50TmZ0ID0gYXN5bmMgKF9uYW1lLCBfaW1hZ2UsIF90b2tlbklkLCBfZGVzYywgcHJvcHMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogX25hbWUsXG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBfaW1hZ2UsXG4gICAgICAgICAgICAgICAgXCJ0b2tlbklkXCI6IF90b2tlbklkLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb24/XCI6IF9kZXNjXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHByb3BzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW5EYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgY29uc3QgbmV3TkZUID0gYXdhaXQgcmV2aXNlLmFkZE5GVCh0b2tlbkRhdGEsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TkZUKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRjaFNpbmdsZU5mdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5mdCA9IGF3YWl0IHJldmlzZS5mZXRjaE5GVCgnZmM0NTFkNzYtMjBkZS00OGU2LTgzMDAtYzc5M2FkZTMzNDMwJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZnQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbmZ0cyA9IGF3YWl0IHJldmlzZS5mZXRjaE5GVHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmZ0c1wiLG5mdHMpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZXRQcm9wZXJ0aWVzPSBhc3luYyAobmZ0SWQ9XCJcIixwcm9wPVwiXCIpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQoXCI5NGM3NjhlMS0yMzU2LTQ4N2EtOTg5OS1iYzQ0NTY5MjFmMjJcIikpLnNldFByb3BlcnR5KCdhdmFpbGFibGVNYWcnLFwiMjBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLHJlcylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNldE5hbWUgPSBhc3luYyAobmZ0SWQsIF9uYW1lKSA9PiB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCAoYXdhaXQgcmV2aXNlLnVwZGF0ZU5GVChuZnRJZCkpLnNldE5hbWUoX25hbWUpLnNhdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzYyA9IGFzeW5jIChuZnRJZCwgX2Rlc2MpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IChhd2FpdCByZXZpc2UudXBkYXRlTkZUKG5mdElkKSkuc2V0RGVzY3JpcHRpb24oX2Rlc2MpLnNhdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW1hZ2UgPSBhc3luYyAobmZ0SWQsIF9pbWdVcmwpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IChhd2FpdCByZXZpc2UudXBkYXRlTkZUKG5mdElkKSkuc2V0SW1hZ2UoX2ltZ1VybCkuc2F2ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB3YWxsZXRDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRJc0Nvbm5lY3QodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd2ViMyA9IGF3YWl0IGdldFdlYjMoKTtcbiAgICAgICAgICAgIGxldCBhY2NzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY3MpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjc1swXSk7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gZ2V0Y2hTaW5nbGVOZnQoKTtcbiAgICAgICAgLy8gZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkKCk7XG4gICAgICAgIGxldCBjb250cmFjdD0gZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpXG4gICAgICAgIC8vIGFkZENvbGxlY3Rpb24oXCJHVEEtNVwiLFwiaHR0cHM6Ly90ZXN0bmV0cy5vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbWV0YWJvcnJvd1wiKTtcbiAgICAgICAgd2FsbGV0Q29ubmVjdGlvbigpO1xuXG4gICAgfSwgW10pXG4gICAgc2V0UHJvcGVydGllcygpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgd2FsbGV0Q29ubmVjdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgaXNDb25uZWN0LFxuICAgICAgICAgICAgbWludE5mdCxcbiAgICAgICAgICAgIGdldGNoU2luZ2xlTmZ0LFxuICAgICAgICAgICAgZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkLFxuICAgICAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgICAgIHNldERlc2MsXG4gICAgICAgICAgICBzZXRJbWFnZVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFdlYjMiLCJSZXZpc2UiLCJnZXRJbnN0YW5jZSIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzQ29ubmVjdCIsInNldElzQ29ubmVjdCIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJBVVRIX1RPS0VOIiwicmV2aXNlIiwiYXV0aCIsIm1pbnROZnQiLCJfbmFtZSIsIl9pbWFnZSIsIl90b2tlbklkIiwiX2Rlc2MiLCJwcm9wcyIsInRva2VuRGF0YSIsInByb3BlcnRpZXMiLCJuZXdORlQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRORlQiLCJnZXRjaFNpbmdsZU5mdCIsIm5mdCIsImZldGNoTkZUIiwiZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkIiwibmZ0cyIsImZldGNoTkZUcyIsInNldFByb3BlcnRpZXMiLCJuZnRJZCIsInByb3AiLCJyZXMiLCJ1cGRhdGVORlQiLCJzZXRQcm9wZXJ0eSIsInNldE5hbWUiLCJzYXZlIiwic2V0RGVzYyIsInNldERlc2NyaXB0aW9uIiwic2V0SW1hZ2UiLCJfaW1nVXJsIiwid2FsbGV0Q29ubmVjdGlvbiIsIndlYjMiLCJhY2NzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJjb250cmFjdCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});