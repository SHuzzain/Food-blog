import React from "react";
import { RightSideGridPosts } from "../components/home/card_menu/latestPost/rightSideGrid/RightSideGridPosts";
import CardDetailLeft from "../components/cardDetail/CardDetailLeft";

const CardDetailPage = () => {
  return (
    <div className="container max-w-100 mx-auto p-5 pt-0">
      <div className="grid grid-cols-3 gap-4 mt-20">
        <CardDetailLeft />
        <RightSideGridPosts />
      </div>
    </div>
  );
};

export default CardDetailPage;
