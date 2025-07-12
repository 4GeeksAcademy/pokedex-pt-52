export const initialStore=()=>{
  return{
    message: null,
    dark: false,
    pokemons: [], // <-- la idea es que tengo acceso a los pokemones desde donde yo quiera
    favorites: [], // carrito de compras

    auth: false,

    profile: {
      role: "user"
    },

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

      const searchPokemon = store.favorites.find(poke => poke.name == favoriteItem.name);

      if (searchPokemon) return store;

      return {
        ...store,
        favorites: [...store.favorites, favoriteItem]
      }


    case "remove_favorite":

      const { pokemonName } = action.payload

      return {
        ...store,
        favorites: store.favorites.filter(poke => poke.name != pokemonName)
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
