export interface Job {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  type: string;
  avatar: string;
  description: string;
  responsibilities: string[];
  idealCandidate: string;
  categories: string[];
  requiredSkills: string[];
  postedOn: string;
  deadline: string;
  startDate: string;
  endDate: string;
  whenAndWhere: string;
}