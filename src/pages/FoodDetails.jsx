import React, { useEffect, useState } from "react";
import VerticalLine from "../components/Reusable_componenets/VerticalLine";
import { FoodsShortDetail } from "../components/Reusable_componenets/FoodsShortDetail";
export const FoodDetails = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = [
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-27-copyright-1170x658.jpg",
        category: "Dinner",
        title: "Romantic Breakfast for Two",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-26-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Macchiato Pumpkin Soup",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-25-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Braised Pork Belly Adobo By Chef Leah Cohen",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-24-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Cinnamon Buns for Two",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "quotes",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Quote Post",
        authName: "Design Director",
        decs: "Nothing is better than going home to your family and eating good food.",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-23-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Perfect for a Birthday Party",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "video",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-22-copyright-1170x658.jpg",
        videoUrl:
          "https://player.vimeo.com/video/141187178?app_id=122963&autoplay=1",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Slow Cooker Coconut Curry",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-21-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "A Little Bit of Japan",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-20-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "Giant Multi-Stuffed Soft Pretzel",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        type: "image",
        url: "https://especio.themerex.net/wp-content/uploads/2018/11/image-19-copyright-1170x658.jpg",
        category: "Dinner",
        comment: Math.floor(Math.random() * 10) + 1,
        view: Math.floor(Math.random() * 1000) + 100,
        title: "French Toast Honey Toast",
        decs:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
    ];
    setPosts(getPosts)
  }, []);

  return (
    <div className="container max-w-100 mx-auto p-5 pt-24 space-y-20">
      <section className="font-playfair flex flex-col items-center">
        <VerticalLine />
        <h1 className="text-4xl font-semibold">Dinner</h1>
        <ul className="list-disc mt-4 flex items-center gap-8 marker:text-green-400">
          <li className="list-none">Home</li>
          <li>All Posts</li>
          <li>Dinner</li>
        </ul>
      </section>
      <section className="space-y-8">
        {posts?.map((item, index) => (
          <FoodsShortDetail key={index} items = {...item}/>
        ))}
      </section>
    </div>
  );
};
