import React from "react";
import bootstrap from "bootstrap";

const Search = (props) => {

    const handleInput = (event) => {
        event.preventDefault();
        props.querySearch(event.target.value);
    };

    return (
        <div>
            <input onInput={ handleInput
            } placeholder="Who's that pokemon" />
        </div>
    );

};

export default Search;