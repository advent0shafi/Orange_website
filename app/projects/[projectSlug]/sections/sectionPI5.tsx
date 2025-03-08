'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const relatedProjects = [
  {
    title: "Minimalist Design",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    slug: "minimalist-design",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    slug: "brand-identity",
  },
  {
    title: "Product Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    slug: "product-design",
  },
  {
    title: "UI/UX Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    slug: "ui-ux-design",
  },
]

export default function RelatedProjects() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-normal md:text-4xl"
        >
          Related Projects
        </motion.h2>

        <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4">
          {relatedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-[300px] flex-shrink-0 snap-start md:w-[400px]"
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{project.category}</p>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
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