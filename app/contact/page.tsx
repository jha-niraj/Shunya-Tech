"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react"
import { useState } from "react"
import { submitContactForm, type ContactFormData } from "@/actions/contact.action"
import { toast } from "sonner"
import SmoothScroll from "@/components/smoothscroll"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // ... (Existing validation logic) ...
        setIsSubmitting(true);
        // ... (Existing submission logic) ...
        // Simulating completion for layout demo
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pt-32 pb-20">
                {/* Background Grid */}
                <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400">COMMUNICATION LINES OPEN</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                            Initiate Collaboration
                        </h1>
                        <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
                            Ready to engineer something remarkable? Provide your project parameters below.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* FORM SECTION */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-neutral-200/50 dark:shadow-black/50"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Name</label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white rounded-xl"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Phone</label>
                                        <Input
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white rounded-xl"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Email Address</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white rounded-xl"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Project Parameters</label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="min-h-[150px] bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white rounded-xl resize-none p-4"
                                        placeholder="Describe your requirements..."
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full h-14 bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl text-lg font-bold transition-all shadow-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <div className="flex items-center gap-2">Transmit Data <Send className="w-4 h-4" /></div>}
                                </Button>
                            </form>
                        </motion.div>

                        {/* INFO SECTION */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-8 flex flex-col justify-center"
                        >
                            {[
                                { icon: Mail, title: "Electronic Mail", value: "contact@shunyatech.com" },
                                { icon: Phone, title: "Direct Line", value: "+91 (123) 456-7890" },
                                { icon: MapPin, title: "Coordinates", value: "123 Tech Park, Innovation St, Bangalore" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6 p-6 rounded-2xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 mb-1">{item.title}</h3>
                                        <p className="text-xl font-medium text-neutral-900 dark:text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="p-8 mt-8 rounded-3xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900">
                                <h3 className="text-2xl font-bold mb-2">Need a Budget Estimate?</h3>
                                <p className="text-neutral-400 dark:text-neutral-600 mb-6">
                                    Use our AI-powered calculator to get a rough estimate for your project.
                                </p>
                                <Button variant="outline" className="w-full bg-transparent border-neutral-700 dark:border-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black">
                                    Launch Calculator
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SmoothScroll>
    )
}