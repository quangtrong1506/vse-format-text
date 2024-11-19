import * as vscode from 'vscode';

//Todo: Hàm lấy text tại tất cả các vị trí con trỏ
export const getTextAtSelections = (): string[] | null => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return null;
    const selections = editor.selections;
    // Lấy text trong từng vùng chọn
    const texts = selections.map((selection) => editor.document.getText(selection));
    return texts;
};

//Todo: Hàm chèn text tại tất cả các vị trí con trỏ
export const insertTextAtSelections = (mutils: string[]) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('Không có editor nào đang hoạt động!');
        return;
    }
    editor.edit((editBuilder) => {
        const selections = editor.selections;
        selections.forEach((selection, index) => {
            if (!selection.isEmpty) {
                editBuilder.replace(selection, mutils[index] ?? ''); // Thay thế vùng chọn
            } else {
                editBuilder.insert(selection.start, mutils[index] ?? ''); // Chèn text tại vị trí con trỏ
            }
        });
    });
};
