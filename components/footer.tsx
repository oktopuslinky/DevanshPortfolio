import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white py-12 dark:bg-gray-950">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
