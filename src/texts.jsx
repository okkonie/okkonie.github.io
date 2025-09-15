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
    title1: "Frontend developer",
    title2: "& CS student",
    desc: `
      Hey! I'm Okko, a ${calculateAge()} year old Computer Science student at University of Oulu, Finland. I'm eager to create 
      intuitive and visually engaging user experiences. As of now I've mostly focused on frontend mobile and web applications but I'm always 
      ready to add new technologies to my skillset.
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