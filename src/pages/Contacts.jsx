import ContactInfo from "../components/ContactInfo/ContactInfo";

const Contacts = () => {
    return (
        <div className="w-full my-10 flex justify-center gap-x-16">
            <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5QjqF_2ANb3o5KBdEXJ9FEcAwYAHYgDs&q=place_id:ChIJr0fG0uzN1EARJ4F0fslT5to"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="border-0"
                data-aos="fade-right"
            />
            <div
                className="flex flex-col text-left gap-y-6"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-once="true"
            >
                <ContactInfo
                    title="Адреса:"
                    text="вулиця Кирилівська, 117, Київ, 04073"
                />
                <ContactInfo title="Телефон:" text="+(044) 468-00-31" />
                <ContactInfo
                    title="Електронна адреса:"
                    text="crb_franko@ukr.net"
                />
                <ContactInfo title="Графік роботи:" text="Пн-Вс: 09:00-20:00" />
            </div>
        </div>
    );
};

export default Contacts;
