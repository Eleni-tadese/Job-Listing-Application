import { Job } from "../types/job";

export const jobs: Job[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Social Media Assistant",
    company: "Young Men Christians Association",
    location: "Addis Ababa, Ethiopia",
    type: "In Person",
    avatar: "https://ui-avatars.com/api/?name=YMCA&background=FCD34D&color=1F2937&bold=true",
    description:
      "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
    responsibilities: [
      "Community engagement to ensure that is supported and actively represented online",
      "Focus on social media content development and publication",
      "Marketing and strategy support",
      "Stay on top of trends on social media platforms, and suggest content ideas to the team",
      "Engage with online communities",
    ],
    idealCandidate:
      "Young (18-24 year old) female social media manager who is passionate, reliable, adaptable, a strong communicator, and respectful of diversity.",
    categories: ["Marketing", "Design"],
    requiredSkills: ["Social Media Marketing", "English", "Copywriting"],
    postedOn: "Jul 1, 2023",
    deadline: "Jul 31, 2023",
    startDate: "Aug 02, 2023",
    endDate: "Sep 02, 2023",
    whenAndWhere:
      "The onboarding event for this event will take place in Jan 18th, 2023 in AAU Auditorium",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Volunteer Teacher",
    company: "School Under The Tree",
    location: "Addis Ababa, Ethiopia",
    type: "In Person",
    avatar: "https://ui-avatars.com/api/?name=SUT&background=047857&color=fff&bold=true",
    description:
      "As a Volunteer Teacher, you will support classroom instruction, help design engaging lesson plans, and mentor students in a supportive learning environment.",
    responsibilities: [
      "Assist lead teachers with daily lessons",
      "Prepare learning materials",
      "Track student progress",
      "Support after-school programs",
    ],
    idealCandidate:
      "Patient, reliable, and passionate about education and community development.",
    categories: ["Education", "Community"],
    requiredSkills: ["Teaching", "English", "Communication"],
    postedOn: "Jul 3, 2023",
    deadline: "Aug 1, 2023",
    startDate: "Aug 15, 2023",
    endDate: "Nov 15, 2023",
    whenAndWhere:
      "Orientation will take place on Aug 10th, 2023 at the school campus.",
  },
  {
    id: "3",
    name: "Amanuel Tesfaye",
    title: "Frontend Developer",
    company: "The Africa in Me",
    location: "Addis Ababa, Ethiopia",
    type: "Remote",
    avatar: "https://ui-avatars.com/api/?name=TAM&background=2563EB&color=fff&bold=true",
    description:
      "Build responsive, accessible user interfaces using React and Tailwind CSS for a growing platform focused on African storytelling.",
    responsibilities: [
      "Develop React components",
      "Collaborate with designers on UI implementation",
      "Write clean, maintainable code",
      "Participate in code review",
    ],
    idealCandidate:
      "Comfortable with React and Tailwind, detail-oriented, and a good communicator in a remote team.",
    categories: ["IT", "Design"],
    requiredSkills: ["React", "Tailwind CSS", "JavaScript"],
    postedOn: "Jul 5, 2023",
    deadline: "Aug 5, 2023",
    startDate: "Aug 20, 2023",
    endDate: "Ongoing",
    whenAndWhere: "Fully remote — kickoff call scheduled after selection.",
  },
];