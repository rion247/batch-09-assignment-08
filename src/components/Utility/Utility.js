export const getLocalStoreItem = () =>{

    const getData = JSON.parse(localStorage.getItem('books')) || [];
    return getData;

};

export const getWishListItemFromLocalStorage = () =>{
    const getData = JSON.parse(localStorage.getItem('wishlist')) || [];
    return getData;
};