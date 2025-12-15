import React from 'react'

const FormHeader = ({
    onClick,
    text
}: {
    onClick: () => void;
    text: string;
}) => {
    return (
        <div className="mb-5 relative">
            {/* Back arrow */}
            <button
                onClick={onClick}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Go back"
            >
                <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
            </button>

            <h1 className="text-xl font-semibold text-gray-800 text-center">
                {text}
            </h1>
        </div>
    )
}

export default FormHeader
