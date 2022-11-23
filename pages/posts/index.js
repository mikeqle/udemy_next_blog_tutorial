import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default AllPostsPage;