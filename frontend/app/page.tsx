import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BookList from "@/components/BookList";
import { fetchBooks } from "@/actions/fetch-data";
import { prisma } from "@/prisma/prisma";

export default async function Home() {
  const result = await fetchBooks();
  const readingList = await prisma.userReadingList.findMany();

  return (
    <Container>
      <Box
        sx={{
          my: 2,
          mb: 8,
          display: "block",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BookList
          books={result?.data.books}
          readingList={readingList}
        ></BookList>
      </Box>
    </Container>
  );
}
