import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (

        <div className="bg-neutral-100 min-h-screen font-work-sans ">

            <div className="container mx-auto flex justify-center items-center">

                <div className="text-center">
                    
                    <div className="flex justify-center">
                        <img className="w-2/5" src="/errorImage.jpg" alt="...Loading" />
                    </div>

                    <h1 className="text-4xl font-bold"><span>404.</span> An Error Occurred </h1>

                    <h4 className="my-4 text-neutral-500">The requested URL/badpage was not found on this server</h4>

                    <p className="mb-8">Feel Free To Go Back To The Home Page By Clicking The Back To Home Button</p>

                    <Link href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 font-semibold rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Back To Home
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ErrorPage;