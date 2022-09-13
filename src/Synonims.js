import React from 'react';

export default function Synonims(props) {
    if (props.synonims) {
        return (
            <ul className="Synonims">
                {props.synonims.map(function (synonym, index) {
                    return <li key={index}>{synonym}</li>
                })}
            </ul>);
    } else {
        return null;
    }

}