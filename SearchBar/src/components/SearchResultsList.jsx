import React from "react";
import './SearchResultsList.css';
import {SearchResult} from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => (
        <SearchResult result={result} key={result.id} />
      ))}
    </div>
  );
};

export default SearchResultsList;
