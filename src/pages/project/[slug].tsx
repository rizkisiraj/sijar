
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "~/components/Layout/layout.component";
import formatDateWithAgo from "~/helpers/convertDate";
import rehypeHighlight from "rehype-highlight";
import getProject from "~/helpers/getProject";
import getProjects from "~/helpers/getProjects";
import Image from "next/image";
import ProjectCard from "~/components/projectCard/projectCard.component";

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    }
}

interface Props {
  data: {title: string, date: string, image: string, stack: string }
  content: MDXRemoteSerializeResult
}

export default function Project(props:Props) {
  const { data, content } = props
  return (
    <Layout title={data.title} logoPath="/dashboard-ico.png">
    <div className="font-sans">
        <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-4">
            <Image src={data.image} alt="cover" fill objectFit="cover" />
        </div>
      <h1 className="font-bold text-3xl mb-4 text-white">{data.title}</h1>
      <div className="flex justify-between items-center">
      <time className="text-gray-500 text-sm">{formatDateWithAgo(new Date(data.date))}</time>
        <p className="text-gray-500 text-sm">{data.stack}</p>
      </div>
      <div className="prose-lg prose-ul:text-white prose-li:text-white prose-code:bg-inherit prose-h2:font-semibold prose-h2:text-2xl prose-h2:text-neutral-300 prose-code:text-neutral-300 prose-pre:bg-gray-700 prose-p:text-neutral-300 mt-12 prose-code:text-sm prose-pre:max-w-full prose-pre:overflow-x-auto">
        <MDXRemote {...content} components={{Image}}/>
      </div>
    </div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const posts = getProjects();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

interface StaticProps {
  params: { slug: string }
}

export const getStaticProps = async (props: StaticProps) => {
  const post = getProject(props.params.slug);
  const mdxSource: MDXRemoteSerializeResult = await serialize(post.content, {
    mdxOptions: {
    //  eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      rehypePlugins: [rehypeHighlight]
    }
  });
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};