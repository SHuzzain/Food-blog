import React from "react";

export const AuthorDetail = ({ title, decs, avatar }) => {
  return (
    <div className="mt-6 rounded-md shadow">
      <article className="flex px-4 md:px-10 md:py-10 py-4 items-center gap-4 md:gap-10">
        <div className="rounded-md overflow-hidden  h-[min(10rem,20vw,8rem)]">
          <img
            className="mxa-w-full min-w-full h-full object-cover"
            src={avatar}
            alt=""
          />
        </div>
        <div className=" space-y-2 md:space-y-4 font-playfair flex-1">
          <h2 className="md:text-xl text-lg font-bold text-black">{title}</h2>
          <p className="md:text-lg text-base text-gray-500">{decs}</p>
          <button className="font-playfair font-bold text-sm text-black">
            Read More
          </button>
        </div>
      </article>
    </div>
  );
};
