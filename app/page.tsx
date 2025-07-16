import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import ProjectsScroll from "@/components/projects-scroll"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <Hero />
      <ProjectsScroll />
      <About />
      <Skills />
      <Contact />
      {/*<Footer />*/}
    </main>
  )
}
