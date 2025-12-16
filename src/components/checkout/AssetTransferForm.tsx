import { WalletType } from "@/types/wallet";
import Button from "./Button";
import FormHeader from "./FormHeader";

const AssetTransferForm = ({
    setFormStep,
    setPayAmount,
    setReceiveAmount,
    setPayWallet,
    setReceiveWallet
}: {
    setFormStep: (step: number) => void;
    setPayAmount: (amount: number) => void;
    setReceiveAmount: (amount: number) => void;
    setPayWallet: (wallet: WalletType | undefined) => void;
    setReceiveWallet: (wallet: WalletType | undefined) => void;
}) => {
    const depositAddress = '4LiV4YjbxsL6739MKghUd';
    const amountToSend = '100 ETH';
    const network = 'ETH';
    const wallet = 'Other';

    const handleSentClick = () => {
        setPayAmount(0);
        setReceiveAmount(0);
        setPayWallet(undefined);
        setReceiveWallet(undefined);
        setFormStep(5);
    };

    return (
        <div className="">
            <div className="">
                {/* Header */}
                <FormHeader text="Send ETH to the address below" onClick={() => setFormStep(1)} />

                {/* Deposit Address Box */}
                <div className="pt-2 pb-8 text-center">
                    <div className="inline-flex items-center bg-green-50/20 text-green-700 py-2 px-4 rounded-full font-medium text-sm border border-green-200">
                        <span className="truncate">{depositAddress}</span>
                        <button className="ml-3 hover:text-green-800 focus:outline-none cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
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

                {/* Details List */}
                <div className="px-6 space-y-4 text-gray-700">
                    <div className="flex justify-between items-center pb-2">
                        <span className="text-gray-500">Amount to send</span>
                        <div className="flex items-center font-medium text-gray-800">
                            <span>{amountToSend}</span>
                            <button className="ml-3 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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

                    {/* Network */}
                    <div className="flex justify-between items-center pb-2">
                        <span className="text-gray-500">Network</span>
                        <span className="font-medium text-gray-800">{network}</span>
                    </div>

                    {/* Wallet */}
                    <div className="flex justify-between items-center pb-4">
                        <span className="text-gray-500">Wallet</span>
                        <span className="font-medium text-gray-800">{wallet}</span>
                    </div>
                </div>

                {/* Warning/Info Box */}
                <div className="p-6 mb-5">
                    <div className="flex items-start text-xs text-[#4F4F4F] rounded-lg" role="alert">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0 inline w-5 h-5 mr-3 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <span className="font-medium">Only send &#123;USDT&#125; to this address.</span> Ensure the sender is on the &#123;CELO&#125; network otherwise you might lose your deposit
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                    <Button onClick={handleSentClick} text="I have sent it" />
                </div>
            </div>
        </div>
    );
};

export default AssetTransferForm;