"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const constant_1 = require("./utils/constant");
const select_func_1 = require("./utils/select.func");
const translate_func_1 = require("./utils/translate.func");
const activate = (context) => {
    let select = vscode.commands.registerCommand('quangtrong.vscode.open-select', () => {
        console.log('Open selecte');
        (0, select_func_1.openSelect)();
    });
    let html2JSX = vscode.commands.registerCommand('quangtrong.vscode.html-2-jsx', () => {
        console.log('html => jsx');
        (0, select_func_1.handleSelect)(constant_1.SelectIds.html_to_jsx);
    });
    let translate = vscode.commands.registerCommand('quangtrong.vscode.translate', () => {
        console.log('Translate');
        (0, translate_func_1.translateAndInsert)();
    });
    let consoleLog = vscode.commands.registerCommand('quangtrong.vscode.console-log', () => {
        console.log('Console Log');
        (0, select_func_1.handleSelect)(constant_1.SelectIds.add_log);
    });
    context.subscriptions.push(select);
    context.subscriptions.push(html2JSX);
    context.subscriptions.push(translate);
    context.subscriptions.push(consoleLog);
};
exports.activate = activate;
const deactivate = () => { };
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map