import Layout from "~/components/Layout/layout.component";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

export default function Links() {
    return (
        <Layout title="Links" logoPath="/link-ico.png">
            <div className={poppins.className}>
                <h1 className="text-4xl text-white font-semibold mb-2">Links</h1>
                <p className="font-light text-gray-300 text-sm">Social media links that you can use to contact me.</p>
                <section>
                    <div>
                        
                    </div>
                </section>
            </div>
        </Layout>
    )
}