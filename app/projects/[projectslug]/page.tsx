import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Cpu } from "lucide-react"
import SmoothScroll from "@/components/smoothscroll"
import { Badge } from "@/components/ui/badge"

// --- Mock Data Service (Replace with real DB call) ---
const getProjectData = async (id: string) => {
    // In a real app, fetch from API/DB
    const projects = [
        {
            id: 1,
            projectslug: "thecoderz",
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
        // Add other projects here matching IDs from the main list
    ];
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return projects.find(p => p.id === parseInt(id));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ projectslug: string }> }) {
    const { projectslug } = await params;
    const project = await getProjectData(projectslug);

    if (!project) {
        return notFound();
    }

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pt-24 pb-16">
                                <div className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                                        <div className="flex justify-between items-center mb-12">
                        <Link href="/projects" className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
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
                    <div className="mb-12">
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
                                        <Link href={project.link} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:opacity-90 transition-opacity">
                                            Live Deployment <ExternalLink className="w-4 h-4" />
                                        </Link>
                                        <Link href={project.repo} className="flex items-center justify-center gap-2 w-full py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
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