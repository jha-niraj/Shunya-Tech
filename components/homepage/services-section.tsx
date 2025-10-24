import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Database, Shield, Rocket, Zap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
    {
        icon: Code2,
        name: "Web Development",
        description: "Custom web applications built with modern frameworks and best practices"
    },
    {
        icon: Smartphone,
        name: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
        icon: Globe,
        name: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment strategies"
    },
    {
        icon: Database,
        name: "Database Design",
        description: "Optimized database architecture and management systems"
    },
    {
        icon: Shield,
        name: "Security",
        description: "Robust security implementations and best practices"
    },
    {
        icon: Rocket,
        name: "DevOps",
        description: "Streamlined development and deployment processes"
    },
    {
        icon: Zap,
        name: "API Development",
        description: "RESTful and GraphQL API design and implementation"
    },
    {
        icon: Sparkles,
        name: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces and experiences"
    }
];

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

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 mb-16"
                    >
                        <Badge className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black border-0">
                            <Rocket className="w-4 h-4 mr-2" />
                            Our Services
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Comprehensive Digital Solutions
                        </h2>
                        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            From concept to deployment, we offer end-to-end services to bring your digital vision to life with cutting-edge technology and expert craftsmanship.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {
                            services.map((service) => (
                                <motion.div
                                    key={service.name}
                                    variants={item}
                                    className="group relative h-full"
                                >
                                    <div className="h-full flex flex-col items-start p-6 bg-transparent rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900">
                                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/50 to-slate-100/50 dark:from-neutral-900/50 dark:to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                        <div className="relative z-10 w-full">
                                            <div className="w-12 h-12 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <service.icon className="h-6 w-6 text-white dark:text-black" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                                {service.name}
                                            </h3>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </section>
    );
}