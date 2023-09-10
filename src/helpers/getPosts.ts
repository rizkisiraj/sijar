import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
const projectRoot = process.cwd();
const postsDirectory = path.join(projectRoot, "/src/posts");
  const files = fs.readdirSync(postsDirectory);
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    console.log("File path:", filePath);
    const fileContents = fs.readFileSync(
      path.join(filePath),
      "utf8"
    );
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  return allPostsData;
};

export default getPosts;