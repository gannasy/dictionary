import React from 'react';
import Meaning from './Meaning';

export default function Results(props) {

    if (props.description) {
        return (<div className="Results">
            <h2>{props.description.word}</h2>
            <h2>{props.description.phonetic}</h2>
            {props.description.meanings.map(function (meaning, index) {
                return (<div key={index}>
                    <Meaning meaning={meaning} />
                </div>)
            })}
        </div>)
    }
    else {
        return null;
    }
};