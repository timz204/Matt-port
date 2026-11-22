import { en } from "./en";
import type { Locale, Messages } from "./types";

export type { Locale, Messages };

export const dictionaries: Record<Locale, Messages> = {
  en,
};

export const LOCALE_STORAGE_KEY = "locale";

export function isLocale(value: string | null): value is Locale {
  return value === "en";
}

export function interpolate(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
