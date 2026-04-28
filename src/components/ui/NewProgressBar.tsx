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
  progress?: number; // Progress value (0-100) or step number with fraction (e.g., 2.5)
}

const NewProgressBar: React.FC<NewProgressBarProps> = ({ steps, progress = 0 }) => {
  // Only show for 5 steps as per the Figma design
  if (steps.length !== 5) {
    return null;
  }

  // Calculate progress percentage
  const calculateProgressPercentage = () => {
    if (progress <= 0) return 0;
    if (progress >= 5) return 100;
    
    // Convert step number to percentage
    // Example: 2.5 steps = ((2.5) / 4) * 100 = 62.5%
    const stepPercentage = (progress / 4) * 100;
    return Math.min(Math.max(stepPercentage, 0), 100);
  };

  const progressPercentage = calculateProgressPercentage();

  return (
    <div className="relative w-full">
      {/* Container - Background Track Architecture */}
      <div className="relative w-full h-16 flex items-center">
        
        {/* Gray Background Track Line */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-gray-200 z-0"
          style={{
            left: '20px', // Circle radius
            right: '20px', // Circle radius
          }}
        />

        {/* Brown Progress Line - Dynamic Width */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#b47a59] z-10"
          style={{
            left: '20px', // Circle radius
            width: `${progressPercentage}%`, // Dynamic width calculation
          }}
        />

        {/* Circles Container */}
        <div className="relative z-20 flex justify-between items-center w-full px-5">
          
          {/* Step 1 Circle */}
          <div className="relative">
            <div className="bg-[#b47a59] rounded-[99px] shrink-0 size-[40px] flex items-center justify-center">
              <img src={checkIcon} alt="check" className="w-[16px] h-[16px]" />
            </div>
          </div>

          {/* Step 2 Circle */}
          <div className="relative">
            <div className="bg-[#b47a59] rounded-[99px] shrink-0 size-[40px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-white text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">2</p>
              </div>
            </div>
          </div>

          {/* Step 3 Circle */}
          <div className="relative">
            <div className="bg-white border border-[#e5e7eb] border-solid rounded-[99px] shrink-0 size-[40px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">3</p>
              </div>
            </div>
          </div>

          {/* Step 4 Circle */}
          <div className="relative">
            <div className="bg-white border border-[#e5e7eb] border-solid rounded-[99px] shrink-0 size-[40px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">4</p>
              </div>
            </div>
          </div>

          {/* Step 5 Circle */}
          <div className="relative">
            <div className="bg-white border border-[#e5e7eb] border-solid rounded-[99px] shrink-0 size-[40px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Labels Container - Separate from circles */}
      <div className="relative flex justify-between items-center w-full px-5 mt-2">
        
        {/* Step 1 Label */}
        <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap text-center">
          <p className="leading-[1.4]">Начало</p>
        </div>

        {/* Step 2 Label */}
        <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap text-center">
          <p className="leading-[1.4]">Расчёт</p>
        </div>

        {/* Step 3 Label */}
        <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap text-center">
          <p className="leading-[1.4]">Страхователь</p>
        </div>

        {/* Step 4 Label */}
        <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap text-center">
          <p className="leading-[1.4]">Застрахованный</p>
        </div>

        {/* Step 5 Label */}
        <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap text-center">
          <p className="leading-[1.4]">Просмотр договора</p>
        </div>
      </div>
    </div>
  );
};

export default NewProgressBar;
