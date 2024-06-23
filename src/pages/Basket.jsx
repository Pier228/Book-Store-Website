import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../lib/reducers/cartSlice";
import RoundedButton from "../components/Buttons/RoundedButton";
import { toggleOrderPopup } from "../lib/reducers/actions";
import { useNavigate } from "react-router-dom";
import scroll_styles from "../styles/scrollbar/scroll.module.css"; //не видаляти!

const Basket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveFromCart = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div
            className="container min-h-[60vh] flex flex-col justify-center items-center py-20"
            data-aos="fade-up"
        >
            {cartItems.length > 0 ? (
                <>
                    <h1 className="font-bold text-3xl mb-5">Кошик</h1>
                    <div className="w-2/3 flex flex-col gap-y-8 mb-10 overflow-y-auto max-h-[30rem] border rounded-md p-6">
                        <div className="flex justify-between items-center border-b-2">
                            <p className="font-bold">Назва книги</p>
                            <p className="font-bold">
                                Товару в кошику: {cartItems.length}
                            </p>
                        </div>
                        {cartItems.map((item, index) => (
                            <div
                                className="flex justify-between items-center"
                                key={index}
                            >
                                <span className="font-bold">
                                    {item?.volumeInfo?.title}
                                </span>
                                <button
                                    className="text-red-500 hover:text-red-600"
                                    onClick={() => handleRemoveFromCart(item)}
                                >
                                    Видалити
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-2/3">
                        <RoundedButton
                            text="Очистити кошик"
                            onClick={() => dispatch(clearCart())}
                            classNames="bg-transparent dark:text-white dark:hover:text-red-600 hover:text-red-600 py-0 px-0 text-red-500 "
                        />
                        <RoundedButton
                            text="Оформити замовлення"
                            onClick={() => dispatch(toggleOrderPopup())}
                            classNames="w-[15rem]"
                        />
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-2xl">Кошик порожній</h1>
                    <RoundedButton
                        text="Повернутись на головну"
                        onClick={() => navigate("/")}
                        classNames="w-[15rem] mt-20"
                    />
                </>
            )}
        </div>
    );
};

export default Basket;
