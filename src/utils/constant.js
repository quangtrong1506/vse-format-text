"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTS = exports.SelectIds = void 0;
var SelectIds;
(function (SelectIds) {
    SelectIds["camelcase"] = "camelcase";
    SelectIds["pascalCase"] = "pascalCase";
    SelectIds["constant"] = "constant";
    SelectIds["underscore"] = "underscore";
    SelectIds["dash"] = "dash";
    SelectIds["to_text"] = "to_text";
    SelectIds["lowercase"] = "lowercase";
    SelectIds["uppercase"] = "uppercase";
    SelectIds["capitalize"] = "capitalize";
    SelectIds["remove_vietnamese_characters"] = "remove_vietnamese_characters";
    SelectIds["clear_double_whitespace"] = "clear_double_whitespace";
    SelectIds["html_to_jsx"] = "html_to_jsx";
    SelectIds["require_to_import"] = "require_to_import";
    SelectIds["import_to_require"] = "import_to_require";
    SelectIds["add_log"] = "add_log";
})(SelectIds || (exports.SelectIds = SelectIds = {}));
exports.SELECTS = [
    {
        id: SelectIds.camelcase,
        label: 'camelCase',
        picked: true,
    },
    {
        id: SelectIds.pascalCase,
        label: 'PascalCase',
    },
    {
        id: SelectIds.constant,
        label: 'CONSTANT',
    },
    {
        id: SelectIds.underscore,
        label: 'underscore',
    },
    {
        id: SelectIds.dash,
        label: 'Dash',
    },
    {
        id: SelectIds.to_text,
        label: 'To Text',
    },
    {
        id: SelectIds.lowercase,
        label: 'Lowercase',
    },
    {
        id: SelectIds.uppercase,
        label: 'Uppercase',
    },
    {
        id: SelectIds.capitalize,
        label: 'Capitalize',
    },
    {
        id: SelectIds.remove_vietnamese_characters,
        label: 'Remove Vietnamese characters',
    },
    {
        id: SelectIds.clear_double_whitespace,
        label: 'Clear double whitespace',
    },
    {
        id: SelectIds.html_to_jsx,
        label: 'HTML to JSX',
    },
    // {
    //     id: SelectIds.require_to_import,
    //     label: 'Require to Import',
    // },
    // {
    //     id: SelectIds.import_to_require,
    //     label: 'Import to Require',
    // },
];
//# sourceMappingURL=constant.js.map