import { feedbackSchema } from './feedbackSchema';

export const studentInfoSchema = feedbackSchema.pick({
  studentName: true,
  studentId: true,
  course: true,
  cohort: true,
});

export const feedbackDetailsSchema = feedbackSchema.pick({
  feedbackType: true,
  priority: true,
  message: true,
  rating: true,
  isAnonymous: true,
});

export { feedbackSchema as reviewSchema };
