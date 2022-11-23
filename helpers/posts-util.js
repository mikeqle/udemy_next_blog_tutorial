import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

// helper function to get data of a single post
function getPostData(fileName) {
  // readFileSync reads the content of a file
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // matter parses content of a markdown file into metadata and content. matter function returns a { data, content } object we can destructure
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // readdirSync read all file names within a folder
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // our sort function
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
