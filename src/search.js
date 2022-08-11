import React from "react";

const SearchBar = ({keyword, setKeyword}) => {
    return (
        <input className="searchBarFeature"
            value={keyword}
            placeholder={"Search Park"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar