"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertAttributes = void 0;
const parser_1 = require("@babel/parser");
const types_1 = require("@babel/types");
const style_to_object_1 = __importDefault(require("style-to-object"));
const attributes_1 = require("./attributes");
function convertAttributes(attributes) {
    return attributes.map(({ name: attributeName, value: attributeValue }) => {
        if (attributeName === "style") {
            return createJSXAttribute("style", convertStyleToObjectExpression(attributeValue));
        }
        for (const [htmlName, jsxName] of attributes_1.renamedAttributes) {
            if (htmlName === attributeName) {
                return createJSXAttribute(jsxName, attributeValue);
            }
        }
        for (const jsxAttribute of attributes_1.eventHandlerAttributes) {
            if (attributeName === jsxAttribute.toLowerCase()) {
                return functionizeAttribute(jsxAttribute, attributeValue);
            }
        }
        for (const jsxAttribute of attributes_1.svgCoerceToBooleanAttributes) {
            if (attributeName === jsxAttribute) {
                return booleanizeAttribute(jsxAttribute, attributeValue);
            }
        }
        for (const jsxAttribute of attributes_1.coerceToBooleanAttributes) {
            if (attributeName === jsxAttribute.toLowerCase()) {
                return booleanizeAttribute(jsxAttribute, attributeValue, new Set(["checked", "disabled", "selected", "value"]));
            }
        }
        for (const jsxAttribute of attributes_1.numberAttributes) {
            if (attributeName === jsxAttribute.toLowerCase()) {
                const numberValue = Number(attributeValue);
                if (Number.isFinite(numberValue)) {
                    return createJSXAttribute(jsxAttribute, numberValue);
                }
                else {
                    return createJSXAttribute(jsxAttribute, attributeValue);
                }
            }
        }
        for (const [jsxAttribute, isNumeric] of attributes_1.svgCamelizedAttributes) {
            if (attributeName === jsxAttribute) {
                const camelizedName = camelize(attributeName);
                if (isNumeric) {
                    const numberValue = Number(attributeValue);
                    if (Number.isFinite(numberValue)) {
                        return createJSXAttribute(camelizedName, numberValue);
                    }
                }
                return createJSXAttribute(camelizedName, attributeValue);
            }
        }
        for (const jsxAttribute of attributes_1.lowercasedAttributes) {
            if (attributeName === jsxAttribute.toLowerCase()) {
                return createJSXAttribute(jsxAttribute, attributeValue);
            }
        }
        return createJSXAttribute(attributeName, attributeValue);
    });
}
exports.convertAttributes = convertAttributes;
// Matches a px value, e.g. `40px`
const MATCH_PX_VALUE = /^(\d+)px$/;
function convertStyleToObjectExpression(style) {
    const properties = [];
    (0, style_to_object_1.default)(style, (name, value) => {
        // Don't remove `px` where this changes the meaning of the attribute value
        const canStripPx = !attributes_1.styleDontStripPx.includes(name.toLowerCase());
        const pxValueMatch = value.match(MATCH_PX_VALUE);
        properties.push((0, types_1.objectProperty)((0, types_1.identifier)(camelize(name)), pxValueMatch !== null && canStripPx
            ? (0, types_1.numericLiteral)(Number(pxValueMatch[1]))
            : (0, types_1.stringLiteral)(value)));
    });
    return (0, types_1.objectExpression)(properties);
}
const CAMELIZE = /[\-\:]([a-z])/g;
const capitalize = (token) => token[1].toUpperCase();
/**
 * Converts kebab-case or colon:case to camelCase
 */
function camelize(string) {
    return string.replace(CAMELIZE, capitalize);
}
/**
 * @param trueLiterals A list of values that should preserve the
 *   jsxExpressionContainer when true, e.g. checked={true} insted of just
 *   checked.
 */
function booleanizeAttribute(name, value, trueLiterals) {
    if (value === "" || value === "true" || value === name.toLowerCase()) {
        if (trueLiterals?.has(name)) {
            return createJSXAttribute(name, (0, types_1.booleanLiteral)(true));
        }
        return createJSXAttribute(name, null);
    }
    else if (value === "false") {
        return createJSXAttribute(name, (0, types_1.booleanLiteral)(false));
    }
    return createJSXAttribute(name, value);
}
// Matches function calls in an event handler attribute, e.g.
// onclick="myFunction()".
const EMPTY_FUNCTION_CALL = /^\s*([\p{L}_\$][\p{L}_\$]*)\(\)\s*$/u;
function functionizeAttribute(attributeName, attributeValue) {
    const functionCallMatch = attributeValue.match(EMPTY_FUNCTION_CALL);
    if (functionCallMatch !== null) {
        return createJSXAttribute(attributeName, (0, types_1.identifier)(functionCallMatch[1]));
    }
    try {
        const innerCode = (0, parser_1.parse)(attributeValue);
        return createJSXAttribute(attributeName, (0, types_1.arrowFunctionExpression)([(0, types_1.identifier)("event")], (0, types_1.blockStatement)(innerCode.program.body)));
    }
    catch {
        const codeTemplateLiteral = (0, types_1.expressionStatement)((0, types_1.templateLiteral)([(0, types_1.templateElement)({ raw: attributeValue })], []));
        (0, types_1.addComment)(codeTemplateLiteral, "leading", " TODO: Fix event handler code", true);
        return createJSXAttribute(attributeName, (0, types_1.arrowFunctionExpression)([(0, types_1.identifier)("event")], (0, types_1.blockStatement)([codeTemplateLiteral])));
    }
}
function createJSXAttribute(name, value) {
    if (value === null) {
        return (0, types_1.jsxAttribute)((0, types_1.jsxIdentifier)(name), null);
    }
    switch (typeof value) {
        case "string":
            return (0, types_1.jsxAttribute)((0, types_1.jsxIdentifier)(name), (0, types_1.stringLiteral)(value));
        case "number":
            return (0, types_1.jsxAttribute)((0, types_1.jsxIdentifier)(name), (0, types_1.jsxExpressionContainer)((0, types_1.numericLiteral)(value)));
        default:
            return (0, types_1.jsxAttribute)((0, types_1.jsxIdentifier)(name), (0, types_1.jsxExpressionContainer)(value));
    }
}
