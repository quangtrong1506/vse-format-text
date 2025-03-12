import { Language } from './type';
export interface LanguageItem {
    label: string;
    value: Language | 'auto';
}
export declare const LANGUAGES: LanguageItem[];
export declare const SOURCE_LANGUAGE: LanguageItem[];
