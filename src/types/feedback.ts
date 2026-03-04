export const CourseOptions = [
  'Frontend',
  'Backend',
  'Product Design',
  'Data Science',
  'Cybersecurity',
  'Digital Marketing',
  'Graphic Design',
  'AI Automation',
  'Social Media Management',
  'UI/UX Design',
  'Project Management',
] as const;

export type Course = (typeof CourseOptions)[number];

export const FeedbackTypeOptions = [
  'Recommendation',
  'Complaint',
  'Suggestion',
  'Facility Issue',
  'Curriculum Gap',
] as const;

export type FeedbackType = (typeof FeedbackTypeOptions)[number];

export const PriorityOptions = ['Low', 'Medium', 'High'] as const;

export type Priority = (typeof PriorityOptions)[number];

export interface FeedbackMetadata {
  userAgent: string;
  timestamp: string;
  referralSource: string;
}

export interface FeedbackPayload {
  studentName: string;
  studentId?: string;
  course: Course;
  branch: string;
  feedbackType: FeedbackType;
  priority: Priority;
  message: string;
  metaData: FeedbackMetadata;
}

export type FeedbackFormData = Omit<FeedbackPayload, 'metaData'>;
