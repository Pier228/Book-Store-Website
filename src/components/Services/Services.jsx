import React from "react";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import OrderButton from "../Buttons/OrderButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../lib/reducers/cartSlice";

const Services = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            "https://www.googleapis.com/books/v1/volumes?maxResults=3&q=Steven King&startIndex=5"
        )
            .then((data) => data.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (data) => {
        dispatch(addItem(data));
    };

    return (
        <>
            <span id="services" />
            <div className="py-10">
                <div className="container text-center">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                            Популярні книги
                        </p>
                        <h1 className="text-3xl font-bold">Найкращі книги</h1>
                        <p className="text-xs text-gray-400">
                            Відкрийте для себе підбірку найкращих книг усіх
                            часів, які варто прочитати кожному.
                        </p>
                    </div>
                    {data ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                            {data.items.map((item, index) => (
                                <div
                                    data-aos="zoom-in"
                                    key={index}
                                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                                >
                                    <div className="h-[100px]">
                                        <img
                                            src={
                                                item.volumeInfo?.imageLinks
                                                    ?.thumbnail ||
                                                "../src/assets/website/not-found.png"
                                            }
                                            alt={`Book image ${index}`}
                                            className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md cursor-pointer"
                                            onClick={() =>
                                                navigate("/book/" + item.id)
                                            }
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="w-full flex items-center justify-center gap-1">
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <FaStar
                                                        className="text-yellow-500"
                                                        key={index}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                navigate("/book/" + item.id)
                                            }
                                        >
                                            <h1 className="text-xl font-bold">
                                                {item.volumeInfo.title ||
                                                    "Без назви"}
                                            </h1>
                                            <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                                {item.volumeInfo.description ||
                                                    "Без опису"}
                                            </p>
                                        </div>
                                        <OrderButton
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </>
    );
};

export default Services;
