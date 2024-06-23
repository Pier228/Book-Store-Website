import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Loader from "../components/Loader/Loader";
import RoundedButton from "../components/Buttons/RoundedButton";
import { useDispatch } from "react-redux";
import { addItem } from "../lib/reducers/cartSlice";

const Book = () => {
    const dispatch = useDispatch();
    const descriptionField = useRef(null);
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((data) => data.json())
            .then((json) => {
                setData(json);
                if (descriptionField.current) {
                    const description = json?.volumeInfo?.description;
                    descriptionField.current.innerHTML =
                        description ?? "Без опису";
                }
            })
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (data) => {
        dispatch(addItem(data));
    };

    return (
        <div className="w-full text-center min-h-[60vh] py-16 flex items-center">
            {data ? (
                <div className="container flex justify-center gap-x-12">
                    <img
                        src={
                            data?.volumeInfo?.imageLinks?.thumbnail ||
                            "../src/assets/website/not-found.png"
                        }
                        alt="Book image"
                        className="shadow-md h-[30rem]"
                    />
                    <div className="flex flex-col gap-y-4 w-[40rem] text-justify">
                        <p className="text-xl font-bold">
                            <span className="mr-3">Назва:</span>
                            {data?.volumeInfo?.title || "Без назви"}
                        </p>
                        <p className="text-xl font-bold">
                            <span className="mr-3">Автор:</span>
                            {data?.volumeInfo?.authors[0] || "Без автора"}
                        </p>
                        <p className="text-xl font-bold  line-clamp-[3]">
                            <span className="mr-3">Категорія:</span>
                            {data?.volumeInfo?.categories || "Без категорії"}
                        </p>
                        <p className="font-semibold line-clamp-[11]">
                            <span className="mr-3 text-xl font-bold">
                                Опис:
                            </span>
                            <span ref={descriptionField}></span>
                        </p>
                        <RoundedButton
                            text="Додати до кошику"
                            onClick={() => handleAddToCart(data)}
                            classNames="w-1/2"
                        />
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Book;
