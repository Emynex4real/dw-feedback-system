export interface ApiSuccessResponse {
  success: true;
  message: string;
  feedbackId: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export interface SubmitError {
  type: string;
  message: string;
  fieldErrors?: Record<string, string[]>;
}
