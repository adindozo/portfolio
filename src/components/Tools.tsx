import { FC, useEffect } from "react";
import { RiAdminFill, RiComputerLine, RiStrikethrough } from "react-icons/ri";
import { FiArchive, FiDatabase } from "react-icons/fi";
import { FaBug, FaCloud, FaDatabase, FaDesktop, FaServer, FaShoppingCart, FaTasks, FaWordpress } from "react-icons/fa";
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
  <div className="text-white grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">

    {/* Front End */}
    <div data-aos="fade-right" className="bg-bg-surface outline outline-0 outline-fuchsia-500 rounded-lg py-8 px-16 flex flex-col flex-auto h-85 space-y-6 items-start transition-all hover:outline-4 skillsSection">
      <FaDesktop color="#f3f3f1" size={100} className="self-center" />
      <h1 className="font-openSans font-bold text-3xl self-center">
        Client Side
      </h1>
      <ul className="list-disc text-white-300">
            <li>React (with and without TypeScript)</li>
            <li>Redux</li>
            <li>JavaScript (DOM manipulation, JavaScript Object Notation)</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>DRY principle</li>
            <li>Responsive design</li>
            <li>User auth</li>
            <li>SEO optimization (meta tags, rich search results, Structured data, JSON-LD)</li>
            <li>Web accessibility principles</li>
            <li>Performance optimizations (Image preloading, lazy loading, etc.)</li>
      </ul>
    </div>

    {/* Back End */}
    <div data-aos="fade-left" className="bg-bg-surface outline outline-0 outline-blue-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start md:col-span-2 lg:col-span-1 transition-all hover:outline-4 skillsSection">
      <FaServer color="#f3f3f1" size={100} className="self-center" />
      <h1 className="font-openSans font-bold text-3xl self-center">
        Server Side
      </h1>
      <ul className="list-disc text-white-300">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PHP</li>
            <li>ColdFusion</li>
            <li>Next.js</li>
            <li>CRUD REST APIs</li>
            <li>Socket.IO (web sockets)</li>
            <li>Authentication (JWT tokens)</li>
            <li>Security (password hashing, HTTP state management, login system)</li>
            <li>SMTP email integration</li>
            <li>Asynchronous programming</li>
            <li>Benchmarking and optimization</li>
            <li>Server-side caching</li>
      </ul>
    </div>

    {/* DevOps and Deployment */}
    <div data-aos="fade-right" className="bg-bg-surface outline outline-0 outline-green-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start transition-all hover:outline-4 skillsSection">
      <FaCloud color="#f3f3f1" size={100} className="self-center" />
      <h1 className="font-openSans font-bold text-3xl self-center">
        DevOps & Deployment
      </h1>
      <ul className="list-disc text-white-300">
            <li>Containerization(Docker)</li>
            <li>Version control(SVN, GIT)</li>
            <li>FTP</li>
            <li>Apache and Nginx server configuration</li>
            <li>Server security (CORS, CSP, security headers)</li>
            <li>DigitalOcean</li>
            <li>SSL/TLS certificates management</li>
            <li>Domain management & setup</li>
            <li>Portainer (debugging and monitoring)</li>
            <li>CI/CD (GitLab, pipelines)</li>
            <li>Performance tracking (Lighthouse)</li>
            <li>Server scaling (horizontal and vertical)</li>
      </ul>
    </div>
    <div className="div-tools">
    {/* CMS */}
    <div data-aos="fade-left" className="bg-bg-surface outline outline-0 outline-yellow-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start transition-all hover:outline-4 skillsSection" style={{minWidth:'400px'}}>
      <FaWordpress color="#f3f3f1" size={100} className="self-center" />
      <h1 className="font-openSans font-bold text-3xl self-center">
        CMS
      </h1>
      <ul className="list-disc text-white-300">
        <li>Custom CMS development</li>
        <li>Shopify, &quotLiquid&quot template language</li>
        <li>WordPress</li>
        <li>Avada Theme</li>
        <li>WP plugins</li>
        <li>Fusion Builder</li>
        <li>Shortcodes</li>
        <li>Meta boxes and custom fields</li>
        <li>SEO tools (Meta SEO Inspector, Google Search Console)</li>
        <li>No-code approach</li>
      </ul>
    </div>

    {/* Database Management */}
    <div data-aos="fade-right" className="bg-bg-surface outline outline-0 outline-red-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start transition-all hover:outline-4 skillsSection">
      <FaDatabase color="#f3f3f1" size={100} className="self-center" />
      <h1 className="font-openSans font-bold text-3xl self-center">
        Database Management
      </h1>
      <ul className="list-disc text-white-300">
            <li>SQL (MySQL, MariaDB)</li>
            <li>NoSQL (MongoDB, DocumentDB)</li>
            <li>Database queries and aggregate pipelines</li>
            <li>Data imports/exports (CSV, JSON)</li>
            <li>Elasticsearch</li>
            <li>Solr</li>
            <li>PostgreSQL (ElephantSQL DBaaS)</li>
            <li>Relational and non-relational databases</li>
      </ul>
    </div>
    </div>

    
  </div>
</section>

  );
};

export default Tools;
