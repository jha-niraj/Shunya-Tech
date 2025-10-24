import { Diamond, Twitter, Linkedin, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const companyLinks = [
        { name: 'About Us', href: '/aboutus' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
        { name: 'Admin', href: '/admin' },
    ]

    const servicesLinks = [
        { name: 'Web Development', href: '/#services' },
        { name: 'Mobile Apps', href: '/#services' },
        { name: 'UI/UX Design', href: '/#services' },
        { name: 'Consulting', href: '/#services' },
    ]

    const toolsLinks = [
        { name: 'Budget Estimator', href: '/budgetestimator' },
        { name: 'Invoice Generator', href: '/nexinvoice' },
        { name: 'Accelerator', href: '/accelerator' },
    ]

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ]

    const socialLinks = [
        { icon: Twitter, href: 'https://twitter.com/shunyatech', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com/company/shunyatech', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com/shunyatech', label: 'Instagram' },
        { icon: Github, href: 'https://github.com/shunyatech', label: 'GitHub' },
    ]

    return (
        <footer className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg">
                                <Diamond className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">Shunya Tech</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                            Building the future, one product at a time. We deliver world-class digital solutions
                            and innovative products that drive real impact.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm">
                                <Mail className="h-4 w-4 text-teal-400" />
                                <a href="mailto:contact@shunyatech.com" className="hover:text-white transition-colors">
                                    contact@shunyatech.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Phone className="h-4 w-4 text-teal-400" />
                                <span>+91 (123) 456-7890</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <MapPin className="h-4 w-4 text-teal-400" />
                                <span>Bangalore, Karnataka, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Tools</h3>
                        <ul className="space-y-3">
                            {toolsLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                        <div className="text-sm text-gray-400">
                            <span className="font-semibold text-white">24/7 Support</span> - We're here to help
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-400">
                        © {currentYear} Shunya Tech. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-sm">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}