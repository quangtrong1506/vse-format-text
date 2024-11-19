import * as vs from 'vscode';
import { Translate } from '../../dist/free-google-translate-api-ts/dist';
import { LANGUAGES, SOURCE_LANGUAGE } from '../../dist/free-google-translate-api-ts/dist/constant';
import { SourceLanguage, TranslateLanguage } from '../../dist/free-google-translate-api-ts/dist/type';
import { getTextAtSelections, insertTextAtSelections } from './editor';
type ItemSourceType = {
    value: SourceLanguage;
    label: string;
};
type ItemTranslateType = {
    value: TranslateLanguage;
    label: string;
};
// giới hạn 1 api / giây nên phải gộp lại
export const translateAndInsert = async () => {
    const data = getTextAtSelections();
    if (!data) return;
    const sourceLanguageQP = vs.window.createQuickPick();
    sourceLanguageQP.placeholder = 'Select Source Language';
    sourceLanguageQP.items = SOURCE_LANGUAGE;
    sourceLanguageQP.show();
    sourceLanguageQP.onDidChangeSelection((item) => {
        sourceLanguageQP.dispose();
        const sl = item[0] as ItemSourceType;
        const targetLanguageQP = vs.window.createQuickPick();
        targetLanguageQP.placeholder = 'Select Translate Language';
        targetLanguageQP.items = LANGUAGES;
        targetLanguageQP.show();
        targetLanguageQP.onDidChangeSelection(async (item) => {
            const tl = item[0] as ItemTranslateType;
            targetLanguageQP.dispose();
            const textGroup = data.join('<*>');
            const translatedData = await Translate(textGroup ?? '', sl.value, tl.value);
            if (translatedData.result) {
                const textResult = translatedData.result;
                insertTextAtSelections(textResult.split('<*>'));
            }
        });
    });
};
