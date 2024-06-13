"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Book, BookResult } from "@/app/models/Book";
import BookCard from "./BookCard";
import SearchBox from "./SearchBox";
import { ReadingList } from "@/app/models/ReadingList";

export interface BookListProps {
  books: Book[] | undefined;
  readingList: ReadingList[] | null;
}

const BookList = ({ books, readingList }: BookListProps) => {
  const [value, setValue] = useState("1");
  const [search, setSearch] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <SearchBox search={search} setSearch={setSearch} />
      <Box
        sx={{
          ml: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="All Books" value="1" />
              <Tab label="Reading List" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {" "}
            <Grid container spacing={2}>
              {books ? (
                books
                  .filter((item) => {
                    return search === ""
                      ? item
                      : item.title
                          .toLocaleLowerCase()
                          .includes(search.toLowerCase()) ||
                          item.author
                            .toLocaleLowerCase()
                            .includes(search.toLowerCase());
                  })
                  .map((book, index) => {
                    return (
                      <Grid item key={index}>
                        <BookCard
                          book={book}
                          inReadingList={
                            readingList?.some(
                              (n) => n.bookName === book.title
                            ) ?? false
                          }
                        ></BookCard>
                      </Grid>
                    );
                  })
              ) : (
                <div>Fetching</div>
              )}
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2}>
              {books ? (
                books
                  .filter((item) => {
                    return search === ""
                      ? item
                      : item.title
                          .toLocaleLowerCase()
                          .includes(search.toLowerCase()) ||
                          item.author
                            .toLocaleLowerCase()
                            .includes(search.toLowerCase());
                  })
                  .map((book, index) => {
                    if (
                      readingList?.some((n) => n.bookName === book.title) ??
                      false
                    ) {
                      return (
                        <Grid item key={index}>
                          <BookCard
                            book={book}
                            inReadingList={
                              readingList?.some(
                                (n) => n.bookName === book.title
                              ) ?? false
                            }
                          ></BookCard>
                        </Grid>
                      );
                    }
                  })
              ) : (
                <div>Fetching</div>
              )}
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default BookList;
