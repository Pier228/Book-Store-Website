const OrderButton = ({ onClick, classNames }) => {
    return (
        <button
            className={
                "bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary " +
                classNames
            }
            onClick={onClick}
        >
            Додати до кошику
        </button>
    );
};

export default OrderButton;
