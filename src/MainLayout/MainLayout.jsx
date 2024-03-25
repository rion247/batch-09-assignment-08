import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>

            <div className="container mx-auto my-10 font-work-sans">
                <Header></Header>
            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;