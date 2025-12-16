import { NumericFormat } from 'react-number-format'
import Button from './Button'
import FormHeader from './FormHeader'
import { useState } from 'react';

const DetailsForm = ({
    setFormStep,
}: {
    setFormStep: (step: number) => void;
}) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="p-5">
            <FormHeader 
                onClick={() => setFormStep(1)}
                text="Recipient Details"
            />

            <div className="space-y-2">
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Recipient email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus-within:ring-0.5 focus-within:ring-teal-500 focus-within:border-teal-500 sm:text-sm" placeholder="Enter recipient email" />
            </div>

            <div className="my-6 mb-12 space-y-2">
                <label htmlFor="recipient-phone" className="block text-sm font-medium text-gray-700">
                    Recipient phone
                </label>
                <div className="mt-1 flex rounded-full border border-gray-300 shadow-sm overflow-hidden focus-within:ring-0.5 focus-within:ring-teal-500 focus-within:border-teal-500">
                    <div className="flex items-center px-3 bg-gray-100">
                        <svg className="w-4 h-4 text-gray-500 mr-1" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span className="text-gray-700 text-sm">+234</span>
                    </div>

                    <NumericFormat
                        id="recipient-phone"
                        maxLength={10}
                        placeholder="000 - 000 - 00000"
                        className="flex-1 px-4 py-3 focus:outline-none sm:text-sm"
                        thousandSeparator={false}
                        decimalSeparator=""
                        allowLeadingZeros
                        valueIsNumericString
                        value={phone}
                        onValueChange={(values) => setPhone(values.value)}
                        required
                    />
                </div>
            </div>

            <Button onClick={() => setFormStep(4)} text='Next'
                disabled={phone.length < 10 || email.length === 0}
            />
        </div>
    )
}

export default DetailsForm
