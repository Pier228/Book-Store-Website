import React from "react";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import RoundedButton from "../Buttons/RoundedButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../lib/reducers/cartSlice";

const Books = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(
            "https://www.googleapis.com/books/v1/volumes?q=Comedy+Fun+History+BestSeller&maxResults=10&printType=books&langRestrict=en"
        )
            .then((data) => data.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (data) => {
        dispatch(addItem(data));
    };

    return (
        <>
            <div className="mt-14 mb-12" id="popular books" data-aos="fade-up">
                <div className="container">
                    {/* header */}
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Найпопулярніші книги для вас
                        </p>
                        <h1 className="text-3xl font-bold">Популярні книги</h1>
                        <p className="text-xs text-gray-400">
                            Погляньте на список популярних книг прямо зараз!
                        </p>
                    </div>

                    {/* Body section */}
                    {data ? (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 gap-y-12">
                                {/* Card */}
                                {data.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="div space-y-3 w-full"
                                    >
                                        <img
                                            src={
                                                item?.volumeInfo?.imageLinks
                                                    ?.thumbnail ||
                                                "../src/assets/website/not-found.png"
                                            }
                                            alt=""
                                            className="h-[220px] w-[150px] object-cover rounded-md mx-auto cursor-pointer"
                                            onClick={() =>
                                                navigate("/book/" + item.id)
                                            }
                                        />
                                        <div>
                                            <h3
                                                className="font-semibold line-clamp-2 text-center h-6 cursor-pointer"
                                                onClick={() =>
                                                    navigate("/book/" + item.id)
                                                }
                                            >
                                                {item.volumeInfo.title}
                                            </h3>
                                            <div className="flex justify-around items-center">
                                                <div>
                                                    <p className="text-sm text-gray-700 line-clamp-1">
                                                        {item?.volumeInfo
                                                            ?.authors?.[0] ||
                                                            "Без автора"}
                                                    </p>
                                                    <div className="flex items-center gap-1">
                                                        {Array.from({
                                                            length: 5,
                                                        }).map((_, index) => (
                                                            <FaStar
                                                                className="text-yellow-500"
                                                                key={index}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <RoundedButton
                                                    text="До Кошику"
                                                    onClick={() =>
                                                        handleAddToCart(item)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md"
                                    to="/search"
                                >
                                    Перейти до пошуку книг
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </>
    );
};

export default Books;
