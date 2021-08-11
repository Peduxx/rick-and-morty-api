import React, { useEffect, useState } from "react";
import CharacterItem from "./components/CharacterItem";
import api from "./services/api";

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await api.get("/character/?page=2");

      setCharacters(data.results);
    };

    getCharacters();
  }, []);

  return (
    <div className="App">
      <h1>Personagens</h1>
      <ul>
        {characters.map((character: ICharacter) => (
          <li key={character.id}>
            <CharacterItem character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
