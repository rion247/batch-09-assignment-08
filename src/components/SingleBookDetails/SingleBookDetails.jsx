
const SingleBookDetails = ({ clickedBook }) => {

    const { bookName, author_name, cover_image, description, totalPages, publisher, yearOfPublishing, tags, category, rating } = clickedBook;

    return (

        <div className="flex items-center justify-center">

            <div className="flex justify-center items-center gap-x-12">

                <div className="w-2/5 flex justify-center bg-neutral-100 items-center h-auto p-20 rounded-2xl">
                    <img src={cover_image} className="w-[400px] h-[580px] shadow-2xl" />
                </div>

                <div className="w-3/5 font-work-sans">

                    <div className="pb-6 border-b border-neutral-300 mb-4">
                        <h4 className="text-[40px] font-bold font-playfair-display mb-4">{bookName}</h4>
                        <p className="text-xl font-medium">By: <span>{author_name}</span></p>
                    </div>

                    <div className="pb-4 border-b border-neutral-300 mb-6 text-xl font-medium">
                        <h6>{category}</h6>
                    </div>

                    <div className="mb-6">
                        <p className="text-base font-normal leading-7">
                            <span className="font-bold">Review: </span>
                            {description}
                        </p>
                    </div>

                    <div className="text-base font-normal leading-7 pb-6 border-b border-neutral-300 mb-6">
                        <span className="font-bold mr-4">Tag</span>
                        {
                            tags.map(tag => <a className="mr-3 px-4 py-2 text-green-500 font-medium"><span>#</span>{tag}</a>)
                        }
                    </div>

                    <div className="flex items-center justify-start gap-x-16 mb-8">

                        <div className="flex flex-col gap-3 text-base font-normal text-neutral-500">

                            <h6>Number of Pages:</h6>
                            <h6>Publisher:</h6>
                            <h6>Year of Publishing:</h6>
                            <h6>Rating:</h6>

                        </div>

                        <div className="flex flex-col gap-3 text-base font-semibold">

                            <h6>{totalPages}</h6>
                            <h6>{publisher}</h6>
                            <h6>{yearOfPublishing}</h6>
                            <h6>{rating}</h6>

                        </div>

                    </div>

                    <div className="flex justify-start items-center gap-x-4">

                        <button href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg hover:text-white border hover:border-transparent border-neutral-300 hover:bg-green-500 font-semibold rounded-md sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{ }">
                            Read
                        </button>
                        <button href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-teal-500 font-semibold rounded-md hover:bg-teal-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Wishlist
                        </button>

                    </div>

                </div>

            </div>

        </div >

    );

};

export default SingleBookDetails;
