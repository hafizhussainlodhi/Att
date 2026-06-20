import { ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import logo from "../assets/StartS/1.png";
import top from "../assets/StartS/top.png";
import bottom from "../assets/StartS/bottom.png";
import girl from "../assets/StartS/girl.png";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

export default function StartS() {
    return (
        <main className="w-full h-dvh relative overflow-hidden bg-white flex flex-col items-center">
            
            {/* Top Line Image */}
            <img 
                src={top} 
                alt="" 
                className="absolute top-0 left-120 w-[400px] z-0 pointer-events-none" 
            />

            {/* Logo */}
            <div className="relative z-10 text-center mt-24">
                <img
                    src={logo}
                    alt="T Mobile"
                    className="mx-auto mt-3 w-44 h-auto"
                />
            </div>

            {/* Buttons */}
            <div className="relative z-10 mt-20 w-full max-w-[300px] px-4 flex flex-col gap-3">
                {menuItems.map((item) => (
                    <Link key={item.label} to={item.path} className="block">
                        <button className="w-full h-10 rounded-full bg-[var(--primary-color)] hover:bg-black duration-300 text-white text-xs font-bold flex items-center justify-between px-5">
                            {item.label}
                            <span className="text-lg">→</span>
                        </button>
                    </Link>
                ))}
            </div>

            {/* Bottom Line Image */}
            <img 
                src={bottom} 
                alt="" 
                className="absolute bottom-0 left-120 w-[400px] z-0 pointer-events-none" 
            />

            {/* Girl Image */}
            <img
                src={girl}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] z-10 object-cover pointer-events-none"
            />
        </main>
    );
}