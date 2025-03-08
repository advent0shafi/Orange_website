import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectDetailProps {
  projectSlug: string;
}

export default function ProjectDetail({ projectSlug }: ProjectDetailProps) {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* Mobile & Tablet Layout (up to lg breakpoint) */}
      <div className="block lg:hidden">
        <div className="px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-normal md:text-5xl">
                {projectSlug}
                <br />
                Photo
              </h1>
              <ArrowUpRight className="h-8 w-8 transform transition-transform hover:translate-x-1 hover:-translate-y-1" />
            </div>
            <p className="max-w-xl text-base text-gray-900">
              Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis
              hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel
              pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus
              definiebas.
            </p>
          </div>
        </div>
        <div className="relative h-[70vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655"
            alt="Nike Sneakers on yellow background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:block">
        <div className="grid min-h-screen grid-cols-2">
          {/* Left Content */}
          <div className="flex items-center p-12 xl:p-16">
            <div className="max-w-xl space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl font-normal xl:text-7xl">
                  Nike Sneakers
                  <br />
                  Photo
                </h1>
                <ArrowUpRight className="h-8 w-8 transform transition-transform hover:translate-x-1 hover:-translate-y-1" />
              </div>
              <p className="text-base text-gray-900">
                Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis
                hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel
                pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus
                definiebas.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-screen">
          <Image
              src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1287&auto=format&fit=crop"
              alt="Nike Sneakers on yellow background"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}

