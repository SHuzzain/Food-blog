import {
  ArrowRightCircleIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

export const FoodsShortDetail = ({ items }) => {
  const {
    title,
    type,
    url,
    category,
    comment,
    view,
    decs,
    authName,
    videoUrl,
  } = items;
  const [playVideo, setPlayVideo] = useState(true);
  return type === "image" || type === "video" ? (
    <article>
      <figure
        className={`grid place-items-center relative max-w-100 rounded-md overflow-hidden ${
          playVideo ? "bg-current" : "bg-black"
        }`}
      >
        {type === "image" ? (
          <img
            loading="lazy"
            className="w-full object-cover"
            src={url}
            alt="post"
          />
        ) : playVideo ? (
          <>
            <img
              loading="lazy"
              className="w-full object-cover"
              src={url}
              alt="post"
            />
            <div
              onClick={() => setPlayVideo(false)}
              className="z-10 group grid place-items-center absolute w-20 h-20 bg-white rounded-full playButton"
            >
              <div className="border-[13px] transition-all duration-300 group-hover:border-l-red-500 translate-x-[10px] border-transparent border-solid border-l-black" />
            </div>
          </>
        ) : (
          <iframe
            className="w-full aspect-[1/0.57]"
            title={title}
            allow="autoplay; fullscreen"
            src={videoUrl}
            frameborder="0"
            allowFullScreen
          ></iframe>
        )}
      </figure>
      <div className="flex flex-col items-start font-playfair gap-5 mt-8">
        <h6 className="font-roboto bg-[#f7f4ee] hover:text-red-600 cursor-pointer text-red-500 rounded px-3 py-1 text-sm font-bold font-playfair capitalize">
          {category}
        </h6>
        <h1 className="text-clamp_1 font-semibold hover:text-red-500 transition-colors cursor-pointer">
          {title}
        </h1>
        <section className="justify-center text-gray-400 flex gap-x-5 gap-y-1 font-roboto flex-wrap">
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
        <p className="line-clamp-3 font-lora text-lg text-gray-500">{decs}</p>
        <button className="bg-green-400 text-white py-3 px-8 rounded font-semibold text-sm shadow-md shadow-green-400/40">
          Read More
        </button>
      </div>
    </article>
  ) : (
    <article>
      <div className="flex flex-col items-start font-playfair gap-5 mt-8">
        <h6 className="font-roboto bg-[#f7f4ee] cursor-pointer hover:text-red-600 text-red-500 rounded px-3 py-1 text-sm font-bold font-playfair capitalize">
          {category}
        </h6>
        <h1 className="text-clamp_1 font-semibold hover:text-red-500 transition-colors cursor-pointer">
          {title}
        </h1>
        <section className="justify-center text-gray-400 flex gap-x-5 gap-y-1 font-roboto flex-wrap">
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
        <section className="relative space-y-8  py-9 pl-9 linearAfter ">
          <p className="line-clamp-3 font-lora text-lg ">{decs}</p>
          <blockquote>
            <h6 className="font-semibold">Someone Said</h6>
            <small>{authName}</small>
          </blockquote>
        </section>
      </div>
    </article>
  );
};
