import { useState, useCallback } from 'react';
import { useForm, type UseFormReturn, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { feedbackSchema } from '@/schemas/feedbackSchema';
import type { FeedbackFormData } from '@/types/feedback';

const STEP_FIELD_NAMES: (keyof FeedbackFormData)[][] = [
  ['course', 'branch'],
  ['feedbackType', 'priority', 'message'],
  [],
];

export const TOTAL_STEPS = 3;

export interface UseWizardFormReturn {
  form: UseFormReturn<FeedbackFormData>;
  currentStep: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  goNext: () => Promise<boolean>;
  goPrev: () => void;
  goToStep: (step: number) => void;
}

export function useWizardForm(
  defaultValues: Partial<FeedbackFormData>,
): UseWizardFormReturn {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema) as unknown as Resolver<FeedbackFormData>,
    defaultValues: {
      studentName: 'Anonymous',
      studentId: undefined,
      course: undefined,
      branch: '',
      feedbackType: undefined,
      priority: 'Low',
      message: '',
      ...defaultValues,
    },
    mode: 'onTouched',
  });

  const goNext = useCallback(async (): Promise<boolean> => {
    const fieldsToValidate = STEP_FIELD_NAMES[currentStep]!;
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid && currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((s) => s + 1);
      return true;
    }
    return isValid;
  }, [currentStep, form]);

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < TOTAL_STEPS) {
      setCurrentStep(step);
    }
  }, []);

  return {
    form,
    currentStep,
    totalSteps: TOTAL_STEPS,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === TOTAL_STEPS - 1,
    goNext,
    goPrev,
    goToStep,
  };
}
