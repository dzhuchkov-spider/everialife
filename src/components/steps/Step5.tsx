import React, { useState } from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import Layout from '../layout/Layout';
import checkIcon from '../../assets/check/Select.svg';

interface Step5Props {
  onBack?: () => void;
  onSubmit?: () => void;
  passportData?: {
    seriesNumber?: string;
    issueDate?: string;
    issuedBy?: string;
    departmentCode?: string;
  };
}

const Step5: React.FC<Step5Props> = ({ onBack, onSubmit, passportData }) => {
  const [seriesNumber, setSeriesNumber] = useState(passportData?.seriesNumber || '');
  const [issueDate, setIssueDate] = useState(passportData?.issueDate || '');
  const [issuedBy, setIssuedBy] = useState(passportData?.issuedBy || '');
  const [departmentCode, setDepartmentCode] = useState(passportData?.departmentCode || '');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Ввод договора', completed: true, current: true },
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
          Данные для создания договора
        </h3>

        {/* Section 1: Данные страхователя */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[24px] font-normal text-black tracking-wide leading-tight m-0">
            Данные страхователя
          </h4>
          <div className="bg-[#f2f2f2] px-10 py-8">
            <div className="flex flex-col gap-6">
              {/* Checkbox - always checked */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded border-2 border-[#437aec] bg-[#437aec] flex items-center justify-center cursor-not-allowed">
                  <img src={checkIcon} alt="check" className="w-3 h-3" />
                </div>
                <span className="text-base text-[#333] font-normal tracking-[0.5px] leading-[1.4]">
                  Страхователь совпадает с застрахованным
                </span>
              </div>

              {/* Three inputs: Фамилия, Имя, Отчество */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <InputSelect
                    label="Фамилия"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    required
                    showTrailingIcon={false}
                  />
                </div>
                <div className="flex-1">
                  <InputSelect
                    label="Имя"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    required
                    showTrailingIcon={false}
                  />
                </div>
                <div className="flex-1">
                  <InputSelect
                    label="Отчество"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    required
                    showTrailingIcon={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Дата и место рождения */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[24px] font-normal text-black tracking-wide leading-tight m-0">
            Дата и место рождения
          </h4>
          <div className="bg-[#f2f2f2] px-10 py-8">
            <div className="flex flex-col gap-6">
              {/* Date of birth + Gender selection */}
              <div className="flex items-center gap-4">
                <div className="w-[244px]">
                  <InputSelect
                    label="Дата рождения"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    required
                    showTrailingIcon={false}
                  />
                </div>
                <span className="text-base text-[#333] font-normal tracking-[0.5px] leading-[1.4]">
                  Пол:
                </span>
                <div className="flex gap-4">
                  {/* Male radio button */}
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                        gender === 'male' 
                          ? 'border-[#437aec] bg-white' 
                          : 'border-[#666] bg-white'
                      }`}
                      onClick={() => setGender('male')}
                    >
                      {gender === 'male' && (
                        <div className="w-3 h-3 rounded-full bg-[#386df7] m-auto mt-0.5" />
                      )}
                    </div>
                    <span className="text-base text-[#333] font-normal tracking-[0.5px] leading-[1.4]">
                      Мужской
                    </span>
                  </div>

                  {/* Female radio button */}
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                        gender === 'female' 
                          ? 'border-[#437aec] bg-white' 
                          : 'border-[#666] bg-white'
                      }`}
                      onClick={() => setGender('female')}
                    >
                      {gender === 'female' && (
                        <div className="w-3 h-3 rounded-full bg-[#386df7] m-auto mt-0.5" />
                      )}
                    </div>
                    <span className="text-base text-[#333] font-normal tracking-[0.5px] leading-[1.4]">
                      Женский
                    </span>
                  </div>
                </div>
              </div>

              {/* Place of birth + Citizenship */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <InputSelect
                    label="Место рождения"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    required
                    showTrailingIcon={false}
                  />
                </div>
                <div className="flex-1">
                  <InputSelect
                    label="Гражданство"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                    required
                    showTrailingIcon={false}
                    options={['Россия', 'Беларусь', 'Казахстан', 'Узбекистан', 'Другое']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Документ, удостоверяющий личность */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[24px] font-normal text-black tracking-wide leading-tight m-0">
            Документ, удостоверяющий личность
          </h4>
          <div className="bg-[#f2f2f2] px-10 py-8">
            <div className="flex flex-col gap-6">
              {/* Series and Number */}
              <div className="w-[244px]">
                <InputSelect
                  label="Серия и номер"
                  placeholder=""
                  value={seriesNumber}
                  onChange={setSeriesNumber}
                  required
                  showTrailingIcon={false}
                />
              </div>

              {/* Issue Date and Issued By - Row */}
              <div className="flex gap-4">
                {/* Issue Date */}
                <div className="w-[244px]">
                  <InputSelect
                    label="Дата выдачи"
                    placeholder=""
                    value={issueDate}
                    onChange={setIssueDate}
                    required
                    showTrailingIcon={false}
                  />
                </div>

                {/* Issued By */}
                <div className="flex-1">
                  <InputSelect
                    label="Кем выдан"
                    placeholder=""
                    value={issuedBy}
                    onChange={setIssuedBy}
                    required
                    showTrailingIcon={false}
                  />
                </div>
              </div>

              {/* Department Code */}
              <div className="w-[244px]">
                <InputSelect
                  label="Код подразделения"
                  placeholder=""
                  value={departmentCode}
                  onChange={setDepartmentCode}
                  required
                  showTrailingIcon={false}
                />
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
            onClick={onSubmit}
          >
            Далее
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Step5;
