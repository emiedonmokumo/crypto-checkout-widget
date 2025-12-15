import { useState } from 'react';

const ComingSoonComponent = ({ tab }: { tab: string }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitting email:', email);
    };

    return (
        <div className="flex p-5 bg-white">
            <div className="text-center">
                <h2 className="text-3xl font-clash font-medium text-gray-800 mb-5">
                    Coming Soon!
                </h2>

                <p className="font-light text-sm text-gray-600 mb-8">
                    {tab} is almost here.
                    Enter your email and we'll let you know the moment it's live.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="text-left">
                        <label htmlFor="email-input" className="block text-md font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            id="email-input"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center font-instrument font-semibold py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-teal-800 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                    >
                        Update me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ComingSoonComponent;