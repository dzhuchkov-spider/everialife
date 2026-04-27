import React from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import Layout from '../layout/Layout';

interface Step7Props {
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: { agentContractNumber?: string; agentShare?: string }) => void;
}

const Step7: React.FC<Step7Props> = ({ onBack, onNext, onDataChange }) => {
  const [agentContractNumber, setAgentContractNumber] = React.useState<string>('');
  const [agentShare, setAgentShare] = React.useState<string>('2');

  const handleAgentContractNumberChange = (value: string) => {
    setAgentContractNumber(value);
    onDataChange?.({ agentContractNumber: value, agentShare });
  };

  const handleAgentShareChange = (value: string) => {
    setAgentShare(value);
    onDataChange?.({ agentContractNumber, agentShare: value });
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: true, current: false },
    { number: 6, label: 'Контактные данные', completed: true, current: false },
    { number: 7, label: 'Агенты', completed: false, current: true },
  ];

  return (
    <Layout
      title="Ввод договора"
      showProgress={true}
      steps={steps}
    >
      {/* Form Section */}
      <div className="flex flex-col gap-8 w-full">
        {/* Section Title with Contract Amount */}
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
            Участвующие агенты
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-base font-normal text-black tracking-wide">
              Взнос по договору:
            </span>
            <span className="text-3xl font-normal text-[#386df7] tracking-wide">
              20 000,00 руб.
            </span>
          </div>
        </div>

        {/* Agent Input Section */}
        <div className="bg-[#f2f2f2] px-10 py-8 rounded-lg">
          <div className="flex gap-6 items-start">
            {/* Agent Contract Number / Name Input */}
            <div className="flex-1">
              <InputSelect
                label="Номер агентского договора или ФИО агента"
                placeholder="Введите номер или ФИО"
                value={agentContractNumber}
                required
                onChange={handleAgentContractNumberChange}
              />
            </div>

            {/* Agent Share Input */}
            <div className="w-32">
              <InputSelect
                label="Доля"
                placeholder="2"
                value={agentShare}
                onChange={handleAgentShareChange}
              />
            </div>

            {/* Add Button */}
            <Button
              variant="contained"
              size="large"
              state="resting"
              showTrailingIcon={false}
              className="h-16"
            >
              Добавить
            </Button>
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

export default Step7;
