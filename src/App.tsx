import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Offers } from "./pages/Offers";
import { Apparel } from "./pages/Apparel";
import { Delivery } from "./pages/Delivery";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Account } from "./pages/Account";
import { About, Contact, Education, Legal, NotFound } from "./pages/StaticPages";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<Router>
					<ScrollToTop />
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/shop" element={<Shop />} />
							<Route path="/offers" element={<Offers />} />
							<Route path="/apparel" element={<Apparel />} />
							<Route path="/delivery" element={<Delivery />} />
							<Route path="/product/:id" element={<ProductDetail />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/account" element={<Account />} />
							<Route path="/education" element={<Education />} />
							<Route path="/about" element={<About />} />
							<Route path="/legal" element={<Legal />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Layout>
				</Router>
			</CartProvider>
		</AuthProvider>
	);
}
