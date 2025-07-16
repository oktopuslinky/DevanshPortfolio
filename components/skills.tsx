"use client"

import { motion } from "framer-motion"
//import { Code2, Database, Layout, Palette, Server, Smartphone, Terminal, TestTube, Wand2 } from "lucide-react"
import {Terminal, Hammer, Library, Code2} from "lucide-react"

const skills = [
  /*
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "Next.js", "Vue.js", "HTML5/CSS3", "JavaScript/TypeScript"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "Python", "Django", "PHP"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
  },
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX"],
  },
  {
    category: "Testing",
    icon: <TestTube className="h-6 w-6" />,
    items: ["Jest", "React Testing Library", "Cypress", "Selenium"],
  },
  {
    category: "Other",
    icon: <Wand2 className="h-6 w-6" />,
    items: ["GraphQL", "REST API", "WebSockets", "OAuth", "JWT"],
  */

  {
    category: "Languages",
    icon: <Terminal className="h-6 w-6" />,
    items: ["C", "C++", "Python", "Java", "JavaScript", "SQL", "SQLite", "HTML", "CSS", "Haskell", "Prolog", "Racket"]
  },
  {
    category: "Frameworks/Libraries",
    icon: <Library className="h-6 w-6" />,
    items: ["React", "Flutter", "Flask", "jQuery", "MySQL", "SQLite", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Google APIs"]
  },
  {
    category: "Tools",
    icon: <Hammer className="h-6 w-6" />,
    items: ["DataDog", "Postman", "Git", "FastAPI", "Figma", "Docker"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">My Skills</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Technologies and tools I work with</p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Code2 className="mr-2 h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
