import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import './Results.css';

export default function Results(props) {

    if (props.description) {
        return (<div className="Results">
            <section>
                <h2>{props.description.word}</h2>
                {props.description.phonetics.map(function (phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    )
                })}

            </section>
            {props.description.meanings.map(function (meaning, index) {
                return (
                    <section>

                        <Meaning meaning={meaning} />
                    </section>
                )
            })
            }
        </div >)
    }
    else {
        return null;
    }
};