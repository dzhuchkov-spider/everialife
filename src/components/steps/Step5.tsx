import React, { useState } from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import Layout from '../layout/Layout';

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
          <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
            Данные страхователя
          </h4>
          <div className="bg-[#f2f2f2] px-10 py-8">
            <div className="flex flex-col gap-6">
              {/* Placeholder inputs for insurer data */}
              <div className="w-[244px]">
                <InputSelect
                  label="ФИО"
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

        {/* Section 2: Дата и место рождения */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
            Дата и место рождения
          </h4>
          <div className="bg-[#f2f2f2] px-10 py-8">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
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
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Документ, удостоверяющий личность */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
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
