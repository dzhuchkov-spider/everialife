import React from 'react';
import checkIcon from '../../assets/icons/check.svg';

interface Step {
  number: number;
  label: string;
  completed: boolean;
  current: boolean;
}

interface NewProgressBarModifiedProps {
  steps: Step[];
  progress?: number; // Progress value (0-100) or step number with fraction (e.g., 2.5)
}

const NewProgressBarModified: React.FC<NewProgressBarModifiedProps> = ({ steps, progress = 0 }) => {
  // Show only first 5 steps for Step6 and Step7
  if (steps.length < 5) {
    return null;
  }
  
  // Take only first 5 steps
  const displaySteps = steps.slice(0, 5);

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
      {/* Track Lines Container */}
      <div className="relative w-full h-[50px]">
        
        {/* Gray Background Track Line */}
        <div 
          className="absolute top-[12.5px] -translate-y-1/2 h-[2px] bg-gray-200 z-0"
          style={{
            left: '12.5px', // Circle radius (25px / 2)
            right: '12.5px', // Circle radius (25px / 2)
          }}
        />

        {/* Brown Progress Line - ~62.5% (middle between circles 3 and 4) */}
        <div 
          className="absolute top-[12.5px] -translate-y-1/2 h-[2px] bg-[#b47a59] z-10"
          style={{
            left: '12.5px', // Circle radius
            width: '62.5%', // 2.5 gaps out of 4 = 62.5%
          }}
        />

        {/* Step Items Container - Each step contains circle + text */}
        <div className="relative z-20 flex justify-between w-full px-5">
          
          {/* Step 1 - Circle + Text Container */}
          <div className="flex flex-col items-center relative">
            <div className="bg-[#b47a59] rounded-[99px] shrink-0 size-[25px] flex items-center justify-center">
              <img src={checkIcon} alt="check" className="w-[16px] h-[16px]" />
            </div>
            <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap mt-[5px]">
              <p className="leading-[1.4]">{displaySteps[0]?.label || 'Начало'}</p>
            </div>
          </div>

          {/* Step 2 - Circle + Text Container - Modified: same design as step 1 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-[#b47a59] rounded-[99px] shrink-0 size-[25px] flex items-center justify-center">
              <img src={checkIcon} alt="check" className="w-[16px] h-[16px]" />
            </div>
            <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap mt-[5px]">
              <p className="leading-[1.4]">{displaySteps[1]?.label || 'Расчёт'}</p>
            </div>
          </div>

          {/* Step 3 - Circle + Text Container - Modified: same design as original step 2 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-[#b47a59] rounded-[99px] shrink-0 size-[25px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-white text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">3</p>
              </div>
            </div>
            <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap mt-[5px]">
              <p className="leading-[1.4]">{displaySteps[2]?.label || 'Страхователь'}</p>
            </div>
          </div>

          {/* Step 4 - Circle + Text Container */}
          <div className="flex flex-col items-center relative">
            <div className="bg-white border border-[#e5e7eb] border-solid rounded-[99px] shrink-0 size-[25px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">4</p>
              </div>
            </div>
            <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap mt-[5px]">
              <p className="leading-[1.4]">{displaySteps[3]?.label || 'Застрахованный'}</p>
            </div>
          </div>

          {/* Step 5 - Circle + Text Container */}
          <div className="flex flex-col items-center relative">
            <div className="bg-white border border-[#e5e7eb] border-solid rounded-[99px] shrink-0 size-[25px] flex items-center justify-center">
              <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] h-[16px] justify-center leading-[0] not-italic text-[16px] text-[#191919] text-center tracking-[0.5px] w-[24px]">
                <p className="leading-[1.4]">5</p>
              </div>
            </div>
            <div className="flex flex-col font-['HelveticaNeueCyr:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#191919] tracking-[0.2px] whitespace-nowrap mt-[5px]">
              <p className="leading-[1.4]">{displaySteps[4]?.label || 'Просмотр договора'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProgressBarModified;
