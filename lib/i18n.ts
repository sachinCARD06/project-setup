"use client";

import { useParams } from "next/navigation";
import { languages, translations } from "./i18n-types";

export function getLanguageDir(locale: string) {
  return languages[locale as keyof typeof languages]?.dir || "ltr";
}

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.en;
}

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = getTranslations(locale);

  return {
    t,
    locale,
    dir: getLanguageDir(locale),
  };
}
