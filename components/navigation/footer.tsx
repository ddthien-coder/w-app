import siteConfig from "@/config/site"
import PaddingContainer from "../layout/padding-container"
import Link from "next/link"
import SocialLink from "../elements/social-link"

const Footer = () => {
  return (
    <div className="py-6 mt-10 border-t">
        <PaddingContainer>
            <div>
                <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                <p className="max-w-md mt-2 text-lg text-neutral-700">
                    {siteConfig.description}
                </p>
            </div>
            {/* Social Link */}
            <div className="flex flex-wrap justify-between gap-4 mt-6">
                <div>
                    <div className="flex items-center gap-3 mt-2 text-neutral-600">
                        <SocialLink 
                            platform="facebook"
                            link={siteConfig.socialLinks.facebook}
                         />
                    </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-400">
                    Currently At
                  </div>
                  <div className="flex items-center px-3 py-2 gap-2 bg-white rounded-md shadow-md">
                     <div className="w-2 h-2 rounded-full bg-emerald-400">
                        {siteConfig.currentlyAt}
                     </div>
                </div>
                </div>
            </div>
            {/* Bottom section */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-16 py-3 border-t">
                <div className="text-sm text-neutral-400">
                    All rights are reserved | Copyright of W-app {new Date().getFullYear()}
                </div>
                <div className="text-sm">
                    Made with love {" "}
                    <Link href="/">
                        @w-app
                    </Link>
                </div>
            </div>
        </PaddingContainer>
    </div>
  )
}
export default Footer