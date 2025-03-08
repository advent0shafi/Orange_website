"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  category: string
  image: string
  aspectRatio: number
}

// Projects with verified working Unsplash images
const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Architecture",
    category: "REALISTIC BUILDING",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    aspectRatio: 3 / 4,
  },
  {
    id: 2,
    title: "Tropical Fruit",
    category: "BANANA",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    aspectRatio: 1 / 1,
  },
  {
    id: 3,
    title: "Paper Craft",
    category: "ABSTRACT LISTS",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    aspectRatio: 4 / 3,
  },
  {
    id: 4,
    title: "Fresh Produce",
    category: "GREEN ONION",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    aspectRatio: 3 / 2,
  },
  {
    id: 5,
    title: "Fruit Study",
    category: "REALISTIC BUILDING",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    aspectRatio: 3 / 4,
  },
  {
    id: 6,
    title: "Citrus Collection",
    category: "BANANA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    aspectRatio: 1 / 1,
  },
  {
    id: 7,
    title: "Botanical Study",
    category: "ABSTRACT LISTS",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    aspectRatio: 1 / 1,
  },
  {
    id: 8,
    title: "Essential Oils",
    category: "GREEN ONION",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
    aspectRatio: 3 / 2,
  },
  {
    id: 1,
    title: "Minimalist Architecture",
    category: "REALISTIC BUILDING",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    aspectRatio: 3 / 3,
  },
]

export default function MasonryGrid() {
  const [columns, setColumns] = useState(3)
  const masonryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  // Organize projects into columns for masonry layout
  const getProjectsInColumns = () => {
    const columnsArray = Array.from({ length: columns }, () => [] as Project[])

    // Distribute projects across columns
    projects.forEach((project, index) => {
      const columnIndex = index % columns
      columnsArray[columnIndex].push(project)
    })

    return columnsArray
  }

  const projectColumns = getProjectsInColumns()

  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={masonryRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-col gap-6">
              {column.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: project.id * 0.1 }}
                  className="overflow-hidden"
                >
                  <Link href={`/projects/${project.title}`} className="group block">
                    <div
                      className="relative overflow-hidden"
                      style={{
                        paddingBottom: `${(1 / project.aspectRatio) * 100}%`,
                      }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-medium">{project.category}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5L12 19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

