"use client"

import SmoothScroll from "@/components/smoothscroll"
import {
    ArrowUpRight, Linkedin, Twitter, Code2, Users, Globe, Zap
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
    motion, useScroll, useTransform, Variants
} from "framer-motion"
import { useRef } from "react"

const values = [
    {
        icon: <Zap className="w-6 h-6" />,
        header: "01_INNOVATION",
        title: "Technical Velocity",
        description: "We don't just write code; we engineer velocity. Pushing boundaries with bleeding-edge stacks to solve complex problems.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        header: "02_SYNERGY",
        title: "Collective Intelligence",
        description: "A hive-mind approach to development. Open communication loops between engineering, design, and product.",
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        header: "03_PRECISION",
        title: "Pixel Perfection",
        description: "Zero compromise on quality. We obsess over the micro-interactions that define the macro experience.",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        header: "04_IMPACT",
        title: "Global Scale",
        description: "Architecting systems designed to handle global traffic and deliver real-world impact from day one.",
    },
]

const milestones = [
    { year: "2019", title: "GENESIS", description: "Shunya Tech founded. The vision was simple: Code is art." },
    { year: "2020", title: "TRACTION", description: "Secured first 10 major enterprise contracts." },
    { year: "2021", title: "SCALING", description: "Launched internal product labs. Team grew to 15 engineers." },
    { year: "2023", title: "DOMINANCE", description: "150+ Projects delivered. Recognized for high-performance web systems." },
    { year: "2024", title: "GLOBAL", description: "Expanded operations to international markets." },
]

const teamMembers = [
    {
        name: "Kratik Singh",
        role: "CO-FOUNDER & CEO",
        bio: "The strategic mind behind Shunya. Orchestrating the vision and steering the agency towards global innovation.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        linkedin: "#",
        colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
        name: "Aman Singh",
        role: "CO-FOUNDER & DIRECTOR",
        bio: "Ensuring operational excellence and driving the company's long-term growth strategies.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        linkedin: "#",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        name: "Niraj Jha",
        role: "CO-FOUNDER & CTO",
        bio: "Full-stack architect and technical visionary. Building the engineering culture and setting the tech stack standards.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        linkedin: "https://linkedin.com/in/nirajjha",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        name: "Harsh Pandey",
        role: "CHIEF OPERATING OFFICER",
        bio: "The engine room. Managing workflows, resources, and ensuring delivery timelines are met with precision.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        linkedin: "#",
        colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
        name: "Sarah Jenkin",
        role: "HEAD OF PRODUCT",
        bio: "Translating complex user needs into seamless digital experiences.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        linkedin: "#",
        colSpan: "md:col-span-1"
    },
    {
        name: "David Chen",
        role: "LEAD VIDEO EDITOR",
        bio: "Crafting visual narratives that tell the story behind the code.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        linkedin: "#",
        colSpan: "md:col-span-1"
    },
    {
        name: "Elena Rodriguez",
        role: "SENIOR FRONTEND",
        bio: "Pixel-perfect implementation of complex UI systems.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        linkedin: "#",
        colSpan: "md:col-span-1"
    }
]

// --- Animation Variants (Typed to fix TS Error) ---

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function AboutPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <SmoothScroll>
            <main ref={containerRef} className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-black dark:selection:text-white transition-colors duration-300">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />
                </div>
                <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-200/50 dark:bg-neutral-800/30 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 tracking-wider">SYSTEM STATUS: ONLINE</span>
                        </motion.div>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
                        >
                            <motion.span variants={fadeInUp} className="block text-neutral-400 dark:text-neutral-500">ENGINEERING</motion.span>
                            <motion.span variants={fadeInUp} className="block text-neutral-900 dark:text-white">THE FUTURE</motion.span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            Shunya Tech is a digital product agency. We combine strategic thinking with
                            high-performance engineering to build systems that matter.
                        </motion.p>
                    </div>
                    <motion.div
                        style={{ y }}
                        className="absolute bottom-10 left-0 w-full flex justify-center text-neutral-400 dark:text-neutral-600"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll to Explore</span>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-400 to-transparent dark:from-neutral-600" />
                        </div>
                    </motion.div>
                </section>
                <section className="py-24 md:py-32 px-6 relative z-10 border-t border-neutral-200 dark:border-neutral-900 bg-white/80 dark:bg-neutral-950/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-neutral-900 dark:text-white">
                                Built on <span className="text-neutral-400 dark:text-neutral-500">First Principles</span>.
                            </h2>
                            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                <p>
                                    At Shunya Tech, we reject the noise. We believe that great technology is silent—it works so well
                                    you don't notice the complexity behind it.
                                </p>
                                <p>
                                    What started as a small collective of obsessive developers has evolved into a powerhouse
                                    engineering firm. We don't just "build websites"; we architect digital ecosystems that
                                    scale, perform, and endure.
                                </p>
                                <div className="pt-8 flex gap-8 border-t border-neutral-200 dark:border-neutral-800 mt-8">
                                    <div>
                                        <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">50+</h3>
                                        <p className="text-xs font-mono text-neutral-500 uppercase">Enterprise Clients</p>
                                    </div>
                                    <div className="w-[1px] h-full bg-neutral-200 dark:bg-neutral-800" />
                                    <div>
                                        <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">99%</h3>
                                        <p className="text-xs font-mono text-neutral-500 uppercase">Retention Rate</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-video lg:aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 group shadow-2xl shadow-neutral-200/50 dark:shadow-black/50"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-80 dark:opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs font-mono text-neutral-300 mb-2">CURRENT MISSION</p>
                                        <h3 className="text-2xl font-bold">Redefining Digital Landscapes</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md hover:bg-white hover:text-black transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                <section className="py-24 px-6 border-t border-neutral-200 dark:border-neutral-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Our DNA</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">The Code We Live By</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                values.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900/50 transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-3 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                                {item.icon}
                                            </div>
                                            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-500 transition-colors">
                                                {item.header}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{item.title}</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section id="team" className="py-24 px-6 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">The Architects</h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl">
                                    Meet the minds behind the machines. A collective of founders, engineers, and creators.
                                </p>
                            </div>
                            <button className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 text-sm font-medium text-neutral-900 dark:text-white">
                                Join the Collective
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                teamMembers.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`group relative overflow-hidden rounded-3xl bg-neutral-200 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ${member.colSpan || ''} min-h-[400px]`}
                                    >
                                        <div className="absolute inset-0">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                        </div>
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="relative z-10">
                                                <div className="inline-block mb-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                                    <span className="text-[10px] font-mono uppercase tracking-wider text-white">
                                                        {member.role}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                                                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                                    <p className="text-neutral-300 text-sm font-light leading-relaxed mb-4">
                                                        {member.bio}
                                                    </p>
                                                    <div className="flex gap-4">
                                                        <Link href={member.linkedin} className="text-white hover:text-neutral-400 transition-colors">
                                                            <Linkedin className="w-5 h-5" />
                                                        </Link>
                                                        <button className="text-white hover:text-neutral-400 transition-colors">
                                                            <Twitter className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="py-24 px-6 border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Execution Timeline</h2>
                        </div>
                        <div className="relative">
                            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                            <div className="text-4xl font-bold text-neutral-100 dark:text-neutral-800/20 absolute -z-10 select-none transform translate-y-[-10px] md:translate-x-0">
                                                {milestone.year}
                                            </div>
                                            <span className="text-xs font-mono text-neutral-500 mb-2 block">{milestone.year}</span>
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{milestone.title}</h3>
                                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{milestone.description}</p>
                                        </div>
                                        <div className="absolute left-[11px] md:left-1/2 top-1.5 w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-200 -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                                        <div className="hidden md:block md:w-1/2" />
                                    </motion.div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-32 px-6 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-neutral-900 dark:text-white">
                            Ready to build<br />the impossible?
                        </h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 font-light">
                            We are looking for partners, not just clients. If you want to build the future, let's talk.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all text-lg shadow-lg hover:shadow-xl">
                                Start a Project
                            </button>
                            <button className="px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all text-lg">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </SmoothScroll>
    )
}