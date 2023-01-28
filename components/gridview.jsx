import React from "react";
import GridCard from "./gridcard";

const GridView = ({ books }) => {
   

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
            {books.map((book) => {
                const { book_image, title, contributor, description } = book;
                return (
                    <GridCard
                        key={book.id}
                        book_image={book_image}
                        title={title}
                        contributor={contributor}
                        description={description}
                    />
                );
            })}
        </div>
    );
};
export default GridView;

