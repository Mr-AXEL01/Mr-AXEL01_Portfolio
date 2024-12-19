import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    spring,
    jenkins,
    junit,
    html,
    css,
    reactjs,
    reactNative,
    tailwind,
    mongodb,
    postgreSQL,
    sql,
    postman,
    keycloack,
    aws,
    git,
    docker,
    youcode,
    onedustry,
    jabadoor,
    citronix,
    itlens,
    wrm,
    wemeet,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Solution Architect",
      icon: creator,
    },
  ];
  
  const backTtechnologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "JUnit",
      icon: junit,
    },
  ];

  const frontendTechnologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    }
  ];

  const devopsAndToolsTechnologies = [
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Postgresql",
      icon: postgreSQL,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Keycloak",
      icon: keycloack,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      "title": "Full Stack Developer",
      "company_name": "\"YouCode\"",
      "icon": youcode,
      "iconBg": "#383E56",
      "date": "September 2023 - May 2025",
      "points": [
        "Developed and maintained responsive web applications using technologies such as Java, Spring, Angular, and React.",
        "Collaborated with cross-functional teams including other developers to deliver high-quality products.",
        "Designed templates using Figma and worked with databases like PostgreSQL and MongoDB.",
        "Participated in deployment and DevOps activities, using technologies such as Jenkins, Github-action and Docker for containerization.",
        "Engaged in team presentations and showcases to discuss and share key topics as part of the YouCode community."
      ]
    },
    {
      title: "Software Developer",
      company_name: '" OneDustry " _  (Internship)',
      icon: onedustry,
      iconBg: "#E6DEDD",
      date: "may 2024 - Juil 2024",
      points: [
        "Developing and maintaining web & mobile application using MERN stack and other related technologies (AWS , Putty, ...).",
        "Collaborating with cross-functional teams product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CITRONIX",
      description:
        "a management application for a lemon farm, allowing farmers to monitor the production, harvest, and sale of their products",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        // {
        //   name: "CI/CD (Github-action)",
        //   color: "yellow-text-gradient",
        // },
        {
          name: "JUnit & Mockito",
          color: "orange-text-gradient",
        },
        {
          name: "Spring Data Jpa",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "Swagger",
          color: "yellow-text-gradient",
        },
        {
          name: "MapStruct",
          color: "orange-text-gradient",
        },
      ],
      image: citronix,
      source_code_link: "https://github.com/Mr-AXEL01/JABADOOR_MOBILE",
    },
    {
      name: "ITLens-Survey",
      description:
        "Application for conducting computer-based surveys, structured in chapters and sub-chapters, with different types of questions.",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "JUnit & Mockito",
          color: "orange-text-gradient",
        },
        {
          name: "Spring Data Jpa",
          color: "green-text-gradient",
        },
        {
          name: "Swagger",
          color: "pink-text-gradient",
        },
        {
          name: "MapStruct",
          color: "orange-text-gradient",
        },
      ],
      image: itlens,
      source_code_link: "https://github.com/Mr-AXEL01/ITLens",
    },
    {
      name: "Waiting-roo",
      description:
        "A centralized API to manage queues, optimizing the flow of visitors with configurable scheduling algorithms.",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "CI/CD (Github-action)",
          color: "yellow-text-gradient",
        },
        {
          name: "JUnit & Mockito",
          color: "orange-text-gradient",
        },
        {
          name: "Spring Data Jpa",
          color: "green-text-gradient",
        },
        {
          name: "Swagger",
          color: "pink-text-gradient",
        },
        {
          name: "MapStruct",
          color: "orange-text-gradient",
        },
      ],
      image: wrm,
      source_code_link: "https://github.com/Mr-AXEL01/WRM",
    },
    {
      name: "JaBaDoor",
      description:
        "JABADOOR, allowing users to discover and book various accommodations according to different categories and their location.",
      tags: [
        {
          name: "reactNative",
          color: "green-text-gradient",
        },
        {
          name: "nestJs",
          color: "orange-text-gradient",
        },
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
        {
          name: "typeScript",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
      ],
      image: jabadoor,
      source_code_link: "https://github.com/Mr-AXEL01/JABADOOR_MOBILE",
    },
    // {
    //   name: "WEMEET",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "laravel",
    //       color: "red-text-gradient",
    //     },
    //     {
    //       name: "VueJs",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "TailwindCss",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Docker",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: wemeet,
    //   source_code_link: "https://github.com/Mr-AXEL01/WEMEET",
    // },
    {
      name: "Portfolio",
      description:
        "This is a portfolio to get more about me and my work , and it's a start for me to learn react 3D Three.js .",
      tags: [
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "pink-text-gradient",
        },
        {
          name: "aws_Amplify",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Mr-AXEL01/Mr-AXEL01_Portfolio",
    },
  ];
  
  export { services, 
    backTtechnologies, 
    frontendTechnologies, 
    devopsAndToolsTechnologies, 
    experiences, 
    testimonials, 
    projects 
  };