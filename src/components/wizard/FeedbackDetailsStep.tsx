import { Controller, type UseFormReturn } from 'react-hook-form';
import type { FeedbackFormData } from '@/types/feedback';
import { FeedbackTypeOptions, PriorityOptions } from '@/types/feedback';
import { FormField } from '@/components/ui/FormField';
import { SelectField } from '@/components/ui/SelectField';
import { StarRating } from '@/components/ui/StarRating';
import { ToggleSwitch } from '@/components/ui/ToggleSwitch';
import { Bold, Italic, Link, List, Code } from 'lucide-react'; // Icons for the "Fake Toolbar"

interface FeedbackDetailsStepProps {
  form: UseFormReturn<FeedbackFormData>;
}

export function FeedbackDetailsStep({ form }: FeedbackDetailsStepProps) {
  const { register, control, watch, formState: { errors } } = form;
  const isAnonymous = watch('isAnonymous');

  const inputClass = "w-full h-12 rounded-xl border border-gray-200 bg-gray-50/50 px-4 text-gray-900 focus:border-[#FF5500] focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all font-medium";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      
      

      {/* 2. Message Input (With Visual Toolbar to match Image 2) */}
      <FormField label="Your Feedback" error={errors.message?.message} required htmlFor="message">
        <div className="rounded-2xl border border-gray-200 overflow-hidden focus-within:ring-4 focus-within:ring-orange-500/10 focus-within:border-[#FF5500] transition-all bg-white">
            {/* Decorative Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-gray-100 bg-gray-50/50 text-gray-400">
                <div className="p-1.5 hover:bg-white rounded-md cursor-pointer"><Bold size={16} /></div>
                <div className="p-1.5 hover:bg-white rounded-md cursor-pointer"><Italic size={16} /></div>
                <div className="w-px h-4 bg-gray-300 mx-1"></div>
                <div className="p-1.5 hover:bg-white rounded-md cursor-pointer"><Link size={16} /></div>
                <div className="p-1.5 hover:bg-white rounded-md cursor-pointer"><List size={16} /></div>
            </div>
            <textarea
                id="message"
                placeholder="Add a comment..."
                className="w-full min-h-[120px] p-4 resize-none outline-none text-base placeholder:text-gray-300"
                {...register('message')}
            />
        </div>
      </FormField>

      {/* 3. Dropdowns Row */}
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Type" error={errors.feedbackType?.message} required htmlFor="feedbackType">
            <Controller
              name="feedbackType"
              control={control}
              render={({ field }) => (
                <SelectField
                  id="feedbackType"
                  options={FeedbackTypeOptions}
                  placeholder="Select"
                  className={inputClass}
                  {...field}
                />
              )}
            />
        </FormField>
        <FormField label="Priority" error={errors.priority?.message} htmlFor="priority">
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <SelectField
                  id="priority"
                  options={PriorityOptions}
                  placeholder="Select"
                  className={inputClass}
                  {...field}
                />
              )}
            />
        </FormField>
      </div>

      {/* 4. Anonymous Toggle */}
      <div className="pt-2 flex justify-center">
        <Controller
          name="isAnonymous"
          control={control}
          render={({ field }) => (
            <ToggleSwitch
              checked={field.value}
              onChange={field.onChange}
              label="Submit Anonymously"
            />
          )}
        />
      </div>
    </div>
  );
}