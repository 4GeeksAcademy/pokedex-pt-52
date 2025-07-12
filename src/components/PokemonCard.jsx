import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const pokemonPicture = (pokemonNumber) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg`

const PokemonCard = ({ pokemon }) => {

    const { store, dispatch } = useGlobalReducer()

    const isFavorite = store.favorites.find(poke => poke.name == pokemon.name);

    const addFavoritePokemon = (favorite) => {
        dispatch({
            type: "add_favorite",
            payload: { favoriteItem: favorite }
        })
    }

    const removeFavoritePokemon = (pokemon) => {
        dispatch({
            type: "remove_favorite",
            payload: { pokemonName: pokemon.name }
        })
    }

    return <div className="p-2 col-3" style={{ minHeight: "186px"}}>
        <div className="card d-flex flex-column h-100" style={{ minHeight: "186px"}}>
            <img src={pokemonPicture(pokemon.number)} className="card-img-top mx-auto mb-auto"
                style={{ maxWidth: '160px', maxHeight: '160px' }} alt="..."
            />
            <div className="m-2 mt-auto">
                <h5 className="card-title">{pokemon.name}</h5>
                    <p className="card-text"># {pokemon.number} </p>
                <button className="btn btn-primary"
                    onClick={() =>  !isFavorite ? addFavoritePokemon(pokemon) : removeFavoritePokemon(pokemon) }
                >	
                    { isFavorite && <i className="fa-solid fa-heart text-white"></i> }
                    { !isFavorite &&  <i className="fa-regular fa-heart"></i> }
                </button>
            </div>
        </div>
    </div>
}

export default PokemonCard;