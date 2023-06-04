import React from "react";
import RecipesCard from "../components/home/RecipesCard";

import MainMenu from "../components/home/card_menu/MainMenu";
import Footer from "../components/home/Footer/Footer";
import TrendingPosts from "../components/home/card_menu/TrendingPosts";

function HomePage() {
  return (
    <>
      <RecipesCard />
      <MainMenu />
      <TrendingPosts />
      <Footer />
    </>
  );
}

export default HomePage;
