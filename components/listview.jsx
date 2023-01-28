import React from "react";
import ListCard from "./listcard";

const ListView = ({ books }) => {
    console.log(books[0]);

    return (
        <>
            {books.map((book) => {
                const { book_image, title, contributor, description } = book;
                return (
                    <ListCard
                        key={book.id}
                        book_image={book_image}
                        title={title}
                        contributor={contributor}
                        description={description}
                    />
                );
            })}
        </>
    );
};
export default ListView;
