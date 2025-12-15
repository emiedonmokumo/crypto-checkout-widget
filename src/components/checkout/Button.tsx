import React from 'react'

const Button = ({
    onClick,
    text
}: {
    onClick: () => void;
    text: string;
}) => {
    return (
        <button
            type="submit"
            className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-full shadow-md font-bold font-instrument text-white bg-teal-800 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
