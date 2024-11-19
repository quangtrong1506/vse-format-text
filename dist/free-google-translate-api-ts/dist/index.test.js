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
const index_1 = require("./index");
test('Translate Auto => Vietnamese', () => __awaiter(void 0, void 0, void 0, function* () {
    const translate = yield (0, index_1.Translate)('Hello', 'auto', 'vi');
    console.log(translate);
}));
test('Translate English => Vietnamese', () => {
    expect(() => __awaiter(void 0, void 0, void 0, function* () {
        const translate = yield (0, index_1.Translate)('Hello', 'en', 'vi');
        console.log(translate);
    }));
});
