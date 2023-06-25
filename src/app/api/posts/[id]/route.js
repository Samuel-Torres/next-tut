import { NextResponse } from "next/server"
import connect from "@/utils/db"
import posts from "@/models/posts"

export const GET = async (request, { params }) => {
    const { id } = params
    try {
        await connect()
        const allPosts = await posts.findById(id);

        return new NextResponse(JSON.stringify(allPosts), { status: 200 })
    }
    catch(err) {
        return new NextResponse("Database Error", { status: 500 })
    }

}