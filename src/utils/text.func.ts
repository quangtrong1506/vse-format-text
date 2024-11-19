import { htmlToJsx } from '../../dist/html-to-jsx-transform/dist';

export const removeVietnameseCharacters: (text: string, delete_special_characters?: boolean) => string = (
    str,
    delete_special_characters = false
) => {
    // remove accents
    var from =
            'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÙÚỦŨỤƯỪỨỬỮỰÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÌÍỈĨỊÄËÏÎÖÜÛÑÇÝỲỸỴỶ',
        to =
            'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDUUUUUUUUUUUOOOOOOOOOOOOOOOOOIIIIIAEIIOUUNCYYYYY';
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(RegExp(from[i], 'gi'), to[i]);
    }
    if (delete_special_characters)
        str = str
            .trim()
            .replace(/[^A-Za-z0-9\s]/g, '-')
            .replace(/-+/g, '-');
    return str;
};

export const variableToString = (text: string): string => {
    return removeVietnameseCharacters(text)
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[_\-]/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .trim();
};

export const cleanWhiteSpace = (text: string) => {
    let textCopy = text;
    while (textCopy.match(/  /)) {
        textCopy = textCopy.replaceAll('  ', ' ').trim();
    }
    return text;
};

export const toUpperCase = (text: string): string => {
    return text.toUpperCase();
};

export const toLowerCase = (text: string): string => {
    return text.toLowerCase();
};

export const toCapitalized = (text: string): string => {
    return text
        .split(' ')
        .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(' ');
};

export const convertImport = (text: string, type: 'require_to_import' | 'import_to_require') => {
    //Require to Import
    let result = '';
    if (type === 'import_to_require') {
        let stringClone = cleanWhiteSpace(text.trim()).replace(';', '').replaceAll('"', "'");
        let arrS = stringClone.split(' ');
        if (arrS[3] && arrS[3].match(/\./))
            result = `import {${arrS[3].split('.')[1]}} from '${arrS[3].split("'")[1]}';`;
        else if (arrS[0] && arrS[1] && arrS[2] && arrS[3]) {
            result = `import ${arrS[1]} from '${arrS[3].split("'")[1]}';`;
        } else if (arrS.length == 1) {
            result = `import '${arrS[0].split("'")[1]}';`;
        }
    } else if (type === 'require_to_import') {
        let stringClone = cleanWhiteSpace(text.trim()).replace(';', '').replaceAll('"', "'");
        let arrS = stringClone.split(' ');
        if (arrS[3] && arrS[3].match(/\./))
            result = `const {${arrS[3].split('.')[1]}} = require('${arrS[3].split("'")[1]}');`;
        else if (arrS[0] && arrS[1] && arrS[2] && arrS[3]) {
            result = `const ${arrS[1]} = require('${arrS[3].split("'")[1]}');`;
        } else if (arrS.length == 2) {
            result = `require(${arrS[1]});`;
        }
    }
    return result;
};

export const toCamelCase = (text: string): string => {
    const cleaned = variableToString(text);
    return cleaned
        .split(' ')
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('');
};

// Hàm chuyển sang PascalCase
export const toPascalCase = (text: string): string => {
    const cleaned = variableToString(text);
    return cleaned
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
};

// Hàm chuyển sang snake_case
export const toSnakeCase = (text: string): string => {
    const cleaned = variableToString(text);
    return cleaned.split(' ').join('_');
};

// Hàm chuyển sang CONSTANT_CASE
export const toConstantCase = (text: string): string => {
    const cleaned = variableToString(text);
    return cleaned.split(' ').join('_').toUpperCase();
};

// Hàm chuyển sang kebab-case
export const toKebabCase = (text: string): string => {
    const cleaned = variableToString(text);
    return cleaned.split(' ').join('-');
};

export const toJSX = (text: string): string => {
    return htmlToJsx(text);
};

export const addConsole = (text: string) => {
    return `console.log('${text}');`;
};
