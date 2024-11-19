import * as vscode from 'vscode';
import { SELECTS } from './utils/constant';
// Hàm kích hoạt extension
export const activate = (context: vscode.ExtensionContext) => {
    // Đăng ký một lệnh
    const disposable = vscode.commands.registerCommand('my-extension.helloWorld', async () => {
        const qp = vscode.window.createQuickPick();
        qp.items = SELECTS;
        qp.show();
    });

    context.subscriptions.push(disposable);
};

// Hàm hủy kích hoạt extension
export const deactivate = () => {};
