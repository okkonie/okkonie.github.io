const texts = () => {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date('2005-05-06')

    let age = today.getFullYear() - birthDate.getFullYear();
  
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  return {
    firstName: "Okko",
    lastName: "Niemikorpi",
    header: `
      Hey! I am Okko — a ${calculateAge()} y/o frontend developer studying Computer Science at the University of Oulu, Finland 
      with a strong interest in crafting innovative, functional and visually engaging applications 
      while constantly finding ways to broaden my skillset and explore new technologies. 
    `,
    looking: true,
    email: {text: "EMAIL", link: "mailto:okko.niemikorpi@gmail.com"},
    linkedin: {text: "LINKEDIN", link: "https://www.linkedin.com/in/okkoniemikorpi"},
    github: {text: "GITHUB", link: "https://github.com/okkonie"},
    skillsHead: "Skills",
    skills: [
      "react native",
      "python",
      "react", 
      "javascript",
      "tailwind",
      "css",
      "ai"
    ],
    projectsHead: "Personal projects",
    projects: {
      whenhl: {
        title: "whenhl",
        langs: ["react native", "tailwind"],
        image: "/images/whenhl.png",
        desc: "nhl related mobile app",
        link: "https://github.com/okkonie/whenhl"
      },
    },
  };
};

export default texts();