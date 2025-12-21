import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { products } from "../lib/data";
import img1 from "figma:asset/3f001b8e0cb5253f09737e0bed7ac915fa61d553.png";
import img2 from "figma:asset/52d2be52cd8c341dd1a7b35ccdf4c2546e7412e8.png";
import img3 from "figma:asset/6c2e96b1595d870fa0dc3f995770cb10349d1e5a.png";

const productImages = [img1, img2, img3];

export const Offers = () => {
	// Mock offers by taking a few products
	const offerProducts = products.filter((_, i) => i % 2 === 0).slice(0, 3);

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
					<h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif font-bold text-[#F5F5F2] tracking-tighter leading-none select-none uppercase">OFFERS</h1>
				</motion.div>
			</div>

			<div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
				{/* Promo Banner */}
				<div className="bg-[#E7DFC8] p-12 mb-24 text-center rounded-sm relative overflow-hidden">
					<div className="relative z-10">
						<span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block text-[#121212]/60">Welcome Gift</span>
						<h2 className="text-4xl font-serif text-[#121212] mb-6">Begin Your Ritual</h2>
						<p className="text-[#121212]/80 mb-8 font-medium max-w-md mx-auto leading-relaxed">
							Use code <strong className="text-[#121212] border-b border-[#121212]">WELCOME20</strong> for 20% off your first order of botanical wellness essentials.
						</p>
						<Link to="/shop" className="inline-block bg-[#121212] text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-[#121212] transition-colors duration-300">
							Shop The Collection
						</Link>
					</div>
					<div className="mt-8 text-[10px] text-[#121212]/40 uppercase tracking-widest">Valid on first-time orders. Excludes bundles.</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
					<h3 className="text-3xl font-serif text-[#121212]">Curated Bundles</h3>
					<Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#121212] transition-colors">
						View All
					</Link>
				</div>

				{/* Product Grid (Inline for consistency with Shop) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
					{offerProducts.map((product, i) => (
						<Link to={`/product/${product.id}`} key={product.id} className="group block">
							<div className="aspect-[4/5] bg-white relative rounded-sm overflow-hidden mb-6 shadow-sm">
								<img src={productImages[i % productImages.length]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
								<div className="absolute top-4 left-4 bg-[#C9A86A] text-[#121212] text-[10px] font-bold px-3 py-1 uppercase tracking-widest">20% Off</div>
							</div>

							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-xl font-serif font-light text-[#121212] mb-1 group-hover:text-[#C9A86A] transition-colors">{product.name}</h3>
									<p className="text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
								</div>
								<div className="flex flex-col items-end">
									<span className="text-sm font-medium text-[#121212] text-red-800 line-through opacity-50">${(parseFloat(product.price) * 1.2).toFixed(2)}</span>
									<span className="text-sm font-medium text-[#121212]">${product.price}</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
