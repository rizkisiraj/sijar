import { Poppins } from "next/font/google";
import Image from "next/image";
import { IconBrandFlutter, IconBrandSwift, IconBrandReact } from "@tabler/icons-react";
import BrandCard from "~/components/BrandCard/brandCard.component";
import ProjectCard from "~/components/projectCard/projectCard.component";
import ArticleCard from "~/components/ArticleCard/articleCard.component";
import Layout from "~/components/Layout/layout.component";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import getPosts from "~/helpers/getPosts";
import avatar from 'public/avatar.png'

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

interface Props {
  posts: {
      slug: string
      data: {
          title: string
          content: MDXRemoteSerializeResult
      }
  }[]
}

export default function Home(props:Props) {
  const { posts } = props
  return (
          <Layout title="Home" logoPath="/home-ico.png">
            <div className={poppins.className}>
            <section className="mb-4">
              <div className="mb-4">
                <Image loading="lazy" placeholder="blur" className="mx-auto mb-2 rounded-full border-4 border-indigo-500" width={180} height={180} src={avatar} alt="avatar" />
              </div>
              <h1 className="text-white font-semibold text-2xl mb-2 text-center">Rizki Siraj</h1>
              <p className="text-gray-300 font-light text-sm text-center">Mobile Developer | Student of the Universe | Lifelong Learner</p>
            </section>
            <hr />
            <section className="my-4 text-gray-200 text-base leading-8">
              <p>Hey guys! Siraj here, and this is my blog. I&apos;m a 3rd year CompSci student, who is very passionate on learning about technology especially on mobile development. I spend most of my time by coding stuffs with {<BrandCard icon={<IconBrandFlutter className="inline-block" size={14} />} name="Flutter" link="https://flutter.dev" />}, {<BrandCard icon={<IconBrandSwift className="inline-block" size={14} />} name="SwiftUI" link="https://developer.apple.com/xcode/swiftui/" />}, {<BrandCard icon={<IconBrandReact className="inline-block" size={14} />} name="React" link="https://react.dev" />}. I also made several projects that you can see here :</p>
              <div className="my-6 flex flex-wrap gap-2">
                <ProjectCard id="1231" name="MealMinder" stack={"Mobile App"} />
                <ProjectCard id="12321" name="MealMinder" stack={"Mobile App"} />
              </div>
              <p>Aside from that, i also really like to write. It&apos;s not just a hobby for me; it&apos;s my way of capturing moments, unraveling thoughts, and painting emotions with sentences. Mostly i write about technical things that i just learned. Here some articles that you might like from me :</p>
              <div className="my-6 flex flex-col gap-4">
                {
                  posts.map(post => {
                    return (
                      <ArticleCard key={post.slug} id={post.slug} title={post.data.title} views={2000} />
                    )
                  })
                }
              </div>
              <p>If you&apos;re interested on knowing more of my works, you can contact me through <a className="underline decoration-wavy text-white" href="#">Linkedin</a> and email.</p>
            </section>
            </div>
          </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  };
};
