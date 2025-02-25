"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const news = [
  {
    id: 1,
    title: "Product Design Evolution",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    link: "/news/product-design",
    aspectRatio: "aspect-square",
  },
  {
    id: 2,
    title: "A few words about us",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919",
    link: "/news/about-us",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 3,
    title: "Creative Process",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    link: "/news/creative-process",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 4,
    title: "Design Innovation",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    link: "/news/innovation",
    aspectRatio: "aspect-[4/3]",
  },
]

export default function SectionH6() {
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
    <section className="w-full bg-white px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-normal md:text-5xl lg:text-6xl">Latest news</h2>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-4 md:flex">
              <button
                onClick={() => scroll("left")}
                className={`group rounded-full p-2 transition-colors hover:bg-gray-100
                  ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!canScrollLeft}
              >
                <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={() => scroll("right")}
                className={`group rounded-full p-2 transition-colors hover:bg-gray-100
                  ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!canScrollRight}
              >
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <Link href="/news" className="group flex items-center gap-2 text-sm font-medium">
              VIEW ALL
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* News Slider */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="hide-scrollbar flex gap-4 overflow-x-auto md:gap-8"
        >
          {news.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`group relative flex-shrink-0 ${item.aspectRatio} w-[280px] overflow-hidden md:w-[400px]`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-end bg-[#fffe55]/90 p-6 opacity-0 transition-opacity"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-medium text-black">{item.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-black" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
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

