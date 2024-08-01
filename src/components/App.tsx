import React from "react";
import Navbar from "../components/Navbar";
import Progenitors from "../components/Progenitors";
import WeaponPage from "./WeaponPage";
import { kuva, tenet } from "../static/weapons";

interface AppProps {

}

const App: React.FC<AppProps> = ({}) => {
    return (
        <>
            <h1 className="text-center text-light">Warframe Weapon Tracker</h1>
            <Navbar />
            <section className="tab-content">
                <WeaponPage
                    weaponList={kuva}
                    pageId="kuva"
                    isActive={true}
                />
                <WeaponPage
                    weaponList={tenet}
                    pageId="tenet"
                    isActive={false}
                />
                <Progenitors />
            </section>
        </>
    );
}

export default App;