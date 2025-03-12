import * as vs from 'vscode';
import { SELECTS, SelectIds, SelectType } from './constant';
import { getTextAtSelections, insertTextAtSelections } from './editor';
import {
    addConsole,
    cleanWhiteSpace,
    convertImport,
    removeVietnameseCharacters,
    toCamelCase,
    toCapitalized,
    toConstantCase,
    toJSX,
    toKebabCase,
    toLowerCase,
    toPascalCase,
    toSnakeCase,
    toUpperCase,
    variableToString,
} from './text.func';
export const openSelect = () => {
    const QuickPick = vs.window.createQuickPick();
    QuickPick.items = SELECTS;
    QuickPick.show();
    QuickPick.onDidChangeSelection((select) => {
        const item = select[0] as SelectType;
        handleSelect(item.id);
        QuickPick.dispose();
    });
};

export const handleSelect = (id: string) => {
    const data = getTextAtSelections();
    if (!data) return;
    if (id === SelectIds.add_log) insertTextAtSelections(data.map((text) => addConsole(text)));
    if (id === SelectIds.camelcase) insertTextAtSelections(data.map((text) => toCamelCase(text)));
    if (id === SelectIds.capitalize) insertTextAtSelections(data.map((text) => toCapitalized(text)));
    if (id === SelectIds.clear_double_whitespace) insertTextAtSelections(data.map((text) => cleanWhiteSpace(text)));
    if (id === SelectIds.dash) insertTextAtSelections(data.map((text) => toKebabCase(text)));
    if (id === SelectIds.constant) insertTextAtSelections(data.map((text) => toConstantCase(text)));
    if (id === SelectIds.html_to_jsx) insertTextAtSelections(data.map((text) => toJSX(text)));
    if (id === SelectIds.import_to_require)
        insertTextAtSelections(data.map((text) => convertImport(text, 'import_to_require')));
    if (id === SelectIds.lowercase) insertTextAtSelections(data.map((text) => toLowerCase(text)));
    if (id === SelectIds.pascalCase) insertTextAtSelections(data.map((text) => toPascalCase(text)));
    if (id === SelectIds.remove_vietnamese_characters)
        insertTextAtSelections(data.map((text) => removeVietnameseCharacters(text)));
    if (id === SelectIds.require_to_import)
        insertTextAtSelections(data.map((text) => convertImport(text, 'require_to_import')));
    if (id === SelectIds.to_text) insertTextAtSelections(data.map((text) => variableToString(text)));
    if (id === SelectIds.underscore) insertTextAtSelections(data.map((text) => toSnakeCase(text)));
    if (id === SelectIds.uppercase) insertTextAtSelections(data.map((text) => toUpperCase(text)));
};
