import Crypto from "../assets/projects/crypto.png";
import Ekam from "../assets/projects/ekam.png";
import Rico from "../assets/projects/Rico.png";

export const HERO_CONTENT = `Experienced frontend developer with a strong proficiency in ReactJS and modern JavaScript frameworks. Skilled in building dynamic, responsive web applications using HTML5, CSS3, and JavaScript (ES6+). Expertise includes component-based architecture, state management (e.g., Redux, Context API), and handling RESTful APIs. Proficient in Material-UI (MUI) for custom component styling, and comfortable converting class components to functional components using React Hooks.`;

export const ABOUT_TEXT = `I’m a passionate Frontend Developer with a deep focus on ReactJS and modern web technologies. With experience in building responsive, user-centric applications, I specialize in creating clean, efficient code to bring complex designs to life. I have a strong foundation in JavaScript (ES6+), CSS3, and HTML5, and enjoy solving challenges related to UI/UX design, performance optimization, and component-based architecture.

I’m proficient in using tools like Material-UI (MUI) for designing sleek, interactive user interfaces, and have a knack for converting React class components into functional components using React Hooks. Collaboration is at the core of my work ethic, and I’m always excited about learning new frameworks and technologies to improve my skills.

When I’m not coding, I enjoy keeping up with the latest trends in frontend development and contributing to open-source projects. I’m a problem-solver at heart, always striving to deliver the best user experience possible.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Developer",
    company: "Agira Technologies",
    description: `Achieved a 30% increase in user engagement by leveraging a
    deep understanding of React.js to develop highly interactive
    and responsive user interfaces.Web application performance has consistently been enhanced
    up to 40% through the application of best practices, which
    encompass code splitting, lazy loading, and the reduction of
    unnecessary re-renders.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  },
  {
    year: "2019 - 2022",
    role: "Senior Process Executive",
    company: "Infosys BPM",
    description: `Directed and managed a team of process executives, validating
    the smooth execution of business processes.Evaluated and observed process performance, identiﬁed
    bottlenecks, and implemented improvements to enhance
    operational eﬃciency 0% to maximum.`,
    // technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Ekam",
    image: Ekam,
    description:
      "Developed a specialized job portal designed to assist military personnel in transitioning to civilian employment. This platform oﬀers tailored job listings, career resources, and networking opportunities speciﬁcally catered to veterans.",
    technologies: ["React", "NestJS", "MongoDB"],
  },
  {
    title: "Rico",
    image: Rico,
    description: `The project entails the extraction of data from PDF documents,
      with the frontend technology stack comprising React and
      TypeScript.Python is employed for the extraction of text from PDFs,
      automating the process and reducing extraction time by 40%,
      thereby improving eﬃciency and accelerating information
      retrieval.`,
    technologies: ["React", "NestJS", "SQL"],
  },
  {
    title: "Crypto Dispensers",
    image: Crypto,
    description: `The project involves the acquisition of Bitcoin using US dollars
      and focuses 30% on maintenance and 50% bug ﬁxes.
      Independently directed and oversaw the project, leading to the
      successful completion of the website redesign two weeks ahead
      of schedule and under budget.`,
    technologies: ["React", "Bootstrap", "Java"],
  },
];

export const CONTACT = {
  address: "Chitlapakkam, Chennai-600064 ",
  phoneNo: "+91 9566424114 ",
  email: "ahilsingss@gmail.com",
};
