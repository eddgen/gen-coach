import img1 from "./assets/images/carousel-assets/1.jpeg";
import img2 from "./assets/images/carousel-assets/2.jpeg";
import img3 from "./assets/images/carousel-assets/3.jpeg";
import img4 from "./assets/images/carousel-assets/4.jpeg";
import img5 from "./assets/images/carousel-assets/5.jpeg";

import { Dumbbell, Users, Clock, Trophy, Heart, Zap } from "lucide-react";

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
    title: "State-of-the-Art Training",
    description: "Train with a perfect execution guided by us",
  },
  {
    id: 2,
    icon: Users,
    title: "Expert Trainers",
    description:
      "Our certified trainers provide personalized guidance to help you achieve your goals safely.",
  },
  {
    id: 3,
    icon: Clock,
    title: "24/7 Guidance",
    description:
      "Your fitness doesn't sleep, and neither do we. Contact us or the community anytime",
  },
  {
    id: 4,
    icon: Trophy,
    title: "Results Guaranteed",
    description:
      "Our proven methods and dedicated approach ensure you'll see the changes you desire.",
  },
  {
    id: 5,
    icon: Heart,
    title: "Supportive Community",
    description:
      "Join a community of like-minded individuals all working towards their best selves.",
  },
  {
    id: 6,
    icon: Zap,
    title: "Expertise",
    description:
      "From HIIT to Yoga, we have experience with any type of training. You keep things fresh and discover your passion.",
  },
];

export const interests = [
  "Weight Loss",
  "Muscle Building & Strength",
  "Nutrition & Diet Planning",
  "1-on-1 Personal Training",
  "Group Classes",
  "Online Coaching",
  "Other",
];

export const memberships = [
  {
    title: "Basic",
    price: "$29",
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Unlock all the workout plans",
      "Choose from multiple diets",
      "Access our private community",
      "Online fitness tracking",
    ],
  },
  {
    title: "Premium",
    price: "$59",
    period: "month",
    description: "Our most popular choice for fitness enthusiasts",
    features: [
      "1 on 1 sessions weekly",
      "Choose your preferred coach",
      "Sign up in community classes",
      "Personalized assessment phase",
      "Personalized workout plans",
      "Nutrition and diet insights",
    ],
    popular: true,
  },
  {
    title: "Elite",
    price: "$99",
    period: "month",
    description: "For the truly dedicated out there",
    features: [
      "24/7 coach support",
      "Daily check ins",
      "Personal training sessions",
      "Detailed insights about your performance",
      "Monthly body composition analysis",
      "Niche tips and tricks",
    ],
  },
];
