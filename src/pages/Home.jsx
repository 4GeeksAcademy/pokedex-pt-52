import React from "react";
import { useState, useEffect } from "react";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const pokemonPicture = (pokemonNumber) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg`

const PokemonCard = ({ pokemon }) => {

	const { dispatch } = useGlobalReducer()

	return <div className="p-2 col-3" style={{ minHeight: "186px"}}>
		<div className="card d-flex flex-column h-100" style={{ minHeight: "186px"}}>
			<img src={pokemonPicture(pokemon.number)} className="card-img-top mx-auto mb-auto"
				style={{ maxWidth: '160px', maxHeight: '160px' }} alt="..."
			/>
			<div className="m-2 mt-auto">
				<h5 className="card-title">{pokemon.name}</h5>
					<p className="card-text"># {pokemon.number} </p>
				<button className="btn btn-primary"
					onClick={() => dispatch({
						type: "add_favorite",
						payload: pokemon
					})}
				>{"<3"}
				</button>
			</div>
		</div>
	</div>
}


export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

	const loadPokemons = async () => {
		const resp = await fetch(apiUrl);
		const data = await resp.json();
		// zustand - flux - redux
		dispatch({
			type: "update_pokemons",
			payload: { newPokemons: data.results }
		});
	}

	useEffect(() => {
		loadPokemons()
	},[])

	return (
		<div className="text-center mt-5 text-black">
			<h1>Pokedex</h1>

			<div className="d-flex flex-wrap w-100">
				{store.pokemons && store.pokemons.map((item,indice) => (
					<PokemonCard pokemon={{ ...item, number: indice + 1 }} />
				))}
			</div>
		</div>
	);
}; 