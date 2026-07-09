import img1 from "./assets/images/carousel-assets/1.jpeg";
import img2 from "./assets/images/carousel-assets/2.jpeg";
import img3 from "./assets/images/carousel-assets/3.jpeg";
import img4 from "./assets/images/carousel-assets/4.jpeg";
import img5 from "./assets/images/carousel-assets/5.jpeg";

import { Dumbbell, Users, Clock, Trophy, Heart, Zap } from "lucide-react";

export const navLinks = [
  { id: 1, to: "/memberships", label: "Abonamente" },
  { id: 2, to: "/contact", label: "Contact" },
];

export const images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
];

export const features = [
  {
    id: 1,
    icon: Dumbbell,
    title: "Antrenament de Ultimă Generație",
    description: "Antrenează-te cu o execuție perfectă, ghidat de noi",
  },
  {
    id: 2,
    icon: Users,
    title: "Antrenori Experți",
    description:
      "Antrenorii noștri certificați oferă îndrumare personalizată pentru a te ajuta să îți atingi obiectivele în siguranță.",
  },
  {
    id: 3,
    icon: Clock,
    title: "Îndrumare 24/7",
    description:
      "Fitness-ul tău nu doarme, și nici noi. Contactează-ne pe noi sau comunitatea oricând",
  },
  {
    id: 4,
    icon: Trophy,
    title: "Rezultate Garantate",
    description:
      "Metodele noastre testate și abordarea dedicată garantează că vei vedea schimbările dorite.",
  },
  {
    id: 5,
    icon: Heart,
    title: "Comunitate de Suport",
    description:
      "Alătură-te unei comunități de oameni cu aceleași obiective, care lucrează pentru a deveni cea mai bună versiune a lor.",
  },
  {
    id: 6,
    icon: Zap,
    title: "Expertiză",
    description:
      "De la HIIT la Yoga, avem experiență cu orice tip de antrenament. Păstrează lucrurile proaspete și descoperă-ți pasiunea.",
  },
];

export const interests = [
  "Slăbire",
  "Masă Musculară & Forță",
  "Nutriție & Planificare Alimentară",
  "Antrenament Personal 1 la 1",
  "Clase de Grup",
  "Coaching Online",
  "Altele",
];

export const memberships = [
  {
    title: "De Bază",
    price: "$29",
    period: "lună",
    description: "Perfect pentru începători care își încep călătoria în fitness",
    features: [
      "Deblochează toate planurile de antrenament",
      "Alege dintre mai multe diete",
      "Acces la comunitatea noastră privată",
      "Monitorizare fitness online",
    ],
  },
  {
    title: "Premium",
    price: "$59",
    period: "lună",
    description: "Alegerea noastră cea mai populară pentru pasionații de fitness",
    features: [
      "Sesiuni 1 la 1 săptămânal",
      "Alege-ți antrenorul preferat",
      "Înscrie-te la clasele comunității",
      "Fază de evaluare personalizată",
      "Planuri de antrenament personalizate",
      "Recomandări de nutriție și dietă",
    ],
    popular: true,
  },
  {
    title: "Elite",
    price: "$99",
    period: "lună",
    description: "Pentru cei cu adevărat dedicați",
    features: [
      "Suport din partea antrenorului 24/7",
      "Verificări zilnice",
      "Sesiuni de antrenament personal",
      "Analize detaliate despre performanța ta",
      "Analiză lunară a compoziției corporale",
      "Sfaturi și trucuri de nișă",
    ],
  },
];
