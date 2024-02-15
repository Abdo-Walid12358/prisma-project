import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(request) {
    const res = await request.json();
    const { id } = res;

    const result = await prisma.post.delete({
        where: {
            id: id
        }
    });

    return NextResponse.json({ result });
}