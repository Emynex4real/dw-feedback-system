import emailjs from '@emailjs/browser';
import type { FeedbackPayload } from '@/types/feedback';
import type { ApiSuccessResponse } from '@/types/api';
import { EMAILJS_CONFIG } from '@/utils/constants';

export async function submitFeedback(
  payload: FeedbackPayload,
): Promise<ApiSuccessResponse> {
  const templateParams = {
    INFO: payload.course,
    BRANCH: payload.branch,
    FEEDBACK_TYPE: payload.feedbackType,
    PRIORITY: payload.priority === 'High' ? 9 : payload.priority === 'Medium' ? 5 : 2,
    PRIORITY_LABEL: payload.priority,
    FEEDBACK: payload.message,
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey,
  );

  return {
    success: true,
    message: 'Feedback submitted successfully',
    feedbackId: `FB-${Date.now()}`,
  };
}
