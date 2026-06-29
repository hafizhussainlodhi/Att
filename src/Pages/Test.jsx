import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import logo from "../assets/Home/logo.png";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

export default function Test() {

    return (

        <main className="relative max-w-xl mx-auto h-dvh overflow-hidden bg-white flex flex-col">

            {/* Header */}
            <div className="relative z-20 w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 shadow-md shadow-gray-200">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Top Decoration */}
            <img
                src="/assets/top.png"
                alt=""
                className="absolute top-16 right-0 pointer-events-none"
            />

            {/* Bottom Decoration */}
            <img
                src="/assets/bottom.png"
                alt=""
                className="absolute bottom-0 right-0 pointer-events-none"
            />

            {/* Content */}
            <section className="relative z-10 flex-1 flex flex-col justify-center px-6">

                <div className="text-center">
                    <div className="flex items-center justify-center gap-3">
                        <h1 className="text-4xl font-semibold text-(--primary-color)">
                            Welcome to
                        </h1>

                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </div>

                    <p className="mt-2 text-lg text-gray-600">
                        How can we help you?
                    </p>
                </div>

                <div className="mt-12 w-full max-w-[300px] mx-auto flex flex-col gap-3">
                    {menuItems.map((item) => (
                        <Link key={item.label} to={item.path}>
                            <button className="w-full h-10 rounded-full bg-[var(--primary-color)] hover:bg-black duration-300 text-white text-xs font-bold flex items-center justify-between px-5">
                                {item.label}
                                <span className="text-lg">→</span>
                            </button>
                        </Link>
                    ))}
                </div>

            </section>

        </main>
    );
}