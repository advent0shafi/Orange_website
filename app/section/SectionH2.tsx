"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"

// Size variations for projects
type ProjectSize = {
  width: string
  height: string
  aspectRatio: string
  className: string
}

const sizesMap: Record<string, ProjectSize> = {
  extraLarge: {
    width: "w-[800px]",
    height: "h-[600px]",
    aspectRatio: "aspect-[4/3]",
    className: "md:col-span-3",
  },
  large: {
    width: "w-[600px]",
    height: "h-[600px]",
    aspectRatio: "aspect-square",
    className: "md:col-span-2",
  },
  medium: {
    width: "w-[400px]",
    height: "h-[500px]",
    aspectRatio: "aspect-[4/5]",
    className: "md:col-span-1",
  },
  small: {
    width: "w-[300px]",
    height: "h-[400px]",
    aspectRatio: "aspect-[3/4]",
    className: "md:col-span-1",
  },
}

const projects = [
  {
    id: 1,
    title: "WATER BOTTLE",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "extraLarge",
  },
  {
    id: 2,
    title: "COPENHAGEN",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    size: "medium",
  },
  {
    id: 3,
    title: "KODAK",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe",
    size: "small",
  },
  {
    id: 4,
    title: "EXOAPE",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    size: "large",
  },
  {
    id: 5,
    title: "MINIMAL",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    size: "medium",
  },
  {
    id: 6,
    title: "STUDIO",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    size: "small",
  },
] as const

export default function SectionH2() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = direction === "left" ? -400 : 400
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <section className="w-full bg-[#f8f8f8] px-4 py-16 md:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-normal md:text-4xl lg:text-5xl">Our latest projects</h2>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-4 md:flex">
            <button
              className={`group rounded-full p-2 transition-colors hover:bg-gray-100 
                ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            >
              <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              className={`group rounded-full p-2 transition-colors hover:bg-gray-100
                ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
            >
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <Link href="/projects" className="group flex items-center gap-2 text-sm font-medium">
            VIEW ALL
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Projects Slider */}
      <div ref={scrollContainerRef} onScroll={handleScroll} className="hide-scrollbar flex gap-16 overflow-x-auto">
        {projects.map((project) => {
          const sizeConfig = sizesMap[project.size]

          return (
            <Link
              key={project.id}
              href={`/projects/${project.title.toLowerCase()}`}
              className={`group flex-shrink-0 ${sizeConfig.width}`}
            >
              <div className="relative mb-4 overflow-hidden">
                <div className={`${sizeConfig.height} relative overflow-hidden`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${sizeConfig.aspectRatio}`}
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-white p-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono">{project.title}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          )
        })}
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

