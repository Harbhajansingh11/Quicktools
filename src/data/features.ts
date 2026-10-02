import { ValueProposition, HowItWorksStep } from '@/types';

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'fast-processing',
    title: 'Fast Processing',
    description: 'Instant client-side algorithms and optimized pipelines eliminate waiting queues. Most tasks finish in under two seconds.',
    iconName: 'Zap',
  },
  {
    id: 'easy-to-use',
    title: 'Easy to Use',
    description: 'Clean, distraction-free interfaces with zero bloat. Simply drag, drop, configure, and get your work done immediately.',
    iconName: 'MousePointerClick',
  },
  {
    id: 'privacy-focused',
    title: 'Privacy Focused',
    description: 'Your privacy is paramount. Files are processed locally whenever possible, and server-side files are automatically deleted.',
    iconName: 'Shield',
  },
  {
    id: 'works-everywhere',
    title: 'Works Everywhere',
    description: 'Fully responsive and compatible across Chrome, Safari, Firefox, Edge, iOS, Android, macOS, Windows, and Linux.',
    iconName: 'Laptop',
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Choose a tool',
    description: 'Pick from our curated suite of PDF, image, document, QR, developer, and productivity utilities.',
    iconName: 'Search',
  },
  {
    step: 2,
    title: 'Upload or enter your data',
    description: 'Drag and drop your file or paste your input into the clean, dedicated workspace.',
    iconName: 'UploadCloud',
  },
  {
    step: 3,
    title: 'Download your result',
    description: 'Get your optimized files or generated outputs instantly with zero watermarks or hidden hurdles.',
    iconName: 'Download',
  },
];
