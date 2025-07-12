
import Link from "next/link";
import prisma from "../lib/db";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function PostsList() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const posts = await prisma.post.findMany();

    return (

        <ul>
            {posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                <li key={post.id} className="mb-3">
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}