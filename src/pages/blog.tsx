import { Poppins } from "next/font/google";
import ArticleCard from "~/components/ArticleCard/articleCard.component";
import ArticleLink from "~/components/ArticleLink/articleLink.component";
import ComingSoon from "~/components/ComingSoon/comingSoon.component";
import Layout from "~/components/Layout/layout.component";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

export default function Blog() {
    return (
        <Layout title="Blog" logoPath="/paper-ico.png">
            <div className={poppins.className}>
                <h1 className="text-4xl text-white font-semibold mb-2">Blogs</h1>
                <p className="font-light text-gray-300 text-sm mb-6">List of writings that i have made.</p>
                <section className="flex flex-col gap-4">
                    <ArticleLink id="123" title="How to Basic" views={2000} key={123} />
                    <ArticleLink id="1234" title="How to Basic" views={2000} key={123} />
                    <ArticleLink id="1236" title="How to Basic" views={2000} key={123} />
                </section>
            </div>
        </Layout>
    )
}