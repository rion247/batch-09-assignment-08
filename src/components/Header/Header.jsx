import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "border border-green-500 text-green-500 py-3 px-5 rounded-lg font-semibold" : " border-transparent text-neutral-500 font-normal hover:bg-black hover:text-white py-3 px-5 rounded-lg"}>Home</NavLink>
        <NavLink to="/listedBooks" className={({ isActive }) => isActive ? "border border-green-500 text-green-500 py-3 px-5 rounded-lg font-semibold" : " border-transparent text-neutral-500 font-normal hover:bg-black hover:text-white py-3 px-5 rounded-lg"}>Listed Books</NavLink>
        <NavLink to="/pagesToRead" className={({ isActive }) => isActive ? "border border-green-500 text-green-500 py-3 px-5 rounded-lg font-semibold" : " border-transparent text-neutral-500 font-normal hover:bg-black hover:text-white py-3 px-5 rounded-lg"}>Pages to Read</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "border border-green-500 text-green-500 py-3 px-5 rounded-lg font-semibold" : " border-transparent text-neutral-500 font-normal hover:bg-black hover:text-white py-3 px-5 rounded-lg"}>Blog</NavLink>
        <NavLink to="/community" className={({ isActive }) => isActive ? "border border-green-500 text-green-500 py-3 px-5 rounded-lg font-semibold" : " border-transparent text-neutral-500 font-normal hover:bg-black hover:text-white py-3 px-5 rounded-lg"}>Community</NavLink>
    </>

    return (

        <div className="navbar">

            <div className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>

                </div>

                <Link to="/" className="btn btn-ghost text-3xl font-bold">Book Vibe</Link>

            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1 gap-x-14 items-center ">
                    {links}
                </ul>

            </div>

            <div className="navbar-end gap-x-4">

                <Link href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 font-semibold rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                    Sign In
                </Link>

                <Link href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-teal-500 font-semibold rounded-md hover:bg-teal-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                    Sign Up
                </Link>

            </div>

        </div>
    );
};

export default Header;