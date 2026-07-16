// data/courses.ts — Course data model and sample data
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  grade: string;
}

export const COURSES: Course[] = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, grade: 'A' },
  { id: 2, name: 'Database Management Systems', code: 'CS102', credits: 4, grade: 'A+' },
  { id: 3, name: 'Machine Learning', code: 'CS103', credits: 5, grade: 'A' },
  { id: 4, name: 'Operating Systems', code: 'CS104', credits: 4, grade: 'B+' },
  { id: 5, name: 'Computer Networks', code: 'CS105', credits: 3, grade: 'A' },
];
