import { motion } from "framer-motion";
import { Palette, Code, Clock, Handshake, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WhyUs() {
    const cards = [
        {
            icon: Palette,
            title: "Creative Excellence",
            description:
                "Our design team combines creativity with strategic thinking to deliver visually stunning and user-centric digital experiences that resonate with your audience.",
        },
        {
            icon: Code,
            title: "Technical Expertise",
            description:
                "We leverage cutting-edge technologies and industry best practices to build robust, scalable, and high-performance digital solutions.",
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description:
                "Rigorous testing and quality control processes ensure your project meets the highest standards of performance, security, and reliability.",
        },
        {
            icon: Sparkles,
            title: "Innovation Focus",
            description:
                "We stay ahead of digital trends, incorporating innovative solutions and emerging technologies to give your business a competitive edge.",
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description:
                "Our proven project management methodology ensures efficient execution and on-time delivery while maintaining transparency throughout the process.",
        },
        {
            icon: Handshake,
            title: "Client Partnership",
            description:
                "We build lasting partnerships through dedicated support, clear communication, and a deep commitment to understanding and achieving your business goals.",
        },
    ];

    return (
        <section id="whyus" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <Badge className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black border-0">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Why Choose Us
                    </Badge>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Excellence in Every{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-slate-600 dark:from-neutral-400 dark:to-slate-400">
                            Detail
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        We combine technical expertise with creative innovation to deliver exceptional digital solutions that drive your business forward.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="group relative h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full flex flex-col items-start p-6 bg-transparent rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/50 to-slate-100/50 dark:from-neutral-900/50 dark:to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                    <div className="relative z-10 w-full">
                                        <div className="w-12 h-12 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <card.icon className="h-6 w-6 text-white dark:text-black" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{card.title}</h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{card.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}