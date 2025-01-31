import { FC, useEffect } from "react";
import { RiAdminFill, RiComputerLine, RiStrikethrough } from "react-icons/ri";
import { FiArchive, FiDatabase } from "react-icons/fi";
import { FaDesktop, FaServer } from "react-icons/fa";
import { AiOutlineHeart, AiFillCode } from "react-icons/ai";
import { useAppSelector } from "../redux/reduxHooks";
import { FaAnchor, FaStrikethrough } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Companies: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="companies"
      className="space-y-14 px-10 md:px-24 mt-16"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-8 leading-tight tracking-tighter">
        Companies
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-2 gap-10 py-10">
        <a href="https://www.wirth-horn.de/" target="_blank" rel="noreferrer">
        <div
          data-aos="fade-up"
          className="bg-bg-surface  outline outline-0 outline-red-500 rounded-lg py-8 px-16 flex flex-col space-y-6 items-start transition-all hover:outline-4"
        >
          <div className="self-center">
            <img src="https://www.wirth-horn.de/wordpress/wp-content/uploads/2018/09/Logo_wh-2018-1.png" alt="Wirth & Horn Informationssysteme GmbH" className="w-32" />
          </div>
          <h1 className="font-openSans font-bold text-3xl self-center">
            Wirth & Horn Informationssysteme GmbH
          </h1>
          <p className="text-white-300">
          </p>
        </div>
        </a>
        <a href="https://www.scode.ba/" target="_blank" rel="noreferrer">
        <div
          data-aos="fade-up"
          className="bg-bg-surface outline outline-0 outline-blue-500 rounded-lg py-8 px-16 flex flex-col space-y-6 items-start transition-all hover:outline-4"
        >
          <div className="self-center">
            <img src="/static/scode_logo.webp" alt="Scode d.o.o - IT Solutions" className="w-16" />
          </div>
          <h1 className="font-openSans font-bold text-3xl self-center">
            Scode d.o.o - IT Solutions
          </h1>
          <p className="text-white-300">
           </p>
        </div>
        </a>
       
        <a href="https://zully.store/" target="_blank" rel="noreferrer">
        <div
          data-aos="fade-up"
          className="bg-bg-surface  outline outline-0 outline-red-500 rounded-lg py-8 px-16 flex flex-col space-y-6 items-start transition-all hover:outline-4"
        >
          <div className="self-center">
            <img src="/static/F.png" alt="Wirth & Horn Informationssysteme GmbH" className="w-32" />
          </div>
          <h1 className="font-openSans font-bold text-3xl self-center">
          Zully LTD
          </h1>
          <p className="text-white-300">
          </p>
        </div>
        </a>
      </div>

    </section>
  );
};

export default Companies;
