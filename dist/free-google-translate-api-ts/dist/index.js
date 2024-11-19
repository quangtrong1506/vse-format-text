"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translate = void 0;
const Translate = (text, sourceLanguage, translateLanguage) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const result = {
        text,
        result: '',
        sourceLanguage: sourceLanguage,
        translateLanguage: translateLanguage,
    };
    try {
        const res = yield fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${translateLanguage}&dt=t&q=${text}`, {
            method: 'GET',
            redirect: 'follow',
        });
        if (res.ok) {
            const data = yield res.json();
            result.result = ((_b = (_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b[0]) || '';
        }
        return result;
    }
    catch (error) {
        result.errors = {
            message: 'Error: ' + (error === null || error === void 0 ? void 0 : error.message),
            code: -1,
        };
        return result;
    }
});
exports.Translate = Translate;
