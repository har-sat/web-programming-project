import { Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 font-medium bg-blue-100 py-2">
      <p className="text-xl text-gray-500">
       Made with 🤍 by @har-sat! 
      </p>
      
      <ul className="flex flex-row gap-6 text-[#5591f1]">
        <a href="https://www.linkedin.com/in/harsat-p-754602305/"className="flex gap-1 rounded-2xl hover:bg-blue-300 px-3 py-1 transition-colors duration-100 cursor-pointer">
          <Linkedin color="#5591f1" />
          Linkedin
        </a>
        <a href="https://www.instagram.com/harsaaat/" className="flex gap-1 rounded-2xl hover:bg-blue-300 px-3 py-1 transition-colors duration-100 cursor-pointer">
          <Instagram color="#5591f1" />
          Instagram
        </a>
        <a href="https://github.com/har-sat" className="flex gap-1 rounded-2xl hover:bg-blue-300 px-3 py-1 transition-colors duration-100 cursor-pointer">
          <Github color="#5591f1" />
          Github
        </a>
      </ul>
    </footer>
  );
}
