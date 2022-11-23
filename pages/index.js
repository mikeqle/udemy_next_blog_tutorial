// 1. Hero section => Present ourselves
// 2. Featured posts section

import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ad quaerat modi quibusdam itaque at vitae voluptatibus, similique deleniti.",
  },

  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ad quaerat modi quibusdam itaque at vitae voluptatibus, similique deleniti.",
  },

  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ad quaerat modi quibusdam itaque at vitae voluptatibus, similique deleniti.",
  },

  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ad quaerat modi quibusdam itaque at vitae voluptatibus, similique deleniti.",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
