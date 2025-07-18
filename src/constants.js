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

// Work Section Logo's
import TraitSmith from "./assets/work_logo/traitsmith.png";
import MenuVista from "./assets/work_logo/menuvista.png";
import GitLocator from "./assets/work_logo/gitlocator.png";

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
    title: "TraitSmith",
    description:
      "TraitSmith is a Node.js-based modular character generator. It takes individual trait layers like body parts, armor, weapons, facial features, etc., and composes them into full character images — ideal for games, NFTs, avatars, or any fantasy illustration needs.",
    image: TraitSmith,
    tags: [
      "Node.js",
      "NFT Generation",
      "Image Processing",
      "Jimp",
      "Pinata SDK",
      "Generative Art",
    ],
    github: "https://github.com/amjadimdad00/TraitSmith",
  },
  {
    id: 1,
    title: "MenuVista",
    description:
      "📋 MenuVista is a stylish menu design, customizable menu layout. The design is minimalist and modern, showcasing a central, colorful interface with gradient edges. It includes interactive elements ✨ and is built with a fully responsive layout 📱💻 to ensure a seamless experience across all devices.",
    image: MenuVista,
    tags: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Modern UI",
      "Minimalist Design",
      "Interactive Elements",
    ],
    github: "https://github.com/amjadimdad00/MenuVista",
    webapp: "https://MenuVista.vercel.app/",
  },
  {
    id: 2,
    title: "GitLocator",
    description:
      "A sleek, React.js-powered web application that lets users search for any GitHub profile and instantly view key details like bio, followers, repositories, and more. Perfect for developers looking to quickly explore GitHub profiles with a clean, responsive interface.",
    image: GitLocator,
    tags: [
      "React JS",
      "GitHub API",
      "Axios",
      "Responsive Design",
      "Error Handling",
      "Fetch API",
      "User Search",
    ],
    github: "https://github.com/amjadimdad00/GitLocator",
    webapp: "https://gitlocator.vercel.app/",
  },
];
