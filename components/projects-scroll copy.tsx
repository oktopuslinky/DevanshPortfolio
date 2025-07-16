"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useMobile } from "@/hooks/use-mobile"
import { DialogDescription } from "@radix-ui/react-dialog"

// Sample project data with additional video field
const projects = [
  {
    id: 1,
    title: "Roomie",
    description: "Tool to assist users in finding open rooms at the University of Texas at Dallas.",
    details: "/details/roomie.txt",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=TST5XnsnWGM", // Add your video URL here
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Kandles11/Roomie",
  },
  {
    id: 2,
    title: "TravelTactics",
    description: "A Flutter application that assists users in navigating new cities.",
    details: `
    Team project built with Google Maps, Places, and Photos APIs to help users discover nearby restaurants, attractions, and custom search results. Users can view location photos, explore map markers, and launch Google Maps navigation directly from the app.
    `,
    contributions: [
      "Implemented the Google Maps/Places/Photos API integration for location search and display",
      "Developed the user interface for displaying search results and location details",
    ],
    //"Leverages OpenAI's GPT model for content generation, with a custom prompt engineering system and user-friendly interface. Includes content optimization and export features.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder-video.mp4",
    tags: ["Google API"],
    demoUrl: "https://traveltactics.vercel.app/",
    githubUrl: "https://github.com/UTD-Fall-2024-Sec-7/Group_1_Phase1",
  },
  {
    id: 3,
    title: "Opticlarity",
    description: "A machine learning-powered application that allows opthalmologists to quickly detect eye diseases from retinal images.",
    details: `
      Team project developed for AIM Spring 2025, a mentorship program within AIS (Artificial Intelligence Society) at The University of Texas at Dallas.
      The application uses trained deep learning image classification models to detect eye diseases from 4 different types of retinal scans: Fundus, OCT, slit lamp, and corneal topography.
    `,
    contributions: [
      "Implemented an 89% accurate fundus image classification model using Pytorch and ResNet50",
      "Presented the project at AIM night, a semesterly event showcasing AI/ML projects to an audience of judges and peers",
    ],
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder-video.mp4",
    tags: ["Pytorch", "Image Classification"],
    githubUrl: "https://github.com/saiperam/AIM-OptiClarity",
  },
  {
    id: 4,
    title: "FareSight",
    description: "A platform for property listings with virtual tours and mortgage calculator.",
    details: "Includes 3D virtual tour integration, advanced search filters, and an interactive mortgage calculator. Built with a focus on SEO and user experience.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder-video.mp4",
    tags: ["Vue.js", "Express", "PostgreSQL", "Google Maps API"],
  },
  {
    id: 5,
    title: "Hydraguard",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness progress.",
    details: "Features cross-platform support with React Native, GraphQL for efficient data fetching, and integration with wearable devices for real-time fitness tracking.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=xYZqlwhe8e0",
    tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "TaskMate",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness progress.",
    details: "Features cross-platform support with React Native, GraphQL for efficient data fetching, and integration with wearable devices for real-time fitness tracking.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder-video.mp4",
    tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/orgs/acm-projects/teams/taskmate"
  },
]

export default function ProjectsScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const isMobile = useMobile()

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  return (
    <section id="projects" className="py-20">
      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .details-button {
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateY(10px);
        }
        .card-container:hover .details-button {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Scroll horizontally to explore more!
          </p>
        </motion.div>

        <div className="relative">
          {!isMobile && (
            <>
              <Button
                variant="outline"
                size="icon"
                className={`absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full ${
                  !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full ${
                  !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}

          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full min-w-[300px] max-w-sm flex-shrink-0 snap-center sm:min-w-[350px] md:min-w-[400px] card-container"
              >
                <Card style={{ height: "500px", overflowY: "auto" }}>
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="details-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white border-none backdrop-blur-sm"
                      onClick={() => openModal(project)}
                      aria-label="View project details"
                    >
                      View Details
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter
                    className={`flex gap-2 ${
                      project.githubUrl && project.demoUrl
                        ? "justify-between"
                        : "justify-center"
                    }`}
                  >
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="video-container">
                {selectedProject?.videoUrl.includes("youtube.com") ? (
                  <iframe
                    src={selectedProject.videoUrl.replace("watch?v=", "embed/")}
                    title={selectedProject.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={selectedProject?.videoUrl}
                    title={selectedProject?.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                    controls
                    autoPlay
                    muted
                    loop
                  />
                )}
              </div>
              <div className="prose dark:prose-invert">
                <b><h3>Project Details</h3></b>
                <p>{selectedProject?.details}</p>
                <br></br>
                {selectedProject?.contributions && (
                  <>
                    <b><DialogDescription>Personal Contributions</DialogDescription></b>
                    <ul className="list-disc pl-5">
                      {selectedProject.contributions.map((contribution, index) => (
                        <li key={index}>{contribution}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="flex gap-4 mt-4">
                  {selectedProject?.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  { selectedProject?.demoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                    )
                  }
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}