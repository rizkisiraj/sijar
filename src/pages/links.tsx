import Layout from "~/components/Layout/layout.component";
import { Poppins } from "next/font/google";
import SocialMediaCard from "~/components/SocialMediaLink/socialMediaCard";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], preload: false, });

export interface SocialMediaLink {
    socialMedia: string,
    username: string,
    link: string
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        socialMedia: "Discord",
        username: "martinmcfly#6195",
        link: "https://discordapp.com/users/"
    },
    {
        socialMedia: "Medium",
        username: "sijarawoods",
        link: "https://medium.com/@"
    },
    {
        socialMedia: "Instagram",
        username: "rizki.siraj",
        link: "https://instagram.com/"
    },
    {
        socialMedia: "Twitter",
        username: "fatbritishian",
        link: "https://twitter.com/"
    },
]

export default function Links() {
    return (
        <Layout title="Links" logoPath="/link-ico.png">
            <div className={poppins.className}>
                <h1 className="text-4xl text-white font-semibold mb-2">Links</h1>
                <p className="font-light text-gray-300 text-sm mb-6">Social media links that you can use to contact me.</p>
                <section className="w-full bg-gray-700 p-4 rounded-md text-white text-sm font-light flex flex-col gap-4">
                    {
                        socialMediaLinks.map(socialMediaLink => {
                            return (
                                <SocialMediaCard link={socialMediaLink.link} key={socialMediaLink.socialMedia} socialMedia={socialMediaLink.socialMedia} username={socialMediaLink.username} />
                            )
                        })
                    }
                </section>
            </div>
        </Layout>
    )
}