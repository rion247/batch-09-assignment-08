import { useLoaderData, useParams } from "react-router-dom";
import SingleBookDetails from "../SingleBookDetails/SingleBookDetails";

const BookDetails = () => {
    const books = useLoaderData();
    
    let { id } = useParams();

    const clickedBook = books.find(book => book.bookId === parseInt(id));    

    return (
        <div className="container mx-auto">
            <SingleBookDetails key={clickedBook.bookId} clickedBook={clickedBook}></SingleBookDetails>
        </div>
    );
};

export default BookDetails;