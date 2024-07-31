import React from "react";
import ReactDOM from "react-dom/client";
import KuvaWeapons from "./components/KuvaWeapons";
import Navbar from "./components/Navbar";
import TenetWeapons from "./components/TenetWeapons";
import Progenitors from "./components/Progenitors";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<h1 className="text-center text-light">Warframe Weapon Tracker</h1>
		<Navbar />
		<section className="tab-content">
			<KuvaWeapons />
			<TenetWeapons />
			<Progenitors />
		</section>
	</React.StrictMode>,
);
