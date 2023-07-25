import React, { useEffect, useState } from "react";
import VerticalLine from "../../Reusable_componenets/VerticalLine";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

function TrendingPosts() {
  const [trendingPost, setTrendingPost] = useState([]);
  const title = [
    "Mint-Pomegranate Salad",
    "Golden Shepherd's Pie",
    "Hawaiian chicken Poke Bow",
    "Leek Soup With Pasta",
    "Molten Chocolate Box Cake",
  ];

  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
    "https://cdn.pixabay.com/photo/2019/09/06/11/27/spaghetti-4456186_640.jpg",
    "https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_640.jpg",
  ];
  const category = ["Snacks", "Holiday", "Dinner"];
  useEffect(() => {
    const data = [...Array(4)].map((_, index) => ({
      id: index,
      images: images[Math.floor(Math.random() * images.length)],
      date: new Date(),
      comment: Math.floor(Math.random() * 10) + 1,
      view: Math.floor(Math.random() * 1000) + 100,
      title: title[Math.floor(Math.random() * title.length)],
      category: category[Math.floor(Math.random() * category.length)],
      description: Math.floor(Math.random() * 2),
    }));
    setTrendingPost([...data]);
  }, []);
  return (
    <div className=" w-full h-auto bg-[#f7f4ee] bg-[url('./src/images/trendinfBg.webp')]">
      <section className="container space-y-4 bg-no-repeat max-w-100 mx-auto px-5 py-7">
        <div className="font-playfair grid justify-center gap-4">
          <VerticalLine />
          <h1 className="text-4xl font-bold text-center">Trending Posts</h1>
          <p className="text-gray-400 text-center w-[calc(100%-25%)] mx-auto">
            Are you really into cooking? These homemade meal recipes will
            totally blow the minds of your family members.
          </p>
        </div>
        <article className="grid lg:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-5">
          {trendingPost?.map((item, index) => (
            <section
              key={index}
              className="bg-[#ffffff] rounded-md overflow-hidden shadow-sm flex-1 flex flex-col "
            >
              <div className="w-full h-[30vh] hover:brightness-95 transition-all duration-200 cursor-pointer">
                <img
                  src={item?.images}
                  className="min-w-full rounded-md max-w-full h-full object-cover"
                  alt="trending post image"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-red-500 font-playfair font-semibold text-sm">
                  {item?.category}
                </h3>
                <p className="text-xl font-playfair font-bold">{item?.title}</p>
                <section className="flex gap-5 text-gray-400">
                  <div className="flex items-center gap-1">
                    <small>Novermber</small>
                    <small>6, </small>
                    <small>2023</small>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChatBubbleLeftRightIcon className="w-4 text-black" />
                    <small>{item?.comment}</small>
                  </div>
                </section>
              </div>
            </section>
          ))}
        </article>
        <div className="flex justify-center w-full py-10">
          <button className="py-5 px-16 font-playfair text-white font-semibold text-sm shadow-[_0px_0px_13px_0px_rgba(252,69,68,0.80)]  bg-[rgb(252,69,68)] hover:bg-[#d63534] transition-colors duration-200 rounded-md">
            View More Posts
          </button>
        </div>
      </section>
    </div>
  );
}

export default TrendingPosts;
