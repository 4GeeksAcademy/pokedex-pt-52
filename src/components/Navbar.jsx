import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export const Navbar = () => {

	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">PokedexEndogena</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-warning text-white fs-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Wishlist {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							{
								store.favorites.slice(0,5).map((pokemon, index) => <li key={index}>
								<p className="dropdown-item">
									{pokemon.name}</p>
								</li>)
							}

							{
								store.favorites.length > 5 && <Link to="/favorites">
									<p className="dropdown-item">
										ver mas...
									</p>
								</Link>
							}

						</ul>
					</div>
					{/* <Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link> */}
				</div>
			</div>
		</nav>
	);
};