import Image from "next/image"

export default function ProjectDetails() {
  return (
    <section className="w-full bg-gray-100">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="px-4 py-8">
          <div className="relative mx-auto mb-8 aspect-square w-full max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop"
              alt="Nike sneaker floating"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-medium">01.</span>
                  <span className="text-lg">Date</span>
                </div>
                <span className="text-lg">15 January, 2021</span>
              </div>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-medium">02.</span>
                  <span className="text-lg">Designer</span>
                </div>
                <span className="text-lg">Paul</span>
              </div>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-medium">03.</span>
                  <span className="text-lg">Client</span>
                </div>
                <span className="text-lg">Themeforest</span>
              </div>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-medium">04.</span>
                  <span className="text-lg">Project type</span>
                </div>
                <span className="text-lg">Photography design</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Image */}
            <div className="relative aspect-square ">
              <Image
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop"
                alt="Nike sneaker floating"
                fill
                className="object-contain"
                sizes="50vw"
                priority
              />
            </div>

            {/* Right Details */}
            <div className="flex flex-col justify-center space-y-10">
              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-medium">01.</span>
                    <span className="text-xl">Date</span>
                  </div>
                  <span className="text-xl">15 January, 2021</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-medium">02.</span>
                    <span className="text-xl">Designer</span>
                  </div>
                  <span className="text-xl">Paul</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-medium">03.</span>
                    <span className="text-xl">Client</span>
                  </div>
                  <span className="text-xl">Themeforest</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-medium">04.</span>
                    <span className="text-xl">Project type</span>
                  </div>
                  <span className="text-xl">Photography design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

