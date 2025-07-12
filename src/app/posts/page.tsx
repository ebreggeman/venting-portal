export const dynamic = "force-dynamic";
import PostsList from "../../components/posts-list";
export default async function Page() {


    return <main className="text-center pt-16 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
        {await PostsList()}
    </main>
}