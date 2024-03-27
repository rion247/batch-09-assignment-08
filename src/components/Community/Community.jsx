import { useLoaderData } from "react-router-dom";
import SingleCommunity from "./SingleCommunity";

const Community = () => {
    const forums = useLoaderData();
    return (

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2 container mx-auto mb-20">

            {
                forums.map(forum => <SingleCommunity key={forum.id} forum={forum}></SingleCommunity>)
            }

        </div>



    );
};

export default Community;