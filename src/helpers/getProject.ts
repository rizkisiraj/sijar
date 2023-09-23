import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getProject = (slug: string) => {
    const projectRoot = process.cwd();
    const postsDirectory = path.join(projectRoot, "/src/projects");
  const fileContents = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getProject;