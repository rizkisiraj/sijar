import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPost = (slug: string) => {
    const projectRoot = process.cwd();
    const postsDirectory = path.join(projectRoot, "/src/posts");
  const fileContents = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;