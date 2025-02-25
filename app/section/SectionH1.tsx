import Image from "next/image";
import Link from "next/link";

export default function SectionH1() {
  return (
    <div>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Team meeting"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center ">
          <div className="container mx-auto px-4  flex flex-col justify-center items-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl text-center md:text-6xl lg:text-7xl font-montreal font-medium text-white mb-6">
                <span className="text-yellow-300">Nobody</span>
                <br />
                doesn't look
                <br />
                advertising
              </h1>
              <p className="text-lg md:text-sm text-center font-montreal text-gray-200 mb-8">
                People watch what they're interested in.
                <br />
                And only sometimes it's advertising.
              </p>
              <div className="flex flex-col justify-center items-center">
                <Link
                  href="/learn-more"
                  className="inline-flex items-center px-8 py-3 bg-yellow-300 text-gray-900 font-medium rounded hover:bg-yellow-400 transition-colors"
                >
                  LEARN MORE
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
