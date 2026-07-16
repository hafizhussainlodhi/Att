import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import logo from "../assets/Home/logo.png";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

import {
    Zap,
    ShieldCheck,
    RadioTower,
    Headset,
    Smartphone,
    BadgeDollarSign,
    CreditCard,
    ArrowRight
} from "lucide-react";


const services = [
    {
        title: "Activar un nuevo plan",
        description: "Activa tu línea en minutos con eSIM o SIM físico.",
        icon: Smartphone,
        to: "/check-compatibility",
        logos: [
            "/assets/att.png",
            "/assets/app-logo.png",
            "/assets/cricket.png",
        ],
    },
    {
        title: "Recargar tu teléfono",
        description: "Añade saldo a tu plan actual al instante.",
        icon: BadgeDollarSign,
        to: "/recharge",
        logos: [
            "/assets/simple-mobile.png",
            "/assets/Claro.png",
            "/assets/metro.png",
            "/assets/cubacel.png",
        ],
    },
    {
        title: "Compra tarjetas virtuales",
        description: "Compra tarjetas para tus servicios favoritos al instante.",
        icon: CreditCard,
        to: "/start-screen",
        logos: [
            "/assets/spotify.webp",
            "/assets/netflix.png",
            "/assets/hulu.webp",
        ],
    },
];

export default function StartS() {

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
                </div>

                <section className="mt-4 space-y-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.title}
                                to={service.to}
                                className="group grid min-h-29 grid-cols-[76px_1fr_45px] items-center rounded-2xl border border-gray-200 bg-white px-3 py-3 shadow-[0_5px_16px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                {/* Icon */}
                                <div className="flex h-full items-center justify-center border-r border-gray-200 pr-3">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-(--primary-color) shadow-[0_5px_8px_rgba(185,0,0,0.25)]">
                                        <Icon
                                            strokeWidth={1.8}
                                            className="h-8 w-8 text-white"
                                        />
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="min-w-0 px-4">
                                    <h2 className="text-[16px] font-bold text-gray-950">
                                        {service.title}
                                    </h2>

                                    <p className="mt-2 text-[11px] text-gray-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                        {service.logos.map((logo) => (
                                            <img
                                                key={logo}
                                                src={logo}
                                                alt=""
                                                className="max-h-8 max-w-16 object-contain"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex items-center justify-center">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--primary-color) text-white shadow-md transition group-hover:translate-x-1">
                                        <ArrowRight
                                            strokeWidth={3}
                                            className="h-5 w-5"
                                        />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </section>


            </section>

        </main>
    );
}






// <div className="mt-12 w-full max-w-75 mx-auto flex flex-col gap-3">
//     {menuItems.map((item) => (
//         <Link key={item.label} to={item.path}>
//             <button className="w-full h-10 rounded-full bg-(--primary-color) hover:bg-black duration-300 text-white text-xs font-bold flex items-center justify-between px-5">
//                 {item.label}
//                 <span className="text-lg">→</span>
//             </button>
//         </Link>
//     ))}
// </div>