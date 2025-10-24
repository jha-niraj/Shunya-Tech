"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import SmoothScroll from "@/components/smoothscroll";
import HeroSection from "@/components/homepage/herosection";
import ServicesSection from "@/components/homepage/services-section";
import ProjectsSection from "@/components/homepage/projects-section";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import WhyUs from "@/components/homepage/whyus";
import PricingSection from "@/components/homepage/pricing-section";
import FaqsAccrodian from "@/components/homepage/faqs";
import AboutUsSection from "@/components/homepage/aboutussection";
import ApproachSection from "@/components/homepage/approach";
import CTAPage from "@/components/homepage/cta";

export default function MainLandingPage() {
	const router = useRouter();

	useEffect(() => {
		// Check if there's a hash in the URL and scroll to that section
		const hash = window.location.hash;
		if (hash) {
			// Small delay to ensure the page is fully loaded
			setTimeout(() => {
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 500);
		}
	}, []);

	return (
		<SmoothScroll>
			<main className="w-full">
				<HeroSection />
				<section className="bg-white dark:bg-neutral-900">
					<ServicesSection />
					<ProjectsSection />
					<AboutUsSection />
					<ApproachSection />
					<WhyUs />
					<TestimonialsSection />
					<PricingSection />
					<FaqsAccrodian />
					<CTAPage />
				</section>
			</main>
		</SmoothScroll>
	)
}