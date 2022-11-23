// 1. Hero section => Present ourselves
// 2. Featured posts section

import { Fragment } from "react";
import Hero from "../components/home-page/hero";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      {/* <FeaturedPosts /> */}
    </Fragment>
  );
}

export default HomePage;
