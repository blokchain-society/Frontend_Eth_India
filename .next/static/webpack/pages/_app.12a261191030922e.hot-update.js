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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web3 */ \"./utils/web3.js\");\n/* harmony import */ var revise_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! revise-sdk */ \"./node_modules/revise-sdk/dist/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import { toast } from 'react-toastify';\n\nvar DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var AUTH_TOKEN = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZTkyNmUwLTA0MTgtNGFmYi05Yjg1LTVkODVlZDUxYTljMCIsImtleSI6InhoMG1mODRtIiwiaWF0IjoxNjcwMDU2NjI0fQ.H67LRci5ra0JjalrKI0UMb94EGOoSY308x1xNkNw33w\";\n    var revise = new revise_sdk__WEBPACK_IMPORTED_MODULE_3__.Revise({\n        auth: AUTH_TOKEN\n    });\n    // const addCollection=async(collectionName,collectionURI)=>{\n    //     try {\n    //         let res= await revise.addCollection(collectionName,collectionURI);\n    //         console.log(res);\n    //     } catch (error) {\n    //         console.log(error)\n    //     }\n    // }\n    var mintNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(_name, _image, _tokenId, _desc, props) {\n            var tokenData, properties, newNFT, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        tokenData = {\n                            \"name\": _name,\n                            \"image\": _image,\n                            \"tokenId\": _tokenId,\n                            \"description?\": _desc\n                        };\n                        properties = props;\n                        console.log(tokenData);\n                        console.log(properties);\n                        return [\n                            4,\n                            revise.addNFT(tokenData, properties)\n                        ];\n                    case 1:\n                        newNFT = _state.sent();\n                        console.log(newNFT);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function mintNft(_name, _image, _tokenId, _desc, props) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getchSingleNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nft, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFT(\"fc451d76-20de-48e6-8300-c793ade33430\")\n                        ];\n                    case 1:\n                        nft = _state.sent();\n                        console.log(nft);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getchSingleNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAllNftsByCollectionId = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var nfts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            revise.fetchNFTs(\"collection-id\")\n                        ];\n                    case 1:\n                        nfts = _state.sent();\n                        console.log(nfts);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAllNftsByCollectionId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setName = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _name) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setName(_name).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setName(nftId, _name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setDesc = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _desc) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setDescription(_desc).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setDesc(nftId, _desc) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setImage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(nftId, _imgUrl) {\n            var res, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            revise.updateNFT(nftId)\n                        ];\n                    case 1:\n                        return [\n                            4,\n                            _state.sent().setImage(_imgUrl).save()\n                        ];\n                    case 2:\n                        res = _state.sent();\n                        console.log(res);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function setImage(nftId, _imgUrl) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var walletConnection = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var web3, accs, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setIsConnect(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            (0,_web3__WEBPACK_IMPORTED_MODULE_2__.getWeb3)()\n                        ];\n                    case 2:\n                        web3 = _state.sent();\n                        return [\n                            4,\n                            web3.eth.getAccounts()\n                        ];\n                    case 3:\n                        accs = _state.sent();\n                        console.log(accs);\n                        setCurrentAccount(accs[0]);\n                        setIsConnect(false);\n                        console.log(currentAccount);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.log(error);\n                        setIsConnect(false);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function walletConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // getchSingleNft();\n    // getAllNftsByCollectionId();\n    // addCollection(\"GTA-5\",\"https://testnets.opensea.io/collection/metaborrow\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            walletConnection: walletConnection,\n            currentAccount: currentAccount,\n            isConnect: isConnect,\n            mintNft: mintNft,\n            getchSingleNft: getchSingleNft,\n            getAllNftsByCollectionId: getAllNftsByCollectionId,\n            setName: setName,\n            setDesc: setDesc,\n            setImage: setImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gourab337/Desktop/Frontend_Eth_India/utils/Context.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContextProvider, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87WUFDM0VhLGNBQWMsRUFBZEEsY0FBYztZQUNkRyx3QkFBd0IsRUFBeEJBLHdCQUF3QjtZQUN4QkcsT0FBTyxFQUFQQSxPQUFPO1lBQ1BLLE9BQU8sRUFBUEEsT0FBTztZQUNQRSxRQUFRLEVBQVJBLFFBQVE7U0FBQztrQkFDUjlCLFFBQVE7Ozs7O2FBQ1UsQ0FDeEI7QUFDSCxDQUFDO0dBakhLRCxlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUFtSHJCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0NvbnRleHQuanM/MDU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRXZWIzIH0gZnJvbSAnLi93ZWIzJztcbmltcG9ydCB7UmV2aXNlfSBmcm9tICdyZXZpc2Utc2RrJztcbi8vIGltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dD0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBcblxuY29uc3QgQVVUSF9UT0tFTiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpjM1pUa3lObVV3TFRBME1UZ3ROR0ZtWWkwNVlqZzFMVFZrT0RWbFpEVXhZVGxqTUNJc0ltdGxlU0k2SW5ob01HMW1PRFJ0SWl3aWFXRjBJam94Tmpjd01EVTJOakkwZlEuSDY3TFJjaTVyYTBKamFscktJMFVNYjk0RUdPb1NZMzA4eDF4TmtOdzMzd1wiO1xuXG5jb25zdCByZXZpc2UgPSBuZXcgUmV2aXNlKHthdXRoOiBBVVRIX1RPS0VOfSk7XG4gICAgLy8gY29uc3QgYWRkQ29sbGVjdGlvbj1hc3luYyhjb2xsZWN0aW9uTmFtZSxjb2xsZWN0aW9uVVJJKT0+e1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgbGV0IHJlcz0gYXdhaXQgcmV2aXNlLmFkZENvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUsY29sbGVjdGlvblVSSSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gIGNvbnN0IG1pbnROZnQgPSBhc3luYyhfbmFtZSxfaW1hZ2UsX3Rva2VuSWQsX2Rlc2MscHJvcHMpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW5EYXRhID17XG4gICAgICAgICAgICBcIm5hbWVcIjogX25hbWUsXG4gICAgICAgICAgICBcImltYWdlXCI6IF9pbWFnZSxcbiAgICAgICAgICAgIFwidG9rZW5JZFwiOl90b2tlbklkLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvbj9cIjogX2Rlc2NcbiAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzPXByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbkRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgY29uc3QgbmV3TkZUID0gYXdhaXQgcmV2aXNlLmFkZE5GVCh0b2tlbkRhdGEsIHByb3BlcnRpZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdORlQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxuICB9XG5cbiAgY29uc3QgZ2V0Y2hTaW5nbGVOZnQ9YXN5bmMgKCk9PntcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBuZnQgPSBhd2FpdCByZXZpc2UuZmV0Y2hORlQoJ2ZjNDUxZDc2LTIwZGUtNDhlNi04MzAwLWM3OTNhZGUzMzQzMCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZnQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG4gIGNvbnN0IGdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZD1hc3luYyAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBuZnRzID0gYXdhaXQgcmV2aXNlLmZldGNoTkZUcygnY29sbGVjdGlvbi1pZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZnRzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuICBjb25zdCBzZXROYW1lPWFzeW5jKG5mdElkLF9uYW1lKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpKS5zZXROYW1lKF9uYW1lKS5zYXZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXREZXNjPWFzeW5jKG5mdElkLF9kZXNjKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgKGF3YWl0IHJldmlzZS51cGRhdGVORlQobmZ0SWQpKS5zZXREZXNjcmlwdGlvbihfZGVzYykuc2F2ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0SW1hZ2U9YXN5bmMobmZ0SWQsX2ltZ1VybCk9PntcbiAgICB0cnkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IChhd2FpdCByZXZpc2UudXBkYXRlTkZUKG5mdElkKSkuc2V0SW1hZ2UoX2ltZ1VybCkuc2F2ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG4gICBcbiAgICBjb25zdCB3YWxsZXRDb25uZWN0aW9uPWFzeW5jKCk9PntcbiAgICAgICAgc2V0SXNDb25uZWN0KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7XG4gICAgICAgICAgICBsZXQgYWNjcz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY3MpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjc1swXSk7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBzZXRJc0Nvbm5lY3QoZmFsc2UpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIC8vIGdldGNoU2luZ2xlTmZ0KCk7XG4gICAgICAgIC8vIGdldEFsbE5mdHNCeUNvbGxlY3Rpb25JZCgpO1xuICAgICAgICAvLyBhZGRDb2xsZWN0aW9uKFwiR1RBLTVcIixcImh0dHBzOi8vdGVzdG5ldHMub3BlbnNlYS5pby9jb2xsZWN0aW9uL21ldGFib3Jyb3dcIik7XG4gICAgfSxbXSlcbiAgIFxuICByZXR1cm4gKFxuICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3dhbGxldENvbm5lY3Rpb24sY3VycmVudEFjY291bnQsaXNDb25uZWN0LG1pbnROZnQsXG4gICAgICAgIGdldGNoU2luZ2xlTmZ0LFxuICAgICAgICBnZXRBbGxOZnRzQnlDb2xsZWN0aW9uSWQsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIHNldERlc2MsXG4gICAgICAgIHNldEltYWdlfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFdlYjMiLCJSZXZpc2UiLCJheGlvcyIsIkRhdGFDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJBVVRIX1RPS0VOIiwicmV2aXNlIiwiYXV0aCIsIm1pbnROZnQiLCJfbmFtZSIsIl9pbWFnZSIsIl90b2tlbklkIiwiX2Rlc2MiLCJwcm9wcyIsInRva2VuRGF0YSIsInByb3BlcnRpZXMiLCJuZXdORlQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRORlQiLCJnZXRjaFNpbmdsZU5mdCIsIm5mdCIsImZldGNoTkZUIiwiZ2V0QWxsTmZ0c0J5Q29sbGVjdGlvbklkIiwibmZ0cyIsImZldGNoTkZUcyIsInNldE5hbWUiLCJuZnRJZCIsInJlcyIsInVwZGF0ZU5GVCIsInNhdmUiLCJzZXREZXNjIiwic2V0RGVzY3JpcHRpb24iLCJzZXRJbWFnZSIsIl9pbWdVcmwiLCJ3YWxsZXRDb25uZWN0aW9uIiwid2ViMyIsImFjY3MiLCJzZXRJc0Nvbm5lY3QiLCJldGgiLCJnZXRBY2NvdW50cyIsInNldEN1cnJlbnRBY2NvdW50IiwiY3VycmVudEFjY291bnQiLCJQcm92aWRlciIsInZhbHVlIiwiaXNDb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/Context.js\n"));

/***/ })

});