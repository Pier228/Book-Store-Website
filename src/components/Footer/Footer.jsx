import {
    FaFacebook,
    FaLocationArrow,
    FaMobileAlt,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";
import { Link } from "react-router-dom";
import { pages, infoPages } from "../../lib/consts";

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-950">
            <section className="container">
                <div className=" grid md:grid-cols-3 py-5">
                    {/* company Details */}
                    <div className=" py-8 px-4 ">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img
                                src={footerLogo}
                                alt="Logo"
                                className="max-w-[50px]"
                            />
                            Books
                        </h1>
                        <p className="">
                            Відкрийте світ знань і розваг з нашою бібліотекою
                        </p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>вулиця Кирилівська, 117, Київ, 04073</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+(044) 468-00-31</p>
                        </div>
                        {/* Social Handle */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="https://x.com/FrankoCrb" target="_blank">
                                <FaTwitter className="text-3xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/cbspodil"
                                target="_blank"
                            >
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a
                                href="https://www.youtube.com/user/crbfranko"
                                target="_blank"
                            >
                                <FaYoutube className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div />
                        <div className="flex items-center -mt-7">
                            <div className=" px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Сторінки
                                </h1>
                                <ul className={`flex flex-col gap-3`}>
                                    {pages.map((route, index) => (
                                        <li
                                            key={index}
                                            className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                                        >
                                            <Link to={route.link}>
                                                <span>&#11162;</span>
                                                <span>{route.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center -mt-14">
                            <div className="py-8 px-4 ">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Інформаційні сторінки
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {infoPages.map((route, index) => (
                                        <li
                                            key={index}
                                            className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                                        >
                                            <Link to={route.link}>
                                                <span>&#11162;</span>
                                                <span>{route.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center py-10 border-t-2 border-gray-300/50">
                        @copyright Всі права захищені 2024 | Зроблено з любов'ю
                        ❤️
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
