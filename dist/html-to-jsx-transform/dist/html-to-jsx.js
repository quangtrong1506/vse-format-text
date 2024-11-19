"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToJsx = void 0;
const generator_1 = __importDefault(require("@babel/generator"));
const types_1 = require("@babel/types");
const parse5_1 = require("parse5");
const html_entities_1 = require("html-entities");
const convert_attributes_1 = require("./convert-attributes");
const split_merge_tags_1 = require("./split-merge-tags");
function htmlToJsx(html) {
    const htmlAst = (0, parse5_1.parseFragment)(html.trim());
    let babelAst;
    if (htmlAst.childNodes.length === 1) {
        babelAst = htmlToBabelAst(htmlAst.childNodes[0], true);
    }
    else {
        babelAst = (0, types_1.expressionStatement)((0, types_1.jsxFragment)((0, types_1.jsxOpeningFragment)(), (0, types_1.jsxClosingFragment)(), htmlAst.childNodes.flatMap((childNode) => htmlToBabelAst(childNode, false))));
    }
    const babelOutput = (0, generator_1.default)((0, types_1.program)([babelAst]), { concise: true });
    let babelCode = babelOutput.code.trim();
    if (typeof babelCode !== "string") {
        throw Error("Babel Output was not a string.");
    }
    // Remove trailing semicolon from Babel string
    if (babelCode.endsWith(";")) {
        babelCode = babelCode.slice(0, -1);
    }
    return babelCode;
}
exports.htmlToJsx = htmlToJsx;
function htmlToBabelAst(node, isTopLevel) {
    if (isTopLevel) {
        if (isCommentNode(node)) {
            const block = (0, types_1.blockStatement)([]);
            (0, types_1.addComment)(block, "inner", node.data, false);
            return block;
        }
        else if (isTextNode(node)) {
            const parts = (0, split_merge_tags_1.splitMergeTags)(node.value);
            return mapTextPartsToTopLevel(parts);
        }
        else if (isDocumentType(node)) {
            throw Error("Document type nodes cannot be processed by this function.");
        }
        else {
            if (node.nodeName === "style" || node.nodeName === "script") {
                return (0, types_1.expressionStatement)(createCodeElement(node.nodeName, node.attrs, node.childNodes));
            }
            return (0, types_1.expressionStatement)(createJSXElement(node.nodeName, node.attrs, node.childNodes));
        }
    }
    else {
        if (isCommentNode(node)) {
            const emptyExpression = (0, types_1.jsxEmptyExpression)();
            (0, types_1.addComment)(emptyExpression, "inner", node.data, false);
            return [(0, types_1.jsxExpressionContainer)(emptyExpression)];
        }
        else if (isTextNode(node)) {
            const parts = (0, split_merge_tags_1.splitMergeTags)(node.value);
            return mapTextPartsToJSX(parts);
        }
        else if (isDocumentType(node)) {
            throw Error("Document type nodes cannot be processed by this function.");
        }
        else {
            if (node.nodeName === "style" || node.nodeName === "script") {
                return [createCodeElement(node.nodeName, node.attrs, node.childNodes)];
            }
            return [createJSXElement(node.nodeName, node.attrs, node.childNodes)];
        }
    }
}
function encodeText(text) {
    return (0, html_entities_1.encode)(text, { mode: "nonAsciiPrintable", level: "html5" });
}
function createJSXElement(tagName, attributes, childNodes) {
    const hasChildNodes = childNodes.length > 0;
    return (0, types_1.jsxElement)((0, types_1.jsxOpeningElement)((0, types_1.jsxIdentifier)(tagName), (0, convert_attributes_1.convertAttributes)(attributes), !hasChildNodes), (0, types_1.jsxClosingElement)((0, types_1.jsxIdentifier)(tagName)), childNodes.flatMap((node) => htmlToBabelAst(node, false)));
}
function createCodeElement(tagName, attributes, childNodes) {
    const innerText = childNodes
        .filter(isTextNode)
        .map((childNode) => childNode.value)
        .join("");
    const hasContent = innerText.trim() !== "";
    const content = hasContent
        ? [
            (0, types_1.jsxExpressionContainer)((0, types_1.templateLiteral)([(0, types_1.templateElement)({ raw: innerText })], [])),
        ]
        : [];
    return (0, types_1.jsxElement)((0, types_1.jsxOpeningElement)((0, types_1.jsxIdentifier)(tagName), (0, convert_attributes_1.convertAttributes)(attributes), !hasContent), hasContent ? (0, types_1.jsxClosingElement)((0, types_1.jsxIdentifier)(tagName)) : null, content);
}
/**
 * Represent the given string as a JSX comment
 *
 * @param value the string to mark up
 * @returns a JSX `<script>` tag containing the specified string
 */
function createMergeTagComment(node, value) {
    return (0, types_1.addComment)(node, "inner", `$merge: ${value}`, false);
}
function mapTextPartsToJSX(parts) {
    return parts.map((part) => part.type === "string"
        ? (0, types_1.jsxText)(encodeText(part.value))
        : (0, types_1.jsxExpressionContainer)(createMergeTagComment((0, types_1.jsxEmptyExpression)(), part.value)));
}
function mapTextPartsToTopLevel(parts) {
    // If its a single part, use a string literal or direct script tag instead
    if (parts.length === 1 && parts[0])
        return parts[0]?.type === "string"
            ? (0, types_1.expressionStatement)((0, types_1.stringLiteral)(parts[0].value))
            : createMergeTagComment((0, types_1.blockStatement)([]), parts[0].value);
    return (0, types_1.expressionStatement)((0, types_1.jsxFragment)((0, types_1.jsxOpeningFragment)(), (0, types_1.jsxClosingFragment)(), mapTextPartsToJSX(parts)));
}
function isCommentNode(node) {
    return node.nodeName === "#comment";
}
function isTextNode(node) {
    return node.nodeName === "#text";
}
function isDocumentType(node) {
    return (node.nodeName === "#document" || node.nodeName === "#document-fragment");
}
