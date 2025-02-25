import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-8 bg-red-300 ">
          <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
            Our team consists of practitioners who have 15 years of experience in launching and managing projects
          </h2>

          <div className="space-y-8">
            <p className="text-sm leading-relaxed text-gray-600">
              We make our customers' products valuable in the eyes of customers. To do this, we analyze and study
              people, build long-term strategies for interacting with them, develop creative ideas and create a bright
              design. We use all opportunities to solve business problems.
            </p>

            <Link href="/about" className="group inline-flex items-center gap-2 text-sm font-medium">
              ABOUT US
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
            alt="Team member working"
            fill
            className="object-cover grayscale"
          />
          <button className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-110">
            <Play className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="text-4xl font-normal md:text-5xl">25</div>
          <div className="text-xs uppercase text-gray-600">Managers</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-normal md:text-5xl">200</div>
          <div className="text-xs uppercase text-gray-600">
            The Person
            <br />
            in the Team
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-normal md:text-5xl">15</div>
          <div className="text-xs uppercase text-gray-600">
            Years
            <br />
            Experience
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-normal md:text-5xl">7</div>
          <div className="text-xs uppercase text-gray-600">
            Awards and
            <br />
            Accolades
          </div>
        </div>
      </div>
    </section>
  )
}

