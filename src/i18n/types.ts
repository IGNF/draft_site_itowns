export type Bilingual = {
  en: string;
  fr: string;
};

/** Alt text accessible in both languages (screen readers). */
export function bilingualImageAlt(text: Bilingual): string {
  return `${text.en} — ${text.fr}`;
}
