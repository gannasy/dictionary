import React from 'react';
import Synonims from './Synonims';

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>
                            {definition.definition}
                            <br />
                            <Synonims synonims={definition.synonyms} />
                        </p>
                    </div>
                )
            })}

        </div >
    )
}