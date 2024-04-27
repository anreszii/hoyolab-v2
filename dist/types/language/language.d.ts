import { LanguageEnum } from './language.interface';
/**
 * Represents a set of utility methods for working with languages.
 *
 * @internal
 * @category Internal
 * @class
 */
export declare class Language {
    /**
     * Parses a language string into its corresponding LanguageEnum value.
     *
     * @param lang The language string to parse, or null/undefined to default to English.
     * @returns The LanguageEnum value corresponding to the provided string, or English if the string is invalid or undefined.
     */
    static parseLang(lang?: string | null): LanguageEnum;
}
