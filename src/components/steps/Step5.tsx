import React from 'react';
import Button from '../ui/Button';
import Layout from '../layout/Layout';

interface Step5Props {
  onBack?: () => void;
  onSubmit?: () => void;
  contractData?: {
    agent?: string;
    product?: string;
    salesChannel?: string;
    birthDate?: string;
    gender?: string;
    currency?: string;
    fullName?: string;
    selectedServices?: string[];
  };
}

const Step5: React.FC<Step5Props> = ({ onBack, onSubmit, contractData }) => {
  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: true, current: true },
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
          Просмотр договора
        </h3>

        {/* Contract Summary */}
        <div className="bg-[#f2f2f2] px-10 py-8">
          <div className="flex flex-col gap-6">
            {/* Section: Расчёт */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Расчёт
              </h4>
              <div className="flex flex-col gap-2 pl-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Агент:</span>
                  <span className="text-sm text-[#191919]">{contractData?.agent || 'Aгент | MAGNUM-С-N007288 | ТЕСТ МАГНУМ ТЕСТ'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Продукт:</span>
                  <span className="text-sm text-[#191919]">{contractData?.product || '11110 | ЗА РУЛЁМ.ЗДОРОВЬЕ'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Канал продаж:</span>
                  <span className="text-sm text-[#191919]">{contractData?.salesChannel || 'Банковский'}</span>
                </div>
              </div>
            </div>

            {/* Section: Страхователь */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Страхователь
              </h4>
              <div className="flex flex-col gap-2 pl-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Дата рождения:</span>
                  <span className="text-sm text-[#191919]">{contractData?.birthDate || '-'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Пол:</span>
                  <span className="text-sm text-[#191919]">{contractData?.gender === 'male' ? 'Мужской' : contractData?.gender === 'female' ? 'Женский' : '-'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Валюта:</span>
                  <span className="text-sm text-[#191919]">{contractData?.currency || '-'}</span>
                </div>
              </div>
            </div>

            {/* Section: Застрахованный */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Застрахованный
              </h4>
              <div className="flex flex-col gap-2 pl-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">ФИО:</span>
                  <span className="text-sm text-[#191919]">{contractData?.fullName || '-'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Дата рождения:</span>
                  <span className="text-sm text-[#191919]">{contractData?.birthDate || '-'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#666] w-32">Пол:</span>
                  <span className="text-sm text-[#191919]">{contractData?.gender === 'male' ? 'Мужской' : contractData?.gender === 'female' ? 'Женский' : '-'}</span>
                </div>
              </div>
            </div>

            {/* Section: Услуги */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Выбранные услуги
              </h4>
              <div className="flex flex-col gap-2 pl-4">
                {contractData?.selectedServices && contractData.selectedServices.length > 0 ? (
                  contractData.selectedServices.map((serviceId, index) => (
                    <div key={serviceId} className="flex items-center gap-4">
                      <span className="text-sm text-[#191919]">{index + 1}. Услуга #{serviceId}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-sm text-[#666]">Услуги не выбраны</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-3 items-start w-full">
        {/* Required Fields Note */}
        <p className="text-sm text-[#666] leading-tight">
          Пожалуйста, проверьте все данные перед отправкой
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
            onClick={onSubmit}
          >
            Подписать
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Step5;
