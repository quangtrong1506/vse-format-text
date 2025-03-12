# free-google-translate-api-ts

### Description

This is a library that uses Google's unofficial google translate API, and is developed for personal purposes

### How to use

##### Import

```Typescript
import { Translate } from 'free-google-translate-api-ts';
```

##### Demo

```Typescript
const demo = async () => {
    const result = await Translate('Hello world!', 'auto', 'fr');
    console.log(result);
};
```

##### Results

```TypeScript
Console.log

{
    text: 'Hello World!',
    result: 'Bonjour le monde!',
    source_language: 'auto',
    translate_language: 'fr'
}
```

```TypeScript
TYPE
    Language // Language support
    SourceLanguage // Source language code
    TranslateLanguage // Translate language code
    TranslateResult // Translate result
Other
    const languages // Language list array
                        {
                            code: Language;
                            name: string;
                        }[]
```

Translations from any language to any language in this [list](https://cloud.google.com/translate/docs/languages) are supported.

### New Version

    1.0.0

### Contract

Github: [quangtrong1506](https://github.com/1uangtrong1506)
Email: [quangtrong1506](mailto:quangtrong1506@gmail.com)
