import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-cyan-900 px-6 mt-12">
            <div className=" text-white py-10 w-full max-w-6xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <Image
                            src="/book.svg"
                            alt="book"
                            width={40}
                            height={40}
                            className="mb-2"
                        />
                        <h5 className="text-sm font-bold">OUR MISSION</h5>
                        <p className="text-xs text-gray-200">
                            Legible empowers and connects authors and readers
                            through open access to global reading and publishing
                            platform.
                        </p>
                    </div>
                    <div className="text-sm flex flex-col gap-3">
                        <h5 className="font-bold">GETTING STARTED</h5>
                        <p>Browse</p>
                        <p>FAQ</p>
                        <p>Help</p>
                    </div>
                    <div className="text-sm flex flex-col gap-3">
                        <h5 className="font-bold">ABOUT LEGIBLE</h5>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Accessibility feedback</p>
                    </div>
                    <div className="text-sm flex flex-col gap-3">
                        <h5 className="font-bold">FOR PUBLISHERS</h5>
                        <p>Contact us</p>
                        <p>Learn more</p>
                    </div>
                </div>
                <div className="text-xs">
                    <div className="mt-4 flex gap-2 mb-2 items-center">
                        <p>India | </p>
                        <p className="font-bold hover:underline">
                            Change country
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src="/facebook.svg"
                            alt="facebook"
                            width={28}
                            height={24}
                        />
                        <Image
                            src="/instagram.svg"
                            alt="facebook"
                            width={28}
                            height={24}
                        />
                        <Image
                            src="/linkedin.svg"
                            alt="facebook"
                            width={28}
                            height={24}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
