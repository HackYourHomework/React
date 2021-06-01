import React, { useState, useEffect } from "react";

function RandomJoke (){
    const [ joke, setJoke] = useState ({ });

    useEffect(() => {
        getJoke ();
    }, []);

    async function getJoke (){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke(data);
    };
    return (
    <div>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
    </div>
    );
    };

export default RandomJoke;