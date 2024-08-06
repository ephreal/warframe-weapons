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
            {/* <h1 className="text-center text-light">Warframe Weapon Tracker</h1> */}
            <Navbar />
            <section className="tab-content h-100">
                <WeaponPage
                    weaponList={kuva}
                    pageId="kuva"
                    isActive={true}
                    backgroundImage="kuva lich.png"
                />
                <WeaponPage
                    weaponList={tenet}
                    pageId="tenet"
                    isActive={false}
                    backgroundImage="sister of parvos.png"
                />
                <Progenitors />
            </section>
        </>
    );
}

export default App;