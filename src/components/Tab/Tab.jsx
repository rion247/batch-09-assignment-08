import { useState } from "react";
import { Link } from "react-router-dom";

const Tab = () => {

    const [tabIndex, SetTabIndex] = useState(0);

    return (

        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
            <Link onClick={()=>SetTabIndex(0)} to="" className={`flex items-center  flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-gray-400 text-gray-400 ${tabIndex === 0 ? "border border-b-0": "border-b"}`}>
                <span>Read Book</span>
            </Link>
            <Link onClick={()=>SetTabIndex(1)} to={`wishlistbooks`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-gray-400 text-gray-400 ${tabIndex === 1 ? "border border-b-0": "border-b"}`}>
                <span>Wishlist Book</span>
            </Link>
        </div>
    );
};

export default Tab;