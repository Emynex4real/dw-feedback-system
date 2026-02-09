import { apiClient } from './api';
import type { FeedbackPayload } from '@/types/feedback';
import type { ApiSuccessResponse } from '@/types/api';

export async function submitFeedback(
  payload: FeedbackPayload,
): Promise<ApiSuccessResponse> {
  const response = await apiClient.post<ApiSuccessResponse>(
    '/feedback',
    payload,
  );
  return response.data;
}
