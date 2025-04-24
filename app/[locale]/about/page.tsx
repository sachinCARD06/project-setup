"use client";

import Image from "next/image";
import { Target, Award, Heart } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t.aboutPage.values.innovation.title,
      description: t.aboutPage.values.innovation.description,
    },
    {
      icon: Award,
      title: t.aboutPage.values.excellence.title,
      description: t.aboutPage.values.excellence.description,
    },
    {
      icon: Heart,
      title: t.aboutPage.values.integrity.title,
      description: t.aboutPage.values.integrity.description,
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-text">
          {t.aboutPage.hero.title}
        </h1>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-text-light">
          {t.aboutPage.hero.description}
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid items-center gap-16 mb-20 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-text">
              {t.aboutPage.mission.title}
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-primary-dark" />
          </div>
          <p className="text-lg leading-relaxed text-text-light">
            {t.aboutPage.mission.description}
          </p>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/800/600"
            alt={t.aboutPage.mission.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text">
            {t.aboutPage.values.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-8 transition-shadow duration-300 shadow-lg bg-background rounded-2xl hover:shadow-xl group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-primary/10 rounded-xl group-hover:bg-primary/20">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-text">
                {value.title}
              </h3>
              <p className="leading-relaxed text-text-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text">
            {t.aboutPage.team.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark" />
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden transition-shadow duration-300 shadow-lg rounded-2xl group-hover:shadow-xl">
                <Image
                  src={`https://picsum.photos/400/400?random=${member}`}
                  alt={`${t.aboutPage.team.member} ${member}`}
                  fill
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-background-dark/50 to-transparent group-hover:opacity-100" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-text">
                {t.aboutPage.team.members[member - 1].name}
              </h3>
              <p className="text-text-light">
                {t.aboutPage.team.members[member - 1].position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
