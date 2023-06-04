import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import SnapPosts from "./SnapPosts";

function RecentPost() {
  const [recentCardData, setRecentCardData] = useState([]);
  const [pagePosition, setPagePosition] = useState({
    id: [],
  });
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
  ];
  useEffect(() => {
    const snapImagesDataLength = [...Array(3)].map((_, index) => index === 0);
    setPagePosition((preVal) => ({ id: [...snapImagesDataLength] }));
  }, []);
  console.log(pagePosition);
  const title = [
    "Meal Prep Breakfast For The Week",
    "Lactose Free Homemade Cheese",
    "Tiny Apple Pies With Cinnmnon",
  ];
  useEffect(() => {
    const data = [...Array(images.length)].map((_, index) => ({
      id: index,
      images: images[index],
      date: new Date(),
      comment: Math.floor(Math.random() * 10) + 1,
      title: title[index],
    }));
    setRecentCardData([...data]);
  }, []);
  return (
    <div className="top-20 sticky">
      <h2 className="font-bold font-playfair text-2xl mb-11">Recent posts</h2>
      <div className="space-y-6 mb-14">
        {recentCardData?.map((item, index) => (
          <section key={index} className="flex gap-5">
            <div className="h-28 w-40 rounded-md overflow-hidden">
              <img
                src={item?.images}
                className="w-full h-full object-cover"
                alt="recent post image"
              />
            </div>
            <article className="flex flex-col w-[calc(100%-100px)] justify-center">
              <h3 className="font-playfair text-xl font-semibold whitespace-pre-wrap">
                {item?.title}
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 text-gray-400">
                  <small>Novermber</small>
                  <small>26, </small>
                  <small>2023</small>
                </div>

                <div className="flex items-center gap-4">
                  <section className="flex items-center gap-1">
                    <ChatBubbleLeftRightIcon className="w-4" />
                    <small className="text-gray-400">
                      {item?.comment}
                    </small>{" "}
                  </section>{" "}
                </div>
              </div>
            </article>
          </section>
        ))}
      </div>
      <SnapPosts />
      <ul className=" flex items-center gap-4 justify-center">
        {pagePosition.id?.map((_, index) => (
          <li
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              pagePosition?.id[index] ? "bg-green-400" : "bg-[#f7f4ee]"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default RecentPost;
