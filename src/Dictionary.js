import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';

function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultkey);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(url).then(handleResponse);

        let pexelKey = '563492ad6f91700001000001fa46043ef3fd42199363d8d1c088ad4f';

        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelKey}` };

        axios.get(pexelsUrl, {
            headers: headers
        }).then(handlePexelResponse);

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
                <Photos photos={photos} />
            </section>
        </div>)
    } else {
        load();
        return "Loading";
    }

}

export default Dictionary;