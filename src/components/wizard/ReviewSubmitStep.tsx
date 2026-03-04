import type { UseFormReturn } from 'react-hook-form';
import type { FeedbackFormData } from '@/types/feedback';
import { Pencil, User, FileText } from 'lucide-react';

interface ReviewSubmitStepProps {
  form: UseFormReturn<FeedbackFormData>;
  onEdit: (step: number) => void;
}

export function ReviewSubmitStep({ form, onEdit }: ReviewSubmitStepProps) {
  const values = form.getValues();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="font-['Bricolage_Grotesque'] text-3xl font-bold text-slate-900">
          Review details
        </h2>
        <p className="text-gray-500 font-medium">One last look before sending.</p>
      </div>

      <div className="space-y-4">
        {/* Ticket 1 */}
        <div className="group relative rounded-2xl bg-gray-50 p-5 transition-all hover:bg-orange-50/50 border border-transparent hover:border-orange-100">
          <button onClick={() => onEdit(0)} className="absolute top-4 right-4 text-gray-400 hover:text-[#FF5500]"><Pencil size={16} /></button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg shadow-sm text-gray-700">
                <User size={18} />
            </div>
            <h3 className="font-bold text-gray-900">Student Information</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 text-sm">
             <div className="text-gray-500">Course</div>
             <div className="font-semibold text-gray-900 text-right">{values.course}</div>
             <div className="text-gray-500">Branch</div>
             <div className="font-semibold text-gray-900 text-right">{values.branch}</div>
          </div>
        </div>

        {/* Ticket 2 */}
        <div className="group relative rounded-2xl bg-gray-50 p-5 transition-all hover:bg-orange-50/50 border border-transparent hover:border-orange-100">
          <button onClick={() => onEdit(1)} className="absolute top-4 right-4 text-gray-400 hover:text-[#FF5500]"><Pencil size={16} /></button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg shadow-sm text-gray-700">
                <FileText size={18} />
            </div>
            <h3 className="font-bold text-gray-900">Feedback Information</h3>
          </div>

          <div className="space-y-3 text-sm">
            
            <div className="p-3 bg-white rounded-xl border border-gray-100 text-gray-600 italic">
                "{values.message}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}