import React from "react";

// Write your Character component here

const Character = ({props}) => {


    return (
        <div>
            <h2>            {props.name}</h2>
            <p>Gender:      {props.gender}</p>
            <p>Height:      {props.height}</p>
            <p>Birth Year:  {props.birth_year}</p>
        </div>
    )
}

export default Character