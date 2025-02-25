"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Paperclip } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // Simple validation
    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted:", { ...formData, file })
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-[90px] ">
      <div className="rounded-lg bg-[#fffe55] p-8 md:p-12 relative">
        <h2 className="mb-12 text-center text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl absolute -top-14 left-1/2 -translate-x-1/2">
          Discuss
          <br />
          the project
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-8 mt-[56px]">
          <div className="space-y-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="NAME"
              className="w-full border-b border-black bg-transparent pb-2 placeholder:text-xs placeholder:text-black/60 focus:outline-none"
            />
            {errors.name && <p className="text-xs text-black/60">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL"
              className="w-full border-b border-black bg-transparent pb-2 placeholder:text-xs placeholder:text-black/60 focus:outline-none"
            />
            {errors.email && <p className="text-xs text-black/60">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              rows={4}
              className="w-full resize-none border-b border-black bg-transparent pb-2 placeholder:text-xs placeholder:text-black/60 focus:outline-none"
            />
            {errors.message && <p className="text-xs text-black/60">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="file-upload"
              className="group flex cursor-pointer items-center gap-2 text-xs hover:opacity-60"
            >
              <Paperclip className="h-4 w-4" />
              ATTACH A FILE
            </label>
            <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
            {file && <span className="text-xs text-black/60">{file.name}</span>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm text-white transition-colors hover:bg-black/80"
            >
              SUBMIT
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

