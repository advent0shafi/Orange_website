"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FooterContent() {
  return (
    <footer className="bg-[#fffe55] px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8">
              <Link href="/" className="text-3xl font-light tracking-wide text-white">
                <Image src="/logo_01.png" alt="logo" width={100} height={100} />
              </Link>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <Link href="tel:+34255216021" className="text-lg hover:underline">
              +3(425) 5216021
            </Link>
          </div>

          {/* Quick Links & Follow */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:underline">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/pages" className="text-sm hover:underline">
                    PAGES
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:underline">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:underline">
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-sm hover:underline">
                    PORTFOLIO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Follow</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://facebook.com" className="text-sm hover:underline">
                    FACEBOOK
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" className="text-sm hover:underline">
                    TWITTER
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com" className="text-sm hover:underline">
                    INSTAGRAM
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="text-sm hover:underline">
                    LINKEDIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Sign up to our newsletter</h3>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-MAIL"
                className="w-full border-b border-black bg-transparent pb-2 text-sm placeholder:text-black/60 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-0 top-0"
                type="submit"
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.button>
            </form>
            <p className="mt-4 text-xs">
              This site is protected by reCAPTCHA and the{" "}
              <Link href="https://policies.google.com/privacy" className="underline">
                Google Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="https://policies.google.com/terms" className="underline">
                Terms of Service
              </Link>{" "}
              apply.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-black/10 pt-8 md:flex-row">
          <p className="text-sm">© Centrix 2021. All Rights Reserved</p>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

