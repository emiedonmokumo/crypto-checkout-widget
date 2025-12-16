import { banks } from '@/data/checkoutData';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import Button from './Button';
import FormHeader from './FormHeader';

const RecipientForm = ({
    setStep,
}: {
    setStep: (step: number) => void;
}) => {
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('John Doe');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Recipient Details Submitted:', { bank, accountNumber });
    };

    return (
        <div className="p-5">
            <FormHeader onClick={() => setStep(1)} text="Recipient Details" />

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="bank-select" className="block text-sm font-medium text-gray-700 mb-2">
                        Bank
                    </label>
                    <div className="relative">
                        <select
                            id="bank-select"
                            name="bank"
                            value={bank}
                            onChange={(e) => setBank(e.target.value)}
                            className="block w-full px-4 py-3 border border-gray-300 bg-white rounded-full text-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 appearance-none pr-10"
                            required
                        >
                            <option value="" disabled>Select an option</option>
                            {banks.map((b) => (
                                <option key={b.code} value={b.name}>
                                    {b.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Account Number Input */}
                <div>
                    <label htmlFor="account-number" className="block text-sm font-medium text-gray-700 mb-2">
                        Account number
                    </label>
                    <NumericFormat
                        id="account-number"
                        value={accountNumber}
                        maxLength={10}
                        onValueChange={(values) => setAccountNumber(values.value)}
                        placeholder="Enter your account number"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        thousandSeparator={false} // set true if you want commas
                        allowLeadingZeros
                        required
                    />
                </div>

                {accountName && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Account number
                        </label>
                        <div className="w-full px-4 py-3 bg-gray-100 rounded-xl text-gray-800 font-medium">
                            {accountName}
                        </div>
                    </div>
                )}

                <div className="pt-8">
                    <Button
                        text="Next"
                        onClick={()=> setStep(3)}
                        disabled={!(bank && accountNumber.length === 10)}
                    />
                </div>
            </form>
        </div>
    );
};

export default RecipientForm;