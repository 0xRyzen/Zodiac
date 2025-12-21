import React, { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../lib/data";

interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	cart: CartItem[];
	addToCart: (product: Product, quantity: number) => void;
	removeFromCart: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	cartTotal: number;
	itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	const addToCart = (product: Product, quantity: number) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
			}
			return [...prev, { ...product, quantity }];
		});
	};

	const removeFromCart = (productId: string) => {
		setCart((prev) => prev.filter((item) => item.id !== productId));
	};

	const updateQuantity = (productId: string, quantity: number) => {
		if (quantity < 1) return;
		setCart((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)));
	};

	const clearCart = () => setCart([]);

	const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
	const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

	return <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, itemCount }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
