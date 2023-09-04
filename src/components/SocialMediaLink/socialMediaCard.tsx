import { SocialMediaLink } from "~/pages/links";

const SocialMediaCard = (props: SocialMediaLink) => {
    const { link, socialMedia, username } = props

    return (
        <a target="_blank" href={link + username} key={socialMedia} className="w-full inline-block bg-gray-900 rounded-md p-3 hover:-translate-y-1 transition-transform">
            {`${socialMedia} // @${username}`}
        </a>
    )
}

export default SocialMediaCard;