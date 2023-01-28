import Image from "next/image";
import React from "react";
import Icons from "./icons";

const GridCard = ({book_image,title,contributor,description}) => {
    const src = book_image;
    return (
        <div className="flex flex-col gap-1">
            <Image
                loader={() => src}
                src={src}
                alt="book image"
                width={220}
                height={500}
                className="w-32 md:w-44"
            />
            <p className="font-semibold ">{title}</p>
            <p className="text-gray-800 text-sm">{contributor}</p>
            <Icons />
        </div>
    );
};

export default GridCard;
