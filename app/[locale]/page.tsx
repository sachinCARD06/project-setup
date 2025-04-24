"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useParams } from "next/navigation";

export default function HomePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;

  const features = [
    {
      icon: Zap,
      title: t.features.items.fast.title,
      description: t.features.items.fast.description,
    },
    {
      icon: Shield,
      title: t.features.items.secure.title,
      description: t.features.items.secure.description,
    },
    {
      icon: Users,
      title: t.features.items.userFriendly.title,
      description: t.features.items.userFriendly.description,
    },
  ];

  return (
    <div className="container px-4 mx-auto">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl text-text">
              {t.hero.title}
            </h1>
            <p className="text-xl leading-relaxed text-text-light">
              {t.hero.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-text rounded-xl hover:bg-background-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                {t.hero.learnMore}
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/800/600"
              alt="Hero Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-text">
            {t.features.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 transition-shadow duration-300 shadow-lg bg-background rounded-2xl hover:shadow-xl group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-primary/10 rounded-xl group-hover:bg-primary/20">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-text">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-text-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
