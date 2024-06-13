import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";
import { Book } from "../../models/Book";

export async function POST(request: Request) {
  const body: Book = await request.json();

  await createDefaultUser();

  const readingList = await prisma.userReadingList.create({
    data: {
      userId: 1,
      bookName: body.title,
    },
  });

  return NextResponse.json(readingList);
}

export async function DELETE(request: Request) {
  const body: Book = await request.json();

  const book = await prisma.userReadingList.findFirst({
    where: {
      bookName: body.title,
    },
  });

  if (book !== null) {
    await prisma.userReadingList.delete({
      where: {
        id: book?.id,
      },
    });
  }

  return NextResponse.json(null);
}

async function createDefaultUser() {
  var users = await prisma.user.count();
  console.log(users);
  if (users === 0) {
    await prisma.user.create({
      data: {
        fullName: "Default user",
      },
    });
  }
}
