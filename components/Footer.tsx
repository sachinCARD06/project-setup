"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useParams } from "next/navigation";

const Footer = () => {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { id: "home", name: String(t.navigation.home), href: `/${locale}` },
    { id: "about", name: String(t.navigation.about), href: `/${locale}/about` },
    {
      id: "services",
      name: String(t.navigation.services),
      href: `/${locale}/services`,
    },
    {
      id: "contact",
      name: String(t.navigation.contact),
      href: `/${locale}/contact`,
    },
  ];

  const services = [
    {
      id: "web",
      name: String(t.servicesPage.items.web.title),
      href: `/${locale}/services`,
    },
    {
      id: "mobile",
      name: String(t.servicesPage.items.mobile.title),
      href: `/${locale}/services`,
    },
    {
      id: "cloud",
      name: String(t.servicesPage.items.cloud.title),
      href: `/${locale}/services`,
    },
    {
      id: "data",
      name: String(t.servicesPage.items.data.title),
      href: `/${locale}/services`,
    },
  ];

  return (
    <footer className="bg-background-dark text-text-light">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">
              {String(t.footer.company)}
            </h3>
            <p className="text-gray-300">
              We help businesses and individuals create innovative solutions
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">
              {String(t.footer.services)}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-300 transition-colors hover:text-primary group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">
              {String(t.footer.services)}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-300 transition-colors hover:text-primary group"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">
              {String(t.footer.contact)}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center text-gray-300 transition-colors hover:text-primary group"
                >
                  {String(t.contactPage.hero.title)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 transition-colors hover:text-primary"
            >
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-300">
          <p>{String(t.footer.rights)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
