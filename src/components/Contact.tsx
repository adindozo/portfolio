import { FC, useEffect } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section
      id="contact"
      className="space-y-12 px-8 md:px-24 md:mt-12"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        Contact me
      </h1>
      <div className="flex text-white py-8 md:py-20 items-center flex-col md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-3xl md:text-5xl">
            I'd love to hear from you!
            </h1>
            <p className="text-white-secondary text-xl md:text-2xl md:w-2/3">
              You can find me on these platforms:
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-start md:items-center mt-8 md:mt-0"
          style={{ flexBasis: "50%" }}
        >
          <ul className="text-white-secondary font-openSans font-bold space-y-5 md:text-2xl text-lg listc">
            <li data-aos="fade-up">
              <a 
                href="https://www.linkedin.com/in/adindozo/"
                className="flex space-x-5 items-center hover:text-slate-300"
              target='_blank'>
                <FaLinkedin size={30} color="#3b82f6" />
                <p>LinkedIn</p>
              </a>
            </li>
            <li data-aos="fade-up">
              <a 
                href="https://github.com/adindozo"
                className="flex space-x-5 items-center hover:text-slate-300"
              target='_blank'>
                <FaGithub size={30} color="#3b82f6" />
                <p>GitHub</p>
              </a>
            </li>
            <li data-aos="fade-up">
              <a 
                
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <FaPhone size={30} color="#3b82f6" />
                <p>+387 61 708 178</p>
              </a>
            </li>
            <li>
              <a 
                href="mailto:adin.dozo1@outlook.com"
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <HiMail size={30} color="#3b82E1" />
                <p>adin.dozo1@outlook.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
