import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ArticleLink, {type Article } from "~/components/ArticleLink/articleLink.component";
import Layout from "~/components/Layout/layout.component";
import ProjectLink from "~/components/ProjectLink/projectLink.component";
import getPosts from "~/helpers/getPosts";
import getProjects from "~/helpers/getProjects";

interface Props {
    projects: {
        slug: string
        data: {
            title: string,
            image: string,
            type: string,
            stack: string,
            content: MDXRemoteSerializeResult
        }
    }[]
}

export default function Blog(props:Props) {
    const { projects } = props

    return (
        <Layout title="Blog" logoPath="/paper-ico.png">
            <div className="font-sans">
                <h1 className="text-4xl text-white font-semibold mb-2">Blogs</h1>
                <p className="font-light text-gray-300 text-sm mb-6">List of writings that i have made.</p>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-4 gap-4">
                    {
                        projects.map(project => {
                            return (
                                <ProjectLink key={project.slug} id={project.slug} image={project.data.image} name={project.data.title} stack={project.data.stack} />
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
    const projects = getProjects()
  
    return {
      props: {
        projects,
      },
    };
  };