import { ChatBubbleLeftRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

function FooterPosts() {
  const [footerPost, setFooterPost] = useState([]);
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
    "https://cdn.pixabay.com/photo/2019/09/06/11/27/spaghetti-4456186_640.jpg",
    "https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_640.jpg",
  ];

  useEffect(() => {
    const data = [...Array(8)].map((_, index) => ({
      id: index,
      images: images[Math.floor(Math.random() * images.length)],
      comment: Math.floor(Math.random() * 10) + 1,
      like: Math.floor(Math.random() * 1000) + 100,
    }));
    setFooterPost([...data]);
  }, []);

  return (
    <article className="grid lg:grid-cols-8 grid-cols-4 grid-flow-row lg:auto-rows-[70%] auto-rows-[37%] ">
      {footerPost?.map((item, index) => (
        <div
          key={index}
          className="w-full relative h-full group overflow-hidden"
        >
          <img
            className="max-w-full min-w-full h-full object-cover"
            src={item?.images}
            alt="footer posts"
          />

          <ul className="absolute top-0 left-0 gap-2 text-sm -translate-y-full group-hover:-translate-y-0 transition-transform duration-300 bg-black/40 flex items-center text-white justify-center w-full h-full">
            <li className="flex items-center gap-1">
              <HeartIcon className="w-3" />
              <small>{item?.like}</small>
            </li>
            <li className="flex items-center gap-1">
              <ChatBubbleLeftRightIcon className="w-3" />
              <small>{item?.comment}</small>
            </li>
          </ul>
        </div>
      ))}
    </article>
  );
}

export default FooterPosts;
