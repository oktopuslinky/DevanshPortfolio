"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">Devansh Agrawal</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              An AI/ML enthusiast and passionate full-stack developer specializing in building exceptional digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="mt-8 flex space-x-6">
              <Link href="https://github.com/oktopuslinky" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/devanshagrawal2026" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/*<Link href="mailto:your.email@example.com">
                <Mail className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
                <span className="sr-only">Email</span>
              </Link>*/}
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img src="/me2.png" alt="Devansh Agrawal" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link href="#projects" className="flex flex-col items-center">
            <span className="mb-2 text-sm text-gray-600 dark:text-gray-400">Scroll Down</span>
            <ArrowRight className="h-5 w-5 rotate-90 text-gray-600 dark:text-gray-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
