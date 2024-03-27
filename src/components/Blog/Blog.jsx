import { useLoaderData, useNavigation } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import Loader from "../Loader/Loader";

const Blog = () => {   

    const blogs = useLoaderData();
    console.log(blogs[0].name);
    const navigation = useNavigation();
    if(navigation.state === "loading") return <Loader></Loader>;
    
    return (
        <section className="font-work-sans mb-20">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                    <img src={`${blogs[0].cover_picture}`} alt="...Loading" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-bold sm:text-4xl group-hover:underline group-focus:underline">{`${blogs[0].name}`}</h3>
                        <span className="text-xs text-neutral-400">{`${blogs[0].publish_date}`}</span>
                        <p className=" text-neutral-600">{`${blogs[0].description}`}</p>
                    </div>
                </a>

                <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        blogs.slice(1, 11).map(blog => <SingleBlog key={blog.blogId} blog={blog}></SingleBlog>)
                    }

                </div>

            </div>

        </section>
    );
};

export default Blog;