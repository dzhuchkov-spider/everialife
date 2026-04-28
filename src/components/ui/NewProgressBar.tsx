import React from 'react';
import checkIcon from '../../assets/icons/check.svg';

interface Step {
  number: number;
  label: string;
  completed: boolean;
  current: boolean;
}

interface NewProgressBarProps {
  steps: Step[];
}

const NewProgressBar: React.FC<NewProgressBarProps> = ({ steps }) => {
  // Only show for 5 steps as per the Figma design
  if (steps.length !== 5) {
    return null;
  }

  return (
    <div className="relative w-full h-[50px] overflow-hidden">
      {/* Progress Lines */}
      {/* Full line from step 1 to step 5 */}
      <div 
        className="absolute bg-[#c4703e] h-px"
        style={{
          top: '12px', // 24% of 50px
          left: '2.74%',
          right: '70.77%',
          height: '1px'
        }}
      />
      
      {/* Completed line from step 1 to step 2 */}
      <div 
        className="absolute bg-[#ccc] h-px"
        style={{
          top: '12px', // 24% of 50px
          left: '29.23%',
          right: '13.34%',
          height: '1px'
        }}
      />

      {/* Step 1 - Начало (completed with checkmark) */}
      <div 
        className="absolute flex flex-col gap-[4px] items-center"
        style={{
          left: '-7.5px',
          top: '0px',
          width: '98px'
        }}
      >
        <div className="bg-[#c4703e] relative rounded-[99px] shrink-0 size-[25px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip size-[16px]">
            <div className="absolute inset-[22.06%_13.35%]">
              <img src={checkIcon} alt="check" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] h-[22px] items-center px-[24px] relative shrink-0 w-full">
          <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.4]">Начало</p>
          </div>
        </div>
      </div>

      {/* Step 2 - Расчёт (completed/current with number) */}
      <div 
        className="absolute flex flex-col gap-[4px] items-center"
        style={{
          left: '152.79px',
          top: '0px',
          width: '95px'
        }}
      >
        <div className="bg-[#c4703e] relative rounded-[99px] shrink-0 size-[25px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-white text-center tracking-[0.5px] w-[24px]" style={{ top: 'calc(50% + 1px)' }}>
            <p className="leading-[1.4]">2</p>
          </div>
        </div>
        <div className="flex gap-[8px] h-[22px] items-center px-[24px] relative shrink-0 w-full">
          <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.4]">Расчёт</p>
          </div>
        </div>
      </div>

      {/* Step 3 - Страхователь (inactive) */}
      <div 
        className="absolute flex flex-col gap-[4px] items-center"
        style={{
          left: '363.88px',
          top: '0px',
          width: '142px'
        }}
      >
        <div className="bg-white border border-[#ccc] border-solid relative rounded-[99px] shrink-0 size-[25px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]" style={{ top: 'calc(50% + 1px)' }}>
            <p className="leading-[1.4]">3</p>
          </div>
        </div>
        <div className="flex gap-[8px] h-[22px] items-center px-[24px] relative shrink-0 w-full">
          <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.4]">Страхователь</p>
          </div>
        </div>
      </div>

      {/* Step 4 - Застрахованный (inactive) */}
      <div 
        className="absolute flex flex-col gap-[4px] items-center"
        style={{
          left: '588.96px',
          top: '0px',
          width: '161px'
        }}
      >
        <div className="bg-white border border-[#ccc] border-solid relative rounded-[99px] shrink-0 size-[25px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]" style={{ top: 'calc(50% + 1px)' }}>
            <p className="leading-[1.4]">4</p>
          </div>
        </div>
        <div className="flex gap-[8px] h-[22px] items-center px-[24px] relative shrink-0 w-full">
          <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.4]">Застрахованный</p>
          </div>
        </div>
      </div>

      {/* Step 5 - Просмотр договора (inactive) */}
      <div 
        className="absolute flex flex-col gap-[4px] items-center"
        style={{
          left: '812.54px',
          top: '0px',
          width: '183px'
        }}
      >
        <div className="bg-white border border-[#ccc] border-solid relative rounded-[99px] shrink-0 size-[25px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]" style={{ top: 'calc(50% + 1px)' }}>
            <p className="leading-[1.4]">5</p>
          </div>
        </div>
        <div className="flex gap-[8px] h-[22px] items-center px-[24px] relative shrink-0 w-full">
          <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.4]">Просмотр договора</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProgressBar;
