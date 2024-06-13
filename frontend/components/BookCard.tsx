import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Book } from "@/app/models/Book";

export interface BookCardProps {
  inReadingList: boolean;
  book: Book;
}

const BookCard = ({ book, inReadingList }: BookCardProps) => {
  const [inList, setInList] = useState(inReadingList);
  const addBook = async (bookToAdd: Book) => {
    const res = await fetch("/api/readingList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToAdd),
    });

    if (res.ok) {
      setInList(true);
    } else {
      console.log(res);
    }
  };

  const removeBook = async (bookToRemove: Book) => {
    const res = await fetch("/api/readingList", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToRemove),
    });

    if (res.ok) {
      setInList(false);
    } else {
      console.log(res);
    }
  };

  return (
    <Card sx={{ maxWidth: 170 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={"./" + book.coverPhotoURL}
        title="green iguana"
      />
      <CardContent>
        <div
          style={{
            lineHeight: "1.5em",
            height: "3em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {book.title}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          by {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        {inList ? (
          <Button size="small" color="error" onClick={() => removeBook(book)}>
            Remove from list
          </Button>
        ) : (
          <Button size="small" onClick={() => addBook(book)}>
            Add to reading list
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default BookCard;
