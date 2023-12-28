import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Noé Vernier",
  initials: "NV",
  location: "Paris, France, CET",
  locationLink: "https://www.google.com/maps/place/Paris",
  about:
    "Software engineering student at Télécom Paris in France.",
  summary:
    "An enthusiastic software and machine learning mathematics student, I am deeply passionate about artificial intelligence. Proficient in Python, I specialize in utilizing libraries such as PyTorch, TensorFlow, and scikit-learn for machine learning applications. My dedication lies in advancing AI capabilities and leveraging mathematical concepts for innovative solutions.",
  avatarUrl: "https://media.licdn.com/dms/image/C4D03AQH3Tnn5CmbbPQ/profile-displayphoto-shrink_800_800/0/1667925712176?e=1709164800&v=beta&t=tpo-hsnCbc3zGknigt21LlYx2MAvXxZcbSmPZU4rgn0",
  personalWebsiteUrl: "https://noevernier.github.io",
  contact: {
    email: "noe.vernier@telecom-paris.fr",
    tel: "+33 7 87 12 86 68",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/noevernier",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/noe-vernier/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/NoeVernier",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Télécom Paris, Institut Polytechnique de Paris",
      degree: "B.S. in Computer Science and & Engineering, MSc in Applied Mathematics",
      start: "2022",
      end: "2025",
    },
    {
        school: "Lyceé Blaise Pascal",
        degree: "B.S. in Mathematics & Physics",
        start: "2020",
        end: "2022",
      },
  ],
  work: [
    {
      company: "Rezel AI",
      link: "https://github.com/RezelAI",
      badges: ["Club"],
      title: "Treasurer",
      start: "2023",
      end: "2024",
      description:
        "Established a student association devoted to championing AI and machine learning, directing informative workshops spanning machine learning, deep learning, and computer vision topics",
    },
    {
      company: "Telecom Business & Finance",
      link: "https://telecom-business-finance.com",
      badges: ["Club"],
      title: "Secretary General",
      start: "2023",
      end: "2024",
      description:
        "Key member of an association fostering connections between students and professionals in finance, business, and entrepreneurship. Orchestrated and guided workshops centered on quantitative finance and blockchain, providing practical, hands-on experience to participants.",
    },
    {
      company: "SOeMAN",
      link: "https://soeman.fr/",
      badges: ["Internship"],
      title: "AI Developer Intern",
      start: "2023",
      end: "2023",
      description:
        "Led the creation of a conversational agent by leveraging state-of-the-art language models such as LLMs and BERT. Received commendation from stakeholders for enhancing user experience and optimizing CRM operations.",
    },
  ],
  skills: [
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "LLMs",
    "BERT",
    "PyTorch",
    "AI Strategy",
    "Quantitative Finance",
    "Transformers",
  ],
  projects: [
    {
      title: "LPVC 2023",
      techStack: [
        "Pytorch",
        "Computer Vision",
        "UAVs",
        "Deep Learning",
        "Segmentation",
      ],
      description: "Intensive two weeks project for the Low Computer Vision Challenge",
      link: {
        label: "github.com",
        href: "https://github.com/SunJacques/LPCVC-2023",
      },
    },
    {
      title: "MusiCoach",
      techStack: [ "Transformers", "Deep Learning", "Pytorch", "First Prize"],
      description:
        "AI-Powered Piano Composition Tool, using Transformers with self-attention",
      link: {
        label: "github.com",
        href: "https://github.com/noevernier/music-coach",
      },
    },
    {
      title: "Swarm Rescue",
      techStack: ["Side Project", "Competitive", "Python", "UAVs", "Exploration"],
      description:
        "Teach a swarm of drones how to behave to save a maximum of injured people in a minimum of time.",
      link: {
        label: "github.com",
        href: "https://github.com/noevernier/swarm-rescue",
      },
    },
    {
      title: "Convolutional Neural Network",
      techStack: ["Side Project", "Python", "Deep Learning", "CNNs"],
      description:
        "Little library to create and train a CNN from scratch",
      link: {
        label: "github.com",
        href: "https://github.com/noevernier/convolutional-neural-network",
      },
    }
  ],
} as const;
