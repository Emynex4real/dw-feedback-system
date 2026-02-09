import type { FeedbackMetadata } from '@/types/feedback';

export function collectMetadata(referralSource: string): FeedbackMetadata {
  return {
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    referralSource,
  };
}
