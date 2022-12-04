import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";

export const SearchComponent = () => {
  const router = useRouter();
  const [searchterm, setSearchterm] = useState("");

  const onSearchTerm = () => {
    if (searchterm.trim().length === 0) return;
    navigateTo(`/search/${searchterm}`);
  };

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <input
        type="search"
        data-testid="inputsearch"
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearchTerm()}
        placeholder="Search"
        className="me-2 form-control"
        aria-label="Search"
      />
      <Button
        data-testid="buttonsearch"
        onClick={onSearchTerm}
        variant="outline-secondary"
        size="sm"
        className="ms-2"
      >
        Search
      </Button>
    </>
  );
};
