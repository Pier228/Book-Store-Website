import React from "react";
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Віктор",
        text: "Неймовірний сервіс! Завжди знаходжу цікаві книги для читання.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "Андрій",
        text: "Великий вибір книг і зручний інтерфейс. Рекомендую всім книголюбам!",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Оксана",
        text: "Читаю більше, ніж будь-коли раніше, завдяки вашій онлайн-бібліотеці!",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 1,
        name: "Дмитро",
        text: "Тепер у мене є доступ до тисяч книг без необхідності йти в бібліотеку",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 1,
        name: "Сашко",
        text: "Завантажив додаток і забув про пошук книжкових магазинів. Все необхідне тут!",
        img: "https://picsum.photos/105/105",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div data-aos="fade-up" data-aos-duration="300" className="py-6">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Коментарі наших клієнтів
                    </p>
                    <h1 className="text-3xl font-bold">Відгуки</h1>
                    <p className="text-xs text-gray-400">
                        Світлий відблиск у світі книжок: спогади та враження
                        наших читачів про найкращі твори
                    </p>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                >
                    <Slider {...settings}>
                        {testimonialData.map((data, index) => {
                            return (
                                <div className="my-3" key={index}>
                                    <div
                                        key={data.id}
                                        className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <div>
                                            <img
                                                className="rounded-full w-20 h-20"
                                                src={data.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <p className="text-gray-500 text-sm">
                                                    {data.text}
                                                </p>
                                                <h1 className="text-xl font-bold text-black/80 dark:text-light">
                                                    {data.name}
                                                </h1>
                                            </div>
                                        </div>

                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
