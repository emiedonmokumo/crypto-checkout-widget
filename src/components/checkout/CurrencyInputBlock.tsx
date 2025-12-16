import { cryptoAssets, fiatCurrencies } from "@/data/checkoutData";
import { useClickOutside } from "@/lib/useClickOutside";
import { CurrencyType } from "@/types/currency";
import { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

type Props = {
    label: string;
    amount: number;
    currency: CurrencyType;
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: CurrencyType) => void;
    isCrypto?: boolean;
};

const CurrencyInputBlock = ({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    isCrypto = false,
}: Props) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const currencies = isCrypto ? cryptoAssets : fiatCurrencies;

    useClickOutside(dropdownRef, () => setOpen(false));


    return (
        <div ref={dropdownRef} className="relative bg-white p-4 rounded-xl border border-gray-200">
            <label className="block text-sm font-medium text-gray-500 mb-2">
                {label}
            </label>

            <div className="flex justify-between items-center relative space-x-3">
                <NumericFormat
                    value={amount}
                    thousandSeparator=","
                    allowNegative={false}
                    decimalScale={2}
                    fixedDecimalScale
                    className="outline-none text-2xl font-semibold text-gray-800 bg-transparent flex-1 min-w-0"
                    onValueChange={(values) => {
                        onAmountChange(values.floatValue ?? 0);
                    }}
                />

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="shrink-0 flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-full border border-gray-300 hover:bg-gray-100"
                >
                    <img
                        src={currency.icon}
                        alt={currency.name}
                        className="w-5 h-5 object-cover rounded-full"
                    />
                    <span className="font-medium">{currency.code || currency.symbol}</span>
                    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </button>
            </div>


            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 top-auto mt-0.5 w-64 bg-white rounded-xl shadow-lg border border-gray-300 z-10 p-1">
                    {currencies.map((item: CurrencyType) => (
                        <button
                            key={item.id || item.code}
                            type="button"
                            onClick={() => {
                                onCurrencyChange(item);
                                setOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-6 h-6 object-contain"
                            />
                            <div>
                                <p className="font-medium text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.code || item.symbol}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencyInputBlock;
