/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Javaid Khan",
  title: "Hi all, I'm Javaid",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://www.cakeresume.com/s--V4ctHSciwHmHz_yPx-FdKA--/javaid-khan",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JavaidAhmadKhan",
  linkedin: "https://www.linkedin.com/in/javaid-ahmad-khan-183a41136/",
  gmail: "relaxjavaid@gmail.com",
  facebook: "https://www.facebook.com/javaid.khan19/",
  instagram: "https://www.instagram.com/cleverjavi/",
  twitter: "https://twitter.com/Javaid_Khan19",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/lpuLogo.png"),
      subHeader: "Bachelor's Degree Computer Science"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "These are the big projects which i have done so far",
  projects: [
    {
      image: require("./assets/images/wolzon.png"),
      projectName: "Wolzon",
      projectDesc:
        "A fully functional ecommerce web application, where you can signin/sginout and sign in with google, add/remove the item to the cart. Adding Stripe Payment Gateway, user can pay online for his orders.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fashion-app-b294a.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/netlfix.png"),
      projectName: "Netflix Clone",
      projectDesc:
        "A netflix clone bases react app where you can see the tv series, you need to register and choose a plan to watch your favorite, movies, tv series. It is fully functional web app as well as pwa where user can register, signIn, sigOut, make purchase with secure payment gate as stripe, update their profile.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-clone-940dd.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/amazon.png"),
      projectName: "Amazon Clone",
      projectDesc:
        "A full-stack React Amazon Clone web application fully functional built with nextjs, tailwind, redux, firebase & stripe with sign in & sign out feature and you can also Add item to basket, remove item from basket, working on admin panel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amazon-nextjs-inky.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/airbnb.png"),
      projectName: "Airbnb Clone",
      projectDesc:
        "Airbnb Clone Complete UI of Airbnb Clone for demo and learning purpose only  built with Nextjs, Tailwind css, Mapbox Studio for maps geolib for location date picker libray for shwoing dates and calender. Deployed on Vercel nextjs hosting platform free ,easy to use.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://next-airbnb-three.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/covid19_tracker.png"),
      projectName: "Covid19 Tracker",
      projectDesc:
        "Covid-19 live tracker web app which shows you number of recent active cases, death cases. You can pull up the data by country wise, which is shown on map as well. This web app is userfriendly, responsive, fast.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://covid-19-tracker-32edd.web.app/"
        }
      ]
    },

    {
      image: require("./assets/images/linkedIn.png"),
      projectName: "LinkedIn Clone",
      projectDesc:
        "LinkedIn Clone a react web app where user signin with their email & image url / signout & post, where users email, password and post information is store in firebase database.This is one of my favorite projects which i have built so far, was difficult too, looks clean and butterry smooth. I will add more functionality and take it to the next level.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://linkedin-clone-96149.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/gmail.png"),
      projectName: "Gmail Clone",
      projectDesc:
        "Gmail Clone, a react web app where you can compose an email, with functionality of to, recipient, subject and message, with the help firebase as a backend to store and fetch emails, user can view their emails in inbox. Working on spam, sent drafts to make it fully fledged app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-3c61f.web.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://zerotomastery.io/blog/react-native-vs-flutter-mo-binni-ama/",
      title: "React Native vs Flutter",
      description:
        "Mo answers questions about react native vs flutter, getting started with react native, getting a job as a junior mobile developer with no previous experience and much more. Mo is a Full Stack Engineer and Solutions Architect with over 7 years of experience in Software Architecture and Development. Having worked at a development agency for the majority of his career."
    },
    {
      url: "https://zerotomastery.io/blog/7-ways-to-earn-a-side-income-as-a-developer",
      title: "7 Ways to Earn a Side Income as a Developer",
      description:
        "There are a ton of side income opportunities in the world today.Especially as web developers, we have plenty of opportunities to grow an extra income on the side with our unique skillset.Sure, you may be on the learning journey to work at a top tech company, and that's definitely an awesome path, but not the only path. You will be missing out on a chance for a diverse, recurring income stream if you don't at least stop to consider how else you can apply your hot skillset."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6006897179",
  email_address: "relaxjavaid@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "Javaid_Khan19", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
