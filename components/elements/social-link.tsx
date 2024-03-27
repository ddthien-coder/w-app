import { Facebook } from "lucide-react";
import Link from "next/link";

const SocialLink = (
    {platform,
     link,
     isShareURL = false
    }: {platform:string, link:string, isShareURL?: boolean}) => {
    
    const getIcon = (platform:string) => {
        switch (platform) {
            case "facebook":
                return <Facebook />
        }
    };
    return <Link href={link}>
        <div className={`${
            isShareURL
            ? "px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 duration-100 ease-in-out transition-colors"
            : ""
        }`}></div>
        {getIcon(platform)}</Link>
}

export default SocialLink