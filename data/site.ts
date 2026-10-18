// ✏️ EDIT THIS FILE ONLY — all your content lives here.
export const site = {
  name: "Khalil Etana",
  role: "Industrial Engineering student & full-stack web developer",
  bio: "I'm an Industrial Engineering student at Wollega University (Shambu Campus) in Nekemte, Ethiopia, and a web development enthusiast. I combine engineering thinking with software to build practical, data-driven solutions to real problems. My approach: understand, build, test, improve, share.",
  email: "khaliletana641@gmail.com",
  photo: "/photo.jpg",
  links: [
    { label: "Blog", href: "https://khalilettanamoh.blogspot.com" },
    { label: "YouTube", href: "https://youtube.com/@khaliletanatech" },
    { label: "GitHub", href: "https://github.com/khaliletanamoh" },
    { label: "LinkedIn", href: "https://linkedin.com/in/khaliletanamohd" },
    { label: "Portfolio", href: "https://khaliletanaportfolio.vercel.app" },
  ],
  stack: {
    Web: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
    Tools: ["Git", "GitHub", "Supabase", "Vercel"],
    Engineering: ["Process improvement", "Productivity analysis", "Problem solving"],
  } as Record<string, string[]>,
  projects: [
    { title: "Khalil Engineering Calculator", period: "Personal project", text: "A compact scientific and engineering calculator with matrices, complex numbers, vectors, statistics, calculus, regression, unit conversion and dark/light mode.", tags: ["HTML", "CSS", "JavaScript"], image: "/calculator.png", href: "https://github.com/khaliletanamoh/khalil-engineering-calculator" },
    { title: "Personal Portfolio", period: "Personal project", text: "A responsive portfolio website that shows my skills, projects and links.", tags: ["Next.js", "React", "Tailwind CSS"], image: "/portfolio.png", href: "https://khaliletanaportfolio.vercel.app" },
  ],
  experience: [
    { title: "Industrial Engineering student, Wollega University", period: "Shambu Campus", text: "Studying industrial systems and process optimization, and applying them to software and data-driven projects." },
    { title: "Content creator", period: "Ongoing", text: "Shares projects and learning notes on the blog and on the YouTube channel Khalil Etana Voice." },
  ],
  achievements: [
    { title: "ORCID researcher profile", text: "Registered ORCID iD 0009-0005-5740-7324 for academic work." },
  ],
};
