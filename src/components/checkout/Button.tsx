const Button = ({
    onClick,
    disabled = false,
    text
}: {
    onClick: () => void;
    disabled?: boolean;
    text: string;
}) => {
    return (
        <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-full shadow-md font-bold font-instrument text-white max-sm:text-sm cursor-pointer
                bg-teal-800 hover:bg-teal-900
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
                transition duration-150 ease-in-out
                disabled:bg-teal-700
                disabled:cursor-not-allowed
                disabled:hover:bg-teal-700"
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button
