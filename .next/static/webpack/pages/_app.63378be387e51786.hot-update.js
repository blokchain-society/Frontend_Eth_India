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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var revise_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! revise-sdk */ \"./node_modules/revise-sdk/dist/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import { toast } from 'react-toastify';\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isConnect = ref[0], setIsConnect = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var AUTH_TOKEN = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZTkyNmUwLTA0MTgtNGFmYi05Yjg1LTVkODVlZDUxYTljMCIsImtleSI6InhoMG1mODRtIiwiaWF0IjoxNjcwMDU2NjI0fQ.H67LRci5ra0JjalrKI0UMb94EGOoSY308x1xNkNw33w\";\n    var revise = new revise_sdk__WEBPACK_IMPORTED_MODULE_3__.Revise({\n        auth: AUTH_TOKEN\n    });\n    // const addCollection=async(collectionName,collectionURI)=>{\n    //     try {\n    //         let res= await revise.addCollection(collectionName,collectionURI);\n    //         console.log(res);\n    //     } catch (error) {\n    //         console.log(error)\n    //     }\n    // }\n    var mintNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(_name, _image, _tokenId, _desc, props) {\n            var tokenData, properties, newNFT, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        tokenData = {\n                            \"name\": _name,\n                            \"image\": _image,\n                            \"tokenId\": _tokenId,\n                            \"description?\": _desc\n                        };\n                        properties = props;\n                        console.log(tokenData);\n                        console.log(properties);\n                        return [\n                            4,\n                            revise.addNFT(tokenData, properties)\n                        ];\n                    case 1:\n                        newNFT = _state.sent();\n                        console.log(newNFT);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function mintNft(_name, _image, _tokenId, _desc, props) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getchSingleNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nft, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFT(\"fc451d76-20de-48e6-8300-c793ade33430\")\n                        ];\n                    case 1:\n                        nft = _state.sent();\n                        console.log(nft);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getchSingleNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAllNftsByCollectionId = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nfts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFTs()\n                        ];\n                    case 1:\n                        nfts = _state.sent();\n                        console.log(\"nfts\", nfts);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAllNftsByCollectionId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setProperties = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, prop) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(\"405bf801-3bdf-4b8e-b204-d34774a72751\")\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setProperty(\"fuel\", \"60\")\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setProperties(nftId, prop) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setName = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _name) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setName(_name).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setName(nftId, _name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setDesc = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _desc) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setDescription(_desc).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setDesc(nftId, _desc) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _imgUrl) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setImage(_imgUrl).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setImage(nftId, _imgUrl) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        console.log(currentAccount);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // getchSingleNft();\n        getAllNftsByCollectionId();\n        // addCollection(\"GTA-5\",\"https://testnets.opensea.io/collection/metaborrow\");\n        walletConnection();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection,\n            currentAccount: currentAccount,\n            isConnect: isConnect,\n            mintNft: mintNft,\n            getchSingleNft: getchSingleNft,\n            getAllNftsByCollectionId: getAllNftsByCollectionId,\n            setName: setName,\n            setDesc: setDesc,\n            setImage: setImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 123,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContextProvider, \"x/Q10vgp1oTQWmdpAvsrvZM5yEc=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRXZWIzIH0gZnJvbSAnLi93ZWIzJztcbmltcG9ydCB7IFJldmlzZSB9IGZyb20gJ3JldmlzZS1zZGsnO1xuLy8gaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgW2lzQ29ubmVjdCwgc2V0SXNDb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgQVVUSF9UT0tFTiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpjM1pUa3lObVV3TFRBME1UZ3ROR0ZtWWkwNVlqZzFMVFZrT0RWbFpEVXhZVGxqTUNJc0ltdGxlU0k2SW5ob01HMW1PRFJ0SWl3aWFXRjBJam94Tmpjd01EVTJOakkwZlEuSDY3TFJjaTVyYTBKamFscktJMFVNYjk0RUdPb1NZMzA4eDF4TmtOdzMzd1wiO1xuXG4gICAgY29uc3QgcmV2aXNlID0gbmV3IFJldmlzZSh7IGF1dGg6IEFVVEhfVE9LRU4gfSk7XG4gICAgLy8gY29uc3QgYWRkQ29sbGVjdGlvbj1hc3luYyhjb2xsZWN0aW9uTmFtZSxjb2xsZWN0aW9uVVJJKT0+e1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgbGV0IHJlcz0gYXdhaXQgcmV2aXNlLmFkZENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUsY29sbGVjdGlvblVSSSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgY29uc3QgbWludE5mdCA9IGFzeW5jIChfbmFtZSwgX2ltYWdlLCBfdG9rZW5JZCwgX2Rlc2MsIHByb3BzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IF9uYW1lLFxuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogX2ltYWdlLFxuICAgICAgICAgICAgICAgIFwidG9rZW5JZFwiOiBfdG9rZW5JZCxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uP1wiOiBfZGVzY1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuRGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05GVCA9IGF3YWl0IHJldmlzZS5hZGRORlQodG9rZW5EYXRhLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05GVCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Y2hTaW5nbGVOZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBuZnQgPSBhd2FpdCByZXZpc2UuZmV0Y2hORlQoJ2ZjNDUxZDc2LTIwZGUtNDhlNi04MzAwLWM3OTNhZGUzMzQzMCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmZ0KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5mdHMgPSBhd2FpdCByZXZpc2UuZmV0Y2hORlRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5mdHNcIixuZnRzKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvcGVydGllcz0gYXN5bmMgKG5mdElkLHByb3ApPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQoXCI0MDViZjgwMS0zYmRmLTRiOGUtYjIwNC1kMzQ3NzRhNzI3NTFcIikpLnNldFByb3BlcnR5KCdmdWVsJyxcIjYwXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2V0TmFtZSA9IGFzeW5jIChuZnRJZCwgX25hbWUpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IChhd2FpdCByZXZpc2UudXBkYXRlTkZUKG5mdElkKSkuc2V0TmFtZShfbmFtZSkuc2F2ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjID0gYXN5bmMgKG5mdElkLCBfZGVzYykgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpKS5zZXREZXNjcmlwdGlvbihfZGVzYykuc2F2ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbWFnZSA9IGFzeW5jIChuZnRJZCwgX2ltZ1VybCkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpKS5zZXRJbWFnZShfaW1nVXJsKS5zYXZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHdhbGxldENvbm5lY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldElzQ29ubmVjdCh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB3ZWIzID0gYXdhaXQgZ2V0V2ViMygpO1xuICAgICAgICAgICAgbGV0IGFjY3MgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjcyk7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NzWzBdKTtcbiAgICAgICAgICAgIHNldElzQ29ubmVjdChmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QWNjb3VudClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHNldElzQ29ubmVjdChmYWxzZSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBnZXRjaFNpbmdsZU5mdCgpO1xuICAgICAgICBnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQoKTtcbiAgICAgICAgLy8gYWRkQ29sbGVjdGlvbihcIkdUQS01XCIsXCJodHRwczovL3Rlc3RuZXRzLm9wZW5zZWEuaW8vY29sbGVjdGlvbi9tZXRhYm9ycm93XCIpO1xuICAgICAgICB3YWxsZXRDb25uZWN0aW9uKCk7XG5cbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIHdhbGxldENvbm5lY3Rpb24sXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIGlzQ29ubmVjdCxcbiAgICAgICAgICAgIG1pbnROZnQsXG4gICAgICAgICAgICBnZXRjaFNpbmdsZU5mdCxcbiAgICAgICAgICAgIGdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZCxcbiAgICAgICAgICAgIHNldE5hbWUsXG4gICAgICAgICAgICBzZXREZXNjLFxuICAgICAgICAgICAgc2V0SW1hZ2VcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRXZWIzIiwiUmV2aXNlIiwiYXhpb3MiLCJEYXRhQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiaXNDb25uZWN0Iiwic2V0SXNDb25uZWN0IiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIkFVVEhfVE9LRU4iLCJyZXZpc2UiLCJhdXRoIiwibWludE5mdCIsIl9uYW1lIiwiX2ltYWdlIiwiX3Rva2VuSWQiLCJfZGVzYyIsInByb3BzIiwidG9rZW5EYXRhIiwicHJvcGVydGllcyIsIm5ld05GVCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZE5GVCIsImdldGNoU2luZ2xlTmZ0IiwibmZ0IiwiZmV0Y2hORlQiLCJnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQiLCJuZnRzIiwiZmV0Y2hORlRzIiwic2V0UHJvcGVydGllcyIsIm5mdElkIiwicHJvcCIsInJlcyIsInVwZGF0ZU5GVCIsInNldFByb3BlcnR5Iiwic2V0TmFtZSIsInNhdmUiLCJzZXREZXNjIiwic2V0RGVzY3JpcHRpb24iLCJzZXRJbWFnZSIsIl9pbWdVcmwiLCJ3YWxsZXRDb25uZWN0aW9uIiwid2ViMyIsImFjY3MiLCJldGgiLCJnZXRBY2NvdW50cyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});