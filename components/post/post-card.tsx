import { Post } from "@/types/collection"
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
    reverse?: boolean; 
}

const PostCard = ({post, layout= 'horizontal', reverse = false}: PostProps) => {
  return (
    <Link className={`@container ${layout === 'horizontal' 
    ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
    : "space-y-10"}`} href={`/post/${post.slug}`}>
        {/* Post Image */}
        <Image
        className={`rounded-md w-full object-cover object-center h-full max-h-[300px] 
        ${reverse ? "md:order-last": ""}`} 
        alt={post.title} 
        src={post.image} 
        width={600} 
        height={300}/>
        {/* Post Content */}
        <PostContent post={post} />
    </Link>
  )
}
export default PostCard