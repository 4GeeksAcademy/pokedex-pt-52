export const initialStore=()=>{
  return{
    message: null,
    dark: false,
    pokemons: [], // <-- la idea es que tengo acceso a los pokemones desde donde yo quiera
    favorites: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: "green",
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'update_pokemons':
      const { newPokemons } = action.payload

      return {
        ...store,
        pokemons: newPokemons
      }

    case 'add_favorite':

      const { favoriteItem } = action.payload

      return {
        ...store,
        favorites: [...store.favorites, favoriteItem]
      }

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    default:
      throw Error('Unknown action.');
  }    
}
