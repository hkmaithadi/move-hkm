import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pagesEN } from './locales/pages-en';
import { pagesFR } from './locales/pages-fr';
import { pagesAR } from './locales/pages-ar';

// Translation resources
const resources = {
    en: {
        translation: {
            language: {
                label: "Language",
            },
            nav: {
                home: "Home",
                services: "Services",
                destinations: "Destinations",
                about: "About Us",
                contact: "Get in Touch",
                toggleMenu: "Toggle menu"
            },
            footer: {
                description: "Helping students broaden their horizons through international study experiences in Ireland, UK, Germany, Canada, and more.",
                quickLinks: "Quick Links",
                contactUs: "Contact Us",
                rights: "Move Study Abroad Agency. All rights reserved."
            },
            home: {
                heroTitle: "Your Future Starts",
                heroTitleHighlight: "Abroad",
                heroSubtitle: "Discover world-class education opportunities in Ireland, UK, Germany, and Canada. Let Move guide you every step of the way.",
                exploreBtn: "Explore Destinations",
                learnMoreBtn: "Learn More",
                whyChooseUs: {
                    title: "Why Choose Us",
                    reason1Title: "Global Network",
                    reason1Desc: "Partnered with leading institutions in 4 major countries.",
                    reason2Title: "Personalized Guidance",
                    reason2Desc: "Expert counselors to help you choose the right path.",
                    reason3Title: "High Success Rate",
                    reason3Desc: "Thousands of students successfully placed worldwide."
                },
                howItWorks: {
                    title: "How It Works",
                    step1Title: "Discover",
                    step1Desc: "Browse through our curated list of universities and courses.",
                    step2Title: "Apply",
                    step2Desc: "Submit your application with our step-by-step assistance.",
                    step3Title: "Go",
                    step3Desc: "Get your visa and prepare for your journey abroad."
                },
                topDestinations: {
                    title: "Top Destinations",
                    viewDetails: "View Details"
                }
            },
            destinations: {
            title: "Destinations",
            subtitle: "Choose from our carefully selected list of study destinations, each offering unique benefits and world-class education.",
            cta: "Start your journey to",
            ireland: {
                name: "Ireland",
                desc: "Known for its friendly people and rich history, Ireland offers high-quality education and post-study work opportunities."
            },
            uk: {
                name: "United Kingdom",
                desc: "Home to some of the world’s oldest and most prestigious universities. Experience academic excellence in the UK."
            },
            germany: {
                name: "Germany",
                desc: "A hub for innovation and engineering. Enjoy low tuition fees and a vibrant international student community."
            },
            canada: {
                name: "Canada",
                desc: "Welcoming and diverse, Canada provides top-tier education and excellent pathways for permanent residency."
            }
        },
        services: {
            title: "Services",
            subtitle: "Comprehensive support for every step of your study abroad journey.",
            cta: "Get Personalised Advice",
            admissions: {
                title: "University Admissions",
                desc: "We help you select the right course and university that matches your career aspirations and academic profile."
            },
            visa: {
                title: "Visa Assistance",
                desc: "Our experts guide you through the complex visa application process, ensuring all documentation is perfect."
            },
            accommodation: {
                title: "Accommodation",
                desc: "We assist in finding safe and affordable student housing near your university campus."
            },
            briefing: {
                title: "Pre-Departure Briefing",
                desc: "Get ready for your new life abroad with our comprehensive sessions on culture, travel, and lifestyle."
            }
        },
        about: {
            title: "About Move",
            p1: "At <1>Move</1>, we believe that education has no borders. Founded with a mission to empower students to achieve their global aspirations, we have emerged as a trusted partner in international education.",
            p2: "Our team consists of former international students and education experts who understand the challenges and excitement of studying abroad. We don't just process applications; we build careers and shape futures.",
            p3: "From choosing the right destination to settling into a new culture, Move is with you at every step. We specialize in placing students in top institutions across Ireland, the UK, Germany, and Canada.",
            cta: "Speak to our Team",
            whyChooseUs: "Why Choose Us?",
            values: {
                transparency: { title: "Transparency", desc: "No hidden fees or surprises. We guide you with honesty and integrity." },
                expertise: { title: "Expertise", desc: "Years of experience and deep knowledge of global education systems." },
                support: { title: "Support", desc: "24/7 assistance for students, even after they have landed." }
            }
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Ready to start your journey? Fill out the form below and one of our counselors will be in touch.",
            info: {
                title: "Contact Information",
                phone: "Phone",
                email: "Email",
                office: "Office"
            },
            form: {
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                destination: "Interested Destination",
                selectDest: "Select a country",
                message: "Message",
                messagePlaceholder: "Tell us about your study plans...",
                submit: "Send Message",
                success: "Thank you for your interest! We will contact you soon."
            },
            countries: {
                other: "Other/Undecided"
            }
        }
        }
    },
    fr: {
        translation: {
            language: {
                label: "Langue",
            },
            nav: {
                home: "Accueil",
                services: "Services",
                destinations: "Destinations",
                about: "À propos",
                contact: "Contact",
                toggleMenu: "Ouvrir le menu"
            },
            footer: {
                description: "Nous aidons les étudiants à élargir leurs horizons grâce à des expériences d'études internationales en Irlande, au Royaume-Uni, en Allemagne, au Canada et au-delà.",
                quickLinks: "Liens rapides",
                contactUs: "Nous contacter",
                rights: "Move Study Abroad Agency. Tous droits réservés."
            },
            home: {
                heroTitle: "Votre avenir commence",
                heroTitleHighlight: "à l'étranger",
                heroSubtitle: "Découvrez des opportunités d'études de classe mondiale en Irlande, au Royaume-Uni, en Allemagne et au Canada. Move vous accompagne à chaque étape.",
                exploreBtn: "Explorer les destinations",
                learnMoreBtn: "En savoir plus",
                whyChooseUs: {
                    title: "Pourquoi nous choisir",
                    reason1Title: "Réseau mondial",
                    reason1Desc: "Partenaires d'institutions leaders dans 4 grands pays.",
                    reason2Title: "Accompagnement personnalisé",
                    reason2Desc: "Des conseillers experts pour vous aider à choisir la bonne voie.",
                    reason3Title: "Taux de réussite élevé",
                    reason3Desc: "Des milliers d'étudiants placés avec succès dans le monde."
                },
                howItWorks: {
                    title: "Comment ça marche",
                    step1Title: "Découvrir",
                    step1Desc: "Parcourez notre liste d'universités et de cursus.",
                    step2Title: "Postuler",
                    step2Desc: "Soumettez votre dossier avec notre aide pas à pas.",
                    step3Title: "Partir",
                    step3Desc: "Obtenez votre visa et préparez votre départ."
                },
                topDestinations: {
                    title: "Destinations phares",
                    viewDetails: "Voir les détails"
                }
            },
            destinations: {
                title: "Destinations",
                subtitle: "Choisissez parmi nos destinations d'études sélectionnées, chacune offrant des avantages uniques et une formation d'excellence.",
                cta: "Commencez votre voyage vers",
                ireland: {
                    name: "Irlande",
                    desc: "Réputée pour son accueil et son histoire, l'Irlande offre une qualité d'enseignement élevée et des perspectives de travail post-études."
                },
                uk: {
                    name: "Royaume-Uni",
                    desc: "Berceau de certaines des plus anciennes universités au monde. Vivez l'excellence académique au Royaume-Uni."
                },
                germany: {
                    name: "Allemagne",
                    desc: "Pôle d'innovation et d'ingénierie. Frais de scolarité bas et communauté étudiante internationale dynamique."
                },
                canada: {
                    name: "Canada",
                    desc: "Accueillant et diversifié, le Canada propose un enseignement de premier ordre et d'excellentes voies vers la résidence permanente."
                }
            },
            services: {
                title: "Services",
                subtitle: "Un accompagnement complet à chaque étape de votre parcours à l'étranger.",
                cta: "Obtenir des conseils personnalisés",
                admissions: {
                    title: "Admission universitaire",
                    desc: "Nous vous aidons à choisir le cursus et l'université qui correspondent à votre profil et à vos ambitions."
                },
                visa: {
                    title: "Assistance visa",
                    desc: "Nos experts vous guident dans les démarches de visa pour un dossier irréprochable."
                },
                accommodation: {
                    title: "Logement",
                    desc: "Nous vous aidons à trouver un logement étudiant sûr et abordable près du campus."
                },
                briefing: {
                    title: "Briefing avant départ",
                    desc: "Préparez votre nouvelle vie grâce à nos sessions sur la culture, les voyages et le quotidien."
                }
            },
            about: {
                title: "À propos de Move",
                p1: "Chez <1>Move</1>, nous croyons que l'éducation n'a pas de frontières. Fondée pour permettre aux étudiants d'atteindre leurs aspirations mondiales, nous sommes un partenaire de confiance de l'éducation internationale.",
                p2: "Notre équipe rassemble d'anciens étudiants internationaux et des experts qui comprennent les défis et l'enthousiasme des études à l'étranger. Nous ne nous contentons pas de traiter les dossiers ; nous construisons des parcours professionnels.",
                p3: "Du choix de la destination à l'intégration culturelle, Move est à vos côtés. Nous plaçons les étudiants dans les meilleures institutions en Irlande, au Royaume-Uni, en Allemagne et au Canada.",
                cta: "Parler à notre équipe",
                whyChooseUs: "Pourquoi nous choisir ?",
                values: {
                    transparency: { title: "Transparence", desc: "Pas de frais cachés. Nous vous guidons avec honnêteté et intégrité." },
                    expertise: { title: "Expertise", desc: "Des années d'expérience et une connaissance approfondie des systèmes éducatifs mondiaux." },
                    support: { title: "Soutien", desc: "Une aide pour les étudiants, même après leur arrivée sur place." }
                }
            },
            contact: {
                title: "Contact",
                subtitle: "Prêt à commencer ? Remplissez le formulaire ci-dessous et un conseiller vous contactera.",
                info: {
                    title: "Coordonnées",
                    phone: "Téléphone",
                    email: "E-mail",
                    office: "Bureau"
                },
                form: {
                    name: "Nom complet",
                    email: "Adresse e-mail",
                    phone: "Numéro de téléphone",
                    destination: "Destination d'intérêt",
                    selectDest: "Choisir un pays",
                    message: "Message",
                    messagePlaceholder: "Parlez-nous de vos projets d'études...",
                    submit: "Envoyer",
                    success: "Merci pour votre intérêt ! Nous vous contacterons bientôt."
                },
                countries: {
                    other: "Autre / Indécis"
                }
            }
        }
    },
    ar: {
        translation: {
            language: {
                label: "اللغة",
            },
            nav: {
                home: "الرئيسية",
                services: "خدماتنا",
                destinations: "وجهاتنا",
                about: "من نحن",
                contact: "تواصل معنا",
                toggleMenu: "فتح القائمة"
            },
            footer: {
                description: "مساعدة الطلاب على توسيع آفاقهم من خلال تجارب الدراسة الدولية في أيرلندا، المملكة المتحدة، ألمانيا، وكندا.",
                quickLinks: "روابط سريعة",
                contactUs: "اتصل بنا",
                rights: "وكالة موف للدراسة في الخارج. جميع الحقوق محفوظة."
            },
            home: {
                heroTitle: "مستقبلك يبدأ في",
                heroTitleHighlight: "الخارج",
                heroSubtitle: "اكتشف فرص تعليم عالمية المستوى في أيرلندا، المملكة المتحدة، ألمانيا، وكندا. دع موف ترشدك في كل خطوة.",
                exploreBtn: "استكشف الوجهات",
                learnMoreBtn: "اعرف المزيد",
                whyChooseUs: {
                    title: "لماذا تختارنا؟",
                    reason1Title: "شبكة عالمية",
                    reason1Desc: "شراكة مع مؤسسات رائدة في 4 دول كبرى.",
                    reason2Title: "توجيه شخصي",
                    reason2Desc: "مستشارون خبراء لمساعدتك في اختيار المسار الصحيح.",
                    reason3Title: "نسية نجاح عالية",
                    reason3Desc: "آلاف الطلاب تم قبولهم بنجاح حول العالم."
                },
                howItWorks: {
                    title: "كيف نعمك",
                    step1Title: "اكتشف",
                    step1Desc: "تصفح قائمتنا المختارة من الجامعات والدورات.",
                    step2Title: "قدم طلبك",
                    step2Desc: "قدم طلبك بمساعدة خطوة بخطوة من خبرائنا.",
                    step3Title: "انطلق",
                    step3Desc: "احصل على تأشيرتك واستعد لرحلتك إلى الخارج."
                },
                topDestinations: {
                    title: "أفضل الوجهات",
                    viewDetails: "عرض التفاصيل"
                }
            },
            destinations: {
                title: "وجهاتنا",
                subtitle: "اختر من قائمتنا المختارة بعناية للوجهات الدراسية، كل منها يقدم مزايا فريدة وتعليماً عالمي المستوى.",
                cta: "ابدأ رحلتك إلى",
                ireland: {
                    name: "أيرلندا",
                    desc: "تشتهر أيرلندا بشعبها الودود وتاريخها الغني، وتقدم تعليمًا عالي الجودة وفرص عمل بعد الدراسة."
                },
                uk: {
                    name: "المملكة المتحدة",
                    desc: "موطن لبعض من أقدم وأرقى الجامعات في العالم. جرب التميز الأكاديمي في المملكة المتحدة."
                },
                germany: {
                    name: "ألمانيا",
                    desc: "مركز للابتكار والهندسة. استمتع برسوم دراسية منخفضة ومجتمع طلابي دولي حيوي."
                },
                canada: {
                    name: "كندا",
                    desc: "ترحب كندا بالتنوع، وتوفر تعليمًا من الدرجة الأولى ومسارات ممتازة للإقامة الدائمة."
                }
            },
            services: {
                title: "خدماتنا",
                subtitle: "دعم شامل لكل خطوة في رحلة الدراسة في الخارج.",
                cta: "احصل على استشارة شخصية",
                admissions: {
                    title: "القبول الجامعي",
                    desc: "نساعدك في اختيار التخصص والجامعة المناسبة التي تتوافق مع طموحاتك المهنية وملفك الأكاديمي."
                },
                visa: {
                    title: "المساعدة في التأشيرة",
                    desc: "يرشدك خبراؤنا عبر عملية طلب التأشيرة المعقدة، لضمان أن تكون جميع المستندات مثالية."
                },
                accommodation: {
                    title: "السكن",
                    desc: "نساعد في العثور على سكن طلابي آمن وبأسعار معقولة بالقرب من الحرم الجامعي."
                },
                briefing: {
                    title: "جلسات ما قبل المغادرة",
                    desc: "استعد لحياتك الجديدة في الخارج من خلال جلساتنا الشاملة حول الثقافة والسفر ونمط الحياة."
                }
            },
            about: {
                title: "عن موف",
                p1: "في <1>موف</1>، نؤمن أن التعليم لا حدود له. تأسسنا بمهمة تمكين الطلاب من تحقيق طموحاتهم العالمية، وبرزنا كشريك موثوق في التعليم الدولي.",
                p2: "يتكون فريقنا من طلاب دوليين سابقين وخبراء تعليم يفهمون التحديات والإثارة في الدراسة في الخارج. نحن لا نعالج الطلبات فحسب؛ بل نبني وظائف ونشكل المستقبل.",
                p3: "من اختيار الوجهة المناسبة إلى الاستقرار في ثقافة جديدة، موف معك في كل خطوة. نحن متخصصون في إلحاق الطلاب بأفضل المؤسسات في أيرلندا والمملكة المتحدة وألمانيا وكندا.",
                cta: "تحدث إلى فريقنا",
                whyChooseUs: "لماذا تختارنا؟",
                values: {
                    transparency: { title: "الشفافية", desc: "لا رسوم خفية أو مفاجآت. نرشدك بصدق ونزاهة." },
                    expertise: { title: "الخبرة", desc: "سنوات من الخبرة ومعرفة عميقة بإنظمة التعليم العالمية." },
                    support: { title: "الدعم", desc: "دعم 24/7 للطلاب، حتى بعد وصولهم." }
                }
            },
            contact: {
                title: "تواصل معنا",
                subtitle: "جاهز لبدء رحلتك؟ املأ النموذج أدناه وسيتواصل معك أحد مستشارينا.",
                info: {
                    title: "معلومات الاتصال",
                    phone: "الهاتف",
                    email: "البريد الإلكتروني",
                    office: "المكتب"
                },
                form: {
                    name: "الاسم الكامل",
                    email: "عنوان البريد الإلكتروني",
                    phone: "رقم الهاتف",
                    destination: "الوجهة المهتم بها",
                    selectDest: "اختر دولة",
                    message: "الرسالة",
                    messagePlaceholder: "أخبرنا عن خططك الدراسية...",
                    submit: "إرسال الرسالة",
                    success: "شكراً لاهتمامك! سنتصل بك قريباً."
                },
                countries: {
                    other: "أخرى/غير محدد"
                }
            }
        }
    }
};

Object.assign(resources.en.translation, pagesEN);
Object.assign(resources.fr.translation, pagesFR);
Object.assign(resources.ar.translation, pagesAR);

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'fr', 'ar'],
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
