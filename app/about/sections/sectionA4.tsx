"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  linkedin: string
  twitter: string
  facebook: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "SAM FLEX",
    role: "Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    id: 2,
    name: "LISA WONG",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    id: 3,
    name: "DAVID MILLER",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    id: 4,
    name: "SARAH JOHNSON",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    id: 5,
    name: "JAMES WILSON",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
]

export default function TeamSlider() {
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
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl font-normal md:text-5xl lg:text-6xl">Our magic team</h2>

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
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="hide-scrollbar flex gap-6 overflow-x-auto pb-8"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative flex-shrink-0 overflow-hidden"
              style={{
                width: member.id % 2 === 0 ? "280px" : "320px",
                height: member.id % 3 === 0 ? "400px" : "350px",
              }}
            >
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-[#fffe55] p-6"
              >
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="mb-4 text-sm">{member.role}</p>

                <div className="flex gap-4">
                  <Link href={member.linkedin} className="text-black hover:opacity-70">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link href={member.facebook} className="text-black hover:opacity-70">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                  <Link href={member.twitter} className="text-black hover:opacity-70">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
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

