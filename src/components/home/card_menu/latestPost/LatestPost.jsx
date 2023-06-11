import React, { useEffect, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Form, Link } from "react-router-dom";
import VerticalLine from "../../../Reusable_componenets/VerticalLine";
import RecentPost from "./RecentPost";
import { LeftSideGridPosts } from "./leftSidegrid/LeftSideGridPosts";
import { RightSideGridPosts } from "./rightSideGrid/RightSideGridPosts";
function LatestPost() {
  const [cardData, setCardData] = useState([]);

  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
    "https://cdn.pixabay.com/photo/2019/09/06/11/27/spaghetti-4456186_640.jpg",
    "https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_640.jpg",
  ];
  const title = [
    "Mint-Pomegranate Salad",
    "Golden Shepherd's Pie",
    "Hawaiian chicken Poke Bow",
    "Leek Soup With Pasta",
    "Molten Chocolate Box Cake",
  ];

  useEffect(() => {
    const data = [...Array(5)].map((_, index) => ({
      id: index,
      images: images[Math.floor(Math.random() * images.length)],
      date: new Date(),
      comment: Math.floor(Math.random() * 10) + 1,
      view: Math.floor(Math.random() * 1000) + 100,
      title: title[Math.floor(Math.random() * title.length)],
      category: "Vegan",
      description: Math.floor(Math.random() * 2),
    }));
    setCardData([...data]);
  }, []);

  return (
    <div className="grid gap-14">
      <section className="space-y-5 flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold font-playfair">
          Latest Posts
        </h1>
        <p className=" text-gray-400 font-playfair min-w-[auto] max-w-[35rem] text-center">
          Looking for some cooking inspiration? Below are our newly developed
          recipes for any occasion - check out and try them!
        </p>
      </section>
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-2  flex flex-col gap-8 ">
          {cardData.map((item, index) => (
            <LeftSideGridPosts
              title={item?.title}
              category={item?.category}
              comment={item?.comment}
              images={item?.images}
              index={item?.id}
              view={item?.view}
              key={index}
            />
          ))}
        </div>
        <RightSideGridPosts />
      </section>
    </div>
  );
}

export default LatestPost;
