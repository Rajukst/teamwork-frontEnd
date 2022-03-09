import React from "react";
import Courses from "../Courses/Courses";
import Faq from "../FAQ/Faq";
import HomeBanner from "../Home-Banner/HomeBanner";
import HomeCourse from "../HomeCourse/HomeCourse";
import InTouch from "../InTouch/InTouch";
import Ranking from "../Ranking/Ranking";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeCourse></HomeCourse>
      <Ranking></Ranking>
      <Courses></Courses>
      <Faq></Faq>
      <InTouch></InTouch>
    </div>
  );
};

export default Home;
