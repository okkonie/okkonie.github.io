import texts from "./texts";
import { Cake, MapPin, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin,  } from "react-icons/fa";

function App() {
  return (
    <div className="bg-white text-neutral-950 relative min-h-screen flex justify-center w-full p-4">
      <div className="w-full flex flex-col max-w-xl z-10 font-inter py-32">
        <h1 className="text-2xl font-medium pb-1">{texts.name}</h1>
        <h2 className="text-black text-4xl sm:text-5xl font-semibold font-bricolage-grotesque pb-5">{texts.title}</h2>
        <p className="text-md pl-5 border-l border-black">
          {texts.desc}
        </p>
      </div>
    </div>
  );
}

export default App;
