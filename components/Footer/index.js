import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { FaPhone } from "react-icons/fa";

const Footer = ({}) => {
  const phoneNumber = "+971 556-134-899";
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 text-center">
        <div>
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
            Contact.
          </h1>
          <div className="mt-6">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <div className="inline-block w-max text-white transition-all duration-300 ease-out hover:scale-105 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <div className="flex justify-center items-center">
                <FaPhone className="mr-2 transform rotate-[90deg]" />
                <a href={`tel:${phoneNumber}`} className="text-center text-xl">
                  Call me
                </a>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://www.linkedin.com/in/bellalkhaled/">
          <a className="underline underline-offset-1">Khaled Bellal</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
