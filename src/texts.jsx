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
    fisrtName: "OKKO",
    lastName: "NIEMIKORPI",
    desc: `
      I am a ${calculateAge()}-year-old frontend developer studying Computer Science at the University of Oulu, Finland 
      with a strong interest in crafting intuitive and visually engaging applications 
      while constantly finding ways to broaden my skillset and explore new technologies. 
    `,
    looking: true,
    contacts: [
      {text: "email", link: "mailto:okko.niemikorpi@gmail.com"},
      {text: "linkedin", link: "https://www.linkedin.com/in/okkoniemikorpi"},
      {text: "github", link: "https://github.com/okkonie"}
    ],
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
    projectsHead: "Some of my personal projects",
    links: [
      { label: "Home", target: "top" },
      { label: "Projects", target: "projects" },
      { label: "Skills", target: "skills" },
      { label: "Contact", target: "contact" },
    ],
    projects: [
      {
        title: "whenhl",
        langs: ["react native", "tailwind"],
        image: "/images/whenhl.png",
        link: "https://github.com/okkonie/whenhl"
      },
    ],
  };
};

export default texts();