import { Poppins } from "next/font/google";
import ComingSoon from "~/components/ComingSoon/comingSoon.component";
import Layout from "~/components/Layout/layout.component";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

export default function Blog() {
    return (
        <Layout>
            <ComingSoon />
        </Layout>
    )
}