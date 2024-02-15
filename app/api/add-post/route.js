import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(request) {
    const res = await request.json();
    const { title, content } = res;

    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: { create: { name: "Chloe Price" } },
            published: true
        }
    });

    return NextResponse.json({ result });
}