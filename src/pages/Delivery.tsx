import React from "react";
import { motion } from "motion/react";
import { Clock, MapPin, Truck } from "lucide-react";

export const Delivery = () => {
	return (
		<div className="bg-[#F5F5F2] min-h-screen pt-20">
			{/* Header */}
			<div className="relative -mt-20 h-[35vh] bg-[#1C1F26] flex flex-col items-center justify-center overflow-hidden">
				{/* Background ZODIAC Watermark - Jeeter Style Outline */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
					<span className="text-[20vw] font-serif font-bold italic text-transparent tracking-tighter whitespace-nowrap" style={{ WebkitTextStroke: "1px rgba(245, 245, 242, 0.05)" }}>
						ZODIAC
					</span>
				</div>

				<motion.div className="relative z-10 text-center px-4 flex flex-col items-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
					<h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif font-bold text-[#F5F5F2] tracking-tighter leading-none select-none uppercase">DELIVERY</h1>
				</motion.div>
			</div>

			<div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					{[
						{ icon: Clock, title: "Same Day Delivery", desc: "Order before 2 PM and receive your package the same day. We operate 7 days a week." },
						{ icon: Truck, title: "Discreet Packaging", desc: "Your privacy is our priority. All deliveries come in unbranded, odor-proof packaging." },
						{ icon: MapPin, title: "Extended Zones", desc: "We now deliver to the entire metro area. Check our coverage map for details." },
					].map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="bg-white p-10 rounded-sm shadow-sm border border-black/5 hover:border-[#C9A86A]/30 transition-all duration-300">
							<div className="w-12 h-12 bg-[#F5F5F2] text-[#121212] rounded-full flex items-center justify-center mb-8 border border-black/5">
								<item.icon size={20} />
							</div>
							<h3 className="text-xl font-serif text-[#121212] mb-4">{item.title}</h3>
							<p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
						</motion.div>
					))}
				</div>

				<div className="bg-[#1C1F26] text-white rounded-sm p-12 md:p-20 relative overflow-hidden">
					<div className="relative z-10">
						<h2 className="text-4xl font-serif text-[#F5F5F2] mb-12 text-center">Frequently Asked Questions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
							<div>
								<h4 className="font-bold text-xs mb-3 uppercase tracking-[0.2em] text-[#C9A86A]">Minimum Order?</h4>
								<p className="text-gray-400 font-light leading-relaxed">$50 minimum. Free delivery over $150.</p>
							</div>
							<div>
								<h4 className="font-bold text-xs mb-3 uppercase tracking-[0.2em] text-[#C9A86A]">ID Required?</h4>
								<p className="text-gray-400 font-light leading-relaxed">Yes, valid government ID required (21+).</p>
							</div>
							<div>
								<h4 className="font-bold text-xs mb-3 uppercase tracking-[0.2em] text-[#C9A86A]">Tracking?</h4>
								<p className="text-gray-400 font-light leading-relaxed">Real-time SMS tracking provided.</p>
							</div>
							<div>
								<h4 className="font-bold text-xs mb-3 uppercase tracking-[0.2em] text-[#C9A86A]">Payment?</h4>
								<p className="text-gray-400 font-light leading-relaxed">Cash on delivery or ACH.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
