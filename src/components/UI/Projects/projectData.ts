interface ProjectProp {
  images: string[];
  title: string;
  duration: string;
  description: string;
  website: string;
  repo: string;
}

export const projectsData: ProjectProp[] = [
  {
    images: [
      "/assets/projects/cron-job/dashboard.png",
      "/assets/projects/cron-job/jobsPage.png",
      "/assets/projects/cron-job/logsPage.png",
    ],
    title: "Cron-job URL Monitoring & Scheduler",
    duration: "Dec 2025 - Jan 2026",
    description: `CronJob is a web-based cron-job scheduler that periodically sends requests
    to user-defined URLs to keep services alive, monitor uptime, and track response performance.
    Built with Next.js and Appwrite.`,
    website: "https://cron-job-url.vercel.app",
    repo: "https://github.com/Vishnu19091/cron-job",
  },
  {
    images: [
      "/assets/projects/Task-management/authpage.png",
      "/assets/projects/Task-management/emptypage.png",
      "/assets/projects/Task-management/all.png",
      "/assets/projects/Task-management/inprog.png",
      "/assets/projects/Task-management/done.png",
    ],
    title: "Task Management using Nest.js & Next.js",
    duration: "August 2025",
    description:
      "Task management app where authenticated users can create and manage their tasks.",
    website: "https://task-management-nest-js.vercel.app",
    repo: "https://github.com/Vishnu19091/Task-Management-NestJS",
  },
  {
    images: [
      "/assets/projects/portfolio/portfolio_1.png",
      "/assets/projects/portfolio/portfolio_2.png",
      "/assets/projects/portfolio/portfolio_3.png",
    ],
    title: "My Portfolio",
    duration: "June 2025",
    description: "My Portfolio built using NextJs, TypeScript, React.",
    website: "#",
    repo: "https://github.com/Vishnu19091/Portfolio",
  },
  {
    images: [
      "/assets/projects/Extension/Blocked_Domain_Page.png",
      "/assets/projects/Extension/Network_Logger.png",
      "/assets/projects/Extension/Pop-up-window.png",
      "/assets/projects/Extension/Pop-up-window-with-menu.png",
      "/assets/projects/Extension/Blocked-site.png",
    ],
    title: "Phishing Detection Extension",
    duration: "April 2025 - Present",
    description: `This is a browser extension-based project which detects phishing websites
    in real-time and alerts the user, uses rule-based approach to effectively identify and
    prevent phishing attacks, spam, and defaced websites. Users can also block and manage custom domains`,
    website: "https://addons.mozilla.org/addon/anti-phishing-extension/",
    repo: "https://github.com/Vishnu19091/Phishing_Detection_Extension/",
  },
];
