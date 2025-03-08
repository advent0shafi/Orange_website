"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Paperclip } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", { ...formData, file })
        // Handle form submission logic here
    }

    const handleAttachClick = () => {
        fileInputRef.current?.click()
    }



    return (
        <main className="min-h-screen w-full bg-white pt-20">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 md:block ">
                <div className="md:flex  w-full">
                    <div className="py-12 xl:py-16  md:w-1/2 w-full">
                        <div className="w-full">
                            <h1 className="mb-8 text-5xl font-normal xl:text-6xl">Contact</h1>

                            <p className="mb-12 text-base">
                                269 King Str, 05th Floor, Utral Hosue Building,
                                <br />
                                Melbourne, VIC 3000, Australia.
                            </p>

                            <div className="mb-4">
                                <Link href="tel:+34255216021" className="text-xl hover:underline">
                                    +3 (425) 521 60 21
                                </Link>
                            </div>

                            <div className="mb-12">
                                <Link href="mailto:INFO@CENTRIX.COM" className="text-xl uppercase hover:underline">
                                    INFO@CENTRIX.COM
                                </Link>
                            </div>

                            <div className="flex space-x-6">
                                <Link href="#" className="text-sm uppercase hover:underline">
                                    Facebook
                                </Link>
                                <Link href="#" className="text-sm uppercase hover:underline">
                                    Twitter
                                </Link>
                                <Link href="#" className="text-sm uppercase hover:underline">
                                    Instagram
                                </Link>
                                <Link href="#" className="text-sm uppercase hover:underline">
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 xl:py-16  md:w-1/2 w-full">
                        <div className="max-w-md bg-[#fffe55] p-12 xl:p-16">
                            <h2 className="mb-12 text-4xl font-normal">Contact</h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="NAME"
                                        className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/60 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="EMAIL"
                                        className="w-full border-b border-black bg-transparent pb-2 placeholder:text-black/60 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="MESSAGE"
                                        rows={4}
                                        className="w-full resize-none border-b border-black bg-transparent pb-2 placeholder:text-black/60 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        onClick={handleAttachClick}
                                        className="flex items-center gap-2 text-sm hover:opacity-70"
                                    >
                                        <Paperclip className="h-4 w-4" />
                                        ATTACH A FILE
                                    </button>
                                    <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" />
                                    {file && <p className="mt-2 text-sm">{file.name}</p>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group flex items-center justify-between bg-black px-6 py-3 text-white"
                                    >
                                        <span>SUBMIT</span>
                                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            {/* Desktop Layout */}
       


            {/* Google Map */}
            <div className="h-[700px] w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096385!2d144.96092147650758!3d-37.81363647975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b8c21cb29b%3A0x1c045678462e3510!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1689201718089!5i1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </main>
    )
}

