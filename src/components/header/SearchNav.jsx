import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { headerNavSearchBar } from "../../feature/HeaderNavData";

function SearchNav({ status }) {
  const [allMotionEnd, setAllMotionEnd] = useState({
    border: false,
    searchInput: false,
    animateEnd: false,
  });
  const dispatch = useDispatch();
  const headerSearchPop = () => {
    setAllMotionEnd((preVal) => ({
      ...preVal,
      border: false,
      searchInput: false,
    }));
  };
  const handleTransitionEnd = (e) => {
    const isTransitionEnded = e.currentTarget.classList.contains("after:w-0");
    if (isTransitionEnded) {
      setAllMotionEnd((preVal) => ({
        ...preVal,
        animateEnd: false,
      }));
      dispatch(headerNavSearchBar(false));
    }
  };
  useEffect(() => {
    if (status) {
      setAllMotionEnd({
        animateEnd: true,
        border: true,
        searchInput: true,
      });
    }
  }, [status]);
  return (
    <div
      className={`fixed flex flex-col bg-navPopBg w-full ${
        allMotionEnd.animateEnd ? "md:h-96 h-72" : "h-0"
      } transition-[height] duration-700 overflow-y-hidden z-30`}
    >
      <div className="flex justify-end items-center p-8 pb-0 ">
        <XMarkIcon
          onClick={headerSearchPop}
          className="w-9 text-white transition-transform hover:rotate-90 duration-300"
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <Form
          onTransitionEnd={handleTransitionEnd}
          className={`after:border-animate w-2/3 relative ${
            allMotionEnd.border ? "after:w-full" : "after:w-0"
          }   after:delay-500  `}
        >
          <label
            htmlFor=""
            className={`${
              allMotionEnd.searchInput ? "opacity-100" : "opacity-0 "
            } transition-opacity duration-500 delay-1000 flex items-center font-playfair w-full py-[0.8em] md:text-3xl text-xl text-white`}
          >
            <input
              placeholder="Search Recipes"
              type="text"
              className="outline-none w-full bg-transparent placeholder:text-white"
            />
            <div className=" pl-[0.8em] h-full">
              <MagnifyingGlassIcon className="w-[0.8em] text-white" />
            </div>
          </label>
        </Form>
      </div>
    </div>
  );
}

export default SearchNav;
