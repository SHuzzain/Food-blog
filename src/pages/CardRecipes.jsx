import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

function CardRecipes() {
  return (
    <div className="container max-w-100 mx-auto p-5 pt-0 ">
      <div className="w-full mt-20">
        <section className="relative lg:max-w-7xl flex items-end justify-end  aspect-video">
          <img
            className="absolute  rounded-md top-0 w-full h-[calc(100%-5rem)] object-cover"
            src="https://especio.themerex.net/wp-content/uploads/2018/11/image-5-copyright.jpg"
            alt=""
          />
          <article className="z-10 mx-auto flex items-center justify-center gap-8 flex-col bg-white shadow-md shadow-gray-300/60 rounded-md py-5 md:px-10 md:py-12">
            <section className="flex justify-center">
              <h6 className="bg-[#f7f4ee] text-red-500 rounded px-2 text-sm font-bold font-playfair capitalize">
                Recipe
              </h6>
            </section>
            <section className="md:text-4xl md:w-7 text-base  whitespace-pre-line text-center text-black font-playfair font-bold">
              <h3>Bourbon Street Rib-Eye Steak With Cheese</h3>
            </section>
            <section className="justify-center flex gap-x-5 gap-y-1 text-gray-400 flex-wrap">
              <div className="flex items-center gap-1">
                <small>Novermber</small>
                <small>6, </small>
                <small>2023</small>
              </div>
              <div className="flex items-center gap-4">
                <section className="flex items-center gap-1">
                  <EyeIcon className="w-4 text-black" />
                  <small>100</small>
                </section>
                <section className="flex items-center gap-1">
                  <ChatBubbleLeftRightIcon className="w-4 text-black" />
                  <small>256</small>
                </section>
              </div>
            </section>
          </article>
        </section>

        <section></section>
      </div>
    </div>
  );
}

export default CardRecipes;
