const TextBlock = ({ title, text }) => {
    return (
        <div
            className="container my-8"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
        >
            <h1 className="text-2xl mb-3">{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default TextBlock;
