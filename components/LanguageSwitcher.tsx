"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const languages = [
  {
    code: "en",
    name: "English",
    icon: "🇺🇸",
  },
  {
    code: "es",
    name: "Español",
    icon: "🇪🇸",
  },
  {
    code: "fr",
    name: "Français",
    icon: "🇫🇷",
  },
  {
    code: "ar",
    name: "العربية",
    icon: "🇸🇦",
  },
  {
    code: "hi",
    name: "हिंदी",
    icon: "🇮🇳",
  },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);

  const changeLanguage = async (lng: string) => {
    setIsChanging(true);
    try {
      const currentPath = pathname;
      const newPath = currentPath.replace(`/${locale}`, `/${lng}`);
      router.push(newPath);
    } finally {
      setIsChanging(false);
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={`inline-flex items-center justify-center p-2 text-sm font-medium rounded-lg 
          hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
          ${isChanging ? "opacity-50 cursor-wait" : ""}`}
        disabled={isChanging}
        aria-label="Select language"
      >
        <span className="mr-2">{currentLanguage?.icon}</span>
        {currentLanguage?.name || "Language"}
        <ChevronDownIcon
          className={`w-4 h-4 ml-1 transition-transform duration-200
          ${isChanging ? "opacity-50" : ""}`}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    onClick={() => changeLanguage(language.code)}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } ${
                      locale === language.code
                        ? "font-medium bg-gray-50 dark:bg-gray-900"
                        : "font-normal"
                    } block w-full text-left px-4 py-2 text-sm flex items-center space-x-2`}
                    disabled={isChanging}
                    aria-current={locale === language.code ? "true" : undefined}
                  >
                    <span>{language.icon}</span>
                    <span>{language.name}</span>
                    {locale === language.code && (
                      <span className="ml-auto text-blue-500">✓</span>
                    )}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
