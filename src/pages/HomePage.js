import React from "react";
import { Categories, ListBrowseItem, Reviews, TopBanner } from "../components";

const HomePage = () => {
  return (
    <>
      <TopBanner />
      <Categories />
      <ListBrowseItem />
      <Reviews />
    </>
  );
};

export default HomePage;
