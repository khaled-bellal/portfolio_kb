import React from "react";
import Button from "../Button";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

const socialIcons = [
  {
    id: "1",
    title: "Github",
    link: "https://github.com/khaled-bellal",
    icon: FaGithub,
  },
  {
    id: "2",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/bellalkhaled/",
    icon: FaLinkedin,
  },
  {
    id: "3",
    title: "Twitter",
    link: "https://twitter.com/bellal_khaled5",
    icon: FaTwitter,
  },
  {
    id: "4",
    title: "Blog",
    link: "blog.khaledbellal.me",
    icon: FaBlog,
  },
  {
    id: "5",
    title: "Email",
    link: "mailto:khaled.bellal96@gmail.com",
    icon: FaEnvelope,
  },
];

const Socials = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-wrap mob:flex-nowrap smob:flex-nowrap link `}
    >
      {socialIcons.map((social) => (
        <button
          key={social.id}
          onClick={() => window.open(social.link)}
          className="laptop:mr-4 tablet:mr-5 relative mx-auto h-10 w-10 rounded-full hover:text-gray-900  hover:bg-gradient-to-br from-purple-500 to-blue-400 hover:scale-105 md:hover:opacity-100 grid place-content-center border-[1.5px] border-current p-2"
        >
          <social.icon />
        </button>
      ))}
    </div>
  );
};

export default Socials;
