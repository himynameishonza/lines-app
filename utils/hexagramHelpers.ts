import { TFunction } from 'i18next';
import { Hexagram } from '../data/hexagrams';

/**
 * Get the translated name of a hexagram
 * @param hexagram - The hexagram object
 * @param currentLang - Current language ('cs' | 'en')
 * @param t - Translation function from i18next
 * @returns Translated hexagram name or Chinese name as fallback
 */
export function getHexagramTranslatedName(
  hexagram: Hexagram,
  currentLang: 'cs' | 'en',
  t: TFunction
): string {
  return hexagram.content[currentLang]?.meaning
    ? t(`hexagrams.${hexagram.number}`)
    : hexagram.chineseName;
}
