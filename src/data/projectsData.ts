export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projectsData: Project[] = [
  {
    title: 'IP Address Tracker',
    description: 'A front-end application to track and display IP address or domain details, including location, timezone, and ISP, with an interactive map.',
    image: 'https://raw.githubusercontent.com/vanessacl/ip-address-tracker/main/assets/images/Screenshot.png',
    technologies: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Leaflet', 'Geo.ipify API', 'Netlify', 'node-fetch'],
    github: 'https://github.com/vanessacl/ip-address-tracker',
    demo: 'https://js-ip-address-tracker.netlify.app/',
  },
  {
    title: 'Selfie Snap App',
    description: 'A fantasy-themed selfie web app that lets users capture images using their webcam, apply real-time filters, and download the results.',
    image: 'https://raw.githubusercontent.com/vanessacl/snap-app/main/src/assets/images/Screenshot.png',
    technologies: ['React', 'Vite', 'Sass', 'WebRTC', 'Netlify'],
    github: 'https://github.com/vanessacl/snap-app',
    demo: 'https://selfie-snap-react-app.netlify.app/',
  },
  {
    title: 'Sweepstakes site',
    description: 'A responsive web application for entering sweepstakes, featuring a user-friendly form with client-side validation, accessible inputs, and clear feedback messages.',
    image: 'https://raw.githubusercontent.com/vanessacl/sweepstakes-form-js/main/assets/images/Screenshot.png',
    technologies: ['HTML', 'CSS', 'Sass', 'JavaScript'],
    github: 'https://github.com/vanessacl/sweepstakes-form-js',
    demo: 'https://rockaltsweeps.netlify.app/',
  },  
];