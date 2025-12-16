'use client';
import ComingSoonComponent from '@/components/checkout/ComingSoon';
import CryptoToCashForm from '@/components/checkout/CryptoToCashForm';
import CheckoutHeader from '@/components/checkout/Header';
import { cryptoAssets, fiatCurrencies } from '@/data/checkoutData';
import { CurrencyType } from '@/types/currency';
import { WalletType } from '@/types/wallet';
import { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState<'crypto-to-cash' | 'cash-to-crypto' | 'crypto-to-fiat-loan'>('crypto-to-cash');
    const [payAmount, setPayAmount] = useState(0);
    const [receiveAmount, setReceiveAmount] = useState(0);
    const [payCurrency, setPayCurrency] = useState<CurrencyType>(cryptoAssets[0]);
    const [receiveCurrency, setReceiveCurrency] = useState<CurrencyType>(fiatCurrencies[0]);
    const [payWallet, setPayWallet] = useState<WalletType | any>();
    const [receiveWallet, setReceiveWallet] = useState<WalletType | any>();
    const [formStep, setFormStep] = useState(1);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'crypto-to-cash':
                return <CryptoToCashForm
                    formStep={formStep} setFormStep={setFormStep}
                    payAmount={payAmount}
                    setPayAmount={setPayAmount}
                    receiveAmount={receiveAmount}
                    setReceiveAmount={setReceiveAmount}
                    payCurrency={payCurrency}
                    setPayCurrency={setPayCurrency}
                    receiveCurrency={receiveCurrency}
                    setReceiveCurrency={setReceiveCurrency}
                    payWallet={payWallet}
                    setPayWallet={setPayWallet}
                    receiveWallet={receiveWallet}
                    setReceiveWallet={setReceiveWallet}
                />;
            case 'cash-to-crypto':
                return <ComingSoonComponent tab="Cash to Crypto" />;
            case 'crypto-to-fiat-loan':
                return <ComingSoonComponent tab="Crypto to Fiat Loan" />;
            default:
                return <CryptoToCashForm
                    formStep={formStep} setFormStep={setFormStep}
                    payAmount={payAmount}
                    setPayAmount={setPayAmount}
                    receiveAmount={receiveAmount}
                    setReceiveAmount={setReceiveAmount}
                    payCurrency={payCurrency}
                    setPayCurrency={setPayCurrency}
                    receiveCurrency={receiveCurrency}
                    setReceiveCurrency={setReceiveCurrency}
                    payWallet={payWallet}
                    setPayWallet={setPayWallet}
                    receiveWallet={receiveWallet}
                    setReceiveWallet={setReceiveWallet}
                />;
        }
    };

    return (
        <main className="w-full min-h-screen flex items-center justify-center p-4 max-sm:p-2 m-0">
            <div className="w-full max-w-md min-h-dvh sm:min-h-auto p-5 max-sm:p-0 max-sm:border-none max-sm:shadow-none border border-gray-300 rounded-lg sm:rounded-2xl shadow-lg bg-white mx-auto flex flex-col">
                {formStep == 1 && <CheckoutHeader activeTab={activeTab} onChange={setActiveTab} />}
                <div className="mt-4">{renderTabContent()}</div>
            </div>
        </main>
    );
};

export default Page;
