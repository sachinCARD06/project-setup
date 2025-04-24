"use client";

import { useTranslation } from "@/lib/i18n";
import { useParams } from "next/navigation";
import { Code, Smartphone, Cloud, BarChart } from "lucide-react";

export default function ServicesPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;

  const services = [
    {
      icon: Code,
      title: t.servicesPage.items.web.title,
      description: t.servicesPage.items.web.description,
      features: t.servicesPage.items.web.features,
    },
    {
      icon: Smartphone,
      title: t.servicesPage.items.mobile.title,
      description: t.servicesPage.items.mobile.description,
      features: t.servicesPage.items.mobile.features,
    },
    {
      icon: Cloud,
      title: t.servicesPage.items.cloud.title,
      description: t.servicesPage.items.cloud.description,
      features: t.servicesPage.items.cloud.features,
    },
    {
      icon: BarChart,
      title: t.servicesPage.items.data.title,
      description: t.servicesPage.items.data.description,
      features: t.servicesPage.items.data.features,
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-text">
          {t.servicesPage.hero.title}
        </h1>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-text-light">
          {t.servicesPage.hero.description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 transition-shadow duration-300 shadow-lg bg-background rounded-2xl hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-primary/10 rounded-xl">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-text">
              {service.title}
            </h3>
            <p className="mb-6 text-text-light">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-text-light">
                  <span className="w-2 h-2 mr-2 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="p-8 mt-20 text-center bg-gradient-to-r from-primary to-primary-dark rounded-2xl">
        <h2 className="mb-4 text-3xl font-bold text-white">
          {t.servicesPage.cta.title}
        </h2>
        <p className="mb-8 text-white/80">{t.servicesPage.cta.description}</p>
        <a
          href={`/${locale}/contact`}
          className="inline-block px-8 py-3 transition-colors bg-white rounded-lg text-primary hover:bg-white/90"
        >
          {t.servicesPage.cta.button}
        </a>
      </div>
    </div>
  );
}
