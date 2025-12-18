import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Cpu } from "lucide-react"
import SmoothScroll from "@/components/smoothscroll"
import { Badge } from "@/components/ui/badge"

// --- Mock Data Service (Updated with Full Data) ---
const getProjectData = async (slug: string) => {
    // In a real app, fetch from API/DB
    const projects = [
        {
            id: 1,
            projectslug: "the-coderz",
            title: "The Coder'z",
            tagline: "Educational Ecosystem for Computer Science",
            description: "A comprehensive platform designed to bridge the gap between academic theory and practical coding application. Features include real-time code execution, peer-to-peer mentorship matching, and an automated roadmap generator based on user goals.",
            image: "/thecoderz.png",
            industry: "Education",
            client: "EdTech Startup",
            timeline: "3 Months",
            role: "Full Product Development",
            stack: ["Next.js", "MongoDB", "Node.js", "WebRTC", "Monaco Editor"],
            features: [
                "Real-time Collaborative IDE",
                "AI-Driven Learning Paths",
                "Community Forum with Code Snippet Support",
                "Gamified Progress Tracking"
            ],
            link: "https://thecoderz.in.net",
            repo: "#"
        },
        {
            id: 2,
            projectslug: "logistics-center",
            title: "Logistics Center",
            tagline: "Global Freight Management System",
            description: "An innovative startup solution to simplify global logistics and freight management. It provides real-time tracking, route optimization, and automated documentation for international shipments.",
            image: "/logistics.png",
            industry: "Logistics",
            client: "Logistics Enterprise",
            timeline: "4 Months",
            role: "Frontend & Backend Architecture",
            stack: ["React", "Express", "PostgreSQL", "Docker", "Google Maps API"],
            features: [
                "Real-time Shipment Tracking",
                "Automated Customs Documentation",
                "Predictive Route Optimization",
                "Multi-carrier Integration"
            ],
            link: "https://logistics-website-atju.onrender.com/",
            repo: "#"
        },
        {
            id: 3,
            projectslug: "mp-solutions",
            title: "M.P. Solutions",
            tagline: "Centralized Pharmaceutical Inventory",
            description: "A central aggregation platform for pharmaceutical supplies. It connects local pharmacies with distributors, ensuring real-time stock availability and automated reordering processes.",
            image: "/mpsolutions.png",
            industry: "Healthcare",
            client: "Pharma Distributor",
            timeline: "2 Months",
            role: "Full Stack Development",
            stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "tRPC"],
            features: [
                "Real-time Inventory Sync",
                "Automated Reordering System",
                "Supplier Dashboard",
                "Analytics for Demand Forecasting"
            ],
            link: "https://mpsolutions.vercel.app/",
            repo: "#"
        },
        {
            id: 4,
            projectslug: "ecotrack",
            title: "EcoTrack",
            tagline: "Enterprise Sustainability Reporting",
            description: "A comprehensive dashboard for businesses to track, analyze, and report their carbon footprint. Includes automated data collection from utility APIs and predictive modeling for reduction strategies.",
            image: "/ecotrack.png",
            industry: "Environmental",
            client: "GreenTech Corp",
            timeline: "5 Months",
            role: "Data Engineering & UI",
            stack: ["Vue.js", "Python", "Django", "PostgreSQL", "D3.js"],
            features: [
                "Carbon Footprint Calculator",
                "Automated Utility Data Ingestion",
                "Compliance Reporting Generator",
                "Supply Chain Analysis"
            ],
            link: "#",
            repo: "#"
        },
        {
            id: 5,
            projectslug: "fintech-pro",
            title: "FinTech Pro",
            tagline: "High-Frequency Trading Interface",
            description: "A low-latency trading dashboard designed for professional traders. Features sub-millisecond data updates, advanced charting tools, and automated trading bot integration.",
            image: "/fintech.png",
            industry: "Finance",
            client: "Prop Trading Firm",
            timeline: "6 Months",
            role: "System Architecture",
            stack: ["React", "Node.js", "MongoDB", "Redis", "WebSockets"],
            features: [
                "Sub-millisecond Data Streaming",
                "Advanced Technical Analysis Charts",
                "Algorithmic Trading Bot Support",
                "Risk Management Dashboard"
            ],
            link: "#",
            repo: "#"
        },
        {
            id: 6,
            projectslug: "smartretail",
            title: "SmartRetail",
            tagline: "AI-Powered Inventory Tracking",
            description: "A computer vision solution for physical retail stores. It uses CCTV feeds to track shelf inventory levels in real-time, detecting stockouts and misplaced items automatically.",
            image: "/retail.png",
            industry: "Retail",
            client: "Retail Chain",
            timeline: "4 Months",
            role: "AI Integration & Backend",
            stack: ["React", "Python", "TensorFlow", "PostgreSQL", "OpenCV"],
            features: [
                "Computer Vision Inventory Tracking",
                "Heatmap Analytics of Store Traffic",
                "Automated Restock Alerts",
                "Shrinkage Detection"
            ],
            link: "#",
            repo: "#"
        }
    ];

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return projects.find(p => p.projectslug === slug);
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ projectslug: string }> }) {
    const { projectslug } = await params;
    const project = await getProjectData(projectslug);

    if (!project) {
        return notFound();
    }

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pt-28 pb-16">

                <div className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/projects" className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                            <div className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-400 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                            </div>
                            <span>Back to Registry</span>
                        </Link>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-500">
                                {project.industry}
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-neutral-500 font-light">{project.tagline}</p>
                    </div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 mb-16 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-lg font-bold font-mono uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <Layers className="w-4 h-4" /> Project Overview
                                </h2>
                                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                                    {project.description}
                                </p>
                            </section>
                            <section>
                                <h2 className="text-lg font-bold font-mono uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <Cpu className="w-4 h-4" /> Key Capabilities
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {
                                        project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2" />
                                                <span className="text-sm font-medium">{feature}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </section>
                        </div>
                        <div className="lg:col-span-1 space-y-8">
                            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-24">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xs font-mono text-neutral-500 uppercase mb-2">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {
                                                project.stack.map(tech => (
                                                    <Badge key={tech} variant="outline" className="rounded-md border-neutral-300 dark:border-neutral-700">
                                                        {tech}
                                                    </Badge>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="text-xs font-mono text-neutral-500 uppercase mb-1">Timeline</h3>
                                            <p className="font-medium flex items-center gap-2">
                                                <Calendar className="w-3 h-3" /> {project.timeline}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-mono text-neutral-500 uppercase mb-1">Role</h3>
                                            <p className="font-medium">{project.role}</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
                                    <div className="space-y-3">
                                        <Link href={project.link} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer">
                                            Live Deployment <ExternalLink className="w-4 h-4" />
                                        </Link>
                                        <Link href={project.repo} className="flex items-center justify-center gap-2 w-full py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer">
                                            Source Code <Github className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </SmoothScroll>
    )
}