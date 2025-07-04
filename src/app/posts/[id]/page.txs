import prisma from "../../../lib/db"; // Adjust path if needed
import UpvoteButton from "../../../components/upvote-button";

type PageProps = {
    params: { id: string }
};

export default async function Page({ params }: PageProps) {
    // ...existing code...
    const post = await prisma.post.findUnique({
        where: { id: Number(params.id) },
    });

    if (!post) {
        return <main className="px-7 pt-24 text-center">Post not found.</main>;
    }

    return (
        <main className="px-7 pt-24 text-center">
            <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
            <p className="max-w-[700px] mx-auto">{post.body}</p>
            <UpvoteButton />
        </main>
    );
}