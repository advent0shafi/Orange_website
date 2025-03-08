'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  {
    src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    aspectRatio: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    aspectRatio: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    aspectRatio: "aspect-[3/4]",
  },
]

export default function ProjectGallery() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-normal md:text-4xl"
        >
          Project Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative w-full overflow-hidden ${image.aspectRatio}`}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 