import { useEffect, useState } from "react";
import SingleReadBook from "./SingleReadBook";

const ReadBooks = () => {

    const [readBooks, SetReadBooks] = useState([])

    useEffect(() => {

        const getLocalStoreItem = JSON.parse(localStorage.getItem('books')) || [];
        SetReadBooks(getLocalStoreItem);

    }, [])

    return (

        <div>

            {

                readBooks.map(readBook => <SingleReadBook key={readBook.id} readBook={readBook}></SingleReadBook>)

            }



        </div>
    );
};

export default ReadBooks;