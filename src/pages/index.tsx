import { signIn, signOut, useSession } from "next-auth/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { IconBrandFlutter, IconBrandSwift, IconBrandReact } from "@tabler/icons-react";
import BrandCard from "~/components/BrandCard/brandCard.component";
import ProjectCard, { Stack } from "~/components/projectCard/projectCard.component";
import ArticleCard from "~/components/ArticleCard/articleCard.component";
import Layout from "~/components/Layout/layout.component";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
          <Layout>
            <div className={poppins.className}>
            <section className="mb-4">
              <div className="mb-4">
                <Image className="mx-auto mb-2 rounded-full border-4 border-indigo-500" width={150} height={150} src="/avatar.webp" alt="avatar" />
              </div>
              <h1 className="text-white font-semibold text-2xl mb-2 text-center">Rizki Siraj</h1>
              <p className="text-gray-300 font-light text-sm text-center">Mobile Developer | Student of the Universe | Lifelong Learner</p>
            </section>
            <hr />
            <section className="my-4 text-gray-200">
              <p>Hey guys! Siraj here, and this is my blog. I'm a 3rd year CompSci student, who is very passionate on learning about technology especially on mobile development. I spend most of my time by coding stuffs with {<BrandCard icon={<IconBrandFlutter className="inline-block" size={14} />} name="Flutter" link="flutter.dev" />}, {<BrandCard icon={<IconBrandSwift className="inline-block" size={14} />} name="SwiftUI" link="https://developer.apple.com/xcode/swiftui/" />}, {<BrandCard icon={<IconBrandReact className="inline-block" size={14} />} name="React" link="react.dev" />}. I also made several projects that you can see here :</p>
              <div className="my-6 flex flex-wrap gap-2">
                <ProjectCard id="1231" name="MealMinder" stack={Stack.mobile} />
                <ProjectCard id="12321" name="MealMinder" stack={Stack.mobile} />
              </div>
              <p>Aside from that, i also really like to write. It's not just a hobby for me; it's my way of capturing moments, unraveling thoughts, and painting emotions with sentences. Mostly i write about technical things that i just learned. Here some articles that you might like from me :</p>
              <div className="my-6 flex flex-col gap-4">
                <ArticleCard id="1236" title="How to Basic" views={30500} />
                <ArticleCard id="1233" title="How to Basic" views={30500} />
                <ArticleCard id="12363" title="How to Basic" views={30500} />
              </div>
              <p>If you're interested on knowing more of my works, you can contact me through <a className="underline decoration-wavy text-white" href="#">Linkedin</a> and email.</p>
            </section>
            </div>
          </Layout>
  );
}
