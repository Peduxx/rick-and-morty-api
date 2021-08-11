interface CharacterItemProps {
  character: {
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
  };
}

function CharacterItem(props: CharacterItemProps) {
  return (
    <>
      <img src={props.character.image} alt="" />
      <p>Nome: {props.character.name}</p>
      <p>Status: {props.character.status}</p>
      <p>Espécie: {props.character.species}</p>
      <p>Tipo: {props.character.type}</p>
      <p>Gênero: {props.character.gender}</p>
      <p>
        Origem:{" "}
        <a href={props.character.origin.url}>{props.character.origin.name}</a>
      </p>
      <p>
        Onde vive:{" "}
        <a href={props.character.location.url}>
          {props.character.location.name}
        </a>
      </p>
    </>
  );
}

export default CharacterItem;
