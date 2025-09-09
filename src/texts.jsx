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
    name: "Hi! I'm Okko,",
    title: "a software developer",
    desc: `
      I am a ${calculateAge()} year old Computer Science student at University of Oulu, Finland. I'm eager to create 
      intuitive and visually engaging user experiences. As of now I've mostly focused on frontend but I'm always 
      ready to add new technologies to my skillset.
    `,
    age: `${calculateAge()} y/o`,
    location: "Oulu, Finland",
    study: "University of Oulu, Computer Science",
    email: "okko.niemikorpi@gmail.com",
    looking: true,
    socials: {
      gmail: "mailto:okko.niemikorpi@gmail.com",
      github: "https://github.com/okkonie",
      linkedin: "https://www.linkedin.com/in/okkoniemikorpi/"
    },
    skills: [
      "reactnative",
      "python",
      "react",
      "javascript",
      "tailwind",
      "css",
      "ai"
    ]
  };
};

export default texts();