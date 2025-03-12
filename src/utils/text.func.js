"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addConsole = exports.toJSX = exports.toKebabCase = exports.toConstantCase = exports.toSnakeCase = exports.toPascalCase = exports.toCamelCase = exports.convertImport = exports.toCapitalized = exports.toLowerCase = exports.toUpperCase = exports.cleanWhiteSpace = exports.variableToString = exports.removeVietnameseCharacters = void 0;
const dist_1 = require("../../dist/html-to-jsx-transform/dist");
const removeVietnameseCharacters = (str, delete_special_characters = false) => {
    // remove accents
    var from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÙÚỦŨỤƯỪỨỬỮỰÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÌÍỈĨỊÄËÏÎÖÜÛÑÇÝỲỸỴỶ', to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDUUUUUUUUUUUOOOOOOOOOOOOOOOOOIIIIIAEIIOUUNCYYYYY';
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
exports.removeVietnameseCharacters = removeVietnameseCharacters;
const variableToString = (text) => {
    return (0, exports.removeVietnameseCharacters)(text)
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[_\-]/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .trim();
};
exports.variableToString = variableToString;
const cleanWhiteSpace = (text) => {
    let textCopy = text;
    while (textCopy.match(/  /)) {
        textCopy = textCopy.replaceAll('  ', ' ').trim();
    }
    return text;
};
exports.cleanWhiteSpace = cleanWhiteSpace;
const toUpperCase = (text) => {
    return text.toUpperCase();
};
exports.toUpperCase = toUpperCase;
const toLowerCase = (text) => {
    return text.toLowerCase();
};
exports.toLowerCase = toLowerCase;
const toCapitalized = (text) => {
    return text
        .split(' ')
        .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(' ');
};
exports.toCapitalized = toCapitalized;
const convertImport = (text, type) => {
    //Require to Import
    let result = '';
    if (type === 'require_to_import') {
        let stringClone = (0, exports.cleanWhiteSpace)(text.trim()).replace(';', '').replaceAll('"', "'");
        let arrS = stringClone.split(' ');
        if (arrS[3] && arrS[3].match(/\./))
            result = `import {${arrS[3].split('.')[1]}} from '${arrS[3].split("'")[1]}';`;
        else if (arrS[0] && arrS[1] && arrS[2] && arrS[3]) {
            result = `import ${arrS[1]} from '${arrS[3].split("'")[1]}';`;
        }
        else if (arrS.length == 1) {
            result = `import '${arrS[0].split("'")[1]}';`;
        }
    }
    else if (type === 'import_to_require') {
        let stringClone = (0, exports.cleanWhiteSpace)(text.trim()).replace(';', '').replaceAll('"', "'");
        let arrS = stringClone.split(' ');
        if (arrS[3] && arrS[3].match(/\./))
            result = `const {${arrS[3].split('.')[1]}} = require('${arrS[3].split("'")[1]}');`;
        else if (arrS[0] && arrS[1] && arrS[2] && arrS[3]) {
            result = `const ${arrS[1]} = require('${arrS[3].split("'")[1]}');`;
        }
        else if (arrS.length == 2) {
            result = `require(${arrS[1]});`;
        }
    }
    return result;
};
exports.convertImport = convertImport;
const toCamelCase = (text) => {
    const cleaned = (0, exports.variableToString)(text);
    return cleaned
        .split(' ')
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('');
};
exports.toCamelCase = toCamelCase;
// Hàm chuyển sang PascalCase
const toPascalCase = (text) => {
    const cleaned = (0, exports.variableToString)(text);
    return cleaned
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
};
exports.toPascalCase = toPascalCase;
// Hàm chuyển sang snake_case
const toSnakeCase = (text) => {
    const cleaned = (0, exports.variableToString)(text);
    return cleaned.split(' ').join('_');
};
exports.toSnakeCase = toSnakeCase;
// Hàm chuyển sang CONSTANT_CASE
const toConstantCase = (text) => {
    const cleaned = (0, exports.variableToString)(text);
    return cleaned.split(' ').join('_').toUpperCase();
};
exports.toConstantCase = toConstantCase;
// Hàm chuyển sang kebab-case
const toKebabCase = (text) => {
    const cleaned = (0, exports.variableToString)(text);
    return cleaned.split(' ').join('-');
};
exports.toKebabCase = toKebabCase;
const toJSX = (text) => {
    return (0, dist_1.htmlToJsx)(text);
};
exports.toJSX = toJSX;
const addConsole = (text) => {
    return `console.log('${text}');`;
};
exports.addConsole = addConsole;
//# sourceMappingURL=text.func.js.map