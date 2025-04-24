export const languages = {
  en: { name: "English", dir: "ltr" },
  ar: { name: "العربية", dir: "rtl" },
  fr: { name: "Français", dir: "ltr" },
  es: { name: "Español", dir: "ltr" },
  hi: { name: "हिंदी", dir: "ltr" },
} as const;

export const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    // ... rest of English translations ...
  },
  es: {
    navigation: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    // ... rest of Spanish translations ...
  },
  // ... other language translations ...
} as const;

export function getLanguageDir(locale: string) {
  return languages[locale as keyof typeof languages]?.dir || "ltr";
}

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.en;
}
