import React from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import Layout from '../layout/Layout';
import helpIcon from '../../assets/icons/Inputs/Help.svg';

interface Step3Props {
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: any) => void;
}

const Step3: React.FC<Step3Props> = ({ onBack, onNext, onDataChange }) => {
  const [insuranceVariant, setInsuranceVariant] = React.useState<string>('');
  const [contractTerm, setContractTerm] = React.useState<string>('');
  const [paymentFrequency, setPaymentFrequency] = React.useState<string>('');
  const [riskName, setRiskName] = React.useState<string>('');
  const [riskAmount, setRiskAmount] = React.useState<string>('');

  const handleInsuranceVariantChange = (value: string) => {
    setInsuranceVariant(value);
    onDataChange?.({ insuranceVariant: value, contractTerm, paymentFrequency, riskName, riskAmount });
  };

  const handleContractTermChange = (value: string) => {
    setContractTerm(value);
    onDataChange?.({ insuranceVariant, contractTerm: value, paymentFrequency, riskName, riskAmount });
  };

  const handlePaymentFrequencyChange = (value: string) => {
    setPaymentFrequency(value);
    onDataChange?.({ insuranceVariant, contractTerm, paymentFrequency: value, riskName, riskAmount });
  };

  const handleRiskNameChange = (value: string) => {
    setRiskName(value);
    onDataChange?.({ insuranceVariant, contractTerm, paymentFrequency, riskName: value, riskAmount });
  };

  const handleRiskAmountChange = (value: string) => {
    setRiskAmount(value);
    onDataChange?.({ insuranceVariant, contractTerm, paymentFrequency, riskName, riskAmount: value });
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: false, current: true },
    { number: 5, label: 'Просмотр договора', completed: false, current: false },
  ];

  return (
    <Layout
      title="Ввод договора"
      showProgress={true}
      steps={steps}
    >
      {/* Form Section */}
      <div className="flex flex-col gap-8 w-full">
        {/* Form Title with Currency */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
            Данные для создания договора
          </h3>
          <p className="text-base font-normal text-black tracking-wide">
            Валюта договора <span style={{ color: '#386DF7' }}>Российский рубль</span>
          </p>
        </div>

        {/* Dropdowns Block */}
        <div className="bg-[#f2f2f2] px-10 py-8">
          <div className="flex items-center gap-6">
            {/* Вариант страхования */}
            <div className="flex items-center gap-2 flex-1">
              <div className="flex-1">
                <InputSelect
                  label="Вариант страхования"
                  placeholder="Выберите вариант"
                  value={insuranceVariant}
                  onChange={handleInsuranceVariantChange}
                />
              </div>
              <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0" />
            </div>

            {/* Срок действия договора в годах */}
            <div className="flex-1">
              <InputSelect
                label="Срок действия договора в годах"
                placeholder="Выберите срок"
                value={contractTerm}
                onChange={handleContractTermChange}
              />
            </div>

            {/* Периодичность оплаты */}
            <div className="flex-1">
              <InputSelect
                label="Периодичность оплаты"
                placeholder="Выберите периодичность"
                value={paymentFrequency}
                onChange={handlePaymentFrequencyChange}
              />
            </div>
          </div>
        </div>

        {/* Риски Header */}
        <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
          Риски
        </h3>

        {/* Risks Inputs Block */}
        <div className="bg-[#f2f2f2] px-10 py-8">
          <div className="flex items-center gap-6">
            {/* Наименование риска */}
            <div className="flex-1">
              <InputSelect
                label="Наименование риска"
                placeholder="Введите наименование"
                value={riskName}
                onChange={handleRiskNameChange}
                showTrailingIcon={false}
              />
            </div>

            {/* Сумма по риску */}
            <div className="flex-1">
              <InputSelect
                label="Сумма по риску"
                placeholder="Введите сумму"
                value={riskAmount}
                onChange={handleRiskAmountChange}
                showTrailingIcon={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-3 items-start w-full">
        {/* Required Fields Note */}
        <p className="text-sm text-[#666] leading-tight">
          <span className="text-[#437aec]">*</span> Поля, обязательные к заполнению
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between w-full">
          <Button
            variant="outlined"
            size="large"
            state="resting"
            showTrailingIcon={false}
            className="w-[200px]"
            onClick={onBack}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            size="large"
            state="resting"
            showTrailingIcon={false}
            className="w-[200px]"
            onClick={onNext}
          >
            Далее
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Step3;
