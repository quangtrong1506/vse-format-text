"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTextAtSelections = exports.getTextAtSelections = void 0;
const vscode = require("vscode");
//Todo: Hàm lấy text tại tất cả các vị trí con trỏ
const getTextAtSelections = () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor)
        return null;
    const selections = editor.selections;
    // Lấy text trong từng vùng chọn
    const texts = selections.map((selection) => editor.document.getText(selection));
    return texts;
};
exports.getTextAtSelections = getTextAtSelections;
//Todo: Hàm chèn text tại tất cả các vị trí con trỏ
const insertTextAtSelections = (mutils) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('Không có editor nào đang hoạt động!');
        return;
    }
    editor.edit((editBuilder) => {
        const selections = editor.selections;
        selections.forEach((selection, index) => {
            var _a, _b;
            if (!selection.isEmpty) {
                editBuilder.replace(selection, (_a = mutils[index]) !== null && _a !== void 0 ? _a : ''); // Thay thế vùng chọn
            }
            else {
                editBuilder.insert(selection.start, (_b = mutils[index]) !== null && _b !== void 0 ? _b : ''); // Chèn text tại vị trí con trỏ
            }
        });
    });
};
exports.insertTextAtSelections = insertTextAtSelections;
//# sourceMappingURL=editor.js.map