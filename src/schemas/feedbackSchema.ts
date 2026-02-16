import { z } from 'zod';
import {
  CourseOptions,
  FeedbackTypeOptions,
  PriorityOptions,
} from '@/types/feedback';

export const feedbackSchema = z.object({
  studentName: z.string().optional().default('Anonymous'),
  studentId: z.string().optional(),
  course: z.enum(CourseOptions, {
    error: 'Please select a course',
  }),
  cohort: z
    .string()
    .min(1, 'Cohort is required')
    .max(50, 'Cohort must be under 50 characters'),
  feedbackType: z.enum(FeedbackTypeOptions, {
    error: 'Please select a feedback type',
  }),
  priority: z.enum(PriorityOptions),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
  isAnonymous: z.boolean(),
});

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;
