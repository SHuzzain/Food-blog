import React from "react";
import CardMenu from "./CardMenu";
import LatestPost from "./latestPost/LatestPost";
import VerticalLine from "../../Reusable_componenets/VerticalLine";

function MainMenu() {
  return (
    <div className="container max-w-100 mx-auto p-5 pt-0">
      <CardMenu />
      <VerticalLine />
      <LatestPost />
    </div>
  );
}

export default MainMenu;
