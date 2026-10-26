
 // EDIT THIS FILE ONLY — all your content lives here.
export const site = {
  name: "Khalil Etana",
  role: "Industrial Engineering student & full-stack web developer",

  bio: "I'm an Industrial Engineering student at Wollega University (Shambu Campus) in Ethiopia, and a web development enthusiast. I combine engineering thinking with software to build practical, data-driven solutions to real problems. My approach: understand, build, test, improve, share.",

  email: "khaliletana641@gmail.com",
  photo: "/photo.jpg",

  links: [
    {
      label: "Blog",
      href: "https://khalilettanamoh.blogspot.com",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@khaliletanatech",
    },
    {
      label: "GitHub",
      href: "https://github.com/khaliletanamoh",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khaliletanamohd",
    },
    {
      label: "Portfolio",
      href: "https://khaliletanaportfolio.vercel.app",
    },
  ],

  stack: {
    Web: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
    Tools: ["Git", "GitHub", "Supabase", "Vercel"],
    Engineering: [
      "Process improvement",
      "Productivity analysis",
      "Problem solving",
    ],
  } as Record<string, string[]>,

  projects: [
    {
      title: "Khalil Engineering Calculator",
      period: "Personal project",
      text: "A compact scientific and engineering calculator with matrices, complex numbers, vectors, statistics, calculus, regression, unit conversion and dark/light mode.",
      image: "/calculator.jpg",
      href: "https://khaliletanaportfolio.vercel.app",
    },
    {
      title: "Personal Portfolio",
      period: "Personal project",
      text: "A responsive portfolio website that shows my skills, projects and links.",
      image: "/portfolio.jpg",
      href: "https://khaliletanaportfolio.vercel.app",
    },
  ],

  experience: [
    {
      title: "Industrial Engineering student",
      period: "Shambu Campus",
      text: "Studying industrial systems, productivity, process improvement, and problem solving.",
    },
    {
      title: "Content creator",
      period: "Ongoing",
      text: "Shares projects and learning notes on the blog and on YouTube.",
    },
  ],

  achievements: [
    {
      title: "ORCID researcher profile",
      text: "Registered ORCID iD 0009-0005-5740-7324 for academic work.",
    },
  ],
};
