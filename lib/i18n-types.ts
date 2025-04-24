export type Translation = {
  navigation: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    description: string;
    cta: string;
    learnMore: string;
  };
  features: {
    title: string;
    items: {
      fast: {
        title: string;
        description: string;
      };
      secure: {
        title: string;
        description: string;
      };
      userFriendly: {
        title: string;
        description: string;
      };
    };
  };
  aboutPage: {
    hero: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      innovation: {
        title: string;
        description: string;
      };
      excellence: {
        title: string;
        description: string;
      };
      integrity: {
        title: string;
        description: string;
      };
    };
    team: {
      title: string;
      member: string;
      members: Array<{
        name: string;
        position: string;
      }>;
    };
  };
  servicesPage: {
    hero: {
      title: string;
      description: string;
    };
    items: {
      web: {
        title: string;
        description: string;
        features: string[];
      };
      mobile: {
        title: string;
        description: string;
        features: string[];
      };
      cloud: {
        title: string;
        description: string;
        features: string[];
      };
      data: {
        title: string;
        description: string;
        features: string[];
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  contactPage: {
    hero: {
      title: string;
      description: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      button: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      address: string;
      hours: {
        title: string;
        weekdays: string;
        saturday: string;
        sunday: string;
      };
    };
  };
  footer: {
    company: string;
    services: string;
    contact: string;
    social: string;
    rights: string;
  };
};

export const languages = {
  en: { name: "English", dir: "ltr" },
  ar: { name: "العربية", dir: "rtl" },
  fr: { name: "Français", dir: "ltr" },
  es: { name: "Español", dir: "ltr" },
  hi: { name: "हिंदी", dir: "ltr" },
} as const;

export const translations: Record<keyof typeof languages, Translation> = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Transform Your Ideas into Reality",
      description:
        "We help businesses and individuals create innovative solutions that make a difference. Let's build something amazing together.",
      cta: "Get Started",
      learnMore: "Learn More",
    },
    features: {
      title: "Why Choose Us",
      items: {
        fast: {
          title: "Lightning Fast",
          description:
            "Experience blazing fast performance with our optimized solutions.",
        },
        secure: {
          title: "Secure & Reliable",
          description:
            "Your data is protected with enterprise-grade security measures.",
        },
        userFriendly: {
          title: "User Friendly",
          description:
            "Intuitive interfaces designed for the best user experience.",
        },
      },
    },
    aboutPage: {
      hero: {
        title: "About Us",
        description:
          "We are a team of passionate individuals dedicated to creating innovative solutions that make a difference in people's lives.",
      },
      mission: {
        title: "Our Mission",
        description:
          "Our mission is to empower businesses and individuals through technology, creating solutions that are not just functional but also intuitive and user-friendly.",
      },
      values: {
        title: "Our Values",
        innovation: {
          title: "Innovation",
          description:
            "We constantly push boundaries and explore new possibilities.",
        },
        excellence: {
          title: "Excellence",
          description:
            "We are committed to delivering the highest quality in everything we do.",
        },
        integrity: {
          title: "Integrity",
          description: "We believe in honest and transparent relationships.",
        },
      },
      team: {
        title: "Our Team",
        member: "Team Member",
        members: [
          { name: "John Doe", position: "CEO" },
          { name: "Jane Smith", position: "CTO" },
          { name: "Mike Johnson", position: "Lead Developer" },
          { name: "Sarah Williams", position: "Designer" },
        ],
      },
    },
    servicesPage: {
      hero: {
        title: "Our Services",
        description:
          "We offer comprehensive solutions to help your business grow and succeed in the digital world.",
      },
      items: {
        web: {
          title: "Web Development",
          description:
            "Custom web applications and websites built with modern technologies.",
          features: [
            "Responsive Design",
            "Progressive Web Apps",
            "E-commerce Solutions",
            "Content Management Systems",
          ],
        },
        mobile: {
          title: "Mobile Development",
          description:
            "Native and cross-platform mobile applications for iOS and Android.",
          features: [
            "iOS Development",
            "Android Development",
            "Cross-platform Solutions",
            "Mobile UI/UX Design",
          ],
        },
        cloud: {
          title: "Cloud Solutions",
          description:
            "Scalable cloud infrastructure and deployment solutions.",
          features: [
            "Cloud Migration",
            "Serverless Architecture",
            "DevOps Automation",
            "Cloud Security",
          ],
        },
        data: {
          title: "Data Analytics",
          description:
            "Data-driven insights and business intelligence solutions.",
          features: [
            "Business Intelligence",
            "Data Visualization",
            "Predictive Analytics",
            "Custom Dashboards",
          ],
        },
      },
      cta: {
        title: "Ready to Get Started?",
        description:
          "Contact us today to discuss how we can help your business grow.",
        button: "Contact Us",
      },
    },
    contactPage: {
      hero: {
        title: "Contact Us",
        description:
          "Get in touch with us to discuss your project or ask any questions.",
      },
      form: {
        title: "Send us a Message",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        button: "Send Message",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        address: "Address",
        hours: {
          title: "Business Hours",
          weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
          saturday: "Saturday: 10:00 AM - 4:00 PM",
          sunday: "Sunday: Closed",
        },
      },
    },
    footer: {
      company: "Company",
      services: "Services",
      contact: "Contact",
      social: "Follow Us",
      rights: "All rights reserved.",
    },
  },
  es: {
    navigation: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      title: "Transforma tus ideas en realidad",
      description:
        "Ayudamos a empresas e individuos a crear soluciones innovadoras que marcan la diferencia.",
      cta: "Comenzar",
      learnMore: "Saber más",
    },
    features: {
      title: "Por qué elegirnos",
      items: {
        fast: {
          title: "Ultra rápido",
          description:
            "Experimenta un rendimiento relámpago con nuestras soluciones optimizadas.",
        },
        secure: {
          title: "Seguro y confiable",
          description:
            "Tus datos están protegidos con medidas de seguridad de nivel empresarial.",
        },
        userFriendly: {
          title: "Fácil de usar",
          description:
            "Interfaces intuitivas diseñadas para la mejor experiencia de usuario.",
        },
      },
    },
    aboutPage: {
      hero: {
        title: "Sobre nosotros",
        description:
          "Somos un equipo de personas apasionadas dedicadas a crear soluciones innovadoras.",
      },
      mission: {
        title: "Nuestra misión",
        description:
          "Nuestra misión es empoderar a empresas e individuos a través de la tecnología.",
      },
      values: {
        title: "Nuestros valores",
        innovation: {
          title: "Innovación",
          description:
            "Constantemente empujamos los límites y exploramos nuevas posibilidades.",
        },
        excellence: {
          title: "Excelencia",
          description:
            "Nos comprometemos a entregar la más alta calidad en todo lo que hacemos.",
        },
        integrity: {
          title: "Integridad",
          description: "Creemos en relaciones honestas y transparentes.",
        },
      },
      team: {
        title: "Nuestro equipo",
        member: "Miembro del equipo",
        members: [
          { name: "John Doe", position: "CEO" },
          { name: "Jane Smith", position: "CTO" },
          { name: "Mike Johnson", position: "Desarrollador principal" },
          { name: "Sarah Williams", position: "Diseñadora" },
        ],
      },
    },
    servicesPage: {
      hero: {
        title: "Nuestros Servicios",
        description:
          "Ofrecemos soluciones integrales para ayudar a su negocio a crecer.",
      },
      items: {
        web: {
          title: "Desarrollo Web",
          description:
            "Aplicaciones web y sitios web personalizados construidos con tecnologías modernas.",
          features: [
            "Diseño Responsivo",
            "Aplicaciones Web Progresivas",
            "Soluciones de Comercio Electrónico",
            "Sistemas de Gestión de Contenidos",
          ],
        },
        mobile: {
          title: "Desarrollo Móvil",
          description:
            "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
          features: [
            "Desarrollo iOS",
            "Desarrollo Android",
            "Soluciones Multiplataforma",
            "Diseño UI/UX Móvil",
          ],
        },
        cloud: {
          title: "Soluciones Cloud",
          description:
            "Infraestructura cloud escalable y soluciones de despliegue.",
          features: [
            "Migración Cloud",
            "Arquitectura Serverless",
            "Automatización DevOps",
            "Seguridad Cloud",
          ],
        },
        data: {
          title: "Análisis de Datos",
          description:
            "Soluciones de inteligencia empresarial y análisis de datos.",
          features: [
            "Inteligencia Empresarial",
            "Visualización de Datos",
            "Análisis Predictivo",
            "Paneles Personalizados",
          ],
        },
      },
      cta: {
        title: "¿Listo para Comenzar?",
        description:
          "Contáctenos hoy para discutir cómo podemos ayudar a su negocio a crecer.",
        button: "Contáctenos",
      },
    },
    contactPage: {
      hero: {
        title: "Contáctenos",
        description:
          "Póngase en contacto con nosotros para discutir su proyecto.",
      },
      form: {
        title: "Envíenos un Mensaje",
        name: "Nombre",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Mensaje",
        button: "Enviar Mensaje",
      },
      info: {
        title: "Información de Contacto",
        email: "Correo Electrónico",
        phone: "Teléfono",
        address: "Dirección",
        hours: {
          title: "Horario Comercial",
          weekdays: "Lunes - Viernes: 9:00 AM - 6:00 PM",
          saturday: "Sábado: 10:00 AM - 4:00 PM",
          sunday: "Domingo: Cerrado",
        },
      },
    },
    footer: {
      company: "Empresa",
      services: "Servicios",
      contact: "Contacto",
      social: "Síguenos",
      rights: "Todos los derechos reservados.",
    },
  },
  fr: {
    navigation: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Transformez vos idées en réalité",
      description:
        "Nous aidons les entreprises et les particuliers à créer des solutions innovantes.",
      cta: "Commencer",
      learnMore: "En savoir plus",
    },
    features: {
      title: "Pourquoi nous choisir",
      items: {
        fast: {
          title: "Ultra rapide",
          description:
            "Profitez de performances fulgurantes avec nos solutions optimisées.",
        },
        secure: {
          title: "Sécurisé et fiable",
          description:
            "Vos données sont protégées par des mesures de sécurité de niveau entreprise.",
        },
        userFriendly: {
          title: "Facile à utiliser",
          description:
            "Des interfaces intuitives conçues pour la meilleure expérience utilisateur.",
        },
      },
    },
    aboutPage: {
      hero: {
        title: "À propos de nous",
        description:
          "Nous sommes une équipe de personnes passionnées dédiées à la création de solutions innovantes.",
      },
      mission: {
        title: "Notre mission",
        description:
          "Notre mission est d'autonomiser les entreprises et les particuliers grâce à la technologie.",
      },
      values: {
        title: "Nos valeurs",
        innovation: {
          title: "Innovation",
          description:
            "Nous repoussons constamment les limites et explorons de nouvelles possibilités.",
        },
        excellence: {
          title: "Excellence",
          description:
            "Nous nous engageons à fournir la plus haute qualité dans tout ce que nous faisons.",
        },
        integrity: {
          title: "Intégrité",
          description:
            "Nous croyons en des relations honnêtes et transparentes.",
        },
      },
      team: {
        title: "Notre équipe",
        member: "Membre de l'équipe",
        members: [
          { name: "John Doe", position: "PDG" },
          { name: "Jane Smith", position: "CTO" },
          { name: "Mike Johnson", position: "Développeur principal" },
          { name: "Sarah Williams", position: "Designer" },
        ],
      },
    },
    servicesPage: {
      hero: {
        title: "Nos Services",
        description:
          "Nous proposons des solutions complètes pour aider votre entreprise à se développer.",
      },
      items: {
        web: {
          title: "Développement Web",
          description:
            "Applications web et sites web personnalisés construits avec des technologies modernes.",
          features: [
            "Design Responsive",
            "Applications Web Progressives",
            "Solutions E-commerce",
            "Systèmes de Gestion de Contenu",
          ],
        },
        mobile: {
          title: "Développement Mobile",
          description:
            "Applications mobiles natives et multiplateformes pour iOS et Android.",
          features: [
            "Développement iOS",
            "Développement Android",
            "Solutions Multiplateformes",
            "Design UI/UX Mobile",
          ],
        },
        cloud: {
          title: "Solutions Cloud",
          description:
            "Infrastructure cloud évolutive et solutions de déploiement.",
          features: [
            "Migration Cloud",
            "Architecture Serverless",
            "Automatisation DevOps",
            "Sécurité Cloud",
          ],
        },
        data: {
          title: "Analyse de Données",
          description:
            "Solutions d'intelligence d'affaires et d'analyse de données.",
          features: [
            "Intelligence d'Affaires",
            "Visualisation de Données",
            "Analyse Prédictive",
            "Tableaux de Bord Personnalisés",
          ],
        },
      },
      cta: {
        title: "Prêt à Commencer ?",
        description:
          "Contactez-nous aujourd'hui pour discuter de la façon dont nous pouvons aider votre entreprise à se développer.",
        button: "Contactez-nous",
      },
    },
    contactPage: {
      hero: {
        title: "Contactez-nous",
        description: "Contactez-nous pour discuter de votre projet.",
      },
      form: {
        title: "Envoyez-nous un Message",
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        button: "Envoyer le Message",
      },
      info: {
        title: "Informations de Contact",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        hours: {
          title: "Heures d'Ouverture",
          weekdays: "Lundi - Vendredi: 9h00 - 18h00",
          saturday: "Samedi: 10h00 - 16h00",
          sunday: "Dimanche: Fermé",
        },
      },
    },
    footer: {
      company: "Entreprise",
      services: "Services",
      contact: "Contact",
      social: "Suivez-nous",
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
    },
    hero: {
      title: "حول أفكارك إلى واقع",
      description: "نساعد الشركات والأفراد في إنشاء حلول مبتكرة تحدث فرقًا.",
      cta: "ابدأ الآن",
      learnMore: "اعرف المزيد",
    },
    features: {
      title: "لماذا تختارنا",
      items: {
        fast: {
          title: "سريع كالبرق",
          description: "استمتع بأداء سريع مع حلولنا المحسنة.",
        },
        secure: {
          title: "آمن وموثوق",
          description: "بياناتك محمية بإجراءات أمنية على مستوى المؤسسات.",
        },
        userFriendly: {
          title: "سهل الاستخدام",
          description: "واجهات بديهية مصممة لأفضل تجربة مستخدم.",
        },
      },
    },
    aboutPage: {
      hero: {
        title: "من نحن",
        description:
          "نحن فريق من الأفراد المتحمسين المكرسين لإنشاء حلول مبتكرة.",
      },
      mission: {
        title: "مهمتنا",
        description: "مهمتنا هي تمكين الشركات والأفراد من خلال التكنولوجيا.",
      },
      values: {
        title: "قيمنا",
        innovation: {
          title: "الابتكار",
          description: "نحن ندفع باستمرار حدود ونستكشف إمكانيات جديدة.",
        },
        excellence: {
          title: "التميز",
          description: "نحن ملتزمون بتقديم أعلى جودة في كل ما نقوم به.",
        },
        integrity: {
          title: "النزاهة",
          description: "نحن نؤمن بعلاقات صادقة وشفافة.",
        },
      },
      team: {
        title: "فريقنا",
        member: "عضو الفريق",
        members: [
          { name: "جون دو", position: "الرئيس التنفيذي" },
          { name: "جين سميث", position: "الرئيس التقني" },
          { name: "مايك جونسون", position: "المطور الرئيسي" },
          { name: "سارة ويليامز", position: "المصمم" },
        ],
      },
    },
    servicesPage: {
      hero: {
        title: "خدماتنا",
        description: "نقدم حلولاً شاملة لمساعدة عملك على النمو.",
      },
      items: {
        web: {
          title: "تطوير الويب",
          description: "تطبيقات ومواقع ويب مخصصة مبنية بأحدث التقنيات.",
          features: [
            "تصميم متجاوب",
            "تطبيقات ويب تقدمية",
            "حلول التجارة الإلكترونية",
            "أنظمة إدارة المحتوى",
          ],
        },
        mobile: {
          title: "تطوير الجوال",
          description:
            "تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android.",
          features: [
            "تطوير iOS",
            "تطوير Android",
            "حلول متعددة المنصات",
            "تصميم واجهات المستخدم للجوال",
          ],
        },
        cloud: {
          title: "حلول السحابة",
          description: "بنية تحتية سحابية قابلة للتطوير وحلول النشر.",
          features: [
            "الهجرة إلى السحابة",
            "هندسة بدون خادم",
            "أتمتة DevOps",
            "أمان السحابة",
          ],
        },
        data: {
          title: "تحليل البيانات",
          description: "رؤى مدفوعة بالبيانات وحلول ذكاء الأعمال.",
          features: [
            "ذكاء الأعمال",
            "تصور البيانات",
            "التحليلات التنبؤية",
            "لوحات معلومات مخصصة",
          ],
        },
      },
      cta: {
        title: "هل أنت مستعد للبدء؟",
        description: "اتصل بنا اليوم لمناقشة كيف يمكننا مساعدة عملك على النمو.",
        button: "اتصل بنا",
      },
    },
    contactPage: {
      hero: {
        title: "اتصل بنا",
        description: "تواصل معنا لمناقشة مشروعك.",
      },
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        button: "إرسال الرسالة",
      },
      info: {
        title: "معلومات الاتصال",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "العنوان",
        hours: {
          title: "ساعات العمل",
          weekdays: "الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً",
          saturday: "السبت: 10:00 صباحاً - 4:00 مساءً",
          sunday: "الأحد: مغلق",
        },
      },
    },
    footer: {
      company: "الشركة",
      services: "الخدمات",
      contact: "اتصل بنا",
      social: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
  hi: {
    navigation: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      contact: "संपर्क करें",
    },
    hero: {
      title: "अपने विचारों को वास्तविकता में बदलें",
      description:
        "हम व्यवसायों और व्यक्तियों को नवीन समाधान बनाने में मदद करते हैं।",
      cta: "शुरू करें",
      learnMore: "और जानें",
    },
    features: {
      title: "हमें क्यों चुनें",
      items: {
        fast: {
          title: "बिजली की तरह तेज",
          description:
            "हमारे अनुकूलित समाधानों के साथ तेज प्रदर्शन का अनुभव करें।",
        },
        secure: {
          title: "सुरक्षित और विश्वसनीय",
          description:
            "आपका डेटा उद्योग-स्तर की सुरक्षा उपायों से सुरक्षित है।",
        },
        userFriendly: {
          title: "उपयोगकर्ता के अनुकूल",
          description:
            "सर्वोत्तम उपयोगकर्ता अनुभव के लिए डिज़ाइन की गई सहज ज्ञान युक्त इंटरफेस।",
        },
      },
    },
    aboutPage: {
      hero: {
        title: "हमारे बारे में",
        description:
          "हम उत्साही व्यक्तियों की एक टीम हैं जो नवीन समाधान बनाने के लिए समर्पित हैं।",
      },
      mission: {
        title: "हमारा मिशन",
        description:
          "हमारा मिशन प्रौद्योगिकी के माध्यम से व्यवसायों और व्यक्तियों को सशक्त बनाना है।",
      },
      values: {
        title: "हमारे मूल्य",
        innovation: {
          title: "नवाचार",
          description:
            "हम लगातार सीमाओं को धकेलते हैं और नई संभावनाओं की खोज करते हैं।",
        },
        excellence: {
          title: "उत्कृष्टता",
          description:
            "हम हर चीज में उच्चतम गुणवत्ता प्रदान करने के लिए प्रतिबद्ध हैं।",
        },
        integrity: {
          title: "ईमानदारी",
          description: "हम ईमानदार और पारदर्शी संबंधों में विश्वास करते हैं।",
        },
      },
      team: {
        title: "हमारी टीम",
        member: "टीम सदस्य",
        members: [
          { name: "जॉन डो", position: "सीईओ" },
          { name: "जेन स्मिथ", position: "सीटीओ" },
          { name: "माइक जॉनसन", position: "लीड डेवलपर" },
          { name: "सारा विलियम्स", position: "डिज़ाइनर" },
        ],
      },
    },
    servicesPage: {
      hero: {
        title: "हमारी सेवाएं",
        description:
          "हम आपके व्यवसाय को बढ़ने में मदद करने के लिए व्यापक समाधान प्रदान करते हैं।",
      },
      items: {
        web: {
          title: "वेब डेवलपमेंट",
          description:
            "आधुनिक तकनीकों के साथ बनाए गए कस्टम वेब एप्लिकेशन और वेबसाइट।",
          features: [
            "रेस्पॉन्सिव डिज़ाइन",
            "प्रोग्रेसिव वेब ऐप्स",
            "ई-कॉमर्स समाधान",
            "कंटेंट मैनेजमेंट सिस्टम",
          ],
        },
        mobile: {
          title: "मोबाइल डेवलपमेंट",
          description:
            "iOS और Android के लिए नेटिव और क्रॉस-प्लेटफॉर्म मोबाइल एप्लिकेशन।",
          features: [
            "iOS डेवलपमेंट",
            "Android डेवलपमेंट",
            "क्रॉस-प्लेटफॉर्म समाधान",
            "मोबाइल UI/UX डिज़ाइन",
          ],
        },
        cloud: {
          title: "क्लाउड समाधान",
          description:
            "स्केलेबल क्लाउड इन्फ्रास्ट्रक्चर और डिप्लॉयमेंट समाधान।",
          features: [
            "क्लाउड माइग्रेशन",
            "सर्वरलेस आर्किटेक्चर",
            "DevOps ऑटोमेशन",
            "क्लाउड सुरक्षा",
          ],
        },
        data: {
          title: "डेटा एनालिटिक्स",
          description: "डेटा-संचालित अंतर्दृष्टि और बिजनेस इंटेलिजेंस समाधान।",
          features: [
            "बिजनेस इंटेलिजेंस",
            "डेटा विज़ुअलाइज़ेशन",
            "प्रेडिक्टिव एनालिटिक्स",
            "कस्टम डैशबोर्ड",
          ],
        },
      },
      cta: {
        title: "शुरू करने के लिए तैयार?",
        description:
          "आज ही संपर्क करें और जानें कि हम आपके व्यवसाय को कैसे बढ़ने में मदद कर सकते हैं।",
        button: "संपर्क करें",
      },
    },
    contactPage: {
      hero: {
        title: "संपर्क करें",
        description: "अपने प्रोजेक्ट पर चर्चा करने के लिए हमसे संपर्क करें।",
      },
      form: {
        title: "हमें संदेश भेजें",
        name: "नाम",
        email: "ईमेल",
        subject: "विषय",
        message: "संदेश",
        button: "संदेश भेजें",
      },
      info: {
        title: "संपर्क जानकारी",
        email: "ईमेल",
        phone: "फोन",
        address: "पता",
        hours: {
          title: "कार्य समय",
          weekdays: "सोमवार - शुक्रवार: 9:00 - 6:00",
          saturday: "शनिवार: 10:00 - 4:00",
          sunday: "रविवार: बंद",
        },
      },
    },
    footer: {
      company: "कंपनी",
      services: "सेवाएं",
      contact: "संपर्क",
      social: "हमें फॉलो करें",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
} as const;
