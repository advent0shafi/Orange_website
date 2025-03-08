"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SectionA1() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My_works-vOTf3Lwxph2rxBegPx7UdsaHZCHBt5.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-4 md:px-6 lg:px-8">
        <div className="container mx-auto px-4 flex flex-col justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h1 className="mb-6 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              We create digital experiences that matter
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/80">
              Our team of experts combines strategic thinking with technical expertise to deliver solutions that drive
              business growth and user engagement.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-none border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-none border border-transparent bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                View our work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs text-white/70">Scroll</span>
          <div className="h-10 w-[1px] bg-white/30" />
        </div>
      </motion.div>
    </section>
  )
}

