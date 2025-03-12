"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSelect = exports.openSelect = void 0;
const vs = require("vscode");
const constant_1 = require("./constant");
const editor_1 = require("./editor");
const text_func_1 = require("./text.func");
const openSelect = () => {
    const QuickPick = vs.window.createQuickPick();
    QuickPick.items = constant_1.SELECTS;
    QuickPick.show();
    QuickPick.onDidChangeSelection((select) => {
        const item = select[0];
        (0, exports.handleSelect)(item.id);
        QuickPick.dispose();
    });
};
exports.openSelect = openSelect;
const handleSelect = (id) => {
    const data = (0, editor_1.getTextAtSelections)();
    if (!data)
        return;
    if (id === constant_1.SelectIds.add_log)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.addConsole)(text)));
    if (id === constant_1.SelectIds.camelcase)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toCamelCase)(text)));
    if (id === constant_1.SelectIds.capitalize)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toCapitalized)(text)));
    if (id === constant_1.SelectIds.clear_double_whitespace)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.cleanWhiteSpace)(text)));
    if (id === constant_1.SelectIds.dash)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.cleanWhiteSpace)(text)));
    if (id === constant_1.SelectIds.constant)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toConstantCase)(text)));
    if (id === constant_1.SelectIds.html_to_jsx)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toJSX)(text)));
    if (id === constant_1.SelectIds.import_to_require)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.convertImport)(text, 'import_to_require')));
    if (id === constant_1.SelectIds.lowercase)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toLowerCase)(text)));
    if (id === constant_1.SelectIds.pascalCase)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toPascalCase)(text)));
    if (id === constant_1.SelectIds.remove_vietnamese_characters)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.removeVietnameseCharacters)(text)));
    if (id === constant_1.SelectIds.require_to_import)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.convertImport)(text, 'require_to_import')));
    if (id === constant_1.SelectIds.to_text)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.variableToString)(text)));
    if (id === constant_1.SelectIds.underscore)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toSnakeCase)(text)));
    if (id === constant_1.SelectIds.uppercase)
        (0, editor_1.insertTextAtSelections)(data.map((text) => (0, text_func_1.toUpperCase)(text)));
};
exports.handleSelect = handleSelect;
//# sourceMappingURL=select.func.js.map