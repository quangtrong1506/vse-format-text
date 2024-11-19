import * as vs from 'vscode';
import { SELECTS, SelectIds, SelectType } from './constant';
import { getTextAtSelections, insertTextAtSelections } from './editor';
import {
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
        handle(item.id);
        QuickPick.dispose();
    });
};

const handle = (id: string) => {
    const text = getTextAtSelections()?.[0];
    if (!text) return;
    if (id === SelectIds.camelcase) insertTextAtSelections(toCamelCase(text));
    if (id === SelectIds.capitalize) insertTextAtSelections(toCapitalized(text));
    if (id === SelectIds.clear_double_whitespace) insertTextAtSelections(cleanWhiteSpace(text));
    if (id === SelectIds.dash) insertTextAtSelections(toKebabCase(text));
    if (id === SelectIds.constant) insertTextAtSelections(toConstantCase(text));
    if (id === SelectIds.html_to_jsx) insertTextAtSelections(toJSX(text));
    if (id === SelectIds.import_to_require) insertTextAtSelections(convertImport(text, 'import_to_require'));
    if (id === SelectIds.lowercase) insertTextAtSelections(toLowerCase(text));
    if (id === SelectIds.pascalCase) insertTextAtSelections(toPascalCase(text));
    if (id === SelectIds.remove_vietnamese_characters) insertTextAtSelections(removeVietnameseCharacters(text));
    if (id === SelectIds.require_to_import) insertTextAtSelections(convertImport(text, 'require_to_import'));
    if (id === SelectIds.to_text) insertTextAtSelections(variableToString(text));
    if (id === SelectIds.underscore) insertTextAtSelections(toSnakeCase(text));
    if (id === SelectIds.uppercase) insertTextAtSelections(toUpperCase(text));
};
