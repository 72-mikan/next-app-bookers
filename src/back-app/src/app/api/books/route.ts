import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const GET = async() => {
  return Response.json({ message: "Internal Server Error" });
}

export const POST = async(request: NextRequest) => {
  try {
    console.log("test");
    console.log(request.json());
    const body = await request.json();
    await prisma.book.create({
      data: {
        title: body.title,
        body: body.body,
      },
    });
  } catch (err) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
} 