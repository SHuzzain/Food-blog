import { ChatBubbleLeftRightIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useRef, useState } from "react";

function SnapPosts() {
  const [snapImage, setSnapImage] = useState([]);
  const [scrollTograp, setScrollToGrab] = useState({
    pressed: false,
    stratX: 0,
    scrollLeft: 0,
  });
  const cardRef = useRef(null);
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
  ];

  const title = [
    "Meal Prep Breakfast For The Week",
    "Lactose Free Homemade Cheese",
    "Tiny Apple Pies With Cinnmnon",
  ];
  const category = ["dinner", "holiday", "recipes"];
  useEffect(() => {
    const cardData = [...Array(images.length)].map((_, index) => ({
      id: index,
      image: images[index],
      date: new Date(),
      comment: Math.floor(Math.random() * 10) + 1,
      view: Math.floor(Math.random() * 1000) + 100,
      title: title[index],
      category: category[index],
    }));
    setSnapImage([...cardData]);
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

  return (
    <article
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="scroll-smooth  py-5"
    >
      <Splide
        options={{
          perPage: 1,
          pagination: false,
          drag: "free",
          arrows: false,
          autoplay: true,
          snap: true,
          type: "loop",
          paginationDirection: "ttb",
        }}
      >
        {snapImage.map((item, index) => (
          <SplideSlide>
            <section
              style={{
                background: `url(${item?.image}) no-repeat`,
              }}
              key={index}
              data-count={index}
              className="!bg-cover snap-start rounded-md overflow-hidden relative !bg-center h-[55vh] min-w-full max-w-full group"
            >
              <div
                className={`absolute top-0  left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80 group-hover:opacity-90 transition-opacity duration-500`}
              />
              <div
                className={`${
                  scrollTograp.pressed ? "cursor-grabbing" : `cursor-grab`
                } absolute  flex flex-col justify-end items-center h-full w-full gap-4 pb-8 px-8 [&>section>*]:hover:cursor-pointer`}
              >
                <section className="flex">
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
          </SplideSlide>
        ))}
      </Splide>
    </article>
  );
}

export default SnapPosts;
