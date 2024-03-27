import { useEffect, useState } from "react";
import SingleReadBook from "./SingleReadBook";
import { getLocalStoreItem } from "../Utility/Utility";

const ReadBooks = () => {

    const [readBooks, SetReadBooks] = useState([])

    useEffect(() => {

        const localStoreItem = getLocalStoreItem();
        SetReadBooks(localStoreItem);

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