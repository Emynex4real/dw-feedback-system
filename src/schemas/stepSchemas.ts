import { feedbackSchema } from './feedbackSchema';

export const studentInfoSchema = feedbackSchema.pick({
  studentName: true,
  studentId: true,
  course: true,
  branch: true,
});

export const feedbackDetailsSchema = feedbackSchema.pick({
  feedbackType: true,
  priority: true,
  message: true,
  rating: true,
});

export { feedbackSchema as reviewSchema };
