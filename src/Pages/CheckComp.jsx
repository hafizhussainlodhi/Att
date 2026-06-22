import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import logo from "../assets/Home/logo.png";
import bottom from "../assets/StartS/bottom.png";

export default function CheckComp() {
    const [modalStep, setModalStep] = useState(null);

    return (
        <main className="max-w-xl mx-auto h-dvh w-full relative overflow-hidden bg-white flex flex-col items-center">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 z-20">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 object-contain" />
                </Link>
                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Content */}
            <section className="flex-1 flex flex-col items-center text-center px-6 z-10 w-full overflow-y-auto pt-6">
                <h1 className="text-2xl font-semibold text-gray-800">Activation Flow</h1>
                
                <div className="mt-8">
                    <p className="text-xl text-gray-600">Let's Check</p>
                    <h2 className="text-2xl font-semibold leading-tight text-[#00BFFF]">Your Device Compatibility</h2>
                </div>

                {/* Instruction Box */}
                <div className="mt-8 w-full max-w-[300px] rounded-2xl bg-white border border-gray-100 shadow-lg py-5 px-4">
                    <h3 className="text-xl font-bold text-[#00BFFF]">*#06#</h3>
                    <p className="text-xs mt-1 text-gray-600">Your IMEI number will appear on the screen</p>
                </div>

                {/* Input and Button Section */}
                <div className="mt-6 mb-6 w-full max-w-[300px] rounded-2xl bg-[#F0F7FF] border border-blue-100 p-6 shadow-sm">
                   <p className="text-[20px] font-bold text-gray-800 uppercase tracking-widest mb-3">CHECK YOUR DEVICE COMPATIBILITY</p>
                    <input 
                        type="text" 
                        defaultValue="21902459038459032948"
                        readOnly
                        className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 text-[12px] text-center mb-4 focus:outline-none cursor-default" 
                    />
                    <button
                        onClick={() => setModalStep('success')}
                        className="w-full h-11 rounded-full bg-[#0b4fa7] text-white text-xs font-semibold hover:bg-[#083c84] transition-colors"
                    >
                        CHECK COMPATIBILITY
                    </button>
                </div>
            </section>

            {/* Bottom Section with Back and Skip Buttons */}
            <div className="w-full max-w-[300px] mb-8 z-10">
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="h-10 rounded-full border border-black bg-white px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK
                    </button>
                    <Link
                        to="/plan"
                        className="h-10 rounded-full bg-[#0b4fa7] text-white text-xs font-semibold flex items-center justify-center hover:bg-[#083c84]"
                    >
                        SKIP
                    </Link>
                </div>
            </div>

            {/* Bottom Background Image */}
            <img src={bottom} alt="" className="absolute bottom-0 w-[420px] z-0 pointer-events-none" />

            {/* Success Popup */}
            {modalStep === 'success' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-10 w-10">
                                    <path d="M9.75 17.25l-4.5-4.5 1.5-1.5 3 3 6-6 1.5 1.5-7.5 7.5z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">YOUR PHONE ESIM IS COMPATIBLE</h2>
                        <p className="text-sm text-slate-500 mb-8">IMEI: 21902459038459032948</p>
                        <button
                            onClick={() => setModalStep(null)}
                            className="w-full rounded-full bg-[#0b4fa7] px-4 py-3 text-sm font-semibold text-white hover:bg-[#083c84]"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}