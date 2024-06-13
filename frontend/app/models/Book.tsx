export interface BookResult {
  data: Data;
}

export interface Data {
  books: Book[];
}

export interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}
