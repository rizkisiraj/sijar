import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import getPost from "~/helpers/getPost";
import getPosts from "~/helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "~/components/Layout/layout.component";
import formatDateWithAgo from "~/helpers/convertDate";

interface Props {
  data: {title: string, date: string}
  content: MDXRemoteSerializeResult
}

export default function Post(props:Props) {
  const { data, content } = props
  return (
    <Layout title={data.title} logoPath="/dashboard-ico.png">
    <div className="font-sans">
      <h1 className="font-bold text-3xl mb-4 text-white">{data.title}</h1>
      <div className="flex justify-between items-center">
      <time className="text-gray-500 text-sm">{formatDateWithAgo(new Date(data.date))}</time>
        <p className="text-gray-500 text-sm">2,000 Views</p>
      </div>
      <div className="prose-lg prose-h2:font-semibold prose-h2:text-2xl prose-h2:text-neutral-300 prose-code:text-neutral-300 prose-pre:bg-gray-700 prose-p:text-neutral-300 mt-12 prose-code:text-xs">
        <MDXRemote {...content} />
      </div>
    </div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const posts = getPosts();
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
  const post = getPost(props.params.slug);
  const mdxSource: MDXRemoteSerializeResult = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};