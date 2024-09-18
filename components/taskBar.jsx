"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/logo1.svg";

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
    <nav className="h-[60px] sm:h-[70px] w-full sm:block flex justify-center items-center shadow-sm bg-white backdrop-blur-xl z-10 fixed top-0 px-5 sm:px-20">
      <div className="flex h-full items-center justify-between  mx-auto md:max-w-[70vw] xl:max-w-[50vw] w-full ">
        <Link
          href={`/`}
          className="font-bold text-xl sm:text-2xl text-text flex items-center transition-all active:scale-95"
        >
          <Image
            className="mr-2"
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
        <div className="flex justify-between items-center gap-2">
          {/* <a
            href="/"
            className={`cursor-pointer hidden text-primary1 hover:text-text sm:block font-normal text-md px-3 py-1 bg-background1 rounded-sm transition-all active:scale-95`}
          >
            <p>Youtube To MP3</p>
          </a> */}
          <div className="flex">
            <Link href="https://x.com/YoutubeMp3Io">
              <span>
                <FaSquareXTwitter
                  style={{
                    width: "25px", // Default for mobile or before 'sm'
                    height: "25px", // Default for mobile or before 'sm'
                  }}
                  className="sm:w-[35px] sm:h-[35px] text-black"
                />
              </span>
            </Link>{" "}
            <Link href="https://m.me/61565890374780">
              <span>
                <FaFacebookSquare
                  style={{
                    width: "25px", // Default for mobile or before 'sm'
                    height: "25px", // Default for mobile or before 'sm'
                  }}
                  className="sm:w-[35px] sm:h-[35px] text-black"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TaskBar;
