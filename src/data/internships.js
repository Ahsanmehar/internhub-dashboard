import { Layout, Server, Palette, BarChart } from "lucide-react";

export const initialInternships = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    department: 'Engineering',
    duration: '12 weeks',
    stipend: '$2000',
    status: 'Open',
    description: 'Work on building responsive user interfaces with React.',
    icon: Layout,
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    department: 'Engineering',
    duration: '16 weeks',
    stipend: '$2200',
    status: 'Open',
    description: 'Develop server-side applications using Node.js and databases.',
    icon: Server,
  },
  {
    id: 3,
    title: 'UI/UX Design Intern',
    department: 'Design',
    duration: '10 weeks',
    stipend: '$1800',
    status: 'Closed',
    description: 'Create user-centered designs for our digital products.',
    icon: Palette,
  },
  {
    id: 4,
    title: 'Data Science Intern',
    department: 'Analytics',
    duration: '14 weeks',
    stipend: '$2500',
    status: 'Open',
    description: 'Analyze large datasets and build predictive models.',
    icon: BarChart,
  }
];
