import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {

    return (
        <main className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
            <form
                action={createPost}
                className="flex flex-col max-w-[600px] mx-auto gap-2 my-10">
                <input
                    type="text"
                    name="title"
                    placeholder="Title of your vent"
                    className="border rounded px-3 h-10"
                    required
                />

                <textarea
                    name="body"
                    placeholder="Enter your vent here"
                    className="border rounded px-3 py-2"
                    rows={6}
                />

            </form>
            <div className="flex flex-col mx-auto max-w-[200px] gap-4 text-center">
                <button className="h-10 bg-blue-500 px-5 rounded text-white">Submit</button>
                <LogoutLink className="h-10 px-5 rounded text-black">Log out</LogoutLink>
            </div>
        </main>
    );
}