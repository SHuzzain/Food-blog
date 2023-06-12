import React from "react";

export const AuthorDetail = ({ title, decs, avatar }) => {
  return (
    <div className="md:mt-6 shadow rounded-md">
      <article className="flex pl-10 py-10 items-center gap-5 md:gap-10">
        <div className="rounded-md overflow-hidden h-[20vh]">
          <img
            className="mxa-w-full min-w-full h-full object-cover"
            src={avatar}
            alt=""
          />
        </div>
        <div className="space-y-4 font-playfair flex-1">
          <h2 className="md:text-xl text-lg font-bold">{title}</h2>
          <p className="md:text-lg text-base text-gray-500">{decs}</p>
          <button className="font-playfair font-bold text-sm">Read More</button>
        </div>
      </article>
    </div>
  );
};
