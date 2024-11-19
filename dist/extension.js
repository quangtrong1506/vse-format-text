/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const constant_1 = __webpack_require__(2);
// Hàm kích hoạt extension
const activate = (context) => {
    // Đăng ký một lệnh
    const disposable = vscode.commands.registerCommand('my-extension.helloWorld', () => __awaiter(void 0, void 0, void 0, function* () {
        const qp = vscode.window.createQuickPick();
        qp.items = constant_1.SELECTS;
        qp.show();
    }));
    context.subscriptions.push(disposable);
};
exports.activate = activate;
// Hàm hủy kích hoạt extension
const deactivate = () => { };
exports.deactivate = deactivate;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SELECTS = void 0;
exports.SELECTS = [
    {
        label: 'camelCase',
        picked: true,
    },
    {
        label: 'PascalCase',
    },
    {
        label: 'CONSTANT',
    },
    {
        label: 'underscore',
    },
    {
        label: 'Dash',
    },
    {
        label: 'To Text',
    },
    {
        label: 'Lowercase',
    },
    {
        label: 'Uppercase',
    },
    {
        label: 'Capitalize',
    },
    {
        label: 'Remove Vietnamese characters',
    },
    {
        label: 'Clear double whitespace',
    },
    {
        label: 'HTML to JSX',
    },
    {
        label: 'Require to Import',
    },
    {
        label: 'Import to Require',
    },
];


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map