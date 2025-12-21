import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { Button, Input, Label } from "../components/ui/core";
import { Check, CreditCard, ShieldCheck, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
	const steps = ["Shipping", "Payment", "Review"];
	return (
		<div className="flex items-center justify-center space-x-4 mb-12">
			{steps.map((step, index) => (
				<React.Fragment key={step}>
					<div className={`flex items-center space-x-2 ${index + 1 <= currentStep ? "text-[#121212]" : "text-gray-300"}`}>
						<div
							className={`
              w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border
              ${index + 1 <= currentStep ? "bg-[#121212] text-white border-[#121212]" : "border-gray-300"}
              ${index + 1 < currentStep ? "bg-[#121212]" : ""}
            `}>
							{index + 1 < currentStep ? <Check size={12} /> : index + 1}
						</div>
						<span className="text-xs font-bold uppercase tracking-widest">{step}</span>
					</div>
					{index < steps.length - 1 && <div className={`w-12 h-px ${index + 1 < currentStep ? "bg-[#121212]" : "bg-gray-200"}`} />}
				</React.Fragment>
			))}
		</div>
	);
};

export const Checkout = () => {
	const [step, setStep] = useState(1);
	const { cartTotal, cart, clearCart } = useCart();
	const [loading, setLoading] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (step < 3) {
			setStep(step + 1);
		} else {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setIsComplete(true);
				clearCart();
			}, 2000);
		}
	};

	if (isComplete) {
		return (
			<div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center bg-[#F5F5F2]">
				<div className="w-16 h-16 bg-[#E7DFC8] rounded-full flex items-center justify-center text-[#121212] mb-6">
					<Check size={32} />
				</div>
				<h2 className="text-3xl font-serif text-[#121212] mb-4">Routine Confirmed</h2>
				<p className="text-gray-500 mb-8 max-w-md font-serif">Thank you for choosing Zodiac. Your wellness essentials are being prepared with care and will ship within 1-2 business days.</p>
				<Link to="/">
					<Button variant="primary" className="bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] uppercase tracking-widest text-xs font-bold py-3 px-8">
						Return Home
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div className="bg-[#F5F5F2] min-h-screen pt-12 pb-24">
			<div className="max-w-4xl mx-auto px-4">
				<StepIndicator currentStep={step} />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<div className="md:col-span-2">
						<form onSubmit={handleSubmit}>
							<AnimatePresence mode="wait">
								{step === 1 && (
									<motion.div key="shipping" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6 bg-white p-8 rounded-sm shadow-sm border border-black/5">
										<h2 className="text-xl font-serif text-[#121212] mb-6">Where should we send your routine?</h2>
										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label className="text-xs uppercase tracking-widest text-gray-400">First Name</Label>
												<Input required placeholder="Jane" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
											</div>
											<div className="space-y-2">
												<Label className="text-xs uppercase tracking-widest text-gray-400">Last Name</Label>
												<Input required placeholder="Doe" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
											</div>
										</div>
										<div className="space-y-2">
											<Label className="text-xs uppercase tracking-widest text-gray-400">Address</Label>
											<Input required placeholder="123 Wellness Way" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label className="text-xs uppercase tracking-widest text-gray-400">City</Label>
												<Input required placeholder="Portland" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
											</div>
											<div className="space-y-2">
												<Label className="text-xs uppercase tracking-widest text-gray-400">Zip Code</Label>
												<Input required placeholder="97201" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
											</div>
										</div>
										<div className="space-y-2">
											<Label className="text-xs uppercase tracking-widest text-gray-400">Email</Label>
											<Input type="email" required placeholder="jane@example.com" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
										</div>
										<div className="pt-6">
											<Button type="submit" variant="primary" fullWidth className="bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] uppercase tracking-widest text-xs font-bold py-4 transition-all">
												Continue to Payment
											</Button>
										</div>
									</motion.div>
								)}

								{step === 2 && (
									<motion.div key="payment" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6 bg-white p-8 rounded-sm shadow-sm border border-black/5">
										<h2 className="text-xl font-serif text-[#121212] mb-6">Payment Details</h2>
										<div className="space-y-2">
											<Label className="text-xs uppercase tracking-widest text-gray-400">Card Number</Label>
											<div className="relative">
												<Input required placeholder="0000 0000 0000 0000" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
												<CreditCard className="absolute right-3 top-3 text-gray-400" size={20} />
											</div>
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label className="text-xs uppercase tracking-widest text-gray-400">Expiry Date</Label>
												<Input required placeholder="MM/YY" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
											</div>
											<div className="space-y-2">
												<Label className="text-xs uppercase tracking-widest text-gray-400">CVC</Label>
												<Input required placeholder="123" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
											</div>
										</div>

										<div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
											<ShieldCheck size={14} />
											<span>Secure 256-bit SSL encrypted checkout.</span>
										</div>

										<div className="flex gap-4 mt-6">
											<Button type="button" variant="secondary" onClick={() => setStep(1)} className="uppercase tracking-widest text-xs font-bold">
												Back
											</Button>
											<Button type="submit" variant="primary" className="flex-1 bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] uppercase tracking-widest text-xs font-bold py-4 transition-all">
												Review Order
											</Button>
										</div>
									</motion.div>
								)}

								{step === 3 && (
									<motion.div key="review" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6 bg-white p-8 rounded-sm shadow-sm border border-black/5">
										<h2 className="text-xl font-serif text-[#121212] mb-6">Review Order</h2>
										<div className="bg-[#F5F5F2] p-6 rounded-sm space-y-3 text-sm border border-black/5">
											<div className="flex justify-between">
												<span className="text-gray-500 font-medium">Ship to:</span>
												<span className="text-[#121212]">Jane Doe, 123 Wellness Way, Portland</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-500 font-medium">Method:</span>
												<span className="text-[#121212]">Standard Shipping (Free)</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-500 font-medium">Payment:</span>
												<span className="text-[#121212]">Visa ending in 4242</span>
											</div>
										</div>

										<div className="flex gap-4 mt-6">
											<Button type="button" variant="secondary" onClick={() => setStep(2)} className="uppercase tracking-widest text-xs font-bold">
												Back
											</Button>
											<Button type="submit" variant="primary" className="flex-1 bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] uppercase tracking-widest text-xs font-bold py-4 transition-all" disabled={loading}>
												{loading ? "Processing..." : `Pay $${(cartTotal * 1.08).toFixed(2)}`}
											</Button>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</form>
					</div>

					<div className="md:col-span-1">
						<div className="bg-white border border-black/5 p-6 rounded-sm sticky top-8 shadow-sm">
							<h3 className="font-serif text-[#121212] mb-4 flex items-center gap-2">
								<ShoppingBag size={18} />
								In Your Cart
							</h3>
							<div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
								{cart.map((item) => (
									<div key={item.id} className="flex gap-3 text-sm">
										<img src={item.image} className="w-12 h-12 object-cover rounded-sm bg-[#F5F5F2] border border-black/5" alt="" />
										<div className="flex-1">
											<p className="font-medium text-[#121212] font-serif">{item.name}</p>
											<p className="text-gray-500 text-xs uppercase tracking-wide">Qty: {item.quantity}</p>
										</div>
										<span className="text-[#121212] font-medium">${item.price * item.quantity}</span>
									</div>
								))}
							</div>
							<div className="border-t border-black/10 pt-4 space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-500">Subtotal</span>
									<span className="text-[#121212] font-medium">${cartTotal}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-500">Tax</span>
									<span className="text-[#121212] font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
								</div>
								<div className="flex justify-between font-serif font-medium text-lg pt-2 text-[#121212]">
									<span>Total</span>
									<span>${(cartTotal * 1.08).toFixed(2)}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
