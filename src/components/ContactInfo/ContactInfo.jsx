const ContactInfo = ({ title, text }) => {
    return (
        <div>
            <p className="font-bold text-2xl">{title}</p>
            <span className="text-xl">{text}</span>
        </div>
    );
};

export default ContactInfo;
