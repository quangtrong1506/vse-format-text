export type Language = 'ab' | 'ace' | 'ach' | 'af' | 'sq' | 'alz' | 'am' | 'ar' | 'hy' | 'as' | 'awa' | 'ay' | 'az' | 'ban' | 'bm' | 'ba' | 'eu' | 'btx' | 'bts' | 'bbc' | 'be' | 'bem' | 'bn' | 'bew' | 'bho' | 'bik' | 'bs' | 'br' | 'bg' | 'bua' | 'yue' | 'ca' | 'ceb' | 'ny' | 'zh-CN' | 'zh-TW' | 'cv' | 'co' | 'crh' | 'hr' | 'cs' | 'da' | 'din' | 'dv' | 'doi' | 'dov' | 'nl' | 'dz' | 'en' | 'eo' | 'et' | 'ee' | 'fj' | 'fil' | 'fi' | 'fr' | 'fr-FR' | 'fr-CA' | 'fy' | 'ff' | 'gaa' | 'gl' | 'lg' | 'ka' | 'de' | 'el' | 'gn' | 'gu' | 'ht' | 'cnh' | 'ha' | 'haw' | 'iw' | 'hil' | 'hi' | 'hmn' | 'hu' | 'hrx' | 'is' | 'ig' | 'ilo' | 'id' | 'ga' | 'it' | 'ja' | 'jv' | 'kn' | 'pam' | 'kk' | 'km' | 'cgg' | 'rw' | 'ktu' | 'gom' | 'ko' | 'kri' | 'ku' | 'ckb' | 'ky' | 'lo' | 'ltg' | 'la' | 'lv' | 'lij' | 'li' | 'ln' | 'lt' | 'lmo' | 'luo' | 'lb' | 'mk' | 'mai' | 'mak' | 'mg' | 'ms' | 'ms-Arab' | 'ml' | 'mt' | 'mi' | 'mr' | 'chm' | 'mni-Mtei' | 'min' | 'lus' | 'mn' | 'my' | 'nr' | 'new' | 'ne' | 'nso' | 'no' | 'nus' | 'oc' | 'or' | 'om' | 'pag' | 'pap' | 'ps' | 'fa' | 'pl' | 'pt' | 'pt-PT' | 'pt-BR' | 'pa' | 'pa-Arab' | 'qu' | 'rom' | 'ro' | 'rn' | 'ru' | 'sm' | 'sg' | 'sa' | 'gd' | 'sr' | 'st' | 'crs' | 'shn' | 'sn' | 'scn' | 'szl' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'es' | 'su' | 'sw' | 'ss' | 'sv' | 'tg' | 'ta' | 'tt' | 'te' | 'tet' | 'th' | 'ti' | 'ts' | 'tn' | 'tr' | 'tk' | 'ak' | 'uk' | 'ur' | 'ug' | 'uz' | 'vi' | 'cy' | 'xh' | 'yi' | 'yo' | 'yua' | 'zu';
export type LanguageDetail = {
    code: Language;
    name: string;
};
export declare const languages: LanguageDetail[];
export type SourceLanguage = 'auto' | Language;
export type TranslateLanguage = Language;
export type TranslateResult = {
    text: string;
    result: string;
    source_language: SourceLanguage;
    translate_language: TranslateLanguage;
    errors?: {
        message: string;
        code: number;
    };
};
