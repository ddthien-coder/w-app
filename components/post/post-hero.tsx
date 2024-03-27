import { Post } from "@/types/collection";
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps {
    post: Post;
}


const PostHero = ({post} : PostHeroProps) => {
  return (
    <div>
        <PostContent isPostPage post={post} />
        <Image
        className="rounded-md object-cover object-center h-[300px] md:h-[500px]"
        src={post.image} 
        width={1280} 
        height={500} 
        alt={post.title} />
    </div>
  )
}
export default PostHero