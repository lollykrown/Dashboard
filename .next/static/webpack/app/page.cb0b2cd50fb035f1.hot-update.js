"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./utils/tabs.js":
/*!***********************!*\
  !*** ./utils/tabs.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tab: function() { return /* binding */ Tab; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Tabs = (param)=>{\n    let { children } = param;\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(children[0].props.label);\n    const handleClick = (e, newActiveTab)=>{\n        e.preventDefault();\n        setActiveTab(newActiveTab);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b border-gray-300\",\n                children: children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(activeTab === child.props.label ? \"border-b-2 border-btncolor-main\" : \"\", \" flex-1 text-slate-500 font-medium py-2\"),\n                        onClick: (e)=>handleClick(e, child.props.label),\n                        children: child.props.label\n                    }, child.props.label, false, {\n                        fileName: \"/Users/lollykrown/Documents/GitHub/Dashboard/utils/tabs.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/lollykrown/Documents/GitHub/Dashboard/utils/tabs.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\",\n                children: children.map((child)=>{\n                    if (child.props.label === activeTab) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: child.props.children\n                        }, child.props.label, false, {\n                            fileName: \"/Users/lollykrown/Documents/GitHub/Dashboard/utils/tabs.js\",\n                            lineNumber: 29,\n                            columnNumber: 20\n                        }, undefined);\n                    }\n                    return null;\n                })\n            }, void 0, false, {\n                fileName: \"/Users/lollykrown/Documents/GitHub/Dashboard/utils/tabs.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lollykrown/Documents/GitHub/Dashboard/utils/tabs.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tabs, \"f0ubdKYUaCPZJDIT/JMACRMEHzQ=\");\n_c = Tabs;\nconst Tab = (param)=>{\n    let { label, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        label: label,\n        className: \"hidden\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/lollykrown/Documents/GitHub/Dashboard/utils/tabs.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Tab;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL3RhYnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxPQUFPO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN4QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUNFLFFBQVEsQ0FBQyxFQUFFLENBQUNHLEtBQUssQ0FBQ0MsS0FBSztJQUVsRSxNQUFNQyxjQUFjLENBQUNDLEdBQUdDO1FBQ3RCRCxFQUFFRSxjQUFjO1FBQ2hCTixhQUFhSztJQUNmO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlYsU0FBU1csR0FBRyxDQUFDQyxDQUFBQSxzQkFDWiw4REFBQ0M7d0JBRUNILFdBQVcsR0FFVixPQURDVCxjQUFjVyxNQUFNVCxLQUFLLENBQUNDLEtBQUssR0FBRyxvQ0FBb0MsSUFDdkU7d0JBQ0RVLFNBQVNSLENBQUFBLElBQUtELFlBQVlDLEdBQUdNLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSztrQ0FFN0NRLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSzt1QkFOYlEsTUFBTVQsS0FBSyxDQUFDQyxLQUFLOzs7Ozs7Ozs7OzBCQVU1Qiw4REFBQ0s7Z0JBQUlDLFdBQVU7MEJBQ1pWLFNBQVNXLEdBQUcsQ0FBQ0MsQ0FBQUE7b0JBQ1osSUFBSUEsTUFBTVQsS0FBSyxDQUFDQyxLQUFLLEtBQUtILFdBQVc7d0JBQ25DLHFCQUFPLDhEQUFDUTtzQ0FBNkJHLE1BQU1ULEtBQUssQ0FBQ0gsUUFBUTsyQkFBeENZLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSzs7Ozs7b0JBQ3BDO29CQUNBLE9BQU87Z0JBQ1Q7Ozs7Ozs7Ozs7OztBQUlSO0dBakNNTDtLQUFBQTtBQW1DTixNQUFNZ0IsTUFBTTtRQUFDLEVBQUVYLEtBQUssRUFBRUosUUFBUSxFQUFFO0lBQzlCLHFCQUNFLDhEQUFDUztRQUFJTCxPQUFPQTtRQUFPTSxXQUFVO2tCQUMxQlY7Ozs7OztBQUdQO01BTk1lO0FBT2UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdGFicy5qcz8yYjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGFicyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKGNoaWxkcmVuWzBdLnByb3BzLmxhYmVsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBuZXdBY3RpdmVUYWIpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0QWN0aXZlVGFiKG5ld0FjdGl2ZVRhYik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtjaGlsZC5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gY2hpbGQucHJvcHMubGFiZWwgPyAnYm9yZGVyLWItMiBib3JkZXItYnRuY29sb3ItbWFpbicgOiAnJ1xuICAgICAgICAgICAgfSBmbGV4LTEgdGV4dC1zbGF0ZS01MDAgZm9udC1tZWRpdW0gcHktMmB9XG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUsIGNoaWxkLnByb3BzLmxhYmVsKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGQucHJvcHMubGFiZWx9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cbiAgICAgICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkLnByb3BzLmxhYmVsID09PSBhY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17Y2hpbGQucHJvcHMubGFiZWx9PntjaGlsZC5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVGFiID0gKHsgbGFiZWwsIGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGxhYmVsPXtsYWJlbH0gY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IHsgVGFicywgVGFiIH07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUYWJzIiwiY2hpbGRyZW4iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJwcm9wcyIsImxhYmVsIiwiaGFuZGxlQ2xpY2siLCJlIiwibmV3QWN0aXZlVGFiIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJjaGlsZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJUYWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/tabs.js\n"));

/***/ })

});