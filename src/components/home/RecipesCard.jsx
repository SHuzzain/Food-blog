import React, { useEffect, useState } from "react";
import { EyeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
function RecipesCard() {
  const [cardData, setCardData] = useState([]);
  const [scrollTograp, setScrollToGrab] = useState({
    pressed: false,
    stratX: 0,
    scrollLeft: 0,
  });
  const cardRef = useRef(null);
  const category = ["dinner", "holiday", "recipes"];
  const title = [
    "The Next Level Birthday Carrot Cake",
    "Creamy Garlic Parmesan Chicken Salad",
    "Braised Pork Belly Adobo By Chef Leah Cohen",
    "Homemade Belgian Waffle With Whipped Cream",
    "Bourbon Street Rib-Eye Steak With Cheese",
  ];
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
    "https://cdn.pixabay.com/photo/2019/09/06/11/27/spaghetti-4456186_640.jpg",
    "https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_640.jpg",
  ];
  useEffect(() => {
    const cardData = [...Array(10)].map((_, index) => ({
      id: index,
      images: images[Math.floor(Math.random() * images.length)],
      date: new Date(),
      comment: Math.floor(Math.random() * 10) + 1,
      view: Math.floor(Math.random() * 1000) + 100,
      title: title[Math.floor(Math.random() * category.length)],
      category: category[Math.floor(Math.random() * category.length)],
    }));
    setCardData([...cardData]);
  }, []);
  const handleMouseDown = (e) => {
    setScrollToGrab(() => ({
      pressed: true,
      stratX: e.pageX - cardRef.current.offsetLeft,
      scrollLeft: cardRef.current.scrollLeft,
    }));
  };
  const handleMouseUp = (e) => {
    setScrollToGrab((preVal) => ({
      ...preVal,
      pressed: false,
    }));
  };
  const handleMouseMove = (e) => {
    if (scrollTograp.pressed) {
      e.preventDefault();
      const x = e.pageX - cardRef.current.offsetLeft;
      const snapScroll = (x - scrollTograp.stratX) * 3;
      cardRef.current.scrollLeft = scrollTograp.scrollLeft - snapScroll;
    }
  };

  return (
    <article
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="grid grid-flow-col [scroll-snap-type:_inline_mandatory] select-none lg:auto-cols-[25%] md:auto-cols-[35%] sm:auto-cols-[50%] auto-cols-[100%] overflow-x-scroll overflow-y-hidden  scrollbar-hide scroll-smooth"
    >
      {cardData.map((item, index) => (
        <section
          key={item?.id}
          className={` group w-full snap-start  h-[400px] transition-all duration-200 relative flex items-end justify-center`}
        >
          <img
            className="object-cover w-full h-full"
            src={item?.images}
            alt="card"
          />
          <div
            className={`absolute top-0 ${
              scrollTograp.pressed ? "cursor-grabbing" : `cursor-grab`
            } left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
          />
          <div className="absolute bottom-0  space-y-4 pb-8 px-8 [&>section>*]:hover:cursor-pointer">
            <section className="flex justify-center">
              <h6 className="bg-[#f7f4ee] text-red-500 rounded px-2 text-sm font-bold font-playfair capitalize">
                {item?.category}
              </h6>
            </section>
            <section className="md:text-2xl text-base  whitespace-pre-line text-center text-white font-playfair font-bold">
              <h4>{item?.title}</h4>
            </section>
            <section className="justify-center flex gap-x-5 gap-y-1 text-white flex-wrap">
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
        </section>
      ))}
    </article>
  );
}

export default RecipesCard;
