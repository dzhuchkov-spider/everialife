import React from 'react';
import InputSelect from './ui/InputSelect';
import Button from './ui/Button';
import Layout from './layout/Layout';

interface Step2ContentProps {
  onBack?: () => void;
}

const Step2Content: React.FC<Step2ContentProps> = ({ onBack }) => {
  const [selectedGender, setSelectedGender] = React.useState<'male' | 'female' | null>(null);
  const [selectedCurrency, setSelectedCurrency] = React.useState<string>('');

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: false, current: true },
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
          Страхователь
        </h3>

        {/* Form Fields Container */}
        <div className="bg-[#f2f2f2] px-10 py-8">
          <div className="flex flex-col gap-6">
            {/* Date of Birth */}
            <InputSelect
              label="Дата рождения"
              placeholder="ДД.ММ.ГГГГ"
              value=""
              required
              onChange={(value) => console.log('Date of birth:', value)}
            />

            {/* Gender Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#191919] tracking-wide">
                Пол <span className="text-[#437aec]">*</span>
              </label>
              <div className="flex items-center gap-8">
                {/* Male Radio */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedGender('male')}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedGender === 'male' ? 'border-[#437aec] bg-[#437aec]' : 'border-[#666] bg-white'}`}>
                    {selectedGender === 'male' && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-base font-normal text-[#191919] tracking-wide">Мужской</span>
                </div>

                {/* Female Radio */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedGender('female')}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedGender === 'female' ? 'border-[#437aec] bg-[#437aec]' : 'border-[#666] bg-white'}`}>
                    {selectedGender === 'female' && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-base font-normal text-[#191919] tracking-wide">Женский</span>
                </div>
              </div>
            </div>

            {/* Currency Selection */}
            <InputSelect
              label="Валюта"
              placeholder="Выберите валюту"
              value={selectedCurrency}
              required
              onChange={(value) => setSelectedCurrency(value)}
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

        {/* Back Button */}
        <div className="flex items-center justify-start w-full">
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
        </div>
      </div>
    </Layout>
  );
};

export default Step2Content;
