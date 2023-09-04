import Layout from "~/components/Layout/layout.component"
import ComingSoon from "~/components/ComingSoon/comingSoon.component"

export default function Dashboard() {
    return (
        <Layout title="Dashboard" logoPath="/dashboard-ico.png">
            <ComingSoon />
        </Layout>
    )
}