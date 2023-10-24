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
        <Layout title="Project" logoPath="/paper-ico.png">
            <div className="font-sans">
                <h1 className="text-4xl text-white font-semibold mb-2">Projects</h1>
                <p className="font-light text-gray-300 text-sm mb-6">List of websites, models, and apps that i have made.</p>
                <section className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {
                        projects.map(project => {
                            return (
                                <ProjectLink key={project.slug} id={project.slug} image={project.data.image} name={project.data.title} stack={project.data.stack} />
                            )
                        })
                    }
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