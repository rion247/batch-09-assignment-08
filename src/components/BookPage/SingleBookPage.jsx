import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBookPage = ({ book }) => {

    const { bookName, author_name, cover_image, rating, category, tags, bookId } = book;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="w-[326px] border border-neutral-300 rounded-2xl p-6 bg-neutral-100">

                <div className="bg-white">

                    <div className="flex justify-center items-center mb-8 border-transparent">
                        <img className="w-[134px] h-[166px]" src={cover_image} alt={`...Loading of ${bookName} cover image`} />
                    </div>


                    <div className="flex justify-center mb-4">

                        {
                            tags.map(tag => <a className="text-green-500 px-4 py-2 gap-x-3 font-medium font-work-sans cursor-pointer">{tag}</a>)
                        }

                    </div>

                    <div className="pb-5 border-b-2 border-dashed border-neutral-200">
                        <h6 className="mb-4 text-2xl font-playfair-display font-bold">{bookName}</h6>

                        <p className="text-base font-medium font-work-sans">By : {author_name}</p>
                    </div>

                    <div className="mt-5 flex justify-between items-center font-work-sans text-base font-medium">

                        <h6>{category}</h6>

                        <div className="flex justify-center items-center gap-x-3">

                            <h6>{rating}</h6>

                            <FaRegStar />

                        </div>

                    </div>

                </div>

            </div>
        </Link>

    );
};

export default SingleBookPage;