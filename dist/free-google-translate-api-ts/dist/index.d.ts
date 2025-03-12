import { SourceLanguage, TranslateLanguage, TranslateResult } from './type';
declare const Translate: (text: string, sourceLanguage: SourceLanguage, translateLanguage: TranslateLanguage) => Promise<TranslateResult>;
export { Translate };
