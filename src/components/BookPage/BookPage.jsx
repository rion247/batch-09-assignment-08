import { useLoaderData } from "react-router-dom";
import SingleBookPage from "./SingleBookPage";

const BookPage = () => {
    const books = useLoaderData();
    return (
        <div className="mb-32">

            <h4 className="font-playfair-display mb-16 font-bold text-[40px] text-center">Books</h4>

            <div className="grid grid-cols-4 gap-y-10">

                {
                    books.map(book => <SingleBookPage key={book.bookId} book={book}></SingleBookPage>)
                }

            </div>

        </div>
    );
};

export default BookPage;