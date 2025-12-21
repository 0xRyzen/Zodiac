import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Button, Input, Label } from "../components/ui/core";
import heroBg from "figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png";

const PageContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 6rem 2rem;
`;

const SectionTitle = styled.h2`
	font-family: serif;
	font-size: 2.5rem;
	color: #121212;
	margin-bottom: 2rem;
	font-weight: 300;
`;

const TextBlock = styled.div`
	color: #666;
	line-height: 1.8;
	margin-bottom: 2rem;

	p {
		margin-bottom: 1.5rem;
	}
`;

const StandardHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
	<div className="relative -mt-20 h-[45vh] bg-[#1C1F26] flex flex-col items-center justify-center overflow-hidden">
		<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center grayscale">
			<img src={heroBg} className="h-full w-auto object-cover opacity-50" alt="" />
		</div>

		<motion.div className="relative z-10 text-center px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
			{subtitle && <span className="text-[#C9A86A] text-xs font-bold tracking-[0.25em] uppercase mb-6 block">{subtitle}</span>}
			<h1 className="text-5xl md:text-7xl font-serif font-light text-[#F5F5F2] tracking-tight">{title}</h1>
		</motion.div>
	</div>
);

// Education Page
export const Education = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const topics = [
		{
			title: "Finding Your Rhythm",
			content: "Start low and go slow. We recommend starting with a small amount and listening to your body. Allow 2 hours to assess how you feel before adjusting your routine.",
		},
		{
			title: "The Entourage Effect",
			content: "Our full-spectrum formulas honor the complexity of the plant, utilizing a synergy of cannabinoids to support a balanced experience.",
		},
		{
			title: "Ethical Sourcing",
			content: "Rooted in the Pacific Northwest, our hemp is organically grown and ethically sourced. We believe in transparency from seed to shelf.",
		},
		{
			title: "Safety & Drug Interactions",
			content: "CBD is generally safe, but can interact with certain medications. Always consult your healthcare provider before starting a new regimen, especially if you take blood thinners.",
		},
	];

	return (
		<div className="bg-[#F5F5F2] min-h-screen pt-20">
			<StandardHeader title="Education" subtitle="Learn" />
			<PageContainer>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
					<SectionTitle>Botanical Wisdom</SectionTitle>
					<TextBlock>
						<p>Knowledge is the foundation of any wellness practice. We believe that informed choices empower you to create meaningful routines. Here, we share the essentials of our botanical philosophy.</p>
					</TextBlock>

					<div className="space-y-4 mt-12">
						{topics.map((topic, index) => (
							<div key={index} className="border border-black/5 rounded-sm overflow-hidden bg-white">
								<button className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
									<span className="font-serif text-lg text-[#121212]">{topic.title}</span>
									<motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-gray-400">
										<ChevronDown />
									</motion.span>
								</button>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
											<div className="p-6 pt-0 text-gray-500 leading-relaxed bg-white">{topic.content}</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</motion.div>
			</PageContainer>
		</div>
	);
};

// About Page
export const About = () => {
	return (
		<div className="w-full bg-[#F5F5F2] pt-20 min-h-screen">
			{/* New Header Style */}
			<div className="relative -mt-20 h-[35vh] bg-[#1C1F26] flex flex-col items-center justify-center overflow-hidden">
				{/* Background ZODIAC Watermark - Jeeter Style Outline */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
					<span className="text-[20vw] font-serif font-bold italic text-transparent tracking-tighter whitespace-nowrap" style={{ WebkitTextStroke: "1px rgba(245, 245, 242, 0.05)" }}>
						ZODIAC
					</span>
				</div>

				<motion.div className="relative z-10 text-center px-4 flex flex-col items-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
					<h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif font-bold text-[#F5F5F2] tracking-tighter leading-none select-none uppercase">STORY</h1>
				</motion.div>
			</div>

			<PageContainer>
				<div className="grid grid-cols-1 gap-16">
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
						<h3 className="text-xl font-serif text-[#121212] mb-6">Our Philosophy</h3>
						<TextBlock>
							<p className="text-xl leading-relaxed text-[#121212] font-serif font-light">
								Zodiac was born from a desire to bring intention back to daily wellness. Inspired by the cyclical nature of the cosmos and the grounding power of the earth, we craft essentials that fit seamlessly into your modern life.
							</p>
						</TextBlock>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/10 pt-12">
						<div>
							<h4 className="font-bold mb-4 uppercase tracking-[0.2em] text-xs text-[#121212]">Design Inspiration</h4>
							<p className="text-gray-500 leading-relaxed">Our aesthetic nods to the stars—symbolizing guidance and balance—without making mystical claims. It's about finding your own rhythm in a chaotic world.</p>
						</div>
						<div>
							<h4 className="font-bold mb-4 uppercase tracking-[0.2em] text-xs text-[#121212]">Sustainability</h4>
							<p className="text-gray-500 leading-relaxed">We are committed to treading lightly. Our packaging is 100% plastic-free and recyclable. Our ingredients are vegan and ethically sourced. This is wellness with a conscience.</p>
						</div>
					</div>
				</div>
			</PageContainer>
		</div>
	);
};

// Legal Page
export const Legal = () => {
	return (
		<div className="w-full bg-[#F5F5F2] pt-20 min-h-screen">
			<StandardHeader title="Legal" />

			<PageContainer>
				<TextBlock>
					<h3 className="text-lg font-serif text-[#121212] mb-4">Privacy Policy</h3>
					<p>Your privacy is paramount. We do not sell your data to third parties. We collect only what is necessary to process your order and improve your experience.</p>

					<div className="h-px bg-black/10 my-8" />

					<h3 className="text-lg font-serif text-[#121212] mb-4">Terms of Service</h3>
					<p>By accessing this website, you agree to be bound by these terms. You must be at least 21 years of age to purchase our products.</p>

					<div className="h-px bg-black/10 my-8" />

					<h3 className="text-lg font-serif text-[#121212] mb-4">FDA Disclaimer</h3>
					<p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
				</TextBlock>
			</PageContainer>
		</div>
	);
};

// Contact Page
export const Contact = () => {
	return (
		<div className="w-full bg-[#F5F5F2] pt-20 min-h-screen">
			<StandardHeader title="Contact Us" subtitle="Support" />

			<PageContainer>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div>
						<p className="text-[#121212] mb-8 font-serif text-lg leading-relaxed">Have questions about our products or need guidance on finding your routine? We're here to help.</p>

						<div className="space-y-6">
							<div className="flex items-center gap-4 text-gray-500">
								<Mail size={20} className="text-[#C9A86A]" />
								<span>support@zodiacwellness.com</span>
							</div>
							<div className="flex items-center gap-4 text-gray-500">
								<Phone size={20} className="text-[#C9A86A]" />
								<span>(555) 123-4567</span>
							</div>
							<div className="flex items-center gap-4 text-gray-500">
								<MapPin size={20} className="text-[#C9A86A]" />
								<span>123 Wellness Way, Portland, OR</span>
							</div>
						</div>
					</div>

					<form className="space-y-6 bg-white p-8 border border-black/5 rounded-sm shadow-sm">
						<div>
							<Label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Name</Label>
							<Input placeholder="Your name" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
						</div>
						<div>
							<Label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Email</Label>
							<Input type="email" placeholder="Your email" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
						</div>
						<div>
							<Label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Message</Label>
							<textarea className="w-full min-h-[150px] p-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A86A] focus:border-[#C9A86A]" placeholder="How can we help?" />
						</div>
						<Button variant="primary" fullWidth className="bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] font-bold uppercase tracking-widest py-4 transition-colors duration-300">
							Send Message
						</Button>
					</form>
				</div>
			</PageContainer>
		</div>
	);
};

// Not Found Page
export const NotFound = () => {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-[#F5F5F2]">
			<h1 className="text-9xl font-serif text-[#E7DFC8] leading-none mb-4">404</h1>
			<h2 className="text-3xl font-serif text-[#121212] mb-4">Page Not Found</h2>
			<p className="text-gray-500 mb-8 max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
			<a href="/" className="bg-[#121212] text-white px-8 py-3 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-[#C9A86A] hover:text-[#121212] transition-colors">
				Return Home
			</a>
		</div>
	);
};
