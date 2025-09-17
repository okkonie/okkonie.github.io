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
    intro: "HEY! I AM",
    name: "okko niemikorpi",
    desc: `
      A ${calculateAge()}-year-old developer studying Computer Science at the University of Oulu, Finland, with a strong interest in crafting intuitive and visually engaging digital experiences. 
      Most of my projects have focused on frontend development for web and mobile, although I am always ready to broaden my skillset and explore new technologies. 
      Lately, I have been exploring ways to make the most of AI in my development processes.
    `,
    looking: true,
    mail: "okko.niemikorpi@gmail.com",
    mailto: "mailto:okko.niemikorpi@gmail.com",
    github: "https://github.com/okkonie",
    linkedin: "https://www.linkedin.com/in/okkoniemikorpi/",
    skills: [
      "react native",
      "python",
      "react",
      "javascript",
      "tailwind",
      "css",
      "ai"
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