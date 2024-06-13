"use client";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BookOutlined from "@mui/icons-material/BookOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Clear from "@mui/icons-material/Clear";
import React, { Dispatch, SetStateAction } from "react";

export interface SearchBoxProps {
  search: String;
  setSearch: Dispatch<SetStateAction<any>>;
}

const SearchBox = ({ search, setSearch }: SearchBoxProps) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <BookOutlined />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books"
        inputProps={{ "aria-label": "search google maps" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={() => setSearch("")}
      >
        <Clear />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
