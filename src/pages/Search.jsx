import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);
    const searchInput = useRef(null);

    const searchHandler = () => {
        const searchField = searchInput.current?.value;
        if (searchField) {
            setStatus(false);
            navigate("/search/" + searchField);
        } else {
            setStatus(true);
        }
    };

    return (
        <div className="my-12 min-h-[40vh] flex justify-center items-center" data-aos="zoom-in">
            <div className="flex flex-col justify-center items-center w-4/12">
                <div className="flex items-center relative">
                    <img src="../src/assets/website/logo.png" alt="logo" width={150} />
                    <span className="text-8xl ml-6">Books</span>
                    <p className="absolute end-0 bottom-0">Пошук</p>
                </div>
                <div className="flex rounded-md mt-10 w-full relative">
                    <input
                        type="text"
                        placeholder="Пошук"
                        maxLength={60}
                        className={`px-4 py-2 w-full focus:outline-none border border-solid rounded-l-lg border-slate-300  dark:bg-white dark:text-black ${
                            status && "border-red-600 border-2"
                        }`}
                        ref={searchInput}
                    />
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-700 transition-all rounded-r-lg"
                        onClick={searchHandler}
                    >
                        Шукати
                    </button>
                    {status && (
                        <p className="absolute -bottom-7 text-red-600">
                            Помилка вводу
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
