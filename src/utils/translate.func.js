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
exports.translateAndInsert = void 0;
const vs = require("vscode");
const dist_1 = require("../../dist/free-google-translate-api-ts/dist");
const constant_1 = require("../../dist/free-google-translate-api-ts/dist/constant");
const editor_1 = require("./editor");
// giới hạn 1 api / giây nên phải gộp lại
const translateAndInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = (0, editor_1.getTextAtSelections)();
    if (!data)
        return;
    const sourceLanguageQP = vs.window.createQuickPick();
    sourceLanguageQP.placeholder = 'Select Source Language';
    sourceLanguageQP.items = constant_1.SOURCE_LANGUAGE;
    sourceLanguageQP.show();
    sourceLanguageQP.onDidChangeSelection((item) => {
        sourceLanguageQP.dispose();
        const sl = item[0];
        const targetLanguageQP = vs.window.createQuickPick();
        targetLanguageQP.placeholder = 'Select Translate Language';
        targetLanguageQP.items = constant_1.LANGUAGES;
        targetLanguageQP.show();
        targetLanguageQP.onDidChangeSelection((item) => __awaiter(void 0, void 0, void 0, function* () {
            const tl = item[0];
            targetLanguageQP.dispose();
            const textGroup = data.join('<*>');
            const translatedData = yield (0, dist_1.Translate)(textGroup !== null && textGroup !== void 0 ? textGroup : '', sl.value, tl.value);
            if (translatedData.result) {
                const textResult = translatedData.result;
                (0, editor_1.insertTextAtSelections)(textResult.split('<*>'));
            }
        }));
    });
});
exports.translateAndInsert = translateAndInsert;
//# sourceMappingURL=translate.func.js.map