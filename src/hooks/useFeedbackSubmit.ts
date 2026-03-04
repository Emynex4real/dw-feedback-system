import { useState, useCallback } from 'react';
import { submitFeedback } from '@/services/feedbackService';
import { collectMetadata } from '@/utils/metadata';
import type { FeedbackFormData } from '@/types/feedback';
import type { SubmissionStatus, SubmitError } from '@/types/api';

export interface UseFeedbackSubmitReturn {
  status: SubmissionStatus;
  error: SubmitError | null;
  feedbackId: string | null;
  submit: (data: FeedbackFormData, referralSource: string) => Promise<void>;
  reset: () => void;
}

export function useFeedbackSubmit(): UseFeedbackSubmitReturn {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [error, setError] = useState<SubmitError | null>(null);
  const [feedbackId, setFeedbackId] = useState<string | null>(null);

  const submit = useCallback(
    async (formData: FeedbackFormData, referralSource: string) => {
      setStatus('loading');
      setError(null);

      const payload = {
        ...formData,
        metaData: collectMetadata(referralSource),
      };

      try {
        const response = await submitFeedback(payload);
        setFeedbackId(response.feedbackId);
        setStatus('success');
      } catch (err) {
        setError(err as SubmitError);
        setStatus('error');
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
    setFeedbackId(null);
  }, []);

  return { status, error, feedbackId, submit, reset };
}
