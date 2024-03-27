
const SingleBlog = ({ blog }) => {

    const {cover_picture, name, publish_date  } = blog;

    return (
        <div className="shadow-lg">
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_picture} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{name}</h3>
                    <span className="text-xs text-gray-400">{publish_date}</span>
                    <p className="text-xs text-gray-600">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
            
        </div>
    );
};

export default SingleBlog;