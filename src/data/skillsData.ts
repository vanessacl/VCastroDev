export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Core Technologies',
    skills: [
      { name: 'JavaScript' },
      { name: 'React JS' },
      { name: 'jQuery' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'REST APIs' }
    ],
  },
  {
    category: 'Styling & Design',
    skills: [
      { name: 'Sass' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Styled Components' },
      { name: 'CSS Modules' }
    ],
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'Git' },
      { name: 'Web Accessibility' },
      { name: 'Cross-Browser' },
      { name: 'REST APIs' }
    ],
  },
];