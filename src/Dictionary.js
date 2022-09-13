import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultkey);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response);


        setResults(response.data[0]);
    }

    function search() {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }
    //https://api.dictionaryapi.dev/api/v2/entries/en/<word>

    function load() {
        setLoaded(true);
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    if (loaded) {
        return (<div className="Dictionary">
            <section>
                <h1>What are you looking for?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultkey} />
                </form>
                <div className="hint">suggested words: wine, yoga, plan</div>
                <Results description={results} />
            </section>
        </div>)
    } else {
        load();
        return "Loading";
    }

}

export default Dictionary;