import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ArticleLink, {type Article } from "~/components/ArticleLink/articleLink.component";
import Layout from "~/components/Layout/layout.component";
import getPosts from "~/helpers/getPosts";

interface Props {
    posts: {
        slug: string
        data: {
            title: string
            content: MDXRemoteSerializeResult
        }
    }[]
}

export default function Blog(props:Props) {
    const { posts } = props

    return (
        <Layout title="Blog" logoPath="/paper-ico.png">
            <div className="font-sans">
                <h1 className="text-4xl text-white font-semibold mb-2">Blogs</h1>
                <p className="font-light text-gray-300 text-sm mb-6">List of writings that i have made.</p>
                <section className="flex flex-col gap-4">
                    {
                        posts.map(post => {
                            return (
                                <ArticleLink id={post.slug} views={2000} title={post.data.title} key={post.slug} />
                            )
                        })
                    }
                    {/* <ArticleLink id="123" title="How to Basic" views={2000} key={123} />
                    <ArticleLink id="1234" title="How to Basic" views={2000} key={123} />
                    <ArticleLink id="1236" title="How to Basic" views={2000} key={123} /> */}
                </section>
            </div>
        </Layout>
    )
}

export const getStaticProps = () => {
    const posts = getPosts()
  
    return {
      props: {
        posts,
      },
    };
  };