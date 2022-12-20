/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Uttam's Portfolio",
  description:
  "A passionate individual who always thrives to work on Frontend  which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Uttam Singh Portfolio",
    type: "website",
    url: "https://www.blogger.com/blog/posts/5865380055265256578.com/",
  },
};

//Home Page
const greeting = {
  title: "Uttam Singh",
  logo_name: "Uttam Singh",
  nickname: "Singham Bolte",
  subTitle:
    "A passionate individual who always thrives to work on Frontend  which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1SbpyDAnKHYk9yTU8GGpeaY81enObvbG6Fz-7OjKBvhs/edit",
  portfolio_repository: "https://github.com/Uttam95?tab=stars",
  githubProfile: "https://github.com/Uttam95",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Uttam95",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/uttam-singh-8a0036130/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://studio.youtube.com/channel/UCWJSr3nYQEyX1Q1OzIroKoQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:singh.uttu35@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Uttam95",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine_Learning and Python",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Machine_Learning and NLP projects",
        "⚡ Data Analysis with Complex data",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
       
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
       
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/singh_uttu35?hr_r=1",
    },
  
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.codechef.com/users/uttam95",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@singh.uttu35",
    }
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "GHRCEM Pune",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "Ghrcem.jpg",
      alt_name: "GHRCEM_Pune",
      duration: "2016-2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Sql and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://raisoni.net",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data_Science with Python",
      subtitle: "Self_MADE",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/ce71226b-f798-4d87-8312-0916b2cd3e74",
      alt_name: "IBM",
      color_code: "#8C151599",
    },
    
    {
      title: "Frontend Development",
      subtitle: "- Davide Molin",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-55YSGDK2/",
      alt_name: "Udemy",
      color_code: "#2A73CC",
    },
    {
      title: "React",
      subtitle: "React",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/e45c8b997924",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
 
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and  Internship",
  description:
    "I am working as Frontend Developer with React.js as Framework which Basically include the work of Ui with MaterialUi, Bootstrap and Scss ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Persistent Systems",
          company_url: "https://Persistent.com/",
          logo_path: "Persistent.png",
          duration: "Sep 2020 - PRESENT",
          location: "Pune",
          description:
            "I am working on Banking sector with the role Of Ui as Frontend Developer  and Backend Technologies also which include Node.js.",
          color: "#0879bf",
        },
        
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science and Python",
          company: "Persistent Systems.",
          company_url: "https://Persistent.com/",
          logo_path: "Persistent.png",
          duration: "Jun 2019 to Dec 2020",
          location: "Pune",
          description:
            "I had worked on project for predicting the data based Machine Learning Algorithm. ",
          color: "#ee3c26",
        },
        {
          title: "Frontend Development",
          company: "Isash Infotech Technology",
          company_url:
            "https://www.linkedin.com/company/isash-it-solution/?originalSubdomain=in",
          logo_path: "Isash.jpg",
          duration: "Aug 2018 - Dec 2019",
          location: "Pune",
          description:
            "In this i have Made the Photo Galley Website which is based on HTML and CSS and make it hoist in server",
          color: "#0071C5",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of most of The UI design for Websites which is based on Frontent technologies using react ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "To Enhance Election Voting Using BlockChain",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Blockchain published in xyz ",
      url:
        "https://www.ijraset.com/status.php",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "To Enhance Election Voting Using BlockChain",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Blockchain published in xyz ",
      url:
        "https://www.ijraset.com/status.php",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "To Enhance Election Voting Using BlockChain",
      createdAt: "2020-03-06T16:26:54Z",
      description:  "Paper Written on Blockchain published in xyz ",
      url:
        "https://www.ijraset.com/status.php",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "To Enhance Election Voting Using BlockChain",
      createdAt: "2020-03-06T16:26:54Z",
      description:  "Paper Written on Blockchain published in xyz ",
      url:
        "https://www.ijraset.com/status.php",
    },
   
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Uttam_Singh.jpg",
    description:
      "I am Passionate in learning for Frontend technologies that mostly involves the UI design for the websites  ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.blogger.com/blog/posts/5865380055265256578",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "14 Kalvathi Nagr ArjunGanj Lucknow Up 226002",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/https://www.google.com/maps/place/Arjunganj,+Lucknow,+Uttar+Pradesh+226002/@26.8065724,80.9824061,15z/data=!3m1!4b1!4m5!3m4!1s0x399be34dca743a0d:0xa267110eb1e67965!8m2!3d26.8082089!4d80.9910306pMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7020349055",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
