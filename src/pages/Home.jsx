import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


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
			{/* TODO:  Este amigo podria ser un Componete y reutilizarse en Wishlist */}
			<div className="d-flex flex-wrap w-100">
				{store.pokemons && store.pokemons.map((item,indice) => (
					<PokemonCard key={indice}  pokemon={{ ...item, number: indice + 1 }} />
				))}
			</div>
		</div>
	);
}; 