import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl, ControlLabel } from "react-bootstrap";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Movie"
          aria-label="Search Movie"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={callSearchFunction}
            type="submit"
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

export default Search;
