import * as vscode from 'vscode';
import { getTextAtSelections, insertTextAtSelections } from './utils/editor';
import { openSelect } from './utils/select.func';
import { addConsole, toJSX } from './utils/text.func';
import { translateAndInsert } from './utils/translate.func';

export const activate = (context: vscode.ExtensionContext) => {
    let select = vscode.commands.registerCommand('quangtrong.vscode.open-select', () => {
        console.log('Open selecte');
        openSelect();
    });
    let html2JSX = vscode.commands.registerCommand('quangtrong.vscode.html-2-jsx', () => {
        console.log('html => jsx');
        const text = getTextAtSelections()?.[0];
        if (text) insertTextAtSelections(toJSX(text));
    });
    let translate = vscode.commands.registerCommand('quangtrong.vscode.translate', () => {
        console.log('Translate');
        translateAndInsert();
    });
    let consoleLog = vscode.commands.registerCommand('quangtrong.vscode.console-log', () => {
        console.log('Console Log');
        const text = getTextAtSelections()?.[0];
        if (text) insertTextAtSelections(addConsole(text));
    });
    context.subscriptions.push(select);
    context.subscriptions.push(html2JSX);
    context.subscriptions.push(translate);
    context.subscriptions.push(consoleLog);
};
export const deactivate = () => {};
