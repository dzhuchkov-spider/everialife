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
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

  const insuranceOptions = ['3 года (профессионал)'];
  const contractTermOptions = ['1', '2', '3', '4', '5'];
  const paymentFrequencyOptions = ['Единовременно'];

  const services = [
    { id: '1', name: 'Медицинская помощь', amount: '1 000 000,00' },
    { id: '2', name: 'Стационарное лечение', amount: '500 000,00' },
    { id: '3', name: 'Амбулаторное лечение', amount: '300 000,00' },
  ];

  const isFormValid = insuranceVariant && contractTerm && paymentFrequency;

  const handleServiceToggle = (serviceId: string) => {
    const newSelected = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    setSelectedServices(newSelected);
  };

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
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
            Данные для создания договора
          </h3>
          <div className="sm:hidden flex items-center gap-1">
            <span className="text-base font-normal text-black tracking-wide">
              Валюта договора
            </span>
            <span className="text-base font-normal text-black tracking-wide" style={{ color: '#386DF7' }}>
              Российский рубль
            </span>
          </div>
          <p className="hidden sm:block text-base font-normal text-black tracking-wide">
            Валюта договора <span style={{ color: '#386DF7' }}>Российский рубль</span>
          </p>
        </div>

        {/* Dropdowns Block */}
        <div className="bg-[#f2f2f2] px-4 py-5 sm:px-10 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Вариант страхования */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
              <div className="flex flex-row items-center gap-2 w-full">
                <div className="flex-1">
                  <InputSelect
                    label="Вариант страхования"
                    placeholder="Выберите вариант"
                    value={insuranceVariant}
                    onChange={handleInsuranceVariantChange}
                    options={insuranceOptions}
                    required
                  />
                </div>
                <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="hidden sm:block">
                <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0 sm:ml-2" />
              </div>
            </div>

            {/* Срок действия договора в годах */}
            <div className="w-full">
              <InputSelect
                label="Срок действия договора в годах"
                placeholder="Выберите срок"
                value={contractTerm}
                onChange={handleContractTermChange}
                options={contractTermOptions}
                required
              />
            </div>

            {/* Периодичность оплаты */}
            <div className="w-full">
              <InputSelect
                label="Периодичность оплаты"
                placeholder="Выберите периодичность"
                value={paymentFrequency}
                onChange={handlePaymentFrequencyChange}
                options={paymentFrequencyOptions}
                required
              />
            </div>
          </div>
        </div>

        {/* Риски Header */}
        <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
          Риски
        </h3>

        {/* Risks Inputs Block - показываем только если не выбраны все три дропдауна */}
        {!isFormValid ? (
          <div className="bg-[#f2f2f2] px-4 py-5 sm:px-10 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Наименование риска */}
              <div className="w-full">
                <InputSelect
                  label="Наименование риска"
                  placeholder="Введите наименование"
                  value={riskName}
                  onChange={handleRiskNameChange}
                  showTrailingIcon={false}
                />
              </div>

              {/* Сумма по риску */}
              <div className="w-full">
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
        ) : (
          /* Services Table - показываем после выбора всех трех дропдаунов */
          <div className="bg-[#f2f2f2] px-4 py-5 sm:px-10 sm:py-8">
            <div className="flex flex-col gap-0">
              {/* Table Header */}
              <div className="flex items-center border-b border-[#f2f2f2] bg-white">
                <div className="w-[72px] h-[72px] flex items-center justify-center border-b border-l border-[#f2f2f2]"></div>
                <div className="flex-1 h-[72px] flex items-center px-6 border-b border-[#f2f2f2]">
                  <span className="text-base font-normal text-[#939393] tracking-wide">
                    Наименование риска
                  </span>
                </div>
                <div className="w-[256px] h-[72px] flex items-center px-6 border-b border-r border-[#f2f2f2]">
                  <span className="text-base font-normal text-[#939393] tracking-wide">
                    Сумма по риску
                  </span>
                </div>
              </div>

              {/* Table Rows */}
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center border-b border-[#f2f2f2] bg-white hover:bg-[#f9f9f9] transition-colors"
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center border-b border-l border-[#f2f2f2]">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1 h-[72px] flex items-center px-6 border-b border-[#f2f2f2]">
                    <span className="text-base font-normal text-[#191919] tracking-wide">
                      {service.name}
                    </span>
                  </div>
                  <div className="w-[256px] h-[72px] flex items-center px-6 border-b border-r border-[#f2f2f2]">
                    <span className="text-base font-normal text-[#191919] tracking-wide">
                      {service.amount}
                    </span>
                  </div>
                </div>
              ))}

              {/* Взнос по договору */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-base font-normal text-black tracking-wide">
                    Взнос по договору:
                  </span>
                  <span className="text-[32px] font-normal text-[#386DF7] tracking-wide h-8 flex items-center">
                    14 250,43 руб.
                  </span>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  state="resting"
                  showTrailingIcon={false}
                  onClick={() => {}}
                >
                  Рассчитать взнос
                </Button>
              </div>
            </div>
          </div>
        )}
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
            variant="ghost"
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
            state={!isFormValid ? "disabled" : "resting"}
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
