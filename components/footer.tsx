import { m } from 'framer-motion'
import { Twitter, Linkedin, Instagram, Github, Mail, MapPin, Phone, ArrowUpRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 border-t border-neutral-200 dark:border-neutral-800">
            {/* Top Grid Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800 border-b border-neutral-200 dark:border-neutral-800">

                {/* Brand Column */}
                <div className="p-8 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
                            <span className="text-white dark:text-black font-bold">S</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">Shunya Tech</span>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                        Engineering intelligence for the digital age. We build high-performance systems for forward-thinking companies.
                    </p>
                    <div className="flex gap-4">
                        {
                            [
                                {
                                    icon: Twitter,
                                    link: "https://x.com/shunyagroups"
                                },
                                {
                                    icon: Linkedin,
                                    link: ""
                                },
                                {
                                    icon: Github,
                                    link: "https://github.com/Shunya-Tech-Agency"
                                },
                                {
                                    icon: Instagram,
                                    link: "https://instagram.com/shunyatechofficial"
                                }
                            ].map((data: {
                                icon: LucideIcon,
                                link: string
                            }, i) => (
                                <Link key={i} href={`/${data.link}`} target='_blank' className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                    <data.icon className="w-5 h-5" />
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* Quick Links - Schematic Style */}
                <div className="p-8 md:col-span-1 flex flex-col justify-between">
                    <div>
                        <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">/ Navigation</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Projects', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="group flex items-center justify-between text-sm font-medium hover:text-neutral-500 transition-colors">
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Services - Schematic Style */}
                <div className="p-8 md:col-span-1 flex flex-col justify-between">
                    <div>
                        <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">/ Capabilities</h3>
                        <ul className="space-y-4">
                            {
                                ['System Architecture', 'Full-Stack Dev', 'UI Engineering', 'Cloud Infra'].map((item) => (
                                    <li key={item}>
                                        <span className="text-sm font-light text-neutral-600 dark:text-neutral-300 cursor-default">
                                            {item}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Contact Data */}
                <div className="p-8 md:col-span-1 bg-neutral-50 dark:bg-neutral-900/50">
                    <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">/ Contact Point</h3>
                    <div className="space-y-6">
                        <div className="group cursor-pointer">
                            <p className="text-xs text-neutral-500 mb-1">Email</p>
                            <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                                <Mail className="w-4 h-4" />
                                contact@shunyatech.com
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 mb-1">HQ</p>
                            <div className="flex items-start gap-2 text-sm font-medium">
                                <MapPin className="w-4 h-4 mt-1" />
                                <span>Bangalore, Karnataka<br />India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                <div className="flex gap-6 font-mono">
                    <span>© {currentYear} SHUNYA TECH</span>
                    <span className="hidden md:inline">|</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        ALL SYSTEMS OPERATIONAL
                    </span>
                </div>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Protocol</Link>
                    <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}