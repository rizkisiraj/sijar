import { MDXRemote } from "next-mdx-remote";
import getPost from "~/helpers/getPost";
import getPosts from "~/helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "~/components/Layout/layout.component";

interface Props {
  data: any
  content: any
}

function Post(props:Props) {
  const { data, content } = props
  return (
    <Layout title={data.title} logoPath="/dashboard-ico.png">
    <div className="font-sans">
      <h1 className="font-bold text-3xl mb-4 text-white">{data.title}</h1>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">2,000 Views</p>
        <time className="text-gray-500 italic">{data.date}</time>
      </div>
      <div className="prose-lg prose-h2:font-semibold prose-h2:text-2xl prose-h2:text-neutral-300 prose-code:text-neutral-300 prose-pre:bg-gray-700 prose-p:text-neutral-300 mt-12">
        <MDXRemote {...content} />
      </div>
    </div>
    </Layout>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};