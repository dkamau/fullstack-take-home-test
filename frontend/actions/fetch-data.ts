"user-server";

import { BookResult } from "@/app/models/Book";

export async function fetchBooks() {
  try {
    let results = await fetch("http://localhost:4000", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `{
          books {
            author
            coverPhotoURL
            readingLevel
            title
          }
        }`,
      }),
    });
    let books: BookResult | null = await results.json();
    return books;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
