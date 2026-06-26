import heroPortrait from '../ascii-art.png';

export type SocialPlatform = 'linkedin' | 'x' | 'github';

export type PrimaryLink = {
  label: string;
  href: string;
  icon: SocialPlatform;
};

export type HeroImage = {
  src: string;
  alt: string;
  treatment: string;
};

export type Profile = {
  name: string;
  role: string;
  intro: string;
  subIntro: string;
  extraIntro?: string;
  contactNote?: string;
  location?: string;
  heroImage: HeroImage;
  primaryLinks: PrimaryLink[];
};

export type InterestGroup = {
  title: string;
  items: string[];
};

export type TimelineEntry = {
  type: 'work' | 'education' | 'community';
  title: string;
  titleHref?: string;
  organization: string;
  organizationHref?: string;
  period: string;
  detail?: string;
};

export type LinkEntry = {
  label: string;
  href: string;
  meta: string;
  kind: string;
};

export const profile: Profile = {
  name: 'Mario Petkoski',
  role: 'AI/ML engineer and Cursor Ambassador working at the intersection of research and engineering.',
  intro:
    'I care deeply about how LLMs and ML models work under the hood, and even more about the systems and products built on top of them.',
  subIntro:
    'My work focuses on applied AI across agentic workflows, model serving, experimentation, tuning, and cloud deployment, with a strong foundation in software and data engineering.',
  extraIntro:
    'Always close to the latest developments in tech and AI.',
  contactNote:
    "If you'd like to say hi or talk about projects and ideas, reach out on X or LinkedIn.",
  location: 'Skopje / Remote',
  heroImage: {
    src: heroPortrait,
    alt: 'ASCII-rendered portrait of Mario Petkoski.',
    treatment: 'black glass portrait',
  },
  primaryLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mario-petkoski-1128a41bb/',
      icon: 'linkedin',
    },
    { label: 'X', href: 'https://x.com/mariopetk', icon: 'x' },
    { label: 'GitHub', href: 'https://github.com/mariopetkoski', icon: 'github' },
  ],
};

export const interestGroups: InterestGroup[] = [
  {
    title: 'Interests',
    items: [
      'Startups and entrepreneurship',
      'Developer tools, prototyping, and agentic engineering',
      'Communities',
      'Fast and minimal products',
    ],
  },
  {
    title: 'What I Build',
    items: [
      'Production-ready agentic systems',
      'Fine-tuning & alignment of large language models',
      'RAG pipelines, MCP servers & natural-language query interfaces (Text-to-SQL)',
      'LLM observability, tracing & cost optimization',
      'Data & ML infrastructure on AWS',
    ],
  },
  {
    title: 'Projects',
    items: ['Coming soon'],
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    type: 'community',
    title: 'Cursor Ambassador',
    titleHref: 'https://cursor.com/ambassadors',
    organization: 'Cursor',
    organizationHref: 'https://cursor.com/',
    period: 'May 2026 - Present',
    detail: 'Hosting Cursor community events and helping builders explore AI-powered software development.',
  },
  {
    type: 'work',
    title: 'Advanced Machine Learning Engineer',
    organization: 'Loka',
    organizationHref: 'https://www.loka.com/',
    period: '2023 - Present',
    detail: 'Designing and shipping applied ML and GenAI systems for real-world product and business needs.',
  },
  {
    type: 'education',
    title: "Bachelor's in Software Engineering and Information Systems",
    organization: 'Faculty of Computer Science and Engineering, Ss. Cyril and Methodius University in Skopje',
    organizationHref: 'https://www.finki.ukim.mk/en',
    period: '2020 - 2024',
  },
];

export const linkEntries: LinkEntry[] = [
  {
    label: 'The Agent Assembly Line',
    href: 'https://medium.com/loka-engineering/the-agent-assembly-line-eabc3e95263d',
    meta: 'Published on Medium for Loka Engineering.',
    kind: 'blog post',
  },
];

export const eventEntries: LinkEntry[] = [
  {
    label: 'Cafe Cursor Skopje',
    href: 'https://luma.com/sh6vn3vd',
    meta: 'Hosted in Skopje as part of the Cursor Community.',
    kind: 'event',
  },
];
