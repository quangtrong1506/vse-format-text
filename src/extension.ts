import * as vscode from 'vscode';
import { SelectIds } from './utils/constant';
import { handleSelect, openSelect } from './utils/select.func';
import { translateAndInsert } from './utils/translate.func';

export const activate = (context: vscode.ExtensionContext) => {
    const a = 1;
    let select = vscode.commands.registerCommand('quangtrong.vscode.open-select', () => {
        console.log('Open selecte');
        openSelect();
    });
    let html2JSX = vscode.commands.registerCommand('quangtrong.vscode.html-2-jsx', () => {
        console.log('html => jsx');
        handleSelect(SelectIds.html_to_jsx);
    });
    let translate = vscode.commands.registerCommand('quangtrong.vscode.translate', () => {
        console.log('Translate');
        translateAndInsert();
    });
    let consoleLog = vscode.commands.registerCommand('quangtrong.vscode.console-log', () => {
        console.log('Console Log');
        handleSelect(SelectIds.add_log);
    });
    context.subscriptions.push(select);
    context.subscriptions.push(html2JSX);
    context.subscriptions.push(translate);
    context.subscriptions.push(consoleLog);
};
export const deactivate = () => {};
