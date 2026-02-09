interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { label: 'Your Info', id: 0 },
  { label: 'Feedback', id: 1 },
  { label: 'Review', id: 2 },
];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="relative mx-auto w-full max-w-xs mb-6">
      <div className="absolute left-0 top-5 h-1 w-full -translate-y-1/2 rounded-full bg-gray-100"></div>
      <div 
        className="absolute left-0 top-5 h-1 -translate-y-1/2 rounded-full bg-[#FF5500] transition-all duration-500 ease-out"
        style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
      ></div>

      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isActiveOrCompleted = currentStep >= index;
          const isCurrent = currentStep === index;

          return (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div
                className={`
                  flex h-10 w-10 items-center justify-center rounded-full border-[3px] text-sm font-bold transition-all duration-300 z-10 bg-white
                  ${isActiveOrCompleted 
                    ? "border-[#FF5500] text-[#FF5500]" 
                    : "border-gray-200 text-gray-300"}
                  ${isCurrent ? "scale-110 shadow-lg shadow-orange-500/10 ring-4 ring-orange-50" : ""}
                `}
              >
                {index + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${isActiveOrCompleted ? "text-gray-800" : "text-gray-300"}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}