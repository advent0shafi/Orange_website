import Image from "next/image"
import Link from "next/link"

interface Client {
  id: number
  name: string
  logo: string
  url: string
}

const clients: Client[] = [
  {
    id: 1,
    name: "Verge Analytics",
    logo: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=300&h=150&fit=crop&auto=format&q=80",
    url: "https://example.com/verge",
  },
  {
    id: 2,
    name: "Sphere Global",
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=300&h=150&fit=crop&auto=format&q=80",
    url: "https://example.com/sphere",
  },
  {
    id: 3,
    name: "Nexus Innovations",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&auto=format&q=80",
    url: "https://example.com/nexus",
  },
  {
    id: 4,
    name: "Quantum Studio",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&auto=format&q=80",
    url: "https://example.com/quantum",
  },
]

export default function ClientLogos() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-normal md:text-3xl">Trusted by industry-leading companies</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {clients.map((client) => (
            <Link key={client.id} href={client.url} className="group flex items-center justify-center">
              <div className="relative h-8 w-40 transition-opacity duration-300 group-hover:opacity-70">
                {/* For real client logos, use proper SVGs instead of images when possible */}
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Alternative to using Unsplash images - custom logos */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-medium">behr</span>
              <span className="block text-xs text-gray-500">HANDELSAGENTUR</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold">cw</div>
              <span className="text-sm">christopher willis</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="block text-xs text-gray-500">CREATIVE SPACE FOR TECHNICAL</span>
              <span className="block text-xs text-gray-500">INNOVATIONS V.</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <span className="text-base font-medium">ARTCHIVE</span>
              <span className="block text-xs text-gray-500">CRAFTS GALLERY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

