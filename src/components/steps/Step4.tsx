import React from 'react';
import Button from '../ui/Button';
import Layout from '../layout/Layout';

interface Step4Props {
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: { selectedServices?: string[] }) => void;
}

interface Service {
  id: string;
  name: string;
  amount: string;
}

const Step4: React.FC<Step4Props> = ({ onBack, onNext, onDataChange }) => {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

  const services: Service[] = [
    { id: '1', name: 'Медицинская помощь', amount: '1 000 000,00' },
    { id: '2', name: 'Стационарное лечение', amount: '500 000,00' },
    { id: '3', name: 'Амбулаторное лечение', amount: '300 000,00' },
  ];

  const handleServiceToggle = (serviceId: string) => {
    const newSelected = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    
    setSelectedServices(newSelected);
    onDataChange?.({ selectedServices: newSelected });
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: false, current: true },
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

        {/* Services Table */}
        <div className="bg-[#f2f2f2] px-10 py-8">
          <div className="flex flex-col gap-0">
            {/* Table Header */}
            <div className="flex items-center border-b border-[#f2f2f2] bg-white">
              <div className="w-[72px] h-[72px] flex items-center justify-center border-b border-l border-[#f2f2f2]">
                <input
                  type="checkbox"
                  checked={selectedServices.length === services.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const allIds = services.map(s => s.id);
                      setSelectedServices(allIds);
                      onDataChange?.({ selectedServices: allIds });
                    } else {
                      setSelectedServices([]);
                      onDataChange?.({ selectedServices: [] });
                    }
                  }}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="flex-1 h-[72px] flex items-center px-6 border-b border-[#f2f2f2]">
                <span className="text-base font-normal text-[#191919] tracking-wide">
                  Услуга
                </span>
              </div>
              <div className="w-[256px] h-[72px] flex items-center px-6 border-b border-r border-[#f2f2f2]">
                <span className="text-base font-normal text-[#191919] tracking-wide">
                  Сумма
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

export default Step4;
