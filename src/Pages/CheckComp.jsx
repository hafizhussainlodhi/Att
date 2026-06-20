import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import logo from "../assets/Home/logo.png";
import bottom from "../assets/StartS/bottom.png"; // Import add kar diya

export default function CheckComp() {
    return (
        <main className="max-w-xl mx-auto h-dvh w-full relative overflow-hidden bg-white flex flex-col items-center">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 z-20">
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

            {/* Content */}
            <section className="flex-1 flex flex-col items-center text-center px-6 z-10">
                <h1 className="mt-14 text-2xl font-semibold">
                    Activation Flow
                </h1>

                <div className="mt-24">
                    <p className="text-xl">Let's Check</p>
                    <h2 className="text-2xl font-semibold leading-tight text-[#00BFFF]">
                        Your Device Compatibility
                    </h2>
                </div>

                <div className="mt-10 w-full max-w-[300px] rounded-md bg-white shadow-2xl py-5 px-4">
                    <h3 className="text-xl font-semibold text-(--primary-color)">
                        *#06#
                    </h3>
                    <p className="text-xs mt-1">
                        Your IMEI number will appear on the screen
                    </p>
                </div>
            </section>

            {/* Bottom Image - Buttons ke peeche */}
            <img 
                src={bottom} 
                alt="" 
                className="absolute bottom-0  w-[420px] z-0 pointer-events-none" 
            />

            {/* Bottom Section (Buttons) */}
            <div className="mt-auto mb-8 w-full max-w-[300px] z-10">
                <Link
                    to="/plan"
                    className="w-full h-11 rounded-full bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                >
                    Check Compatibility
                </Link>

                <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                        onClick={() => window.history.back()}
                        className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>

                    <Link
                        to="/plan"
                        className="h-10 rounded-full bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                    >
                        Skip
                    </Link>
                </div>
            </div>

        </main>
    )
}