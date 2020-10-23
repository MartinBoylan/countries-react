import React, { useState, useEffect } from "react";

const Search = ({ countries, setCountriesShow }) => {
    const [searchInput, setSearchInput] = useState("");

    const handler = (event) => {
        setSearchInput(event.target.value);
    };

    useEffect(() => {
        const searchReturn = countries.filter((country) => {
            return (
                country.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                country.capital
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            );
        });
        setCountriesShow(searchReturn);
    }, [countries, searchInput, setCountriesShow]);

    return (
        <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handler}
        />
    );
};

export default Search;
