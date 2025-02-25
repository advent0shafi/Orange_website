"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Service {
  id: string
  title: string
  description: string
  extendedDescription: string
  images: {
    main: string
    secondary: string
  }
}

const services: Service[] = [
  {
    id: "design",
    title: "Design",
    description:
      "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
    extendedDescription:
      "In the design process, we create both functional and beautiful things. Our team excels in translating complex requirements into intuitive user experiences that delight and engage users across all platforms.",
    images: {
      main: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
      secondary: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1",
    },
  },
  {
    id: "development",
    title: "Development",
    description:
      "We make our customers' products valuable in the eyes of customers. To do this, we analyze and study people, build long-term strategies for interacting with them, develop creative ideas and create a bright design.",
    extendedDescription:
      "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    images: {
      main: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      secondary: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
  },
  {
    id: "graphic",
    title: "Graphic",
    description:
      "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
    extendedDescription:
      "Our graphic design team combines artistic vision with strategic thinking to create visually compelling solutions that communicate your brand's message effectively and memorably.",
    images: {
      main: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      secondary: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    },
  },
  {
    id: "wordpress",
    title: "Wordpress",
    description:
      "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
    extendedDescription:
      "We create powerful and flexible WordPress solutions that give you complete control over your content while maintaining the highest standards of performance and security.",
    images: {
      main: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      secondary: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    },
  },
]

export default function SectionH5() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="min-h-screen bg-black px-4 py-16 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">Our services</h2>

          <Link href="/services" className="group flex items-center gap-2 text-sm font-medium">
            VIEW ALL
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Services List */}
        <div className="divide-y divide-white/20">
          {services.map((service) => (
            <div key={service.id} className="py-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr,3fr,auto] md:gap-8">
                <h3 className="text-2xl font-normal md:text-3xl">{service.title}</h3>

                <p className="text-sm leading-relaxed text-white/80">{service.description}</p>

                <motion.button
                  onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                  className="ml-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedId === service.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="mt-8 space-y-8"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="grid gap-4 md:grid-cols-[3fr,2fr] md:gap-8">
                        <motion.div
                          className="relative aspect-[16/9] w-full overflow-hidden"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Image
                            src={service.images.main || "/placeholder.svg"}
                            alt={`${service.title} main image`}
                            fill
                            className="object-cover grayscale"
                          />
                        </motion.div>
                        <motion.div
                          className="relative aspect-square w-full overflow-hidden"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Image
                            src={service.images.secondary || "/placeholder.svg"}
                            alt={`${service.title} secondary image`}
                            fill
                            className="object-cover grayscale"
                          />
                        </motion.div>
                      </div>
                      <motion.p
                        className="max-w-3xl text-sm leading-relaxed text-white/80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {service.extendedDescription}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

