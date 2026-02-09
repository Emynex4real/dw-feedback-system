import { useQueryParams } from '@/hooks/useQueryParams';
import { useWizardForm } from '@/hooks/useWizardForm';
import { useFeedbackSubmit } from '@/hooks/useFeedbackSubmit';
import { PageContainer } from '@/components/layout/PageContainer';
import { StepIndicator } from '@/components/ui/StepIndicator';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { StudentInfoStep } from './StudentInfoStep';
import { FeedbackDetailsStep } from './FeedbackDetailsStep';
import { ReviewSubmitStep } from './ReviewSubmitStep';
import { SuccessScreen } from '@/components/screens/SuccessScreen';
import { ErrorScreen } from '@/components/screens/ErrorScreen';
import { ChevronLeft, ArrowRight } from 'lucide-react';

export function FeedbackWizard() {
  const queryParams = useQueryParams();

  const {
    form,
    currentStep,
    totalSteps,
    isFirstStep,
    isLastStep,
    goNext,
    goPrev,
    goToStep,
  } = useWizardForm({
    course: queryParams.course,
    cohort: queryParams.cohort ?? '',
    studentName: queryParams.studentName ?? '',
    studentId: queryParams.studentId ?? '',
  });

  const { status, error, feedbackId, submit, reset } = useFeedbackSubmit();

  const handleSubmit = form.handleSubmit(async (data) => {
    await submit(data, queryParams.referralSource);
  });

  if (status === 'success') {
    return <SuccessScreen feedbackId={feedbackId} />;
  }

  if (status === 'error' && error) {
    return (
      <ErrorScreen
        message={error.message}
        onRetry={() => {
          reset();
          goToStep(2);
        }}
        onStartOver={() => window.location.reload()}
      />
    );
  }

  const steps = [
    <StudentInfoStep key="student-info" form={form} />,
    <FeedbackDetailsStep key="feedback-details" form={form} />,
    <ReviewSubmitStep key="review" form={form} onEdit={goToStep} />,
  ];

  return (
    <PageContainer>
      {/* Branding - Floating above card */}
      <div className="mb-8 text-center flex flex-col items-center justify-center">
        <div className="h-12 w-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 overflow-hidden">
           <img src="/images/Dwtamainlogo-CkIGR8Su.png" alt="Logo" className="h-full w-full object-contain" />
        </div>
        <h1 className="font-['Bricolage_Grotesque'] text-2xl font-bold tracking-tight text-gray-900">
          Digital World Tech Academy
        </h1>
        <p className="text-sm font-medium text-gray-500">Student Feedback Portal</p>
      </div>

      {/* The "Sleek" Card */}
      <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] ring-1 ring-gray-100/50 p-2">
        {/* Progress Bar (Integrated at top) */}
        <div className="pt-6 px-6">
           <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <form onSubmit={handleSubmit} noValidate className="px-6 pb-8 pt-4">
          <div className="min-h-[320px] py-4">
            {steps[currentStep]}
          </div>

          {status === 'error' && error && (
            <div className="mb-6">
              <Alert variant="error" message={error.message} />
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3">
             {isLastStep ? (
               <Button
                 type="submit"
                 className="w-full h-14 rounded-2xl bg-[#FF5500] hover:bg-[#E64D00] text-white font-['Bricolage_Grotesque'] font-bold text-lg shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]"
                 isLoading={status === 'loading'}
               >
                 Submit Feedback
               </Button>
             ) : (
               <Button
                 type="button"
                 className="w-full h-14 rounded-2xl bg-[#FF5500] hover:bg-[#E64D00] text-white font-['Bricolage_Grotesque'] font-bold text-lg shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                 onClick={goNext}
               >
                 Continue <ArrowRight size={20} />
               </Button>
             )}

            {!isFirstStep && (
              <button
                type="button"
                className="w-full py-3 text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
                onClick={goPrev}
              >
                <ChevronLeft size={16} /> Go Back
              </button>
            )}
          </div>
        </form>
      </div>
      
      <p className="mt-8 text-center text-xs text-gray-400 font-medium">
        &copy; 2026 Tech Academy. Securely encrypted.
      </p>
    </PageContainer>
  );
}