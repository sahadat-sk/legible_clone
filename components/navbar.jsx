import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <nav className="px-6 my-3 flex gap-2 justify-center items-center text-sm border-b-2 pb-3">
            <div className="flex gap-2 justify-between items-center bg-red w-full max-w-6xl">
                <Image src="/logo.svg" alt='logo' width={88} height={20}/>
                <div className="hidden gap-4 items-center justify-center lg:flex cursor-pointer">
                    <Image
                        src="/search.svg"
                        alt="search icon"
                        width={24}
                        height={24}
                    />
                    <div className=" text-gray-600 hover:text-gray-900">
                        Browse
                    </div>
                    <div className=" text-gray-600 hover:text-gray-900">
                        Categories
                    </div>
                    <div className="flex gap-1.5">
                        <button className="font-bold border-2 px-6 py-2 rounded-full hover:bg-cyan-900  hover:text-white transition-all">
                            Log in
                        </button>
                        <button className="font-bold border-2 px-6 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-700 transition-all">
                            Sign up
                        </button>
                    </div>
                </div>
                <Image
                    src="/menu.svg"
                    alt="menu icon"
                    width={24}
                    height={24}
                    className="lg:hidden"
                />
            </div>
        </nav>
    );
};

export default Navbar;
