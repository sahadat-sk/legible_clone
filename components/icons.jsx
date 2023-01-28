import Image from "next/image";
import React from "react";

const Icons = () => {
    return (
        <div className="flex gap-2 mt-1">
            <Image src="/bookmark.svg" alt="bookmark" width={24} height={24} />
            <Image src="/heart.svg" alt="heart" width={24} height={24} />
            <Image src="/dots.svg" alt="options" width={24} height={24} />
        </div>
    );
};

export default Icons;
