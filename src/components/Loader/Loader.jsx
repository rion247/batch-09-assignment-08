import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex min-h-screen items-center justify-center ">
            <ScaleLoader size={200} color="green" />
        </div>
    );
};

export default Loader;