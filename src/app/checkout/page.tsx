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
    const [payWallet, setPayWallet] = useState<WalletType | undefined>();
    const [receiveWallet, setReceiveWallet] = useState<WalletType | undefined>();
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
        <main className="h-full my-10 flex justify-center items-center">
            <div className="w-140 h-auto p-5 border border-gray-300 rounded-2xl shadow-lg bg-white">
                {formStep == 1 && <CheckoutHeader activeTab={activeTab} onChange={setActiveTab} />}
                <div className="mt-4">
                    {renderTabContent()}
                </div>
            </div>
        </main>
    );
};

export default Page;
