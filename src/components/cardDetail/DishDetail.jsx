import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

export const DishDetail = ({
  images,
  category,
  title,
  view,
  comment,
  shortDesc,
  detailDecs,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <section className="w-full h-[70vh] rounded-md overflow-hidden">
        <img
          className="max-w-full min-w-full h-full object-cover"
          src={images}
          alt="cardPost"
        />
      </section>
      <section className="flex flex-col items-start">
        <article className="flex flex-col items-start gap-5">
          <h6 className="bg-[#f7f4ee] text-red-500 rounded p-1 px-3 text-sm font-bold capitalize">
            {category}
          </h6>
          <h1 className="text-4xl font-bold font-playfair">{title}</h1>
          <div className="flex items-center text-gray-400 gap-5">
            <section className="flex items-center gap-1">
              <small>Novermber</small>
              <small>6, </small>
              <small>2023</small>
            </section>

            <section className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <EyeIcon className="w-4 text-black" />
                <small>{view}</small>
              </div>
              <div className="flex items-center gap-1">
                <ChatBubbleLeftRightIcon className="w-4 text-black" />
                <small>{comment}</small>
              </div>
            </section>
          </div>
          <div className="space-y-8 text-gray-500 font-playfair text-lg">
            {shortDesc?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <blockquote className="relative linearGradientLine my-9 py-9 pl-9 ">
              <p>{detailDecs?.decs}</p>
              <cite className="text-black font-semibold text-base">
                {detailDecs?.name}
              </cite>
            </blockquote>
            {shortDesc?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};
