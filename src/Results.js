import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';

export default function Results(props) {

    if (props.description) {
        return (<div className="Results">
            <h2>{props.description.word}</h2>
            {props.description.phonetics.map(function (phonetic, index) {
                return (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                )
            })}
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