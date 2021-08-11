import React, { useEffect, useState } from "react";
import CharacterItem from "./components/CharacterItem";
import api from "./services/api";
import {ContentButtons, ContentList, Content} from "./styles";
import { Next, Back } from "./services/buttonAction"

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
  const currentPage = 1;

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await api.get(`/character/?page=${currentPage}`);

      setCharacters(data.results);
    };

    getCharacters();
  }, []);

  return (
    <Content>
    <ContentList>
      <ul>
        <h1>Personagens</h1>
        {characters.map((character: ICharacter) => (
          <li key={character.id}>
            <CharacterItem character={character} />
          </li>
        ))}
      </ul>
    </ContentList>
    <ContentButtons>
      <button onClick={() => (Next(currentPage))}>Back</button>
      <button>Next</button>
    </ContentButtons>
    </Content>
  );
}

export default App;
