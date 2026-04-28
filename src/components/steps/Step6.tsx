import React from 'react';
import Input from '../ui/Input';
import InputSelect from '../ui/InputSelect';
import Button from '../ui/Button';
import LayoutWithModifiedProgress from '../layout/LayoutWithModifiedProgress';
import Checkbox from '../ui/Checkbox';

interface Step6Props {
  onBack?: () => void;
  onNext?: () => void;
  onDataChange?: (data: any) => void;
}

const Step6: React.FC<Step6Props> = ({ onBack, onNext, onDataChange }) => {
  const [mobilePhone, setMobilePhone] = React.useState<string>('');
  const [additionalPhone, setAdditionalPhone] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  
  // Postal address fields
  const [postalCountry, setPostalCountry] = React.useState<string>('Россия');
  const [postalFullAddress, setPostalFullAddress] = React.useState<string>('');
  const [postalRegion, setPostalRegion] = React.useState<string>('');
  const [postalDistrict, setPostalDistrict] = React.useState<string>('');
  const [postalCity, setPostalCity] = React.useState<string>('');
  const [postalCityDistrict, setPostalCityDistrict] = React.useState<string>('');
  const [postalSettlement, setPostalSettlement] = React.useState<string>('');
  const [postalStreet, setPostalStreet] = React.useState<string>('');
  const [postalAdditionalTerritory, setPostalAdditionalTerritory] = React.useState<string>('');
  const [postalHouse, setPostalHouse] = React.useState<string>('');
  const [postalBuilding, setPostalBuilding] = React.useState<string>('');
  const [postalStructure, setPostalStructure] = React.useState<string>('');
  const [postalApartment, setPostalApartment] = React.useState<string>('');
  const [postalIndex, setPostalIndex] = React.useState<string>('');
  
  // Registration address fields
  const sameAsPostal = true;
  const [registrationCountry, setRegistrationCountry] = React.useState<string>('Россия');
  const [registrationFullAddress, setRegistrationFullAddress] = React.useState<string>('');

  const handleDataChange = () => {
    onDataChange?.({
      mobilePhone,
      additionalPhone,
      email,
      postalAddress: {
        country: postalCountry,
        fullAddress: postalFullAddress,
        region: postalRegion,
        district: postalDistrict,
        city: postalCity,
        cityDistrict: postalCityDistrict,
        settlement: postalSettlement,
        street: postalStreet,
        additionalTerritory: postalAdditionalTerritory,
        house: postalHouse,
        building: postalBuilding,
        structure: postalStructure,
        apartment: postalApartment,
        index: postalIndex,
      },
      registrationAddress: {
        sameAsPostal,
        country: registrationCountry,
        fullAddress: registrationFullAddress,
      },
    });
  };

  React.useEffect(() => {
    handleDataChange();
  }, [
    mobilePhone, additionalPhone, email,
    postalCountry, postalFullAddress, postalRegion, postalDistrict, postalCity,
    postalCityDistrict, postalSettlement, postalStreet, postalAdditionalTerritory,
    postalHouse, postalBuilding, postalStructure, postalApartment, postalIndex,
    sameAsPostal, registrationCountry, registrationFullAddress,
  ]);

  const steps = [
    { number: 1, label: 'Начало', completed: true, current: false },
    { number: 2, label: 'Расчёт', completed: true, current: false },
    { number: 3, label: 'Страхователь', completed: true, current: false },
    { number: 4, label: 'Застрахованный', completed: true, current: false },
    { number: 5, label: 'Просмотр договора', completed: true, current: false },
    { number: 6, label: 'Контактные данные', completed: false, current: true },
  ];

  return (
    <LayoutWithModifiedProgress
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
                  <Input
                    label="Мобильный телефон"
                    placeholder="+7 (___) ___-__-__"
                    value={mobilePhone}
                    required
                    onChange={setMobilePhone}
                    type="tel"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="Дополнительный телефон"
                    placeholder="+7 (___) ___-__-__"
                    value={additionalPhone}
                    onChange={setAdditionalPhone}
                    type="tel"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="Email"
                    placeholder="example@mail.ru"
                    value={email}
                    required
                    onChange={setEmail}
                    type="email"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Postal Address Section */}
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
                  value={postalCountry}
                  onChange={setPostalCountry}
                />
                
                <Input
                  label="Укажите адрес полностью"
                  placeholder=""
                  value={postalFullAddress}
                  onChange={setPostalFullAddress}
                />

                <Input
                  label="Регион"
                  placeholder=""
                  value={postalRegion}
                  onChange={setPostalRegion}
                />

                <div className="flex gap-6">
                  <div className="flex-1">
                    <Input
                      label="Район"
                      placeholder=""
                      value={postalDistrict}
                      onChange={setPostalDistrict}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      label="Город"
                      placeholder=""
                      value={postalCity}
                      onChange={setPostalCity}
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1">
                    <Input
                      label="Городской район"
                      placeholder=""
                      value={postalCityDistrict}
                      onChange={setPostalCityDistrict}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      label="Населенный пункт"
                      placeholder=""
                      value={postalSettlement}
                      onChange={setPostalSettlement}
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1">
                    <Input
                      label="Улица"
                      placeholder=""
                      value={postalStreet}
                      onChange={setPostalStreet}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      label="Доп. территория"
                      placeholder=""
                      value={postalAdditionalTerritory}
                      onChange={setPostalAdditionalTerritory}
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1">
                    <Input
                      label="Дом"
                      placeholder=""
                      value={postalHouse}
                      onChange={setPostalHouse}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      label="Корпус"
                      placeholder=""
                      value={postalBuilding}
                      onChange={setPostalBuilding}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      label="Строение"
                      placeholder=""
                      value={postalStructure}
                      onChange={setPostalStructure}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      label="Квартира"
                      placeholder=""
                      value={postalApartment}
                      onChange={setPostalApartment}
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <Input
                    label="Индекс"
                    placeholder=""
                    value={postalIndex}
                    onChange={setPostalIndex}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Registration Address Section */}
          <div className="bg-[#f2f2f2] px-10 py-8 rounded-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-normal text-black tracking-wide leading-tight m-0">
                  Адрес регистрации
                </h4>
                <Checkbox
                  checked={sameAsPostal}
                  onChange={() => {}}
                  disabled={true}
                  label="Совпадает с почтовым адресом"
                />
              </div>
              
              <div className="flex flex-col gap-6">
                <InputSelect
                  label="Страна"
                  placeholder="Россия"
                  value={registrationCountry}
                  onChange={setRegistrationCountry}
                />
                
                <Input
                  label="Укажите адрес полностью"
                  placeholder=""
                  value={registrationFullAddress}
                  onChange={setRegistrationFullAddress}
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
            state="resting"
            showTrailingIcon={false}
            className="w-[200px]"
            onClick={onNext}
          >
            Далее
          </Button>
        </div>
      </div>
    </LayoutWithModifiedProgress>
  );
};

export default Step6;
