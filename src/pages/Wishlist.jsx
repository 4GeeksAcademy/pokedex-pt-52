import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PokemonCard from "../components/PokemonCard";

const Wishlist = () => {

    const { store } = useGlobalReducer()

    return <>
        <div className="d-flex flex-column w-100 text-center ">
            <h1 className="">
                Favoritos
            </h1>
            <div className="d-flex flex-wrap w-100">
				{store.favorites && store.favorites.map((item,indice) => (
					<PokemonCard key={indice}  pokemon={{ ...item, number: item.number }} />
				))}
			</div>
        </div>
    </>
}


export default Wishlist;