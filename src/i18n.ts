import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                services: "Our Services",
                destinations: "Our Destinations",
                about: "About Us",
                contact: "Get in Touch"
            },
            footer: {
                description: "Helping students broaden their horizons through international study experiences in Ireland, UK, Germany, and Canada.",
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
        },
        destinations: {
            title: "Our Destinations",
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
            title: "Our Services",
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
    },
    ar: {
        translation: {
            nav: {
                home: "الرئيسية",
                services: "خدماتنا",
                destinations: "وجهاتنا",
                about: "من نحن",
                contact: "تواصل معنا"
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

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
