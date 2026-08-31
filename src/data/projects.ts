import type { Project } from "../types";
import mamasPapasImg from "../assets/mamas-papas.png";

export const projects: Project[] = [
  {
    title: "Smoke Test Sheet Automation",
    description:
      "A robust solution for automating smoke test sheet updates, seamlessly integrating CI/CD pipelines with Google Sheets for real-time synchronization.",
    tags: ["CI/CD", "JavaScript", "Automation"],
    link: "https://github.com/umar225/SmokeTestSheetAutomation",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Amber Loyalty Programme",
    description:
      "Quality assurance for Al Tayer Group's premium loyalty programme across various stores and malls.",
    tags: ["Exploratory Testing", "Test Planning", "QA"],
    link: "https://www.altayer.com/amber",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Bloomingdale's UAE",
    description:
      "End-to-end testing for the luxury department store's digital presence in the Middle East.",
    tags: ["E2E Testing", "Exploratory Testing", "Retail"],
    link: "https://bloomingdales.ae/",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Bookado",
    description:
      "Rigorous testing for a platform focused on discovering tours, attractions, and activities.",
    tags: ["Black Box Testing", "Exploratory Testing", "Travel"],
    link: "https://bookado.co.uk/",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "GAP UAE",
    description:
      "Ensuring a seamless shopping experience for GAP's regional retail platform through comprehensive testing.",
    tags: ["Black Box Testing", "Exploratory Testing", "E-commerce"],
    link: "https://www.gap.ae/",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Mamas & Papas",
    description:
      "Quality assurance for the leading baby products and parenting solutions brand.",
    tags: ["E2E Testing", "Exploratory Testing", "QA"],
    link: "https://mamasandpapas.ae/",
    image: mamasPapasImg,
  },
  {
    title: "Vidivet",
    description:
      "Testing for a veterinary app connecting pet owners with trusted UK vets for reliable advice.",
    tags: ["Test Planning", "E2E Testing", "Healthcare"],
    link: "https://vidivet.com/vets",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800&h=600",
  },
];
