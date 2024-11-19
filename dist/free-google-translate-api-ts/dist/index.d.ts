import { SourceLanguage, Translate, TranslateLanguage } from './type';
declare const Translate: (text: string, sourceLanguage: SourceLanguage, translateLanguage: TranslateLanguage) => Promise<Translate>;
export { Translate };
