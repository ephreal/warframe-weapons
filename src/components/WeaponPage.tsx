import React from "react";

import Weapon from "../classes/Weapon";
import WeaponButton from "./WeaponButton";


interface WeaponPageProps {
    weaponList: Array<Weapon>;
    pageId: string;
    isActive: boolean;
}


const WeaponPage: React.FC<WeaponPageProps> = ({weaponList, pageId, isActive}) => {
    const [weapons, setWeapons] = React.useState([...weaponList]);

    function updateWeapons(weaponName: string) {
        // Create a new array from the current state so as not to directly mutate it
        let newItems = [...weapons];

        // Find the item and toggle the isChecked property
        const itemIndex = newItems.findIndex(item => item.weaponName === weaponName);
        newItems[itemIndex].toggleAvailability();

        setWeapons(newItems);
    };

    function reset() {
        let resetItems = [...weapons];
        sortByName(resetItems);
        setWeapons(resetItems);
    }

    function sortByName(weaponList: Array<Weapon>) {
        weaponList.sort( (a, b) => {
          if (a.weaponName < b.weaponName) {
            return -1;
          }
          else {
            return 1;
          }
        });
    }

    // Sort the weapons prior to their initial display
    sortByName(weapons);

    return (
        <div className={isActive ? "tab-pane active" : "tab-pane"} role="tabpanel" id={pageId}>
            <section className="d-flex flex-column">
                <button className="my-2 px-5 py-3" onClick={() => reset()}>Reset</button>
                <div className="d-flex flex-row flex-wrap justify-content-evenly">
                    {
                        weapons.map((weapon: Weapon, index) =>
                            <WeaponButton
                                key={index}
                                weapon={weapon}
                                updateFunc={updateWeapons}
                            />
                        )
                    }
                </div>
            </section>
        </div>
    );
}


export default WeaponPage;