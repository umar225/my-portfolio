import type { SkillCategory } from "../types";

export const skills: SkillCategory[] = [
  {
    category: "Automation",
    items: ["Playwright", "Cypress", "TypeScript", "JavaScript"],
    icon: "Terminal",
  },
  {
    category: "Testing",
    items: [
      "E2E Testing",
      "Exploratory Testing",
      "Black Box Testing",
      "API Testing",
      "Performance Testing",
    ],
    icon: "Cpu",
  },
  {
    category: "DevOps",
    items: ["CI/CD (Jenkins/GitHub Actions)", "Git", "Docker", "Postman"],
    icon: "Code2",
  },
  {
    category: "Architecture",
    items: [
      "Test Architecture",
      "POM Framework",
      "Software Design Principles",
      "REST APIs",
    ],
    icon: "Layers",
  },
];
