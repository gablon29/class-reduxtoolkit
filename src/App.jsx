import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "./redux/charAction";
import { validation } from "./validation";

function App() {
const dispatch = useDispatch();
const characters  = useSelector(state => state.characters?.characters)
const [personaje, setPersonaje] = useState([])
const [searchChar, setSearchChar ] = useState()

useEffect(() => {
  dispatch(getCharacters())
}, [dispatch])

  function search(id) {
    const char = validation(id, characters, personaje)
    if(char) {
    setPersonaje([...personaje, char])
  } else {
    return personaje
  }
}  

  function searchInput(e) {
    e.preventDefault()
    let v = e.target.value;
    setSearchChar(v)
  }

  return (
    <>
      <h1>hola</h1>
      <button onClick={() => search(searchChar)}>buscar</button>
      <input placeholder="buscar" name="num" onChange={searchInput}></input>
     { personaje && personaje.map(({name, id}) => {
      return (
        <div key={id}>
        <h3>{name}</h3>
        </div>
      )
     })}
    </>
  )
}

export default App
