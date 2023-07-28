export const validation = (id, characters, personaje) => {
    if (isNaN(id)) {
        return alert('debe ingresar un numero')
      }
      const repetido = personaje.find(char => char.id === Number(id)) !== undefined
      if (repetido) { 
      return alert('Ese personaje ya esta en la lista')
      }
      const char = characters.find(char => char.id === Number(id))
      return char
}