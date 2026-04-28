import React from 'react';
import Button from '../ui/Button';
import LayoutStep8 from '../layout/LayoutStep8';
import SignContractPopup from '../ui/SignContractPopup';
import editIcon from '../../assets/icons/edit.svg';
import showPolisIcon from '../../assets/icons/show-polis.svg';
import show2Icon from '../../assets/icons/show-2.svg';

interface Step8Props {
  onBack?: () => void;
  onSave?: () => void;
  onSign?: () => void;
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

const Step8: React.FC<Step8Props> = ({ onBack, onSave, onSign, contractData }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleSignClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupConfirm = () => {
    setIsPopupOpen(false);
    onSign?.();
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: true, current: false },
    { number: 6, label: 'Контактные данные', completed: true, current: false },
    { number: 7, label: 'Агенты', completed: true, current: false },
    { number: 8, label: 'Просмотр', completed: false, current: true },
  ];

  return (
    <LayoutStep8
      title="Ввод договора"
      showProgress={true}
      steps={steps}
    >
      {/* Contract Preview Section */}
      <div className="flex flex-col gap-8 w-full">
        {/* Main Title */}
        <h3 className="text-3xl font-normal text-black tracking-wide leading-tight m-0">
          Договор страхования
        </h3>

        {/* Contract Information */}
        <div className="flex flex-col gap-6">
          {/* Section: Основная информация */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
              Основная информация
            </h4>
            <div className="bg-white border border-[#CCCCCC] rounded px-6 py-4 flex flex-col gap-4">
              {/* First row: Product */}
              <div className="flex flex-col gap-3">
                <span className="text-sm text-[#666]">Продукт:</span>
                <span className="text-sm text-[#191919]">{contractData?.product || '11110 | ЗА РУЛЁМ.ЗДОРОВЬЕ'}</span>
              </div>
              {/* Second row: Contract Number, Application Number, Application Date */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Номер договора:</span>
                  <span className="text-sm text-[#191919]">{contractData?.contractNumber || '5033819725'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Номер заявления:</span>
                  <span className="text-sm text-[#191919]">{contractData?.applicationNumber || 'ПН01633382'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Дата заявления:</span>
                  <span className="text-sm text-[#191919]">{contractData?.applicationDate || '29.03.2024'}</span>
                </div>
              </div>
              {/* Third row: Status and Start Date */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Статус договора:</span>
                  <span className="text-sm text-[#191919]">{contractData?.status || 'Договор в состоянии ввода'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Дата начала действия:</span>
                  <span className="text-sm text-[#191919]">{contractData?.startDate || '01.04.2024'}</span>
                </div>
                <div className="w-full hidden sm:block"></div>
              </div>
            </div>
          </div>

          {/* Section: Страхователь */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Страхователь
              </h4>
              <Button variant="ghost" size="normal" state="resting" leadingIcon={null} trailingIcon={<div className="w-5 h-5 flex items-center justify-center text-[#386DF7]"><img src={editIcon} alt="edit" className="w-full h-full" /></div>}>
                Редактировать
              </Button>
            </div>
            <div className="bg-white border border-[#CCCCCC] rounded px-6 py-4 flex flex-col gap-4">
              {/* First row: ФИО, Дата рождения, Пол */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">ФИО:</span>
                  <span className="text-sm text-[#191919]">{contractData?.fullName || 'Созонова Екатерина Валентиновна'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Дата рождения:</span>
                  <span className="text-sm text-[#191919]">{contractData?.birthDate || '14.10.1976'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Пол:</span>
                  <span className="text-sm text-[#191919]">{contractData?.gender === 'male' ? 'Мужской' : contractData?.gender === 'female' ? 'Женский' : 'Женский'}</span>
                </div>
              </div>
              {/* Second row: Мобильный телефон, Дополнительный телефон, E-mail */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Мобильный телефон:</span>
                  <span className="text-sm text-[#191919]">{contractData?.mobilePhone || '+7(905)458-45-56'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Дополнительный телефон:</span>
                  <span className="text-sm text-[#191919]">{contractData?.additionalPhone || '+7(905)478-22-44'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">E-mail:</span>
                  <span className="text-sm text-[#191919]">{contractData?.email || 'sazonova79@yandex.ru'}</span>
                </div>
              </div>
              {/* Third row: Дополнительные параметры */}
              <div className="flex flex-col gap-3">
                <span className="text-sm text-[#666]">Дополнительные параметры:</span>
                <span className="text-sm text-[#191919]">Код ОГРН; Дата регистрации; ОКВЭД;</span>
              </div>
            </div>
          </div>

          {/* Section: Параметры договора */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Параметры договора
              </h4>
              <Button variant="ghost" size="normal" state="resting" leadingIcon={null} trailingIcon={<div className="w-5 h-5 flex items-center justify-center text-[#386DF7]"><img src={editIcon} alt="edit" className="w-full h-full" /></div>}>
                Редактировать
              </Button>
            </div>
            <div className="bg-white border border-[#CCCCCC] rounded px-6 py-4 flex flex-col gap-4">
              {/* First row: Срок действия договора, Периодичность оплаты, Тип уплаты */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Срок действия договора в годах:</span>
                  <span className="text-sm text-[#191919]">{contractData?.contractTerm || '3'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Периодичность оплаты:</span>
                  <span className="text-sm text-[#191919]">{contractData?.paymentPeriod || 'Единовременно'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Тип уплаты:</span>
                  <span className="text-sm text-[#191919]">{contractData?.paymentType || 'Полный'}</span>
                </div>
              </div>
              {/* Second row: Вариант страхования, Взнос по договору */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Вариант страхования:</span>
                  <span className="text-sm text-[#191919]">{contractData?.insuranceVariant || '3 года (профессионал)'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Взнос по договору:</span>
                  <span className="text-sm text-[#191919]">{contractData?.contribution || '20 000 руб.'}</span>
                </div>
                <div className="w-full hidden sm:block"></div>
              </div>
            </div>
          </div>

          {/* Section: Риски */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Риски
              </h4>
              <Button variant="ghost" size="normal" state="resting" leadingIcon={null} trailingIcon={<div className="w-5 h-5 flex items-center justify-center text-[#386DF7]"><img src={editIcon} alt="edit" className="w-full h-full" /></div>}>
                Редактировать
              </Button>
            </div>
            <div className="bg-white rounded border border-[#e0e0e0] px-10 py-8">
              {/* Table Header */}
              <div className="flex border-b border-[#e0e0e0] bg-[#FAFAFA]">
                <div className="flex-1 px-6 py-4">
                  <span className="text-sm font-normal text-[#939393]">Наименование риска</span>
                </div>
                <div className="w-64 px-6 py-4">
                  <span className="text-sm font-normal text-[#939393]">Сумма по риску</span>
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
                <div key={index} className="flex border-b border-[#e0e0e0] bg-[#FAFAFA]">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                Агент
              </h4>
              <Button variant="ghost" size="normal" state="resting" leadingIcon={null} trailingIcon={<div className="w-5 h-5 flex items-center justify-center text-[#386DF7]"><img src={editIcon} alt="edit" className="w-full h-full" /></div>}>
                Редактировать
              </Button>
            </div>
            <div className="bg-white border border-[#CCCCCC] rounded px-6 py-4 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Агент:</span>
                  <span className="text-sm text-[#191919]">{contractData?.agent || 'Aгент | MAGNUM-С-N007288 | ТЕСТ МАГНУМ ТЕСТ'}</span>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <span className="text-sm text-[#666]">Канал продаж:</span>
                  <span className="text-sm text-[#191919]">{contractData?.salesChannel || 'Банковский'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="ghost"
            size="large"
            state="resting"
            leadingIcon={<div className="w-10 h-10 flex items-center justify-center"><img src={showPolisIcon} alt="show-polis" className="w-full h-full" /></div>}
            showTrailingIcon={false}
            className="w-full sm:w-48"
          >
            Посмотреть полис
          </Button>
          <Button
            variant="ghost"
            size="large"
            state="resting"
            leadingIcon={<div className="w-10 h-10 flex items-center justify-center"><img src={show2Icon} alt="show-2" className="w-full h-full" /></div>}
            showTrailingIcon={false}
            className="w-full sm:w-56"
          >
            Посмотреть заявление
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
        <Button
          variant="ghost"
          size="large"
          state="resting"
          showTrailingIcon={false}
          className="w-full sm:w-32"
          onClick={onBack}
        >
          Назад
        </Button>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            variant="outlined"
            size="large"
            state="resting"
            leadingIcon={null}
            showTrailingIcon={false}
            className="w-full sm:w-48"
            onClick={onSave}
          >
            Отменить договор
          </Button>
          <Button
            variant="contained"
            size="large"
            state="resting"
            showTrailingIcon={false}
            className="w-full sm:w-56"
            onClick={handleSignClick}
          >
            Согласен с условиями
          </Button>
        </div>
      </div>

      {/* Sign Contract Popup */}
      <SignContractPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onConfirm={handlePopupConfirm}
      />
    </LayoutStep8>
  );
};

export default Step8;
