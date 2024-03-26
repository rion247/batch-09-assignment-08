import { FaAngleDown } from "react-icons/fa6";
import Tab from "../Tab/Tab";
import { Outlet } from "react-router-dom";
const ListedBooks = () => {
    return (
        <div className="font-work-sans container mx-auto">

            <h1 className="border text-center p-9 font-bold text-3xl mb-8">Books</h1>

            <div className="flex justify-center mb-14">
                <button href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 font-semibold rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                    Sort By
                    <FaAngleDown className="mt-1 ml-5" />
                </button>
            </div>

            <div className="font-work-sans w-full">

                <Tab></Tab>

            </div>

            <div className="mt-8 mb-32">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default ListedBooks;
