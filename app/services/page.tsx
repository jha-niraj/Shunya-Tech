"use client"

import { motion } from "framer-motion"
import {
    Smartphone, Globe, Cloud, Bot, ArrowRight, Check, Server, Shield, Database, Layout
} from "lucide-react"
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription
} from "@/components/ui/sheet"
import SmoothScroll from "@/components/smoothscroll"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const services = [
    {
        id: "web-dev",
        title: "Web Engineering",
        icon: Globe,
        description: "High-performance web applications built on Next.js 15 and React Server Components.",
        details: "We architect scalable, SEO-optimized, and globally distributed web systems. From simple landing pages to complex SaaS dashboards, we prioritize performance (Core Web Vitals) and maintainability.",
        deliverables: ["Next.js 15 Architecture", "Responsive UI/UX (Tailwind)", "SEO Optimization Strategy", "Headless CMS Integration", "Performance Auditing"],
        priceStart: "$1,500"
    },
    {
        id: "mobile-app",
        title: "Mobile Ecology",
        icon: Smartphone,
        description: "Native-feel cross-platform applications using React Native and Flutter.",
        details: "Reach users on both iOS and Android with a single codebase without compromising on performance or native capabilities. We handle the entire lifecycle from code to App Store submission.",
        deliverables: ["iOS & Android Binary Build", "App Store & Play Store Submission", "Push Notification System", "Offline-First Architecture", "Native Module Bridging"],
        priceStart: "$2,500"
    },
    {
        id: "ai-systems",
        title: "AI Integration",
        icon: Bot,
        description: "Custom LLM agents, RAG pipelines, and intelligent automation workflows.",
        details: "Leverage the power of OpenAI, Anthropic, or open-source LLaMA models to automate customer support, data analysis, and content generation within your own secure infrastructure.",
        deliverables: ["Custom RAG Pipelines (Vector DB)", "Chatbot UI/UX Interface", "Prompt Engineering Optimization", "API Integration (OpenAI/Anthropic)", "Fine-Tuning Datasets"],
        priceStart: "$3,000"
    },
    {
        id: "cloud-infra",
        title: "Cloud Architecture",
        icon: Cloud,
        description: "Scalable backend systems on AWS, Azure, or Google Cloud.",
        details: "We design serverless functions, container orchestration (Docker/K8s), and database optimization strategies to ensure your application can handle high-traffic loads with zero downtime.",
        deliverables: ["CI/CD Automated Pipelines", "Database Schema Design", "Serverless Config (Lambda/Edge)", "Auto-scaling Rules", "Infrastructure as Code (Terraform)"],
        priceStart: "$2,000"
    },
    {
        id: "ui-ux",
        title: "UI/UX Systems",
        icon: Layout,
        description: "Atomic design systems and high-fidelity interactive prototyping.",
        details: "We don't just design screens; we build comprehensive design systems. We focus on usability, accessibility, and creating a delightful user journey that converts visitors into customers.",
        deliverables: ["Figma Design Files", "Interactive Prototypes", "Design System Documentation", "User Flow Diagrams", "Accessibility Audit (WCAG)"],
        priceStart: "$1,200"
    },
    {
        id: "security",
        title: "System Security",
        icon: Shield,
        description: "Penetration testing, OAuth implementation, and data encryption.",
        details: "Security is not an afterthought. We implement industry-standard security protocols to protect your user data and ensure compliance with regulations like GDPR and CCPA.",
        deliverables: ["Penetration Testing Report", "OAuth 2.0 Implementation", "Data Encryption at Rest/Transit", "Security Headers Config", "Vulnerability Scanning"],
        priceStart: "$1,800"
    }
]

export default function ServicesPage() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white dark:bg-neutral-950 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-neutral-300 dark:border-neutral-700">Capabilities Manifest</Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-6">
                            Technical Engineering
                        </h1>
                        <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
                            We deliver end-to-end solutions. Select a module to inspect technical specifications and deliverables.
                        </p>
                    </div>

                    {/* Services Grid (Interactive Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <Sheet key={index}>
                                <SheetTrigger asChild>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer min-h-[400px]"
                                    >
                                        {/* Abstract Background Pattern */}
                                        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                        </div>

                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-200 via-transparent to-transparent dark:from-neutral-950 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Content Container */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 flex items-center justify-center mb-6 text-neutral-900 dark:text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                    <service.icon className="w-6 h-6" />
                                                </div>

                                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{service.title}</h3>

                                                {/* Hidden Description (Reveals on Hover) */}
                                                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed mb-6">
                                                        {service.description}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                                                        Inspect Module <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Number */}
                                        <div className="absolute top-6 right-6 text-4xl font-bold text-neutral-200 dark:text-neutral-800 select-none transition-colors group-hover:text-neutral-300 dark:group-hover:text-neutral-700">
                                            0{index + 1}
                                        </div>
                                    </motion.div>
                                </SheetTrigger>

                                {/* Sheet Content */}
                                <SheetContent className="w-full sm:max-w-xl bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 overflow-y-auto">
                                    <SheetHeader className="mt-6">
                                        <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-4 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                                            <service.icon className="w-7 h-7" />
                                        </div>
                                        <SheetTitle className="text-3xl font-bold tracking-tight">{service.title}</SheetTitle>
                                        <SheetDescription className="text-lg text-neutral-500 font-light">
                                            {service.description}
                                        </SheetDescription>
                                    </SheetHeader>

                                    <div className="space-y-6 p-6">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                                                System Architecture
                                            </h4>
                                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                                {service.details}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                                                Deliverable Manifest
                                            </h4>
                                            <ul className="grid gap-3">
                                                {service.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 group">
                                                        <div className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-900 dark:text-white shrink-0 mt-0.5 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 group-hover:text-green-600 transition-colors">
                                                            <Check className="w-3 h-3" />
                                                        </div>
                                                        <span className="text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-neutral-500">Starting Investment</span>
                                                <span className="text-2xl font-bold text-neutral-900 dark:text-white">{service.priceStart}</span>
                                            </div>
                                            <p className="text-xs text-neutral-400 mb-6">Final pricing depends on scope, complexity, and timeline.</p>

                                            <div className="grid gap-3">
                                                <Link href="/pricing" className="w-full">
                                                    <button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:opacity-90 transition-opacity">
                                                        View Pricing Model
                                                    </button>
                                                </Link>
                                                <Link href="/contact" className="w-full">
                                                    <button className="w-full py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-xl font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                                                        Request Proposal
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        ))}
                    </div>
                </div>
            </main>
        </SmoothScroll>
    )
}