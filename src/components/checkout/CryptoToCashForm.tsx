import CurrencyInputBlock from './CurrencyInputBlock';
import WalletSelector from './WalletSelector';
import RecipientForm from './RecipientForm';
import Button from './Button';
import DetailsForm from './DetailsForm';
import AssetTransferForm from './AssetTransferForm';
import TransferProcessingCard from './TransferProcessingCard';
import { CurrencyType } from '@/types/currency';
import { WalletType } from '@/types/wallet';

interface CryptoToCashFormProps {
  formStep: number;
  setFormStep: (step: number) => void;
  payAmount: number;
  setPayAmount: (amount: number) => void;
  receiveAmount: number;
  setReceiveAmount: (amount: number) => void;
  payCurrency: CurrencyType;
  setPayCurrency: (currency: CurrencyType) => void;
  receiveCurrency: CurrencyType;
  setReceiveCurrency: (currency: CurrencyType) => void;
  payWallet: WalletType | any;
  setPayWallet: (wallet: WalletType | undefined) => void;
  receiveWallet: WalletType | any;
  setReceiveWallet: (wallet: WalletType | undefined) => void;
}

const CryptoToCashForm = ({
  formStep, setFormStep,
  payAmount,
  setPayAmount,
  receiveAmount,
  setReceiveAmount,
  payCurrency,
  setPayCurrency,
  receiveCurrency,
  setReceiveCurrency,
  payWallet,
  setPayWallet,
  receiveWallet,
  setReceiveWallet,
}: CryptoToCashFormProps) => {

  if (formStep == 2) {
    return <RecipientForm setStep={setFormStep} />
  } else if (formStep == 3) {
    return <DetailsForm setFormStep={setFormStep} />
  } else if (formStep == 4) {
    return <AssetTransferForm
      setFormStep={setFormStep}
      setPayAmount={setPayAmount}
      setReceiveAmount={setReceiveAmount}
      setPayWallet={setPayWallet}
      setReceiveWallet={setReceiveWallet}
    />
  } else if (formStep == 5) {
    return <TransferProcessingCard setFormStep={setFormStep} />;
  }

  const validateForm = () => {
    return payAmount > 0 && receiveAmount > 0 && payWallet && receiveWallet;
  }

  return (
    <div className="p-4 max-sm:p-3">
      <div className="space-y-4">

        {/* You Pay Block (Crypto) */}
        <CurrencyInputBlock
          label="You pay"
          amount={payAmount}
          currency={payCurrency}
          onAmountChange={setPayAmount}
          onCurrencyChange={setPayCurrency}
          isCrypto={true}
        />

        {/* You Receive Block (Fiat) */}
        <CurrencyInputBlock
          label="You receive"
          amount={receiveAmount}
          currency={receiveCurrency}
          onAmountChange={setReceiveAmount}
          onCurrencyChange={setReceiveCurrency}
          isCrypto={false}
        />

        {/* Pay From Selection */}
        <WalletSelector
          label="Pay from"
          wallet={payWallet}
          onWalletChange={setPayWallet}
        />

        {/* Pay To Selection */}
        <WalletSelector
          label="Pay to"
          wallet={receiveWallet}
          onWalletChange={setReceiveWallet}
        />

        {/* Convert Now Button */}
        <Button
          text="Convert Now"
          disabled={!validateForm()}
          onClick={() => setFormStep(2)}
        />
      </div>
    </div>
  );
};


export default CryptoToCashForm;