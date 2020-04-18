/*eslint sort-keys: "warn"*/
/*eslint "@typescript-eslint/camelcase": "off"*/

const en = {
  language_name: "English",
};

export type Translations = typeof en;

const zh_hans: Translations = {
  language_name: "简体中文",
};

export const translations = {
  en: en,
  "zh-hans": zh_hans,
};

export type Language = keyof typeof translations;

export const languages = Object.keys(translations) as Language[];
