
const SingleCommunity = ({ forum }) => {

    const { title, category, cover_picture, publish_date, views } = forum;

    console.log(views);

    return (

        <div className="font-work-sans shadow-lg">
            <article className="flex flex-col ">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={cover_picture} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-neutral-400">{category}</a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                        <span>{publish_date}</span>
                        <span><span>{views}</span>K views</span>
                    </div>
                </div>
            </article>

        </div>

    );
};

export default SingleCommunity;