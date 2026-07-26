"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Sparkles,
  X,
  Plus,
  Check,
  Search,
  ArrowRight,
  Info,
  Heart,
} from "lucide-react";

// ==========================================
// 1. TYPESAFE DATA MODELS
// ==========================================
type Category = "All" | "Emotions" | "Time & Memory" | "States of Being";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  numericValue: number; // Used for "cart calculation"
  category: Category;
  description: string;
  perks: string[];
  stockStatus: "In Stock" | "Sold Out" | "Coming Soon" | "Priceless";
  badge?: string;
};

// ==========================================
// 2. MOCK DATA
// ==========================================
const PRODUCTS: Product[] = [
  {
    id: "item-1",
    title: "More Time",
    subtitle: "24 extra hours with no obligations or notifications.",
    price: "£999,999",
    numericValue: 999999,
    category: "Time & Memory",
    description:
      "A rare pause button for existence. Gives you one full day where deadline clocks freeze, emails bounce back, and the sun stays at golden hour just a little bit longer.",
    perks: ["Zero phone notifications", "Absolute quiet", "Time flows at 50% speed"],
    stockStatus: "Priceless",
    badge: "Most Requested",
  },
  {
    id: "item-2",
    title: "A Second Chance",
    subtitle: "Rewind and rewrite one past conversation.",
    price: "Sold Out",
    numericValue: 0,
    category: "Time & Memory",
    description:
      "Take back that impulsive text or re-say what you actually meant to say during that argument 3 years ago. High demand item—currently out of stock across all realms.",
    perks: ["Clears lingering regret", "Instant closure", "Memory auto-updated"],
    stockStatus: "Sold Out",
  },
  {
    id: "item-3",
    title: "Inner Peace",
    subtitle: "A completely calm mind during rush hour.",
    price: "Priceless",
    numericValue: 0,
    category: "States of Being",
    description:
      "Unshakable tranquility. Noise fades into background music, overthinking subsides, and your mental inbox reaches absolute zero.",
    perks: ["Zero anxiety spikes", "Unconditional gratitude", "Deep breathing unlocked"],
    stockStatus: "In Stock",
    badge: "Popular",
  },
  {
    id: "item-4",
    title: "Courage",
    subtitle: "Enough nerve to finally say what you feel.",
    price: "Free",
    numericValue: 0,
    category: "Emotions",
    description:
      "A warm surge in your chest that dissolves fear. Perfect for difficult conversations, starting new projects, or taking giant leaps of faith.",
    perks: ["Self-doubt immunity", "Clear voice boost", "Instant action trigger"],
    stockStatus: "In Stock",
    badge: "Community Gift",
  },
  {
    id: "item-5",
    title: "A Perfect Memory",
    subtitle: "Re-live a childhood afternoon in 4K clarity.",
    price: "£∞",
    numericValue: 100000000,
    category: "Time & Memory",
    description:
      "Smell the summer rain again, hear the laugh of someone you miss, and feel the exact temperature of a day when you had zero worries.",
    perks: ["Full sensory recall", "Nostalgia boost", "Permanent warm feeling"],
    stockStatus: "Priceless",
  },
  {
    id: "item-6",
    title: "Unconditional Forgiveness",
    subtitle: "Release the weight of resentment instantly.",
    price: "£0",
    numericValue: 0,
    category: "Emotions",
    description:
      "Heavy emotional baggage disappears from your shoulders. You don't forget what happened, but it no longer holds any power over your present.",
    perks: ["Lighter chest feeling", "Restored sleep quality", "Full mental freedom"],
    stockStatus: "In Stock",
  },
];

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Helper: Trigger custom toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Helper: Add item to cart
  const addToCart = (product: Product) => {
    if (product.stockStatus === "Sold Out") {
      showToast(`Sorry, "${product.title}" is currently sold out!`);
      return;
    }
    if (cart.find((item) => item.id === product.id)) {
      showToast(`"${product.title}" is already in your sanctuary cart.`);
      return;
    }
    setCart([...cart, product]);
    showToast(`Added "${product.title}" to your cart!`);
  };

  // Helper: Remove item from cart
  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Filter products by search and category
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-amber-500 text-neutral-950 px-4 py-3 rounded-xl font-medium shadow-xl shadow-amber-500/10 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center text-neutral-950 font-serif font-bold text-lg">
              S
            </div>
            <div>
              <span className="font-serif text-lg tracking-wide text-neutral-100 block font-semibold">
                THE SANCTUARY
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono block -mt-1">
                Store of the Priceless
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/80 transition-all text-sm font-medium text-neutral-200"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="ml-1 bg-amber-400 text-neutral-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO BANNER */}
      <section className="relative px-6 pt-20 pb-16 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Curated Intangibles</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-neutral-100 leading-[1.15] mb-6">
          The Store of Things <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            Money Can't Buy.
          </span>
        </h1>

        <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Welcome to the world's first luxury boutique for intangible treasures.
          Acquire courage, rent extra time, or browse our priceless collection.
        </p>

        {/* SEARCH BAR */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search for peace, time, courage..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900/80 border border-neutral-800 rounded-full pl-11 pr-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
          />
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {(["All", "Emotions", "Time & Memory", "States of Being"] as Category[]).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-neutral-950 font-semibold shadow-md shadow-amber-400/10"
                    : "bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/30 rounded-3xl border border-neutral-800/50">
            <Info className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
            <p className="text-neutral-400 font-serif text-lg">
              No intangible assets found matching your query.
            </p>
            <p className="text-neutral-600 text-sm mt-1">
              Try searching for something else like "Courage" or "Time".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-neutral-900/40 border border-neutral-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] px-2.5 py-0.5 rounded-full font-medium">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl text-neutral-100 group-hover:text-amber-300 transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                    {product.subtitle}
                  </p>
                </div>

                {/* Card Bottom */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-500 block uppercase font-mono">
                      Price
                    </span>
                    <span
                      className={`font-serif text-lg font-medium ${
                        product.stockStatus === "Sold Out"
                          ? "text-neutral-600 line-through"
                          : "text-amber-300"
                      }`}
                    >
                      {product.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
                      title="View Details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.stockStatus === "Sold Out"}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        product.stockStatus === "Sold Out"
                          ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
                          : "bg-neutral-100 text-neutral-950 hover:bg-amber-400 hover:text-neutral-950"
                      }`}
                    >
                      <span>
                        {product.stockStatus === "Sold Out" ? "Sold Out" : "Acquire"}
                      </span>
                      {product.stockStatus !== "Sold Out" && (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PRODUCT DETAILS MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-8 text-left shadow-2xl">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">
              {activeModalProduct.category}
            </span>
            <h2 className="font-serif text-3xl text-neutral-100 mb-2">
              {activeModalProduct.title}
            </h2>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              {activeModalProduct.description}
            </p>

            <div className="mb-6 bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800/80">
              <h4 className="text-xs font-mono text-neutral-400 uppercase mb-3">
                Key Perks & Experiences
              </h4>
              <ul className="space-y-2">
                {activeModalProduct.perks.map((perk, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <div>
                <span className="text-xs text-neutral-500 block font-mono uppercase">
                  Current Value
                </span>
                <span className="font-serif text-xl text-amber-300">
                  {activeModalProduct.price}
                </span>
              </div>
              <button
                onClick={() => {
                  addToCart(activeModalProduct);
                  setActiveModalProduct(null);
                }}
                disabled={activeModalProduct.stockStatus === "Sold Out"}
                className="px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-semibold text-xs hover:bg-amber-300 transition-all disabled:bg-neutral-800 disabled:text-neutral-600"
              >
                Add to Sanctuary Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SLIDE-OUT CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-neutral-900 border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-amber-400" />
                    <h2 className="font-serif text-xl text-neutral-100">
                      Your Sanctuary Cart
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 text-neutral-500">
                      <Heart className="w-8 h-8 mx-auto mb-2 opacity-30" />
                      <p className="font-serif text-neutral-400">
                        Your cart is empty.
                      </p>
                      <p className="text-xs mt-1">
                        Acquire peace, time, or courage to get started.
                      </p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-neutral-950/60 border border-neutral-800/80 p-4 rounded-2xl flex items-center justify-between"
                      >
                        <div>
                          <h4 className="font-serif text-neutral-200">
                            {item.title}
                          </h4>
                          <span className="text-xs text-amber-400 font-serif">
                            {item.price}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Cart Footer / Checkout Simulation */}
              <div className="pt-6 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-400">Total Price</span>
                  <span className="font-serif text-xl text-amber-300">
                    {cart.length === 0 ? "£0" : "Priceless"}
                  </span>
                </div>
                <button
                  disabled={cart.length === 0}
                  onClick={() => {
                    alert(
                      "✨ Order Placed! Your intangible treasures have been credited to your mind & heart."
                    );
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3.5 rounded-full bg-amber-400 text-neutral-950 font-semibold text-sm hover:bg-amber-300 transition-all disabled:bg-neutral-800 disabled:text-neutral-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>Acquire All Assets</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-center text-xs text-neutral-600 font-mono">
        <p>© {new Date().getFullYear()} THE SANCTUARY — All Intangible Rights Reserved.</p>
        <p className="mt-1">Built with Next.js, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
}