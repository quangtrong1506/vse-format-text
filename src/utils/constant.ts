import { QuickPickItem } from 'vscode';

export interface SelectType extends QuickPickItem {
    id: string;
}

export enum SelectIds {
    camelcase = 'camelcase',
    pascalCase = 'pascalCase',
    constant = 'constant',
    underscore = 'underscore',
    dash = 'dash',
    to_text = 'to_text',
    lowercase = 'lowercase',
    uppercase = 'uppercase',
    capitalize = 'capitalize',
    remove_vietnamese_characters = 'remove_vietnamese_characters',
    clear_double_whitespace = 'clear_double_whitespace',
    html_to_jsx = 'html_to_jsx',
    require_to_import = 'require_to_import',
    import_to_require = 'import_to_require',
}

export const SELECTS: SelectType[] = [
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
    {
        id: SelectIds.require_to_import,
        label: 'Require to Import',
    },
    {
        id: SelectIds.import_to_require,
        label: 'Import to Require',
    },
];
