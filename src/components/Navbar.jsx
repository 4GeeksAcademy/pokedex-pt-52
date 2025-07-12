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
					<button className="btn btn-warning text-white fs-bold">
						Wishlist {store.favorites.length}
					</button>

					{/* <Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link> */}
				</div>
			</div>
		</nav>
	);
};