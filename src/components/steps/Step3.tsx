import React from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import helpIcon from '../../assets/icons/Inputs/Help.svg';
import Layout from '../layout/Layout';

interface Step3Props {
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: { fullName?: string; birthDate?: string; gender?: string }) => void;
}

const Step3: React.FC<Step3Props> = ({ onBack, onNext, onDataChange }) => {
  const [fullName, setFullName] = React.useState<string>('');
  const [birthDate, setBirthDate] = React.useState<string>('');
  const [selectedGender, setSelectedGender] = React.useState<'male' | 'female' | null>(null);

  const handleFullNameChange = (value: string) => {
    setFullName(value);
    onDataChange?.({ fullName: value, birthDate, gender: selectedGender || undefined });
  };

  const handleBirthDateChange = (value: string) => {
    setBirthDate(value);
    onDataChange?.({ fullName, birthDate: value, gender: selectedGender || undefined });
  };

  const handleGenderChange = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    onDataChange?.({ fullName, birthDate, gender });
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
        {/* Form Title */}
        <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
          Застрахованный
        </h3>

        {/* Form Fields Container */}
        <div className="bg-[#f2f2f2] px-10 py-8">
          <div className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <InputSelect
                  label="ФИО"
                  placeholder="Введите ФИО"
                  value={fullName}
                  required
                  onChange={handleFullNameChange}
                />
              </div>
              <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0" />
            </div>

            {/* Date of Birth */}
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <InputSelect
                  label="Дата рождения"
                  placeholder="ДД.ММ.ГГГГ"
                  value={birthDate}
                  required
                  onChange={handleBirthDateChange}
                />
              </div>
              <img src={helpIcon} alt="Help" className="w-6 h-6 flex-shrink-0" />
            </div>

            {/* Gender Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#191919] tracking-wide">
                Пол <span className="text-[#437aec]">*</span>
              </label>
              <div className="flex items-center gap-8">
                {/* Male Radio */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleGenderChange('male')}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedGender === 'male' ? 'border-[#437aec] bg-[#437aec]' : 'border-[#666] bg-white'}`}>
                    {selectedGender === 'male' && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-base font-normal text-[#191919] tracking-wide">Мужской</span>
                </div>

                {/* Female Radio */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleGenderChange('female')}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedGender === 'female' ? 'border-[#437aec] bg-[#437aec]' : 'border-[#666] bg-white'}`}>
                    {selectedGender === 'female' && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-base font-normal text-[#191919] tracking-wide">Женский</span>
                </div>
              </div>
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
