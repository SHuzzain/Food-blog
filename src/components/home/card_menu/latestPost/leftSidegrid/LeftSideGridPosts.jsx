import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

export const LeftSideGridPosts = ({
  images,
  index,
  category,
  title,
  view,
  comment,
}) => {
  return (
    <>
      {index % 3 === 0 ? (
        <section className="relative h-[60vh] bg-red-900 cursor-pointer w-[calc(100%)] group rounded-md grid place-items-center  overflow-hidden">
          <div className="absolute w-full h-full">
            <img
              className="rounded-md min-w-full max-w-full h-full object-cover"
              src={images}
              alt=""
            />
          </div>
          <div className="absolute  bg-black/40  group-hover:bg-black/50 transition-colors w-full h-[60vh]  duration-500 grid place-items-center">
            <div className=" space-y-4 ">
              <section className="flex justify-center">
                <h6 className="bg-[#f7f4ee] text-red-500 rounded p-1 px-3 text-sm font-bold capitalize">
                  {category}
                </h6>
              </section>
              <section className="text-3xl capitalize  whitespace-pre-line text-center text-white font-playfair font-bold">
                <h4>{title}</h4>
              </section>
              <section className="justify-center flex gap-5 text-white ">
                <div className="flex items-center gap-1">
                  <small>Novermber</small>
                  <small>6, </small>
                  <small>2023</small>
                </div>
                <div className="flex items-center gap-4">
                  <section className="flex items-center gap-1">
                    <EyeIcon className="w-4" />
                    <small>{view}</small>
                  </section>
                  <section className="flex items-center gap-1">
                    <ChatBubbleLeftRightIcon className="w-4" />
                    <small>{comment}</small>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </section>
      ) : (
        <section
          key={index}
          className="flex items-center justify-center gap-5 md:flex-row flex-col rounded-md overflow-hidden"
        >
          <div className="md:flex-1 w-full h-[35vh]">
            <img
              className="min-w-full max-w-full rounded-md h-full object-cover"
              src={images}
              alt=""
            />
          </div>
          <div className="space-y-4 md:flex-1">
            <h6 className=" text-red-500 rounded text-sm font-bold capitalize">
              {category}
            </h6>
            <h3 className="text-2xl font-bold font-playfair">{title}</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <small>Novermber</small>
                <small>6, </small>
                <small>2023</small>
              </div>

              <div className="flex items-center gap-4">
                <section className="flex items-center gap-1">
                  <EyeIcon className="w-4" />
                  <small>{view}</small>{" "}
                </section>{" "}
                <section className="flex items-center gap-1">
                  <ChatBubbleLeftRightIcon className="w-4" />
                  <small>{comment}</small>{" "}
                </section>{" "}
              </div>
            </div>

            <p className="line-clamp-2 font-playfair text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              dicta et dolorem debitis molestiae sunt animi, ratione facere quia
              architecto magni maiores consequuntur dolores id ex dolorum
              pariatur voluptatibus dolore? Ratione ullam minus, cum eos ad
              debitis mollitia similique neque nemo et? Corrupti et hic possimus
              ad ratione placeat consequatur illo reiciendis laborum,
              perferendis doloribus consequuntur mollitia earum! Libero, optio.
              Accusantium autem dolore consequuntur. Totam placeat temporibus
              quaerat nisi itaque culpa similique, provident quam eaque
              molestias expedita sed, autem corrupti inventore voluptas ea quae
              numquam error fugit explicabo, velit porro.
            </p>
            <button className="font-playfair font-bold text-sm">
              Read More
            </button>
          </div>
        </section>
      )}
    </>
  );
};
