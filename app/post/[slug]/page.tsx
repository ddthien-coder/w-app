import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug
        }
    })

}

const Page = ({
    params,
}: {
    params: {
        slug: string;
    };
}) => {
    const post = DUMMY_POSTS.find(
        (post) => post.slug === params.slug
    );
    if (!post) {
        notFound();
    }
    return (
            <PaddingContainer>
                <PostHero post={post}/>
                <div className="flex flex-col gap-10 mt-10 md:flex-row">
                    <div className="relative">
                     <div className="sticky flex items-center md:flex-col gap-5 top-20">
                        <div className="font-medium md:hidden">Share this content</div>
                        <SocialLink
                        isShareURL 
                        platform="facebook" 
                        link={`https://www.facebook.com/sharer/sharer.php?u=${
                            `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />
                     </div>
                    </div>
                    <div className="bg-slate-200 rounded-md">
                        <PostBody body={post.body} />
                    </div>
                    <CTACard />
                </div>
               
            </PaddingContainer>
    )
}

export default Page