"use client"

import { ArrowRight, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center px-4 mb-20 bg-transparent"
        >
            <div className="relative overflow-hidden bg-white dark:bg-neutral-950 rounded-3xl p-8 md:p-16 border-2 border-neutral-200 dark:border-neutral-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-slate-50 dark:from-neutral-950 dark:to-neutral-900" />
                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-neutral-900 dark:bg-white flex items-center justify-center"
                    >
                        <Zap className="w-8 h-8 text-white dark:text-black" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight"
                    >
                        Ready to Transform
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-slate-600 dark:from-neutral-400 dark:to-slate-400">
                            Your Ideas?
                        </span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Let&apos;s discuss your project and explore how we can bring your vision to life with cutting-edge technology and innovative solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center cursor-pointer justify-center bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                            >
                                Get Started Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.button>
                        </Link>
                        <Link href="https://cal.com/niraj-jha/30min" target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center cursor-pointer justify-center border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold bg-transparent transition-all duration-300 w-full sm:w-auto"
                            >
                                <Calendar className="mr-2 h-5 w-5" />
                                Free Consultation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}