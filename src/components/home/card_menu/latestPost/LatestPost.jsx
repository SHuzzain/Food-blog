import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Form, Link } from "react-router-dom";
import VerticalLine from "../../../Reusable_componenets/VerticalLine";
import RecentPost from "./RecentPost";
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
          {cardData.map((item, index) =>
            index % 3 == 0 ? (
              <section
                key={index}
                className="relative h-[60vh] bg-red-900 cursor-pointer w-[calc(100%)] group rounded-md grid place-items-center  overflow-hidden"
              >
                <div className="absolute w-full h-full">
                  <img
                    className="rounded-md min-w-full max-w-full h-full object-cover"
                    src={item?.images}
                    alt=""
                  />
                </div>
                <div className="absolute  bg-black/40  group-hover:bg-black/50 transition-colors w-full h-[60vh]  duration-500 grid place-items-center">
                  <div className=" space-y-4 ">
                    <section className="flex justify-center">
                      <h6 className="bg-[#f7f4ee] text-red-500 rounded p-1 px-3 text-sm font-bold capitalize">
                        {item?.category}
                      </h6>
                    </section>
                    <section className="text-3xl capitalize  whitespace-pre-line text-center text-white font-playfair font-bold">
                      <h4>{item?.title}</h4>
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
                          <small>{item?.view}</small>
                        </section>
                        <section className="flex items-center gap-1">
                          <ChatBubbleLeftRightIcon className="w-4" />
                          <small>{item?.comment}</small>
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
                    src={item?.images}
                    alt=""
                  />
                </div>
                <div className="space-y-4 md:flex-1">
                  <h6 className=" text-red-500 rounded text-sm font-bold capitalize">
                    {item?.category}
                  </h6>
                  <h3 className="text-2xl font-bold font-playfair">
                    {item?.title}
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <small>Novermber</small>
                      <small>6, </small>
                      <small>2023</small>
                    </div>

                    <div className="flex items-center gap-4">
                      <section className="flex items-center gap-1">
                        <EyeIcon className="w-4" />
                        <small>{item?.view}</small>{" "}
                      </section>{" "}
                      <section className="flex items-center gap-1">
                        <ChatBubbleLeftRightIcon className="w-4" />
                        <small>{item?.comment}</small>{" "}
                      </section>{" "}
                    </div>
                  </div>

                  <p className="line-clamp-2 font-playfair text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure dicta et dolorem debitis molestiae sunt animi, ratione
                    facere quia architecto magni maiores consequuntur dolores id
                    ex dolorum pariatur voluptatibus dolore? Ratione ullam
                    minus, cum eos ad debitis mollitia similique neque nemo et?
                    Corrupti et hic possimus ad ratione placeat consequatur illo
                    reiciendis laborum, perferendis doloribus consequuntur
                    mollitia earum! Libero, optio. Accusantium autem dolore
                    consequuntur. Totam placeat temporibus quaerat nisi itaque
                    culpa similique, provident quam eaque molestias expedita
                    sed, autem corrupti inventore voluptas ea quae numquam error
                    fugit explicabo, velit porro.
                  </p>
                  <button className="font-playfair font-bold text-sm">
                    Read More
                  </button>
                </div>
              </section>
            )
          )}
        </div>

        <article className="col-span-3 lg:col-span-1 ">
          <Form className={`h-auto mb-14`} action="">
            <div className="flex rounded-md items-center bg-formImage flex-col px-8 py-20">
              <VerticalLine />
              <h2 className="font-bold text-2xl mb-5 font-playfair text-center w-[calc(100%-100px)]">
                Subscribe to the best recipes feed.
              </h2>
              <label
                className="w-full mb-5 bg-white flex h-14  rounded-md p-4"
                htmlFor=""
              >
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none border-r font-playfair border-gray-500/20"
                  placeholder="Enter Your Email"
                />

                <PaperAirplaneIcon className="w-7 ml-4" />
              </label>
              <section className="flex flex-row-reverse gap-2">
                <label htmlFor="" className="font-playfair">
                  <small className="text-gray-500 text-sm">
                    I've read and accept the{" "}
                  </small>
                  <Link
                    to={"/"}
                    className="hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </label>
                <input
                  type="checkbox"
                  className="w-4 accent-green-400"
                  name=""
                  id=""
                />
              </section>
            </div>
          </Form>
          <RecentPost />
        </article>
      </section>
    </div>
  );
}

export default LatestPost;
