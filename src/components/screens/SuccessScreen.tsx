import { CheckCircle2 } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';

interface SuccessScreenProps {
  feedbackId: string | null;
}

export function SuccessScreen({ feedbackId }: SuccessScreenProps) {
  return (
    <PageContainer>
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-gray-900">Thank you!</h1>
        <p className="mb-6 text-gray-600">
          Your feedback has been submitted successfully. We appreciate you
          taking the time to help us improve.
        </p>
        {feedbackId && (
          <div className="rounded-lg bg-gray-50 px-4 py-3">
            <p className="text-xs text-gray-500">Reference ID</p>
            <p className="font-mono text-sm font-medium text-gray-900">
              {feedbackId}
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
