import React from 'react';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import Layout from '../layout/Layout';

interface Step6Props {
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: {
    mobilePhone?: string;
    additionalPhone?: string;
    email?: string;
    postalAddress?: string;
    registrationAddress?: string;
  }) => void;
}

const Step6: React.FC<Step6Props> = ({ onBack, onNext, onDataChange }) => {
  const [mobilePhone, setMobilePhone] = React.useState<string>('');
  const [additionalPhone, setAdditionalPhone] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [postalAddress, setPostalAddress] = React.useState<string>('');
  const [registrationAddress, setRegistrationAddress] = React.useState<string>('');

  const handleMobilePhoneChange = (value: string) => {
    setMobilePhone(value);
    onDataChange?.({ mobilePhone: value, additionalPhone, email, postalAddress, registrationAddress });
  };

  const handleAdditionalPhoneChange = (value: string) => {
    setAdditionalPhone(value);
    onDataChange?.({ mobilePhone, additionalPhone: value, email, postalAddress, registrationAddress });
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    onDataChange?.({ mobilePhone, additionalPhone, email: value, postalAddress, registrationAddress });
  };

  const handlePostalAddressChange = (value: string) => {
    setPostalAddress(value);
    onDataChange?.({ mobilePhone, additionalPhone, email, postalAddress: value, registrationAddress });
  };

  const handleRegistrationAddressChange = (value: string) => {
    setRegistrationAddress(value);
    onDataChange?.({ mobilePhone, additionalPhone, email, postalAddress, registrationAddress: value });
  };

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: true, current: false },
    { number: 6, label: 'Контактные данные', completed: false, current: true },
  ];

  return (
    <Layout
      title="Ввод договора"
      showProgress={true}
      steps={steps}
    >
      {/* Form Section */}
      <div className="flex flex-col gap-8 w-full">
        {/* Contact Data Section */}
        <div className="flex flex-col gap-6 w-full">
          {/* Section Title */}
          <h3 className="text-xl sm:text-2xl font-normal text-black tracking-wide leading-tight m-0">
            Контактные данные страхователя
          </h3>

          {/* Phones and Email */}
          <div className="bg-[#f2f2f2] px-10 py-8 rounded-lg">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="flex-1">
                  <InputSelect
                    label="Мобильный телефон"
                    placeholder="+7 (___) ___-__-__"
                    value={mobilePhone}
                    required
                    onChange={handleMobilePhoneChange}
                  />
                </div>
                <div className="flex-1">
                  <InputSelect
                    label="Дополнительный телефон"
                    placeholder="+7 (___) ___-__-__"
                    value={additionalPhone}
                    onChange={handleAdditionalPhoneChange}
                  />
                </div>
                <div className="flex-1">
                  <InputSelect
                    label="Email"
                    placeholder="example@mail.ru"
                    value={email}
                    required
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-[#f2f2f2] px-10 py-8 rounded-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                  Почтовый адрес
                </h4>
                <span className="text-sm text-[#437aec]">*</span>
              </div>
              
              <div className="flex flex-col gap-6">
                <InputSelect
                  label="Страна"
                  placeholder="Россия"
                  value="Россия"
                  onChange={(value) => console.log('Country:', value)}
                />
                
                <div className="flex gap-6">
                  <div className="flex-1">
                    <InputSelect
                      label="Регион"
                      placeholder="Выберите регион"
                      value=""
                      onChange={(value) => console.log('Region:', value)}
                    />
                  </div>
                  <div className="flex-1">
                    <InputSelect
                      label="Город"
                      placeholder="Выберите город"
                      value=""
                      onChange={(value) => console.log('City:', value)}
                    />
                  </div>
                </div>

                <InputSelect
                  label="Адрес"
                  placeholder="Улица, дом, квартира"
                  value={postalAddress}
                  required
                  onChange={handlePostalAddressChange}
                />

                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="normal"
                    state="resting"
                    showTrailingIcon={false}
                  >
                    Уточнить адрес
                  </Button>
                </div>
              </div>

              {/* Registration Address */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sameAddress"
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="sameAddress" className="text-base font-normal text-[#191919] tracking-wide cursor-pointer">
                  Адрес регистрации совпадает с почтовым
                </label>
              </div>

              <InputSelect
                label="Адрес регистрации"
                placeholder="Улица, дом, квартира"
                value={registrationAddress}
                onChange={handleRegistrationAddressChange}
              />
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

export default Step6;
