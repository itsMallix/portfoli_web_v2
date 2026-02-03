import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Amanda",
  lastName: "Maulana",
  name: `Amanda Maulana`,
  role: "Mobile Developer",
  avatar: "/images/avatar.jpg",
  email: "itsmallixdev@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/itsmallix",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/maulanamibrahim/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/maulanamanda._/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into seamless mobile experiences</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">My Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Amanda, a mobile developer, who experienced building Android applications using Flutter, BLoC, Provider, and REST API. I'm passionate about crafting intuitive user experiences.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  cv: {
    display: true,
    link: "https://drive.google.com/file/d/1BuY5EbNQsLRVrlOa-lVsJDVDWSDvuefs/view?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mobile Developer (Flutter) with hands-on experience building production-ready Android applications using Flutter, BLoC, Provider, and REST API. Experienced working in professional IT consulting environments and software house. Strong background in UI/UX and mobile development with multiple national competition experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Mascitra.com",
        timeframe: "Aug 2024 - Aug 2025",
        role: "Junior Mobile Developer",
        achievements: [
          <>
            Debugged and enhanced Lumajang Tourism mobile app (Flutter) by resolving issues across UI, state management, and APIs integration, improving app stability and reducing recurring user-facing bugs.
          </>,
          <>
            Developed a public reporting and information center Lumajang Eksotik mobile app (Flutter) for real- time community- to- goverment reporting and reducing reporting time from 15-30 minutes (offline) to less than 5 minutes (online submission).
          </>,
          <>
            Developing an internal chatbot using Microsoft Copilot Studio, used by about 10-15 staff in the internal division of BI Jember and reducing information retrieval.
          </>,
          <>
            uilt a division dashboard using Microsoft SharePoint as a single-door document & data management portal, designed to be used across all divisions for centralized access to internal files and information.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/work_0.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/work_1.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/work_2.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/work_3.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Mascitra.com",
        timeframe: "Feb 2024 - June 2024",
        role: "Intern Mobile Developer",
        achievements: [
          <>
            Maintained and debugged internal internship & employee management apps using Flutter by implementing geo- based attendance (custom radius check-in), photo upload, and UI improvements.
          </>,
          <>
            Assisted UI/UX design for Mascitra’s internal certification website using Figma.
          </>,
          <>
            Designed the logo and brand philosophy for Mascitra Training Center (internal division initiative).
          </>,
        ],
        images: [
          {
            src: "/images/work/intern_0.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/intern_1.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/intern_2.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/intern_3.jpg",
            alt: "",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jember University",
        description: 
        <>
          Studied computer science, Information Technology, GPA : 3.87.
        </>,
      },
      {
        name: "Alterra Academy",
        description: <>Studied Flutter mobile development learning path</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Development",
        description: (
          <>Able to build production-ready Android applications using Flutter.</>
        ),
        tags: [
          {
            name: "Dart",
            icon: "dart",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "Sqlite",
            icon: "sqlite",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "Git",
            icon: "git",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>Able to build website ofr your needs</>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Reactjs",
            icon: "reactjs",
          },
          {
            name: "Solidity",
            icon: "solidity",
          },
          {
            name: "Git",
            icon: "git",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Multimedia",
        description: (
          <>Experienced with UIUX design, graphic design and video editing</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Corel Draw",
            icon: "coreldraw",
          },
          {
            name: "Premiere Pro",
            icon: "adobepremierepro",
          },
          {
            name: "Illustrator",
            icon: "adobeillustrator",
          },
          {
            name: "After Effects",
            icon: "adobeaftereffects",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
