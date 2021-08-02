import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitandler = (e) => {
    e.preventDefault();
    keyword.trim() ? history.push(`/search/${keyword}`) : history.push(`/`);
  };
  return (
    <Form onSubmit={submitandler} inline>
      <Form.Control
        type="text"
        name="query"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search"
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
