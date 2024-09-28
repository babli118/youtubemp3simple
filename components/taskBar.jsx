"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiArrowDropDownLine, RiMenuLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/logo1.svg";
import Flag from "../public/gb.svg";

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
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [closeOpenMenus]);

  // console.log(`Current version: ${config.current_version}`)
  return (
    <nav className="h-[60px] sm:h-[70px] w-full sm:block flex justify-between items-center shadow-sm bg-white backdrop-blur-xl z-10 fixed top-0 px-2 sm:px-20">
      <div className="flex h-full items-center justify-between  mx-auto md:max-w-[70vw] xl:max-w-[50vw] w-full ">
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
          <div className="">
            <span className="text-text font-bold">YOUTUBEMP3</span>
            <span className="text-primary1 text-sm font-bold">.io</span>
          </div>
        </Link>
        <div className="flex justify-between items-center gap-2 ">
          {/* <a
            href="/"
            className={`cursor-pointer hidden text-primary1 hover:text-text sm:block font-normal text-md px-3 py-1 bg-background1 rounded-sm transition-all active:scale-95`}
          >
            <p>Youtube To MP3</p>
          </a> */}
          <div className="justify-end flex gap-4 relative" ref={dropdownRef}>
            <span
              onClick={toggleOpen}
              className={`cursor-pointer font-medium text-sm  text-text flex items-center px-3 py-2 bg-grey hover:bg-background1 rounded-lg transition-all active:scale-95 ${
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
            {isOpen ? (
              <Link
                href={"/"}
                className=" rounded-lg cursor-pointer flex justify-center items-center shadow-sm w-32 z-10 bg-primary1/50 backdrop-blur-2xl h-max absolute mt-12 transition-all duration-200 ease-in-out opacity-100 scale-100 py-1 "
              >
                <Image
                  style={{
                    width: "40px", // Default for mobile or before 'sm'
                    height: "25px", // Default for mobile or before 'sm'
                  }}
                  src={Flag}
                  width={"40px"}
                  height={"25px"}
                  alt="english"
                />{" "}
                <span className="px-2 text-white sm:text-md text-sm">
                  English
                </span>
              </Link>
            ) : (
              <div className="w-32 z-10 backdrop-blur-xl bg-gray-50  h-max absolute mt-12 rounded-xl hidden">
                English
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TaskBar;
