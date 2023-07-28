import { addCharacters } from "./characterSlice";

export const getCharacters = () => (dispatch) => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json()) // extraemos el contenido desde el cuerpo del JSON
    .then(data => dispatch(addCharacters(data.results)))
    .catch(error => console.error(error.message));
};
