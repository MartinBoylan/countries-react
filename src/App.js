import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import Country from "./Country";
import "./App.css";
import Search from "./Search";

function App() {
    const [countries] = useState(countriesAll);
    const [countriesShow, setCountriesShow] = useState(countriesAll);

    return (
        <div className="App">
            <Search countries={countries} setCountriesShow={setCountriesShow} />
            <div className="container">
                {countriesShow.map((country) => {
                    return <Country key={country.name} country={country} />;
                })}
            </div>
        </div>
    );
}

export default App;
