import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-16">
        <h2 className="text-5xl font-montreal  font-normal tracking-tight">
          Our team consists of practitioners who have 15 years of experience in launching and managing projects
        </h2>

        <div className="flex gap-12">
          <div className="w-[191px] flex-shrink-0">
            <Link href="/about" className="inline-flex items-center gap-2 text-lg uppercase font-medium group">
              ABOUT US
              <div className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.6299 0.280273V7.78027H62.8419L0.629883 69.9933L5.91688 75.2803L68.1299 13.0683V60.2803H75.6299V0.280273H15.6299Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex-1">
            <p className="text-sm font-montreal leading-relaxed text-black/80">
              We make our customers&apos; products valuable in the eyes of customers. To do this, we analyze and study
              people, build long-term strategies for interacting with them, develop creative ideas and create a bright
              design. We use all opportunities to solve business problems.
            </p>
          </div>
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
          <button className="absolute left-8  -bottom-1 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-110">
            <Play className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="text-4xl font-mono font-normal md:text-5xl">25</div>
          <div className="text-xs uppercase font-mono text-gray-600">Managers</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-normal font-mono md:text-5xl">200</div>
          <div className="text-xs uppercase font-mono text-gray-600">
            The Person
            <br />
            in the Team
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-normal font-mono md:text-5xl">15</div>
          <div className="text-xs uppercase font-mono text-gray-600">
            Years
            <br />
            Experience
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-normal font-mono md:text-5xl">7</div>
          <div className="text-xs uppercase font-mono text-gray-600">
            Awards and
            <br />
            Accolades
          </div>
        </div>
      </div>
    </section>
  );
}
