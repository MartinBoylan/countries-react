import React from "react";

const CountryExpand = ({ name, population, region, capital }) => {
    return (
        <ul>
            <li>Country: {name}</li>
            <li>Region: {region}</li>
            <li>Pop: {population} </li>
            <li>Capital City: {capital}</li>
        </ul>
    );
};

export default CountryExpand;
