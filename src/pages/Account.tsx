import React, { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import { Button, Input, Label } from "../components/ui/core";
import { LogOut } from "lucide-react";
import heroBg from "figma:asset/09fbdf709fa2de8a2d5fe03ac341e04e84ba8baa.png";

export const Account = () => {
	const { user, login, logout } = useAuth();
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [email, setEmail] = useState("");
	const [activeTab, setActiveTab] = useState<"profile" | "orders">("orders");

	const handleAuth = (e: React.FormEvent) => {
		e.preventDefault();
		login(email);
	};

	return (
		<div className="bg-[#F5F5F2] min-h-screen pt-20">
			{/* Header */}
			<div className="relative -mt-20 h-[45vh] bg-[#1C1F26] flex flex-col items-center justify-center overflow-hidden">
				<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center grayscale">
					<img src={heroBg} className="h-full w-auto object-cover opacity-50" alt="" />
				</div>

				<motion.div className="relative z-10 text-center px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
					<h1 className="text-5xl md:text-7xl font-serif font-light text-[#F5F5F2] tracking-tight">My Account</h1>
				</motion.div>
			</div>

			<div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
				{!user ? (
					<div className="max-w-md mx-auto bg-white p-8 md:p-12 rounded-sm shadow-sm border border-black/5">
						<h2 className="text-3xl font-serif text-[#121212] mb-2 text-center">{isLoginMode ? "Welcome Back to Your Ritual" : "Join Zodiac"}</h2>
						<p className="text-center text-gray-500 font-medium mb-8 font-serif text-sm">{isLoginMode ? "Access your history and manage your wellness routine." : "Join us to curate your personal wellness journey."}</p>

						<form onSubmit={handleAuth} className="space-y-6">
							<div>
								<Label className="text-xs uppercase tracking-widest text-gray-400">Email Address</Label>
								<Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
							</div>

							<div>
								<Label className="text-xs uppercase tracking-widest text-gray-400">Password</Label>
								<Input type="password" required placeholder="••••••••" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
							</div>

							<Button fullWidth variant="primary" type="submit" className="bg-[#121212] hover:bg-[#C9A86A] hover:text-[#121212] text-white font-bold uppercase tracking-widest py-4 text-xs transition-colors">
								{isLoginMode ? "Sign In" : "Create Account"}
							</Button>
						</form>

						<div className="mt-8 text-center text-xs font-bold uppercase tracking-widest">
							<button onClick={() => setIsLoginMode(!isLoginMode)} className="text-gray-400 hover:text-[#121212] transition-colors">
								{isLoginMode ? "Need an account? Register" : "Have an account? Sign In"}
							</button>
						</div>
					</div>
				) : (
					<div>
						<div className="flex justify-between items-center mb-12 pb-4 border-b border-black/10">
							<span className="text-lg font-serif text-[#121212]">
								Welcome, <span className="text-gray-500">{user.email}</span>
							</span>
							<button onClick={logout} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#121212] transition-colors">
								<LogOut size={14} /> End Session
							</button>
						</div>

						<div className="flex gap-8 mb-12">
							<button
								onClick={() => setActiveTab("orders")}
								className={`text-sm font-bold uppercase tracking-widest pb-2 border-b-2 transition-colors ${activeTab === "orders" ? "border-[#C9A86A] text-[#121212]" : "border-transparent text-gray-400 hover:text-[#121212]"}`}>
								Orders
							</button>
							<button
								onClick={() => setActiveTab("profile")}
								className={`text-sm font-bold uppercase tracking-widest pb-2 border-b-2 transition-colors ${activeTab === "profile" ? "border-[#C9A86A] text-[#121212]" : "border-transparent text-gray-400 hover:text-[#121212]"}`}>
								Profile
							</button>
						</div>

						{activeTab === "orders" && (
							<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
								{[1, 2].map((order) => (
									<div key={order} className="border border-black/5 rounded-sm p-8 bg-white hover:shadow-sm transition-shadow">
										<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-100">
											<div className="mb-4 md:mb-0">
												<span className="block text-xl font-serif text-[#121212] mb-1">Order #2024-{100 + order}</span>
												<p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Placed on Dec {10 + order}, 2024</p>
											</div>
											<div className="text-left md:text-right">
												<span className="block text-lg font-medium text-[#121212]">$125.00</span>
												<span className="inline-block px-3 py-1 bg-[#F5F5F2] text-[#121212] text-[10px] font-bold uppercase tracking-widest rounded-full mt-2 border border-black/5">Delivered</span>
											</div>
										</div>
										<div className="flex gap-4">
											<div className="w-16 h-16 bg-[#F5F5F2] rounded-sm border border-black/5" />
											<div className="w-16 h-16 bg-[#F5F5F2] rounded-sm border border-black/5" />
										</div>
									</div>
								))}
							</motion.div>
						)}

						{activeTab === "profile" && (
							<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
								<div className="space-y-6 bg-transparent p-0">
									<div>
										<Label className="text-xs uppercase tracking-widest text-gray-400">Full Name</Label>
										<Input defaultValue="Jane Doe" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
									</div>
									<div>
										<Label className="text-xs uppercase tracking-widest text-gray-400">Email</Label>
										<Input defaultValue={user.email} disabled className="bg-gray-50 border-gray-200" />
									</div>
									<div>
										<Label className="text-xs uppercase tracking-widest text-gray-400">Phone</Label>
										<Input defaultValue="(555) 123-4567" className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]" />
									</div>
									<Button variant="primary" className="bg-[#121212] text-white font-bold uppercase tracking-widest py-4 mt-4 hover:bg-[#C9A86A] hover:text-[#121212] transition-colors text-xs">
										Save Changes
									</Button>
								</div>
							</motion.div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
