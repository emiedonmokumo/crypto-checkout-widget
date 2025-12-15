import Image from 'next/image';
import React from 'react';

const TransferProcessingCard = ({
    setFormStep,
}: {
    setFormStep: (step: number) => void;
}) => {
    const transactionId = 'NC123456789';

    const handleCopy = () => {
        navigator.clipboard.writeText(transactionId)
            .then(() => {
                console.log(`Copied Transaction ID: ${transactionId}`);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };


    return (
        <div className="p-5">
            <div className="mb-8">
                <Image src={'/nova-logo.png'} alt="Nova Logo" width={150} height={70} className="mx-auto" />
            </div>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-green-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            {/* Message */}
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Your transaction is processing.
                </h1>
                <p className="text-gray-500 mb-10">
                    The recipient will receive it shortly.
                </p>
            </div>

            {/* Transaction ID Box */}
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center mb-10">
                <span className="text-sm text-gray-500">Transaction ID</span>
                <div className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-3">{transactionId}</span>
                    <button
                        onClick={handleCopy}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        aria-label="Copy Transaction ID"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2h2a2 2 0 002 2" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Home Link */}
            <button
                onClick={() => setFormStep(1)}
                className="text-[#013941] font-semibold hover:text-green-800 transition duration-150 flex items-center mx-auto cursor-pointer"
            >
                Go back to home
            </button>
        </div>
    );
};

export default TransferProcessingCard;