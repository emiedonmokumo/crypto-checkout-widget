import { wallets } from "@/data/checkoutData";
import { WalletType } from "@/types/wallet";
import { useState } from "react";

const WalletSelector = ({ label, wallet, onWalletChange }: {
    label: string;
    wallet?: WalletType;
    onWalletChange: (wallet: WalletType) => void;
}) => {
  const [open, setOpen] = useState(false);

  const selectedWallet = wallet ? wallets.find((w: WalletType) => w.id === wallet.id): undefined;

  return (
    <div className="mt-6 text-sm">
      <label className="block font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 bg-white rounded-xl text-gray-700 hover:bg-gray-50"
        >
          <span className="flex items-center gap-2">
            {selectedWallet ? (
              <>
                <span>{selectedWallet.icon}</span>
                <span className="font-medium">{selectedWallet.name}</span>
              </>
            ) : (
              <span className="text-gray-400">Select an option</span>
            )}
          </span>

          <svg
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 top-full mt-0.5 w-full bg-white border rounded-xl shadow-lg z-10 p-1">
            {wallets.map((item: WalletType) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onWalletChange(item);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletSelector;
