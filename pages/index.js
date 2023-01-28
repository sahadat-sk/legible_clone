import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import TitleSection from "@/components/titlesection";
import Footer from "@/components/footer";
import GridView from "@/components/gridview";
import { useState } from "react";
import ListView from "@/components/listview";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ books }) {
    const [grid, setGrid] = useState(false);
    return (
        <>
            <Navbar />
            <div className="flex flex-col  items-center gap-2 mt-12 px-6">
                <div className="w-full max-w-6xl">
                    <TitleSection setGrid={setGrid} />
                    {grid ? (
                        <GridView books={books} />
                    ) : (
                        <ListView books={books} />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=l8sGIImqNIf3PQpaP37qDTu6QTjJO6hV`
    );
    const data = await res.json();

    // Pass data to the page via props
    return { props: { books: data.results.books } };
}
