import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerNavMenuBar } from "../../feature/HeaderNavData";
import { useDispatch } from "react-redux";

export const MenuNav = ({ status }) => {
  const dispatch = useDispatch();
  const [allMotionEnd, setAllMotionEnd] = useState({
    headerList: false,
    animateEnd: false,
  });
  const headerSearchPop = () => {
    setAllMotionEnd((preVal) => ({
      ...preVal,
      headerList: false,
    }));
  };
  const handleTransitionEnd = (e) => {
    const isTransitionEnded = e.currentTarget.classList.contains("opacity-0");
    if (isTransitionEnded) {
      setAllMotionEnd((preVal) => ({
        ...preVal,
        animateEnd: false,
      }));
      dispatch(headerNavMenuBar(false));
    }
  };
  useEffect(() => {
    if (status) {
      setAllMotionEnd({
        animateEnd: true,
        headerList: true,
      });
    }
  }, [status]);

  return (
    <div
      className={`md:hidden fixed flex flex-col gap-7 bg-navPopBg w-full ${
        allMotionEnd.animateEnd ? "h-screen" : "h-0"
      } transition-[height] duration-700 overflow-y-hidden z-30`}
    >
      <div className="flex relative justify-center items-center pt-6  px-5">
        <h1 className="font-logo font-bold text-3xl   text-center text-white">
          LOGO
        </h1>
        <XMarkIcon
          onClick={headerSearchPop}
          className="w-9 right-0 absolute text-white transition-transform hover:rotate-90 duration-300 mr-5"
        />
      </div>
      <div className="flex items-center relative">
        <ul className="font-bold font-playfair flex flex-col justify-center items-center w-full text-white gap-5 text-xl">
          <li
            onTransitionEnd={handleTransitionEnd}
            className={`header-text-hover flex items-center justify-center gap-2 ${
              allMotionEnd.headerList
                ? "opacity-100 delay-75"
                : "opacity-0 delay-[550ms]"
            } transition-opacity duration-500 `}
          >
            <Link to={"/"}>Home</Link>
            <span className="">
              <ChevronDownIcon className="w-3 h-3 stroke-[3px]" />
            </span>
          </li>
          <li
            className={`header-text-hover ${
              allMotionEnd.headerList
                ? "opacity-100 delay-100"
                : "opacity-0 delay-[400ms]"
            } transition-opacity duration-500 `}
          >
            <Link>Recipes</Link>
          </li>
          <li
            className={`header-text-hover flex items-center justify-center gap-2 ${
              allMotionEnd.headerList
                ? "opacity-100 delay-150"
                : "opacity-0 delay-300"
            } transition-opacity duration-500 `}
          >
            <Link>Features</Link>
            <span className="">
              <ChevronDownIcon className="w-3 h-3 stroke-[3px]" />
            </span>
          </li>
          <li
            className={`header-text-hover ${
              allMotionEnd.headerList
                ? "opacity-100 delay-200"
                : "opacity-0 delay-200"
            } transition-opacity duration-500`}
          >
            <Link>About us</Link>
          </li>
          <li
            className={`header-text-hover ${
              allMotionEnd.headerList
                ? "opacity-100 delay-300"
                : "opacity-0 delay-150"
            } transition-opacity duration-500`}
          >
            <Link>Store</Link>
          </li>
          <li
            className={`header-text-hover ${
              allMotionEnd.headerList
                ? "opacity-100 delay-500"
                : "opacity-0 delay-75"
            } transition-opacity duration-500`}
          >
            <Link>Contact us</Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col gap-5 ${
          allMotionEnd.headerList ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 delay-300`}
      >
        <section className="w-full text-center text-[#afb8bb] ">
          <p className="font-lora font-medium text-sm">
            CopyRight <span>&#169;</span> 2023 -{" "}
            <span className="text-[#c8d0d2]">ThemeREX.</span> All Right
            Reserved.
          </p>
        </section>
        <section className="flex justify-center items-center text-white gap-5 [&>i]:transition-colors [&>i]:duration-500">
          <i className="fa fa-facebook text-base hover:text-green-400" />
          <i className="fa fa-twitter text-base hover:text-green-400" />
          <i className="fa fa-instagram text-base hover:text-green-400" />
        </section>
      </div>
    </div>
  );
};
