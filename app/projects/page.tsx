"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import SmoothScroll from "@/components/smoothscroll"

const projectData = [
    {
        id: 1,
        title: "The Coder'z",
        description: "One stop platform for knowledge and support for computer science students",
        image: "/thecoderz.png",
        link: "https://thecoderz.in.net",
        industry: "Education",
        technologies: ["Next.js", "React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Logistics Center",
        description: "An innovative startup to simplify the global logistics and freight management needs.",
        image: "/logistics.png",
        link: "https://logistics-website-atju.onrender.com/",
        industry: "Logistics",
        technologies: ["React", "Express", "PostgreSQL", "Docker"]
    },
    {
        id: 3,
        title: "M.P. Solutions",
        description: "A central place to look for all the medicine that you need at one place",
        image: "/mpsolutions.png",
        link: "https://mpsolutions.vercel.app/",
        industry: "Healthcare",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"]
    },
    {
        id: 4,
        title: "EcoTrack",
        description: "Sustainability monitoring and reporting platform for businesses",
        image: "/ecotrack.png",
        link: "#",
        industry: "Environmental",
        technologies: ["Vue.js", "Python", "Django", "PostgreSQL"]
    },
    {
        id: 5,
        title: "FinTech Pro",
        description: "Modern banking and investment management platform",
        image: "/fintech.png",
        link: "#",
        industry: "Finance",
        technologies: ["React", "Node.js", "MongoDB", "Redis"]
    },
    {
        id: 6,
        title: "SmartRetail",
        description: "AI-powered inventory and sales management system",
        image: "/retail.png",
        link: "#",
        industry: "Retail",
        technologies: ["React", "Python", "TensorFlow", "PostgreSQL"]
    }
];

const industries = Array.from(new Set(projectData.map(project => project.industry)));

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

    const filteredProjects = selectedIndustry
        ? projectData.filter(project => project.industry === selectedIndustry)
        : projectData;

    return (
        <SmoothScroll>
            <div className="min-h-screen">
                <section className="relative py-32 bg-white dark:bg-neutral-950 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            animate={{
                                x: [0, 200, 0],
                                y: [0, -150, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-neutral-400/15 to-slate-400/15 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                x: [0, -150, 0],
                                y: [0, 200, 0],
                                scale: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-slate-400/20 to-neutral-400/20 rounded-full blur-3xl"
                        />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Badge className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black border-0 mb-6">
                                    <Code2 className="w-4 h-4 mr-2" />
                                    Our Projects
                                </Badge>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight"
                            >
                                Transforming Ideas into
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-slate-600 dark:from-neutral-400 dark:to-slate-400">
                                    Digital Realities
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                            >
                                Dive into our diverse portfolio of cutting-edge projects crafted with precision, performance, and purpose. From startups to enterprises — we deliver innovation that speaks for itself.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-8 flex justify-center gap-4 flex-wrap"
                            >
                                <Link href="/#contact">
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
                                            Contact Us
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-4 justify-center mb-16"
                        >
                            <Button
                                variant={selectedIndustry === null ? "default" : "outline"}
                                onClick={() => setSelectedIndustry(null)}
                                className="rounded-xl"
                            >
                                All Projects
                            </Button>
                            {
                                industries.map((industry) => (
                                    <Button
                                        key={industry}
                                        variant={selectedIndustry === industry ? "default" : "outline"}
                                        onClick={() => setSelectedIndustry(industry)}
                                        className="rounded-xl"
                                    >
                                        {industry}
                                    </Button>
                                ))
                            }
                        </motion.div>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {
                                filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        variants={item}
                                        className="group relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-2xl border border-teal-200/30 dark:border-teal-800/30 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 overflow-hidden"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${index % 3 === 0 ? 'from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10' :
                                            index % 3 === 1 ? 'from-teal-500/20 to-emerald-500/20 dark:from-teal-500/10 dark:to-emerald-500/10' :
                                                'from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10'
                                            } opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        <div className="relative p-6">
                                            <div className="aspect-[16/9] overflow-hidden rounded-xl">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={1920}
                                                    height={1080}
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="mt-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                        {project.title}
                                                    </h3>
                                                    <Badge variant="secondary" className="text-sm">
                                                        {project.industry}
                                                    </Badge>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {project.description}
                                                </p>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {
                                                        project.technologies.map((tech) => (
                                                            <Badge key={tech} variant="outline" className="text-xs">
                                                                {tech}
                                                            </Badge>
                                                        ))
                                                    }
                                                </div>
                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <Button
                                                            variant="outline"
                                                            className="rounded-xl border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                                                        >
                                                            View Project
                                                            <ArrowRight className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <Button
                                                            variant="ghost"
                                                            className="rounded-xl text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                                                        >
                                                            Live Demo
                                                            <ExternalLink className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </section>
            </div>
        </SmoothScroll>
    )
}
