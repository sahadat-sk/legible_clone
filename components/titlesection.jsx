import Image from "next/image";
import React from "react";

const TitleSection = ({ setGrid }) => {
    const src =
        "https://storage.googleapis.com/du-prd/books/images/9780735219274.jpg";

    return (
        <div className="flex gap-6 border-b-2 pb-4">
            <Image
                loader={() => src}
                src={src}
                alt="book image"
                width={220}
                height={500}
                className="hidden md:inline-block h-auto md:w-32 lg:w-44"
            />
            <div className="flex flex-col justify-center gap-6 w-full">
                <h1 className="text-3xl font-bold text-cyan-900">
                    Trending Reads
                </h1>
                <p className="text-sm text-gray-700 font-light">
                    Buzzworthy, bestselling, and bingeble. Read the books
                    everyone is talking about right now
                </p>
                <div className="md:flex justify-between w-full">
                    <div className="flex gap-4">
                        <Image
                            src="/chain.svg"
                            alt="link"
                            width={24}
                            height={24}
                        />
                        <Image
                            src="/dots.svg"
                            alt="dots"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
                        <div className="border-2 px-8 py-1 text-sm">
                            Sort By: Recommended
                        </div>
                        <div className="flex gap-2">
                            <Image
                                src="/grid.svg"
                                alt="grid view"
                                width={28}
                                height={28}
                                onClick={() => setGrid(true)}
                            />
                            <Image
                                src="/list.svg"
                                alt="list view"
                                width={28}
                                height={28}
                                onClick={() => setGrid(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleSection;
