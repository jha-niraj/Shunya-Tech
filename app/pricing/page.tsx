"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
    Check, X, Zap, Shield, Crown, Globe, Smartphone, Clapperboard, Server, 
    ArrowRight 
} from "lucide-react"
import SmoothScroll from "@/components/smoothscroll"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { 
    Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs"

// --- CURRENCY CONFIGURATION ---
const currencies = {
    USD: { symbol: "$", rate: 1, label: "USD" },
    EUR: { symbol: "€", rate: 0.85, label: "EUR" },
    AUD: { symbol: "A$", rate: 1.52, label: "AUD" },
    INR: { symbol: "₹", rate: 90.21, label: "INR" },
}

type CurrencyKey = keyof typeof currencies;

// --- PRICING DATA STRUCTURE ---
const pricingData = {
    web: {
        title: "Web Engineering",
        description: "High-performance web applications built on Next.js 15 and React Server Components.",
        icon: Globe,
        tiers: [
            {
                name: "MVP / Startup",
                basePrice: 1599,
                suffix: "starts at",
                description: "Rapid prototyping and launch for early-stage products.",
                icon: Zap,
                features: [
                    "Next.js 15 Architecture",
                    "Responsive UI/UX (Tailwind)",
                    "Basic CMS Integration",
                    "Authentication (Auth.js)",
                    "Standard SEO Setup",
                    "Contact Form Integration",
                    "2 Weeks Support"
                ],
                missing: ["Database Optimization", "Payment Gateway", "Multi-tenant Architecture", "Custom SLA"]
            },
            {
                name: "Scale / Business",
                basePrice: 3499,
                suffix: "starts at",
                description: "Production-grade systems for growing businesses.",
                icon: Shield,
                popular: true,
                features: [
                    "Everything in MVP",
                    "PostgreSQL/Prisma DB",
                    "Payment Gateway (Stripe)",
                    "Admin Dashboard Panel",
                    "Advanced Animations (Framer)",
                    "90+ Performance Score",
                    "30 Days Support"
                ],
                missing: ["Microservices", "Dedicated DevOps"]
            },
            {
                name: "Enterprise",
                basePrice: 8500,
                suffix: "project scope",
                description: "Complex distributed systems for large organizations.",
                icon: Crown,
                features: [
                    "Microservices Architecture",
                    "Custom AI/LLM Integration",
                    "Real-time Systems (WebSockets)",
                    "Global CDN Strategy",
                    "RBAC & Audit Logs",
                    "Dedicated Project Manager",
                    "90 Days Priority Support"
                ],
                missing: []
            }
        ]
    },
    mobile: {
        title: "Mobile Ecology",
        description: "Native-feel cross-platform applications using React Native and Expo.",
        icon: Smartphone,
        tiers: [
            {
                name: "MVP Mobile",
                basePrice: 2599,
                suffix: "starts at",
                description: "Get your app on iOS and Android stores quickly.",
                icon: Zap,
                features: [
                    "React Native / Expo",
                    "iOS & Android Build",
                    "Basic Auth & Profile",
                    "Push Notifications",
                    "App Store Submission",
                    "Standard UI Components"
                ],
                missing: ["Offline Mode", "Biometrics", "Custom Native Modules"]
            },
            {
                name: "Pro Ecosystem",
                basePrice: 5500,
                suffix: "starts at",
                description: "Feature-rich applications with native capabilities.",
                icon: Shield,
                popular: true,
                features: [
                    "Everything in MVP",
                    "Offline-First Architecture",
                    "Biometric Security (FaceID)",
                    "In-App Purchases",
                    "Real-time Chat/Data",
                    "Advanced Analytics",
                    "Deep Linking"
                ],
                missing: ["Bluetooth/Hardware Integration"]
            },
            {
                name: "Enterprise Native",
                basePrice: 12000,
                suffix: "starts at",
                description: "Complex hardware integration and high-security needs.",
                icon: Crown,
                features: [
                    "Custom Native Modules (Swift/Kotlin)",
                    "IoT / Bluetooth Integration",
                    "Enterprise MDM Support",
                    "End-to-End Encryption",
                    "Automated CI/CD for Mobile",
                    "Dedicated QA Team",
                    "SLA Guarantee"
                ],
                missing: []
            }
        ]
    },
    video: {
        title: "Visual Narrative",
        description: "Cinematic storytelling and motion graphics for modern brands.",
        icon: Clapperboard,
        tiers: [
            {
                name: "Social Shorts",
                basePrice: 599,
                suffix: "per package",
                description: "High-retention editing for Reels, TikTok, and Shorts.",
                icon: Zap,
                features: [
                    "5 Short-Form Videos",
                    "Dynamic Captions",
                    "Stock Footage/Music",
                    "Color Correction",
                    "2 Revisions per Video",
                    "Vertical Format (9:16)"
                ],
                missing: ["Motion Graphics", "Scriptwriting", "3D Elements"]
            },
            {
                name: "Brand Story",
                basePrice: 1599,
                suffix: "starts at",
                description: "Long-form content and promotional trailers.",
                icon: Shield,
                popular: true,
                features: [
                    "1 Long-Form Video (up to 10m)",
                    "Advanced Sound Design (SFX)",
                    "Custom Motion Graphics",
                    "Narrative Structuring",
                    "Thumbnail Design",
                    "4K Export",
                    "Project File Access"
                ],
                missing: ["On-Location Shoot"]
            },
            {
                name: "Full Production",
                basePrice: 4500,
                suffix: "starts at",
                description: "End-to-end production for commercials and launches.",
                icon: Crown,
                features: [
                    "Creative Direction & Scripting",
                    "3D Product Rendering",
                    "Advanced VFX / Compositing",
                    "Multi-Platform Resizing",
                    "Voiceover Artist",
                    "Unlimited Revisions",
                    "Dedicated Creative Director"
                ],
                missing: []
            }
        ]
    },
    cloud: {
        title: "Cloud Infra",
        description: "Scalable backend architecture and DevOps solutions.",
        icon: Server,
        tiers: [
            {
                name: "Setup",
                basePrice: 1200,
                suffix: "one-time",
                description: "Initial server setup and security hardening.",
                icon: Zap,
                features: ["AWS/DigitalOcean Setup", "SSL Installation", "Basic Firewall", "Docker Config"],
                missing: ["Auto-scaling", "Load Balancing"]
            },
            {
                name: "Scale",
                basePrice: 2800,
                suffix: "one-time",
                description: "Kubernetes orchestration and high availability.",
                icon: Shield,
                popular: true,
                features: ["K8s Cluster Setup", "Load Balancer Config", "CI/CD Pipeline", "Database Clustering", "Auto-scaling Rules"],
                missing: []
            },
            {
                name: "Retainer",
                basePrice: 1500,
                suffix: "per month",
                description: "Ongoing management and 24/7 monitoring.",
                icon: Crown,
                features: ["24/7 Uptime Monitor", "Security Patching", "Log Analysis", "Incident Response", "Cost Optimization"],
                missing: []
            }
        ]
    }
}

export default function PricingPage() {
    const [currency, setCurrency] = useState<CurrencyKey>("USD")
    const [activeTab, setActiveTab] = useState("web")

    // Helper to format price
    const formatPrice = (basePrice: number) => {
        const value = Math.round(basePrice * currencies[currency].rate);
        return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
            style: 'currency',
            currency: currency === 'INR' ? 'INR' : currency,
            maximumFractionDigits: 0
        }).format(value);
    }

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 mb-16 relative">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <Badge variant="outline" className="mb-6 border-neutral-300 dark:border-neutral-700">Global Pricing Protocol</Badge>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                                Transparent Investment.<br />Engineered for ROI.
                            </h1>
                            <p className="text-xl text-neutral-500 max-w-2xl font-light">
                                Select your service domain and currency to view our standardized rate card.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-900 p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 flex gap-1 shadow-sm">
                            {
                                (Object.keys(currencies) as CurrencyKey[]).map((cur) => (
                                    <button
                                        key={cur}
                                        onClick={() => setCurrency(cur)}
                                        className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all ${currency === cur
                                            ? "bg-neutral-900 dark:bg-white text-white dark:text-black shadow-md"
                                            : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            }`}
                                    >
                                        {cur}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6">
                    <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="space-y-12">
                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                            <TabsList className="inline-flex h-auto p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                                {
                                    Object.entries(pricingData).map(([key, data]) => (
                                        <TabsTrigger
                                            key={key}
                                            value={key}
                                            className="px-6 py-3 cursor-pointer rounded-xl text-sm font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm transition-all flex items-center gap-2"
                                        >
                                            <data.icon className="w-4 h-4" />
                                            {data.title}
                                        </TabsTrigger>
                                    ))
                                }
                            </TabsList>
                        </div>
                        <AnimatePresence mode="wait">
                            {
                                Object.entries(pricingData).map(([key, data]) => (
                                    <TabsContent key={key} value={key} className="mt-0 outline-none">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid md:grid-cols-3 gap-8"
                                        >
                                            {
                                                data.tiers.map((tier, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className={`relative p-8 rounded-3xl border flex flex-col ${
                                                            // @ts-ignore
                                                            tier.popular
                                                                ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white shadow-2xl scale-105 z-10"
                                                                : "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                                                            }`}
                                                    >
                                                        {
                                                            // @ts-ignore
                                                            tier.popular && (
                                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wider">
                                                                    MOST POPULAR
                                                                </div>
                                                            )
                                                        }
                                                        <div className="mb-8">
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                                                                // @ts-ignore
                                                                tier.popular ? "bg-white/20 dark:bg-black/10" : "bg-neutral-100 dark:bg-neutral-800"}`}>
                                                                <tier.icon className="w-6 h-6" />
                                                            </div>
                                                            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                                            <p className={`text-sm leading-relaxed ${
                                                                // @ts-ignore
                                                                tier.popular ? "text-neutral-300 dark:text-neutral-600" : "text-neutral-500"}`}>
                                                                {tier.description}
                                                            </p>
                                                        </div>
                                                        <div className="mb-8">
                                                            <div className="flex items-baseline gap-1">
                                                                <span className="text-4xl font-bold tracking-tight">
                                                                    {formatPrice(tier.basePrice)}
                                                                </span>
                                                            </div>
                                                            <span className={`text-sm ${
                                                                // @ts-ignore
                                                                tier.popular ? "text-neutral-400 dark:text-neutral-500" : "text-neutral-500"}`}>
                                                                {tier.suffix}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1 space-y-4 mb-8">
                                                            {
                                                                tier.features.map((feature, i) => (
                                                                    <div key={i} className="flex items-start gap-3 text-sm">
                                                                        <Check className={`w-5 h-5 shrink-0 ${
                                                                            // @ts-ignore
                                                                            tier.popular ? "text-green-400 dark:text-green-600" : "text-green-600 dark:text-green-400"}`} />
                                                                        <span>{feature}</span>
                                                                    </div>
                                                                ))
                                                            }
                                                            {
                                                                tier.missing.map((feature, i) => (
                                                                    <div key={i} className="flex items-start gap-3 text-sm opacity-50">
                                                                        <X className="w-5 h-5 shrink-0" />
                                                                        <span>{feature}</span>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        <Link href="/contactus" className="w-full mt-auto">
                                                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular
                                                                    ? "bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                                                    : "bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"}`}>
                                                                Select {tier.name}
                                                            </button>
                                                        </Link>
                                                    </motion.div>
                                                ))
                                            }
                                        </motion.div>
                                    </TabsContent>
                                ))
                            }
                        </AnimatePresence>
                    </Tabs>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-24">
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need a Custom Configuration?</h2>
                        <p className="text-neutral-500 mb-8 max-w-2xl mx-auto">
                            For enterprise requirements, legacy migrations, or specific SLA needs,
                            we offer a bespoke pricing model based on engineering hours and resource allocation.
                        </p>
                        <Link href="/contactus" className="cursor-pointer inline-flex items-center font-bold border-b border-neutral-900 dark:border-white pb-0.5 hover:opacity-70 transition-opacity">
                            Schedule a Technical Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </main>
        </SmoothScroll>
    )
}