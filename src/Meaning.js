import React from 'react';
import Synonims from './Synonims';
import './Meaning.css';

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>

                        <div className="definition">
                            {definition.definition}
                        </div>
                        <br />
                        <Synonims synonims={definition.synonyms} />

                    </div>
                )
            })}

        </div >
    )
}