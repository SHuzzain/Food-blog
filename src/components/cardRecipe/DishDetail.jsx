import React from "react";
import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";

function DishDetail({ imageUrl, category, title, view, comment }) {
  return (
    <section className="relative w-full h-[clamp(1rem,100vw,50rem)] flex items-end justify-end ">
      <img
        className="absolute  rounded-md top-0 w-full h-[calc(100%-5rem)] object-cover"
        src={imageUrl}
        alt="cardPost"
      />
      <article className="z-10 mx-auto  w-[min(100%-1rem,60vw,600px)] px-4 py-5 md:py-12  flex items-center justify-center gap-3 md:gap-8 flex-col bg-white shadow-md shadow-gray-300/60 rounded-md  ">
        <section className="flex justify-center">
          <h6 className="bg-[#f7f4ee] text-red-500 rounded px-2 text-sm font-bold font-playfair capitalize">
            {category}
          </h6>
        </section>
        <section className="text-clamp_1  whitespace-pre-line text-center text-black font-playfair font-bold">
          <h3>{title}</h3>
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
              <small>{view}</small>
            </section>
            <section className="flex items-center gap-1">
              <ChatBubbleLeftRightIcon className="w-4 text-black" />
              <small>{comment}</small>
            </section>
          </div>
        </section>
      </article>
    </section>
  );
}

export default DishDetail;
