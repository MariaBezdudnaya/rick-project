import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api";
import { CharacterList } from "../presentational/CharacterList";

export const CharactersContainer = ({ ids }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      console.log(data);
      setCharacters(data);
      setIsLoading(false);
    });
  }, [ids]);

  return <CharacterList characters={characters} isLoading={isLoading} />;
};