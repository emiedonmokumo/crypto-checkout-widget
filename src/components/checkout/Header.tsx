type Tab = 'crypto-to-cash' | 'cash-to-crypto' | 'crypto-to-fiat-loan';

interface CheckoutHeaderProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export default function CheckoutHeader({
  activeTab,
  onChange,
}: CheckoutHeaderProps) {
  const tabs = [
    { key: 'crypto-to-cash', label: 'Crypto to cash' },
    { key: 'cash-to-crypto', label: 'Cash to crypto' },
    { key: 'crypto-to-fiat-loan', label: 'Crypto to fiat loan' },
  ] as const;

  return (
    <header className="w-full flex justify-center">
      <div className="flex bg-gray-100 rounded-full p-1">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer
              ${
                activeTab === tab.key
                  ? 'bg-teal-900 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
}
