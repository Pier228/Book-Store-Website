import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { pages } from "../../lib/consts";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link
                                to="/"
                                className="font-bold text-2xl sm:text-3xl flex gap-2"
                            >
                                <img src={Logo} alt="Logo" className="w-10" />
                                Books
                            </Link>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <div>
                                <DarkMode />
                            </div>
                            <ul className="hidden sm:flex items-center gap-4">
                                {pages
                                    .filter((menu) => menu.title !== "Кошик")
                                    .map((menu, index) => (
                                        <li key={index}>
                                            <Link
                                                to={menu.link}
                                                className="inline-block py-4 px-4 hover:text-primary duration-200"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                            <button
                                onClick={() => navigate("/basket")}
                                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                            >
                                Кошик
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
