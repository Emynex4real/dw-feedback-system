import type { UseFormReturn } from 'react-hook-form';
import type { FeedbackFormData } from '@/types/feedback';
import { CourseOptions } from '@/types/feedback';
import { FormField } from '@/components/ui/FormField';
import { SelectField } from '@/components/ui/SelectField';

interface StudentInfoStepProps {
  form: UseFormReturn<FeedbackFormData>;
}

export function StudentInfoStep({ form }: StudentInfoStepProps) {
  const { register, formState: { errors } } = form;

  // "Sleek" input classes
  const inputClass = "w-full h-14 rounded-xl border border-gray-200 bg-gray-50/50 px-4 text-gray-900 placeholder:text-gray-400 focus:border-[#FF5500] focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-200 font-medium ";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-2 mb-8">
        <h2 className="font-['Bricolage_Grotesque'] text-3xl font-bold text-slate-900">
          Who are you?
        </h2>
        <p className="text-gray-500 font-medium">
          Tell us a bit about yourself.
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
            <FormField label="Course" error={errors.course?.message} required htmlFor="course">
            <SelectField
                id="course"
                options={CourseOptions}
                placeholder="Select..."
                className={inputClass}
                {...register('course')}
            />
            </FormField>
            
            <FormField label="Cohort" error={errors.cohort?.message} required htmlFor="cohort">
            <input
                id="cohort"
                type="text"
                placeholder="e.g. Batch A"
                className={inputClass}
                {...register('cohort')}
            />
            </FormField>
        </div>
      </div>
    </div>
  );
}