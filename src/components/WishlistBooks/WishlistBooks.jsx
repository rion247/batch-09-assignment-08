import { useEffect, useState } from "react";
import { getWishListItemFromLocalStorage } from "../Utility/Utility";
import SingleWishList from "./SingleWishList";

const WishlistBooks = () => {

    const [wishLists, SetWishLists] = useState([]);

    useEffect(() => {
        const getData = getWishListItemFromLocalStorage();
        SetWishLists(getData);
    }, []);

    return (
        <div>

            {
                wishLists.map(wishList => <SingleWishList key={wishList.bookId} wishList={wishList}></SingleWishList>)
            }


        </div>
    );
};

export default WishlistBooks;