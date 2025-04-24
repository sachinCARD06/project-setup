"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-text">
          {t.contactPage.hero.title}
        </h1>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-text-light">
          {t.contactPage.hero.description}
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div className="p-8 shadow-lg bg-background rounded-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-text">
            {t.contactPage.form.title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-text-light"
              >
                {t.contactPage.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 transition-colors border rounded-lg bg-background-light border-background-light focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-text-light"
              >
                {t.contactPage.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 transition-colors border rounded-lg bg-background-light border-background-light focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-text-light"
              >
                {t.contactPage.form.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 transition-colors border rounded-lg bg-background-light border-background-light focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-text-light"
              >
                {t.contactPage.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 transition-colors border rounded-lg bg-background-light border-background-light focus:border-primary focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
            >
              {t.contactPage.form.button}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="p-8 shadow-lg bg-background rounded-2xl">
            <h2 className="mb-6 text-2xl font-semibold text-text">
              {t.contactPage.info.title}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="mb-1 font-medium text-text">
                    {t.contactPage.info.email}
                  </h3>
                  <p className="text-text-light">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="mb-1 font-medium text-text">
                    {t.contactPage.info.phone}
                  </h3>
                  <p className="text-text-light">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="mb-1 font-medium text-text">
                    {t.contactPage.info.address}
                  </h3>
                  <p className="text-text-light">
                    123 Business Street
                    <br />
                    City, State 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="p-8 shadow-lg bg-background rounded-2xl">
            <h2 className="mb-6 text-2xl font-semibold text-text">
              {t.contactPage.info.hours.title}
            </h2>
            <div className="space-y-2">
              <p className="text-text-light">
                {t.contactPage.info.hours.weekdays}
              </p>
              <p className="text-text-light">
                {t.contactPage.info.hours.saturday}
              </p>
              <p className="text-text-light">
                {t.contactPage.info.hours.sunday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
