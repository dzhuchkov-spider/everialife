import React from 'react';

interface Step {
  number: number;
  label: string;
  completed: boolean;
  current: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const totalSteps = steps.length;
  
  return (
    <div className="relative w-full h-[50px] overflow-hidden">
      {/* Main Stepper */}
      <div className="flex items-center h-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Item */}
            <div 
              className={`flex flex-col items-center gap-1 overflow-hidden ${
                index === 0 ? 'w-[83px]' : 'flex-1'
              } min-w-px`}
            >
              {/* Step Icon and Progress Line */}
              <div className="h-[25px] w-full relative">
                {/* Progress Line to Next Step */}
                {index < totalSteps - 1 && (
                  <div className="absolute top-1/2 left-1/2 right-0 h-px -translate-y-1/2 overflow-hidden">
                    <div 
                      className="h-full w-full"
                      style={{ 
                        backgroundColor: step.completed ? '#c4703e' : '#e0e0e0'
                      }}
                    />
                  </div>
                )}
                
                {/* Step Circle */}
                <div 
                  className={`
                    absolute left-1/2 -translate-x-1/2 top-0 w-[25px] h-[25px] rounded-full flex items-center justify-center
                    ${step.current || step.completed 
                      ? 'bg-[#c4703e]' 
                      : 'bg-white border border-[#ccc] border-solid'
                    }
                  `}
                >
                  {step.completed ? (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                      </svg>
                    </div>
                  ) : (
                    <span className={`text-base font-normal tracking-[0.5px] ${
                      step.current ? 'text-white' : 'text-[#191919]'
                    }`}>
                      {step.number}
                    </span>
                  )}
                </div>
              </div>

              {/* Step Label */}
              <div className="px-6">
                <span className="text-sm font-normal text-[#191919] tracking-[0.2px] leading-[1.4]">
                  {step.label}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Progress Dots - Only show for 5 steps as per Figma design */}
      {totalSteps === 5 && (
        <div className="absolute content-stretch flex items-center justify-between left-[105px] top-0 w-[661px]">
          {/* Step 1-2 dots */}
          <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0">
            <div className="bg-[#c4703e] rounded-[64px] shrink-0 size-[8px]" />
            <div className="bg-[#c4703e] rounded-[64px] shrink-0 size-[8px]" />
          </div>
          
          {/* Step 3 dots */}
          <div className="content-stretch flex gap-[4px] h-[8px] items-start justify-center relative shrink-0 w-[20px]">
            <div className="bg-[#c4703e] rounded-[64px] shrink-0 size-[8px]" />
            <div className="bg-[#c4703e] rounded-[64px] shrink-0 size-[8px]" />
          </div>
          
          {/* Step 4 dots */}
          <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0">
            <div className="bg-[#ccc] rounded-[64px] shrink-0 size-[8px]" />
            <div className="bg-[#ccc] rounded-[64px] shrink-0 size-[8px]" />
          </div>
          
          {/* Step 5 dots */}
          <div className="content-stretch flex gap-[4px] h-[8px] items-start justify-center relative shrink-0 w-[20px]">
            <div className="bg-[#ccc] rounded-[64px] shrink-0 size-[8px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Stepper;
