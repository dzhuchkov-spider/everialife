import React from 'react';
import Button from '../ui/Button';
import Layout from '../layout/Layout';

interface Step9Props {
  onBack?: () => void;
  onExit?: () => void;
  contractData?: {
    product?: string;
    contractNumber?: string;
    applicationNumber?: string;
    applicationDate?: string;
    status?: string;
    startDate?: string;
    fullName?: string;
    birthDate?: string;
    gender?: string;
    mobilePhone?: string;
    additionalPhone?: string;
    email?: string;
    contractTerm?: string;
    paymentPeriod?: string;
    paymentType?: string;
    insuranceVariant?: string;
    contribution?: string;
    agent?: string;
    salesChannel?: string;
  };
}

const Step9: React.FC<Step9Props> = ({ onBack, onExit, contractData }) => {
  const [notificationVisible, setNotificationVisible] = React.useState(true);

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: true, current: false },
    { number: 6, label: 'Контактные данные', completed: true, current: false },
    { number: 7, label: 'Агенты', completed: true, current: false },
    { number: 8, label: 'Просмотр', completed: true, current: false },
    { number: 9, label: 'Завершение', completed: false, current: true },
  ];

  return (
    <Layout
      title="Договор страхования"
      showProgress={false}
      steps={steps}
    >
      {/* Contract Preview Section */}
      <div className="flex flex-col gap-8 w-full">
        {/* Notification */}
        {notificationVisible && (
          <div className="bg-[#fafafa] p-5 rounded-lg flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-[#437aec] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-base font-normal text-[#191919] tracking-wide leading-relaxed mb-2">
                Уважаемый клиент!
              </p>
              <p className="text-base font-normal text-[#191919] tracking-wide leading-relaxed">
                Благодарим Вас за интерес, проявленный к нашим страховым программам. Вы можете посмотреть договор страхования.
              </p>
            </div>
            <button
              onClick={() => setNotificationVisible(false)}
              className="shrink-0 w-6 h-6 flex items-center justify-center hover:bg-[#e0e0e0] rounded transition-colors"
            >
              <svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Contract Information */}
        <div className="border border-[#ccc] rounded-lg px-10 py-8">
          <div className="flex flex-col gap-6">
            {/* Section: Основная информация */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-[#191919] tracking-wide leading-tight m-0">
                Основные данные
              </h4>
              <div className="flex flex-col gap-3 pl-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#939393] w-32">Продукт:</span>
                  <span className="text-sm text-black">{contractData?.product || '11110 | ЗА РУЛЁМ.ЗДОРОВЬЕ'}</span>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-32">Номер договора:</span>
                    <span className="text-sm text-[#191919]">{contractData?.contractNumber || '5033819725'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-32">Номер заявления:</span>
                    <span className="text-sm text-[#191919]">{contractData?.applicationNumber || 'ПН01633382'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-32">Дата заявления:</span>
                    <span className="text-sm text-[#191919]">{contractData?.applicationDate || '29.03.2024'}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-48">Статус договора:</span>
                    <span className="text-sm text-[#191919]">{contractData?.status || 'Договор авторизован'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-48">Дата начала действия:</span>
                    <span className="text-sm text-[#191919]">{contractData?.startDate || '01.04.2024'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Страхователь */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-[#191919] tracking-wide leading-tight m-0">
                Страхователь
              </h4>
              <div className="flex flex-col gap-3 pl-4">
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-16">ФИО:</span>
                    <span className="text-sm text-[#191919]">{contractData?.fullName || 'Созонова Екатерина Валентиновна'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-24">Дата рождения:</span>
                    <span className="text-sm text-[#191919]">{contractData?.birthDate || '14.10.1976'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-8">Пол:</span>
                    <span className="text-sm text-[#191919]">{contractData?.gender === 'male' ? 'Мужской' : contractData?.gender === 'female' ? 'Женский' : 'Женский'}</span>
                  </div>
                </div>
                <div className="border-t border-[#e0e0e0] pt-3"></div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-32">Мобильный телефон:</span>
                    <span className="text-sm text-[#191919]">{contractData?.mobilePhone || '+7(905)458-45-56'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-40">Дополнительный телефон:</span>
                    <span className="text-sm text-[#191919]">{contractData?.additionalPhone || '+7(905)478-22-44'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-16">E-mail:</span>
                    <span className="text-sm text-[#191919]">{contractData?.email || 'sazonova79@yandex.ru'}</span>
                  </div>
                </div>
                <div className="border-t border-[#e0e0e0] pt-3"></div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#939393] w-48">Дополнительные параметры:</span>
                  <span className="text-sm text-[#191919]">Код ОГРН; Дата регистрации; ОКВЭД;</span>
                </div>
              </div>
            </div>

            {/* Section: Параметры договора */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-[#191919] tracking-wide leading-tight m-0">
                Параметры договора
              </h4>
              <div className="flex flex-col gap-3 pl-4">
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-48">Срок действия договора в годах:</span>
                    <span className="text-sm text-[#191919]">{contractData?.contractTerm || '3'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-32">Периодичность оплаты:</span>
                    <span className="text-sm text-[#191919]">{contractData?.paymentPeriod || 'Единовременно'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-24">Тип уплаты:</span>
                    <span className="text-sm text-[#191919]">{contractData?.paymentType || 'Полный'}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-40">Вариант страхования:</span>
                    <span className="text-sm text-[#191919]">{contractData?.insuranceVariant || '3 года (профессионал)'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#939393] w-32">Взнос по договору:</span>
                    <span className="text-sm text-[#191919]">{contractData?.contribution || '20 000 руб.'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Риски */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-[#191919] tracking-wide leading-tight m-0">
                Риски
              </h4>
              <div className="bg-white rounded border border-[#e0e0e0]">
                {/* Table Header */}
                <div className="flex border-b border-[#e0e0e0]">
                  <div className="flex-1 px-6 py-4">
                    <span className="text-sm font-medium text-[#191919]">Наименование риска</span>
                  </div>
                  <div className="w-64 px-6 py-4">
                    <span className="text-sm font-medium text-[#191919]">Сумма по риску</span>
                  </div>
                </div>
                {/* Table Rows */}
                {[
                  { name: 'Медицинская помощь', amount: '1 000 000,00 руб.' },
                  { name: 'Стационарное лечение', amount: '500 000,00 руб.' },
                  { name: 'Амбулаторное лечение', amount: '300 000,00 руб.' },
                  { name: 'Дневной стационар', amount: '200 000,00 руб.' },
                  { name: 'Диагностика', amount: '100 000,00 руб.' },
                ].map((risk, index) => (
                  <div key={index} className="flex border-b border-[#e0e0e0] hover:bg-[#f9f9f9]">
                    <div className="flex-1 px-6 py-4">
                      <span className="text-sm text-[#191919]">{risk.name}</span>
                    </div>
                    <div className="w-64 px-6 py-4">
                      <span className="text-sm text-[#191919]">{risk.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Агент */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-normal text-[#191919] tracking-wide leading-tight m-0">
                Агент
              </h4>
              <div className="flex gap-6 pl-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#939393] w-16">Агент:</span>
                  <span className="text-sm text-[#191919]">{contractData?.agent || 'Aгент | MAGNUM-С-N007288 | ТЕСТ МАГНУМ ТЕСТ'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#939393] w-32">Канал продаж:</span>
                  <span className="text-sm text-[#191919]">{contractData?.salesChannel || 'Банковский'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outlined"
            size="large"
            state="resting"
            showTrailingIcon={false}
            className="w-60"
          >
            Скачать PDF
          </Button>
          <Button
            variant="outlined"
            size="large"
            state="resting"
            showTrailingIcon={false}
            className="w-32"
          >
            Распечатать
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between w-full">
        <Button
          variant="outlined"
          size="large"
          state="resting"
          showTrailingIcon={false}
          className="w-32"
          onClick={onBack}
        >
          Назад
        </Button>
        <Button
          variant="contained"
          size="large"
          state="resting"
          showTrailingIcon={false}
          className="w-80"
          onClick={onExit}
        >
          Выйти
        </Button>
      </div>
    </Layout>
  );
};

export default Step9;
