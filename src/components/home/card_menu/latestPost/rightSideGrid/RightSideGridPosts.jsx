import React from "react";
import RecentPost from "../RecentPost";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import VerticalLine from "../../../../Reusable_componenets/VerticalLine";
import { Form, Link } from "react-router-dom";

export const RightSideGridPosts = () => {
  return (
    <article className="col-span-3 lg:col-span-1 ">
      <Form className={`h-auto mb-14`} action="">
        <div className="flex rounded-md items-center bg-formImage flex-col px-8 py-20">
          <VerticalLine />
          <h2 className="font-bold text-2xl mb-5 font-playfair text-center w-[calc(100%-100px)]">
            Subscribe to the best recipes feed.
          </h2>
          <label
            className="w-full mb-5 bg-white flex h-14  rounded-md p-4"
            htmlFor=""
          >
            <input
              type="text"
              className="bg-transparent w-full border-none outline-none border-r font-playfair border-gray-500/20"
              placeholder="Enter Your Email"
            />

            <PaperAirplaneIcon className="w-7 ml-4" />
          </label>
          <section className="flex flex-row-reverse gap-2">
            <label htmlFor="" className="font-playfair">
              <small className="text-gray-500 text-sm">
                I've read and accept the{" "}
              </small>
              <Link
                to={"/"}
                className="hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </label>
            <input
              type="checkbox"
              className="w-4 accent-green-400"
              name=""
              id=""
            />
          </section>
        </div>
      </Form>
      <RecentPost />
    </article>
  );
};
