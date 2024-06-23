import Vector from "../../assets/website/blue-pattern.png";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from "../../lib/reducers/cartSlice";

const Hero = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?maxResults=4&q=*")
            .then((data) => data.json())
            .then((json) => {
                setData(json);
                setCurrentData(json.items[0]);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = () => {
        dispatch(addItem(currentData));
      };

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    };

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
                style={bgImage}
            >
                <div className="container pl-28 pb-8 sm:pb-0 text-center">
                    {data ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3">
                            {/* text content section */}
                            <div
                                data-aos-once="true"
                                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 col-span-2"
                            >
                                <h1
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                                >
                                    {currentData &&
                                        currentData.volumeInfo.title}
                                    <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                                        {currentData &&
                                            currentData.volumeInfo.authors[0]}
                                    </p>
                                </h1>
                                <p
                                    data-aos="slide-up"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    className="text-sm"
                                >
                                    {currentData &&
                                        currentData.volumeInfo.description.slice(
                                            0,
                                            500
                                        ) + "..."}
                                </p>
                                <div>
                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                                    >
                                        Додати до кошика
                                    </button>
                                </div>
                            </div>
                            {/* Image section */}
                            <div className="min-h-[450px] sm:min-h-[450px] flex justify-end items-center relative order-1 sm:order-2 ">
                                <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center mr-16">
                                    <img
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        src={
                                            currentData?.volumeInfo?.imageLinks
                                                ?.thumbnail ||
                                            "../src/assets/website/not-found.png"
                                        }
                                        alt="biryani img"
                                        className="w-[200px] h-[200px] sm:h-[300px] sm:w-[300px] sm:scale-125 object-contain mx-auto cursor-pointer"
                                        onClick={() =>
                                            navigate("/book/" + currentData.id)
                                        }
                                    />
                                </div>
                                <div className="flex lg:flex-col lg:py-7 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                                    {data?.items.map((item, index) => (
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            src={
                                                item.volumeInfo?.imageLinks
                                                    ?.thumbnail
                                            }
                                            key={index}
                                            onClick={() => {
                                                setCurrentData(item);
                                            }}
                                            alt="biryani img"
                                            className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                                        />
                                    ))}
                                </div>
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

export default Hero;
