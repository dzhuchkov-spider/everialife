import React from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import Layout from '../layout/Layout';
import calendarIcon from '../../assets/icons/Inputs/Calendar.svg';
import radioSelect from '../../assets/radio/Select.svg';
import radioNoSelect from '../../assets/radio/No-select.svg';

interface Step2Props {
  onBack?: () => void;
  onNext?: () => void;
}

const Step2: React.FC<Step2Props> = ({ onBack, onNext }) => {
  const [selectedGender, setSelectedGender] = React.useState<'male' | 'female' | null>(null);
  const [selectedCurrency, setSelectedCurrency] = React.useState<string>('ruble');
  const [dateOfBirth, setDateOfBirth] = React.useState<string>('');

  const isFormValid = dateOfBirth.length === 10 && selectedGender !== null;

  const handleDateChange = (value: string) => {
    // Apply date mask: dd.mm.yyyy
    let formatted = value.replace(/\D/g, '');
    
    if (formatted.length > 8) {
      formatted = formatted.slice(0, 8);
    }
    
    if (formatted.length >= 2) {
      formatted = formatted.slice(0, 2) + '.' + formatted.slice(2);
    }
    if (formatted.length >= 5) {
      formatted = formatted.slice(0, 5) + '.' + formatted.slice(5);
    }
    
    setDateOfBirth(formatted);
  };

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
          Данные застрахованного лица
        </h3>

        {/* Form Fields Container */}
        <div className="bg-[#f2f2f2] px-4 py-5 sm:px-10 sm:py-8">
          <div className="flex flex-col gap-6">
            {/* Date of Birth with Gender */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="flex-1">
                <InputSelect
                  label="Дата рождения"
                  placeholder="ДД.ММ.ГГГГ"
                  value={dateOfBirth}
                  required
                  trailingIcon={<img src={calendarIcon} alt="calendar" className="w-6 h-6" />}
                  onChange={handleDateChange}
                />
              </div>

              {/* Gender Selection */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <label className="text-base font-normal text-[#191919] tracking-wide whitespace-nowrap">
                  Пол <span className="text-[#437aec]">*</span>
                </label>
                <div className="flex items-center gap-4 sm:gap-8">
                  {/* Male Radio */}
                  <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedGender('male')}>
                    <img src={selectedGender === 'male' ? radioSelect : radioNoSelect} alt="radio" className="w-6 h-6" />
                    <span className="text-base font-normal text-[#191919] tracking-wide">Мужской</span>
                  </div>

                  {/* Female Radio */}
                  <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedGender('female')}>
                    <img src={selectedGender === 'female' ? radioSelect : radioNoSelect} alt="radio" className="w-6 h-6" />
                    <span className="text-base font-normal text-[#191919] tracking-wide">Женский</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Data Section */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
            Данные для расчета
          </h3>

          <div className="bg-[#f2f2f2] px-4 py-5 sm:px-10 sm:py-8">
            {/* Currency Radio Selection */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedCurrency('ruble')}>
              <img src={selectedCurrency === 'ruble' ? radioSelect : radioNoSelect} alt="radio" className="w-6 h-6" />
              <span className="text-base font-normal text-[#333333] tracking-wide">Российский рубль</span>
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
            state={isFormValid ? 'resting' : 'disabled'}
            showTrailingIcon={false}
            className="w-[200px]"
            onClick={isFormValid ? onNext : undefined}
          >
            Далее
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Step2;
