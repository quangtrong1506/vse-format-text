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
export const translateAndInsert = async () => {
    const data = getTextAtSelections();
    if (!data && data?.[0] === '') return;
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
            const translatedData = await Translate(data?.[0] ?? '', sl.value, tl.value);
            if (translatedData.result) insertTextAtSelections(translatedData.result);
        });
    });
};
