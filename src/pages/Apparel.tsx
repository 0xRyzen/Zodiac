import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { products } from "../lib/data";
import { Link } from "react-router-dom";

export const Apparel = () => {
	const [sortBy, setSortBy] = useState("featured");

	const apparelProducts = useMemo(() => {
		// If no apparel, show standard products for demo
		const items = products.filter((p) => p.category === "Apparel");
		return items.length > 0 ? items : products.slice(0, 3);
	}, []);

	const filteredProducts = useMemo(() => {
		let result = [...apparelProducts];

		if (sortBy === "price-low") {
			result.sort((a, b) => a.price - b.price);
		} else if (sortBy === "price-high") {
			result.sort((a, b) => b.price - a.price);
		}

		return result;
	}, [apparelProducts, sortBy]);

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
					<h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif font-bold text-[#F5F5F2] tracking-tighter leading-none select-none uppercase">APPAREL</h1>
				</motion.div>
			</div>

			<div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
				<div className="flex justify-between items-center mb-12 pb-4 border-b border-black/10">
					<span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{filteredProducts.length} Items</span>
					<div className="flex items-center space-x-2">
						<span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Sort by:</span>
						<select className="text-xs border-none bg-transparent font-bold uppercase tracking-widest focus:ring-0 cursor-pointer outline-none text-[#121212]" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
							<option value="featured">Featured</option>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
					{filteredProducts.map((product, i) => (
						<motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
							<Link to={`/product/${product.id}`} className="group block">
								<div className="aspect-[4/5] bg-white relative rounded-sm overflow-hidden mb-6 shadow-sm">
									<img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
								</div>

								<div className="flex justify-between items-start">
									<div>
										<h3 className="text-xl font-serif font-light text-[#121212] mb-1 group-hover:text-[#C9A86A] transition-colors">{product.name}</h3>
										<p className="text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
									</div>
									<div className="text-sm font-medium text-[#121212]">${product.price}</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{filteredProducts.length === 0 && <div className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">No apparel items found.</div>}
			</div>
		</div>
	);
};
