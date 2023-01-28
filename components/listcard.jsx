import Image from "next/image";
import React from "react";
import Icons from "./icons";

const ListCard = ({book_image,title,contributor,description}) => {
    const src = book_image;

    return (
        <div className="flex border-b-2 pb-2 my-6">
            <Image
                loader={() => src}
                src={src}
                alt="book image"
                width={220}
                height={500}
                className="w-20 h-24 md:h-auto md:w-32 lg:w-44"
            />
            <div className="ml-2">
                <div className="md:flex justify-between align-start">
                    <div>
                        <h4 className="text-md md:text-xl font-bold text-cyan-900">{title}</h4>
                        <p className="text-gray-800 text-sm mt-2">{contributor}</p>
                    </div>
                    <Icons />
                </div>
                <p className="mt-2 md:mt-4">
                   {description} 
                </p>
            </div>
        </div>
    );
};

export default ListCard;
