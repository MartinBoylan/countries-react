import React from "react";
import Flag from "./Flag";
import CountryExpand from "./CountryExpand";

const Country = ({ country }) => {
    return (
        <div className="country">
            <Flag flag={country.flag} />
            <CountryExpand
                name={country.name}
                region={country.region}
                population={country.population.toLocaleString()}
                capital={country.capital}
            />
        </div>
    );
};

export default Country;
