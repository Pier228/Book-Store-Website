import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import AppStore from "../components/AppStore/AppStore";
import Books from "../components/BooksSlider/Books";
import Testimonial from "../components/Testimonial/Testimonial";

const Main = () => {
    return (
        <>
            <Hero />
            <Services />
            <Banner />
            <AppStore />
            <Books />
            <Testimonial />
        </>
    );
};

export default Main;
