import { FC, useEffect } from "react";
import { RiAdminFill, RiComputerLine, RiStrikethrough } from "react-icons/ri";
import { FiArchive, FiDatabase } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineHeart, AiFillCode } from "react-icons/ai";
import { useAppSelector } from "../redux/reduxHooks";
import { FaAnchor, FaStrikethrough } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Tools: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section
      id="tools"
      className="space-y-14 px-10 md:px-24 mt-16"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-8 leading-tight tracking-tighter">
        Skills
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-2 gap-10 py-10">
        <div data-aos="fade-right"   className="bg-bg-surface bg-gradient-to-b from-violet-500 to-fuchsia-500 outline outline-0 outline-fuchsia-500 rounded-lg py-8 px-16 flex flex-col flex-auto h-85 space-y-6 items-start transition-all hover:outline-4 skillsSection">
          <FaLaptopCode color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Web Development
          </h1>
          <ul className="list-disc text-white-300">
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>TailwindCSS, Bootstrap</li>
            <li>React, Next.js, Redux</li>
            <li>Node.js, Express.js, MongoDB, SQL, PostgreSQL</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div data-aos="fade-left"  className="bg-bg-surface bg-gradient-to-r from-cyan-500 to-blue-500 outline outline-0 outline-blue-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start md:col-span-2 lg:col-span-1 transition-all hover:outline-4 skillsSection">
          <AiFillCode color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Generally Used Languages
          </h1>
          <h2>I have used or am currently using the following languages:</h2>
          <ul className="list-disc text-white-300">
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>Bash & CLI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
