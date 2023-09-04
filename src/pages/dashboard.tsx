import Layout from "~/components/Layout/layout.component"
import ComingSoon from "~/components/ComingSoon/comingSoon.component"
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

export default function Dashboard() {
    return (
        <Layout title="Dashboard" logoPath="/dashboard-ico.png">
            <ComingSoon />
        </Layout>
    )
}