import type { FeedbackFormData, Course } from '@/types/feedback';

const COURSE_MAP: Record<string, Course> = {
  frontend: 'Frontend',
  backend: 'Backend',
  'product-design': 'Product Design',
  product_design: 'Product Design',
  'data-science': 'Data Science',
  data_science: 'Data Science',
  cybersecurity: 'Cybersecurity',
};

export interface ParsedQueryParams {
  course?: FeedbackFormData['course'];
  cohort?: string;
  studentName?: string;
  studentId?: string;
  referralSource: string;
}

export function parseQueryParams(search: string): ParsedQueryParams {
  const params = new URLSearchParams(search);

  const rawCourse = params.get('course')?.toLowerCase().trim();
  const course = rawCourse ? COURSE_MAP[rawCourse] : undefined;

  const rawBatch = params.get('batch') || params.get('cohort');
  const cohort = rawBatch ? normalizeCohort(rawBatch) : undefined;

  return {
    course,
    cohort,
    studentName: params.get('name') ?? undefined,
    studentId: params.get('studentId') ?? params.get('sid') ?? undefined,
    referralSource: params.get('ref') || 'qr_code',
  };
}

function normalizeCohort(raw: string): string {
  const match = raw.match(/^(\d{4})[_-]([A-Za-z]+)$/);
  if (match) {
    return `Batch ${match[2]!.toUpperCase()} (${match[1]})`;
  }
  return raw;
}
