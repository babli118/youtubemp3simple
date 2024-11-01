"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/logo1.svg";

const languages = [
  { name: "English", href: "/", flag: require("../public/gb.svg") },
  { name: "German", href: "/de", flag: require("../public/de.svg") },
  { name: "Turkish", href: "/tr", flag: require("../public/tr.svg") },
  { name: "French", href: "/fr", flag: require("../public/fr.svg") },
  { name: "Indonesian", href: "/id", flag: require("../public/id.svg") },
  { name: "Spanish", href: "/es", flag: require("../public/es.svg") },
  { name: "Portuguese", href: "/pt", flag: require("../public/pt.svg") },
];

const Flag = ({ flag }) => {
  return <Image src={flag} alt="Flag" width={20} height={15} />;
};

const TaskBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeOpenMenus = useCallback(
    (e) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen] // Only depends on isOpen
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => document.removeEventListener("mousedown", closeOpenMenus);
  }, [closeOpenMenus]);

  return (
    <nav className="h-[60px] sm:h-[70px] w-full flex justify-between items-center shadow-sm bg-white backdrop-blur-xl z-10 fixed top-0 px-2 sm:px-20">
      <div className="flex h-full items-center justify-between mx-auto md:max-w-[70vw] xl:max-w-[50vw] w-full">
        <Link
          href={`/`}
          className="font-bold text-xl sm:text-2xl text-text flex items-center transition-all active:scale-95"
        >
          <Image
            className="mr-2 min-[340px]:block hidden"
            src={logo1}
            alt="Logo"
            width={36}
            height={30}
          />
          <div>
            <span className="text-text font-bold">YOUTUBEMP3</span>
            <span className="text-primary1 text-sm font-bold">.io</span>
          </div>
        </Link>
        <div className="flex justify-between items-center gap-2">
          <div className="justify-end flex gap-4 relative" ref={dropdownRef}>
            <span
              onClick={toggleOpen}
              className={`cursor-pointer font-medium text-sm text-text flex items-center px-3 py-2 bg-grey hover:bg-background1 rounded-lg transition-all active:scale-95 ${
                isOpen && "bg-grey"
              }`}
            >
              Languages
              <RiArrowDropDownLine
                size={28}
                className={`transition-transform transform ${
                  isOpen && "rotate-180"
                }`}
              />
            </span>
            {isOpen && (
              <div className="absolute mt-12 w-32 bg-white  backdrop-blur-2xl shadow-sm rounded-lg  z-10">
                {languages.map((lang, index) => (
                  <Link
                    key={index}
                    href={lang.href}
                    className="flex justify-start items-center gap-2 px-3 py-1 hover:bg-primary1/60  hover:text-white transition-all rounded-lg"
                  >
                    <Flag flag={lang.flag} />
                    <span className="text-sm">{lang.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TaskBar;
