import React, { useEffect, useState } from "react";
import CharacterItem from "./components/CharacterItem";
import api from "./services/api";
import { ContentButtons, ContentList, Content } from "./styles";

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
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage <= 34) setCurrentPage((current) => current + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage((current) => current - 1);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await api.get(`/character/?page=${currentPage}`);

      setCharacters(data.results);
    };

    getCharacters();
  }, [currentPage]);

  return (
    <Content>
      <h1>Personagens</h1>
      <ContentList>
        <ul>
          {characters.map((character: ICharacter) => (
            <li key={character.id}>
              <CharacterItem character={character} />
            </li>
          ))}
        </ul>
      </ContentList>

      <ContentButtons>
        <button id="backButton" onClick={() => previousPage()}>
          Back
        </button>
        <button id="nextButton" onClick={() => nextPage()}>
          Next
        </button>
      </ContentButtons>
    </Content>
  );
}

export default App;
