import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { capitalize } from "../utils";
import { pokemonPicture, FavoriteButton } from "../components/PokemonCard";

const PokemonDetails = () => {

    const { pokemonNumber } = useParams();
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/`

    const getPokemon = async (pokemonId) => {
        const resp = await fetch(apiUrl + pokemonId);
        const datos = await resp.json()
        setPokemon(datos)
    }

    const extractNumberFromUrl = (url = "") => {
        if(!url) return ""
        let spliceUrl = url.split("/")
        return spliceUrl[spliceUrl.length - 2]
    }


    const typeImage = (typeNumber) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeNumber}.png`

    useEffect(() => {

        getPokemon(pokemonNumber)

    },[pokemonNumber]) // <-- cada vez que cambie


    return <div className="d-flex flex-column text-center w-100">
        <h1 className="my-5">{pokemon && capitalize(pokemon.name)} </h1>
        
        <img src={pokemonPicture(pokemonNumber)} className="mx-auto" width={200} height={200}/>
        
        <div>

            {pokemon && pokemon.types.map(typeItem => <p key={typeItem.type.name}>
                    <img src={ typeImage(extractNumberFromUrl(typeItem.type.url))} />
                </p>
            )}

        </div>


        <div className="mx-auto">
            <button onClick={() => {
                console.log("") // agregar a acá logica de negocios
                // navigate se usa cuando hace falta controlar las rutas de manera logica
                navigate(`/pokemon/${parseInt(pokemonNumber) - 1}`)
            }}
                className="btn btn-info mx-1">
                Anterior
            </button>
            
            {
                pokemon && <FavoriteButton pokemon={{ name: pokemon.name, number: pokemon.id }} />
            }

            <button onClick={() => navigate(`/pokemon/${parseInt(pokemonNumber) + 1}`)} 
                className="btn btn-info mx-1">
                Siguiente
            </button>
        </div>
    </div>

}

export default PokemonDetails;