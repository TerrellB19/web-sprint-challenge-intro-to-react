import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const StyledApp = styled.div`
  text-align: center;

.Header {
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
}
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([])

  useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
          setCharacter(res.data)})
      .catch(err => console.error('There was an error'))
  }, [])

  


  return (
    <StyledApp>
      <h1 className="Header">Characters</h1>
      {character.map((character) => {
          return <Character key={`App-characterMap-character${character.name}`} props={character}/> 
          })}
    </StyledApp>
    
    
  );
}

export default App;
