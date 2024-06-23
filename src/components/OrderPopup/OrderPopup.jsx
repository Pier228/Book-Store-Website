import { IoCloseOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../lib/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const nameFiled = useRef(null);
    const emailFiled = useRef(null);
    const addressFiled = useRef(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const orderBook = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const cart = cartItems.map((item) => item?.volumeInfo?.title);

        if (
            nameFiled.current?.value.length > 1 &&
            emailRegex.test(emailFiled.current?.value) &&
            addressFiled.current?.value.length > 10
        ) {
            setLoading(true);
            emailjs
                .send(
                    "service_v40kzii",
                    "template_esrv5av",
                    {
                        user_name: nameFiled.current.value,
                        address: addressFiled.current.value,
                        email: emailFiled.current.value,
                        order: cart,
                    },
                    { publicKey: "hgZt8iwu-VX6VL1R1" }
                )
                .then(
                    (response) => {
                        setLoading(false);
                        setError("");
                        setMessage("Замовлення успішно оформлене!");
                        console.log(
                            "Замовлення успішно оформлене!",
                            response.status,
                            response.text
                        );
                        dispatch(clearCart());
                        setTimeout(() => {
                            setMessage("");
                            setOrderPopup();
                            navigate("/");
                        }, 2000);
                    },
                    (error) => {
                        setLoading(false);
                        console.log(
                            "Помилка в оформленні замовлення...",
                            error
                        );
                        setError("Помилка в оформленні замовлення...", error);
                    }
                );
        } else {
            setError("Неправильно заповнені поля вводу");
        }
    };

    return (
        orderPopup && (
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px]">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="font-bold">Оформлення замовлення</h1>
                        </div>
                        <div>
                            <IoCloseOutline
                                className="text-2xl cursor-pointer "
                                onClick={() => setOrderPopup()}
                            />
                        </div>
                    </div>
                    {/* Body */}
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Ім'я"
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6"
                            maxLength={30}
                            ref={nameFiled}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Електронна адреса"
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6"
                            maxLength={80}
                            ref={emailFiled}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Адреса доставки"
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-6"
                            maxLength={80}
                            ref={addressFiled}
                            required
                        />
                        {error && (
                            <p className="text-red-600 font-bold my-2 text-center">
                                {error}
                            </p>
                        )}
                        {message && (
                            <p className="text-green-500 font-bold my-2 text-center">
                                {message}
                            </p>
                        )}
                        <div className="flex justify-center">
                            <button
                                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full w-1/2"
                                onClick={orderBook}
                            >
                                {loading ? <Loader /> : "Замовити"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default OrderPopup;
