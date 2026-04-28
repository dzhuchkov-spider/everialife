import React from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import helpIcon from '../../assets/icons/Inputs/Help.svg';
import Layout from '../layout/Layout';

interface Step1Props {
  onNext?: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: false, current: true },
    { number: 3, label: 'Страхователь', completed: false, current: false },
    { number: 4, label: 'Застрахованный', completed: false, current: false },
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
        {/* Form Title */}
        <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
          Расчёт
        </h3>

        {/* Form Fields Container */}
        <div className="bg-[#f2f2f2] px-4 py-5 sm:px-10 sm:py-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <InputSelect
                  label="Агент"
                  placeholder="Агент"
                  value="Aгент | MAGNUM-С-N007288 | ТЕСТ МАГНУМ ТЕСТ"
                  showTrailingIcon={false}
                  onChange={(value) => console.log('Agent:', value)}
                />
              </div>
              <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0" />
            </div>
            <InputSelect
              label="Продукт"
              placeholder="Выберите продукт"
              value="11110 | ЗА РУЛЁМ.ЗДОРОВЬЕ"
              required
              onChange={(value) => console.log('Product:', value)}
            />
            <InputSelect
              label="Канал продаж"
              placeholder="Банковский"
              value="Банковский"
              required
              onChange={(value) => console.log('Sales Channel:', value)}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-3 items-start w-full">
        {/* Required Fields Note */}
        <p className="text-sm text-[#666] leading-tight">
          <span className="text-[#437aec]">*</span> Поля, обязательные к заполнению
        </p>

        {/* Next Button */}
        <div className="flex items-center justify-end w-full">
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

export default Step1;
