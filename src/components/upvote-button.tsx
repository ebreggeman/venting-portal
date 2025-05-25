"use client";

import { useState } from "react";

export default function UpvoteButton() {
    const [upvoteCount, setUpvoteCount] = useState(0);
    return (
        <><button onClick={() => {
            setUpvoteCount(upvoteCount + 1);
        }} className="bg-blue-500 text-white p-2 mt-10"
        >
            Like
        </button><div className="p-3">{upvoteCount} Likes</div></>

    )
}