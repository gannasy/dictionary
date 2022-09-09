import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        console.log(response);

    }

    function search(event) {
        event.preventDefault();

        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(url).then(handleResponse);
    }
    //https://api.dictionaryapi.dev/api/v2/entries/en/<word>



    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (<div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        </form>
    </div>)
}

export default Dictionary;