import { GrLocation } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
const SingleReadBook = ({ readBook }) => {

    const { bookName, author_name, cover_image, totalPages, tags, publisher, yearOfPublishing, category, rating, bookId } = readBook;

    return (
        <div className="p-6 bg-neutral-100 font-work-sans my-6 rounded-2xl border border-neutral-300">

            <div className="bg-white flex items-center justify-start gap-x-20">

                <div className="px-12 py-7">

                    <img className="w-36 h-44" src={cover_image} alt={`...Loading of ${bookName} image`} />

                </div>

                <div>

                    <h4 className="font-playfair-display text-2xl font-bold mb-4">{author_name}</h4>

                    <p className="text-base font-medium text-neutral-600 mb-4">By : <span>{author_name}</span></p>

                    <div className="pb-5 border-b border-neutral-300 mb-4">

                        <div className="flex items-center mb-5">

                            <h6 className="text-base font-bold">Tag</h6>

                            <div>

                                {
                                    tags.map(tag => <a className="px-4 py-2 mx-4 text-green-500 font-medium text-base"><span>#</span>{tag}</a>)
                                }

                            </div>

                            <div className="flex gap-x-3 items-center justify-start">
                                <GrLocation />
                                <h6 className="text-base font-normal text-neutral-600">Year of Publishing: {yearOfPublishing}</h6>
                            </div>

                        </div>

                        <div className="flex gap-x-5 items-center justify-start">

                            <div className="flex items-center justify-start gap-x-3">

                                <BsPeople />

                                <h6 className="text-base font-normal text-neutral-500">Publisher: {publisher}</h6>

                            </div>

                            <div className="flex items-center justify-start gap-x-3 text-base font-normal text-neutral-500">

                                <div>
                                    <img className="w-4 h-5" src="pageIcon.png" alt="...Loading" />
                                </div>

                                <h6>Page {totalPages}</h6>

                            </div>

                        </div>

                    </div>

                    <div className="flex text-base font-normal text-black gap-x-4">

                        <h6 className="bg-blue-100 py-3 px-5 rounded-full">Category: {category}</h6>
                        <h6 className="bg-orange-100 py-3 px-5 rounded-full">Rating:: {rating}</h6>

                        <Link to={`/bookDetails/${bookId}`} className="bg-green-500 text-white px-5 py-3 text-lg font-medium rounded-full">View Details</Link>

                    </div>

                </div>

            </div>

        </div >
    );
};

export default SingleReadBook;