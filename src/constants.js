// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Work Logo's
import ConnectFour from "./assets/work_logo/connectfour.jpg";
import CrushPlays from "./assets/work_logo/crushplays.png";
import TraitSmith from "./assets/work_logo/traitsmith.png";
import RepoSyncer from "./assets/work_logo/reposyncer.png";

// Experience Section Logo's
import cubicusLogo from "./assets/company_logo/cubicus.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cubicusLogo,
    role: "Full Stack Developer Intern",
    company: "Cubicus.io",
    date: "June 2024 - Aug 2024",
    desc: "Contributed to the development of dynamic and scalable web applications using the MERN stack. Handled both frontend and backend tasks, including building responsive user interfaces, integrating RESTful APIs, and optimizing performance. Collaborated with cross-functional teams in an Agile environment to ensure timely and efficient delivery of features.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Next.js",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Connect Four Multiplayer",
    description:
      "🎮 Classic Connect Four with real-time multiplayer powered by Playroomkit. ✨ Features: Online multiplayer, smooth UI, TypeScript setup, lobby system.",
    image: ConnectFour,
    tags: ["Phaser 3", "Playroomkit", "React", "Vite", "TypeScript"],
    github: "https://github.com/amjadimdad00/ConnectFourMP",
    webapp: "https://connectfourmp.vercel.app/",
  },
  {
    id: 1,
    title: "CrushPlays - Modern Music Streaming App",
    description:
      "🎵 CrushPlays is a sleek and modern music streaming web app built with Next.js, TailwindCSS, and Radix UI. ✨ Features: JioSaavn API integration, real-time search, preloaded playback without login, responsive design.",
    image: CrushPlays,
    tags: [
      "Next.js",
      "TailwindCSS",
      "Radix UI",
      "Framer Motion",
      "Embla Carousel",
      "JioSaavn API",
      "Sonner",
    ],
    github: "https://github.com/amjadimdad00/crushplays",
    webapp: "https://crushplays.vercel.app/",
  },
  {
    id: 2,
    title: "TraitSmith - NFT Generator with Node.js",
    description:
      "⚔️ Generates random NFTs using Node.js with image processing and IPFS pinning. ✨ Features: Random NFT creation, image manipulation, IPFS pinning integration.",
    image: TraitSmith,
    tags: ["Node.js", "Jimp", "Pinata SDK", "dotenv"],
    github: "https://github.com/amjadimdad00/TraitSmith",
  },
  {
    id: 3,
    title: "RepoSyncer - GitHub Automation",
    description:
      "🤖 Automates GitHub repo creation with templates. ✨ Features: Auto-readme generation, privacy toggle, description templates.",
    image: RepoSyncer,
    tags: ["Node.js", "GitHub REST API"],
    github: "https://github.com/amjadimdad00/RepoSyncer",
  },
];
