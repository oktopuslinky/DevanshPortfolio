"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Get to know me better</p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative h-80 w-full max-w-md overflow-hidden rounded-lg shadow-xl">
              <img src="/cengage_presentation_all_happy.png" alt="About Me" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              I'm a full-stack developer with a passion for machine learning, driven by a love for solving complex problems 
              and creating innovative solutions. My tech journey began unexpectedly at age 9, when I accidentally stumbled upon the computer 
              science section on Khan Academy. Somewhere between chasing missing semicolons and being berated by warnings from Oh Noes, the Error Buddy,
              I fell in love with the art of problem solving and bringing ideas to life through code.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Over the years, I've developed expertise in building responsive, user-friendly web applications and delving 
              into machine learning to create smarter, more dynamic systems. I believe that great technology combines technical 
              skill with creativity, ensuring that every project is both functional and engaging.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              When I'm not coding, you'll find me at the gym, experimenting in the kitchen with new recipes, or making cool 
              videos for Cengage's social media as one of fewer than 100 student ambassadors for the company. I'm always eager 
              to learn, create, and explore new challenges both in tech and in life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
