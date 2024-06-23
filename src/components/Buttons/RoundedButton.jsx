const RoundedButton = ({ text, onClick, classNames }) => {
    return (
        <button
            onClick={onClick}
            className={
                "bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-lg mt-4 group-hover:bg-white group-hover:text-primary " +
                classNames
            }
        >
            {text}
        </button>
    );
};

export default RoundedButton;
