import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrderPopup } from "./lib/reducers/actions.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Contacts from "./pages/Contacts.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import About from "./pages/About.jsx";
import Search from "./pages/Search.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Basket from "./pages/Basket.jsx";
import Book from "./pages/Book.jsx";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    const orderPopup = useSelector((state) => state.orderPopup.orderPopup);
    const dispatch = useDispatch();

    const handleOrderPopup = () => {
        dispatch(toggleOrderPopup());
    };

    return (
        <BrowserRouter>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/search/:query" element={<SearchResult />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/terms_of_use" element={<TermsOfUse />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/book/:id" element={<Book />} />
                </Routes>
                <Footer />
                <OrderPopup
                    orderPopup={orderPopup}
                    setOrderPopup={handleOrderPopup}
                />
            </div>
        </BrowserRouter>
    );
};

export default App;
