import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RoundedButton from "../components/Buttons/RoundedButton";
import Loader from "../components/Loader/Loader";
import { FaStar } from "react-icons/fa";
import OrderButton from "../components/Buttons/OrderButton";
import { useDispatch } from "react-redux";
import { addItem } from "../lib/reducers/cartSlice";

const SearchResult = () => {
    const { query } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (data) => {
        dispatch(addItem(data));
    };

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
        )
            .then((data) => data.json())
            .then((json) =>
                json.totalItems > 0 ? setData(json) : setData(false)
            )
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="min-h-[50vh] flex flex-col justify-center items-center">
            {data ? (
                <>
                    <div className="mt-44 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 gap-y-28 place-items-center relative">
                        <h1 className="absolute text-xl font-bold -top-32 start-0">
                            <span className="mr-2">Результатів пошуку:</span>
                            {data.totalItems <= 40 ? data.totalItems : 40}
                        </h1>
                        {data.items.map((item, index) => (
                            <div
                                data-aos="fade-up"
                                key={index}
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group h-[292px] w-[300px]"
                            >
                                <div className="h-[100px]">
                                    <img
                                        src={
                                            item?.volumeInfo?.imageLinks
                                                ?.thumbnail ||
                                            "../src/assets/website/not-found.png"
                                        }
                                        alt={`Book image ${index}`}
                                        className="max-w-[100px] max-h-[160px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md cursor-pointer"
                                        onClick={() =>
                                            navigate("/book/" + item.id)
                                        }
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <div
                                        className="h-[92px] cursor-pointer"
                                        onClick={() =>
                                            navigate("/book/" + item.id)
                                        }
                                    >
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
                                        <div className="flex flex-col h-[90px] justify-center">
                                            <h1 className="text-xl font-bold line-clamp-2">
                                                {item?.volumeInfo?.title ||
                                                    "Без автора"}
                                            </h1>
                                            <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                                {item?.volumeInfo
                                                    ?.description ||
                                                    "Без опису"}
                                            </p>
                                        </div>
                                    </div>
                                    <OrderButton
                                        onClick={() => handleAddToCart(item)}
                                        classNames="mt-6"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                data != false && <Loader />
            )}

            {data == false && (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center text-2xl">
                        Для вашого запиту " {query} " не знайдено жодного
                        результату пошуку серед книг.
                    </h1>
                    <RoundedButton
                        classNames="mt-8"
                        text="Повернутись до пошуку"
                        onClick={() => navigate("/search")}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchResult;
