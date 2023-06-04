import React, { useEffect, useState } from "react";

function CardMenu() {
  const [cardData, setCardData] = useState([]);
  const cardName = ["Dinner", "Healthy", "Holiday", "Food", "Gluten-free"];
  const images = [
    "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg",
    "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_640.jpg",
    "https://cdn.pixabay.com/photo/2019/09/06/11/27/spaghetti-4456186_640.jpg",
    "https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_640.jpg",
  ];
  useEffect(() => {
    const data = [...Array(5)].map((_, index) => ({
      id: index,
      name: cardName[index],
      image: images[index],
    }));
    setCardData([...data]);
  }, []);
  return (
    <article className="py-16 grid grid-flow-row auto-cols-[40%]  md:grid-cols-5 grid-cols-2 gap-5">
      {cardData.map((item, index) => (
        <div
          key={item?.id}
          className="overflow-hidden w-full aspect-[20/14]  rounded-lg relative group"
        >
          <section className="w-full h-full scale-100 group-hover:scale-[1.02] transition-all duration-500 ease-in-out">
            <img
              className="object-cover w-full h-full"
              src={item?.image}
              alt=""
            />
          </section>
          <h4 className="absolute text-xl font-semibold font-playfair text-white bg-black/40  group-hover:bg-black/60 transition-all duration-200  top-0 left-0 h-full w-full flex items-center justify-center">
            {item?.name}
          </h4>
        </div>
      ))}
    </article>
  );
}

export default CardMenu;
