import React from "react";

import Weapon from "../classes/Weapon";
import WeaponButton from "./WeaponButton";


interface WeaponPageProps {
    weaponList: Array<Weapon>;
    pageId: string;
    isActive: boolean;
    backgroundImage: string;
}


const WeaponPage: React.FC<WeaponPageProps> = ({weaponList, pageId, isActive, backgroundImage}) => {
    const [weapons, setWeapons] = React.useState([...weaponList]);
    const [remaining, setRemaining] = React.useState(0)

    function updateWeapons(weaponName: string) {
        // Create a new array from the current state so as not to directly mutate it
        let newItems = [...weapons];

        // Find the item and toggle the isAvailable property
        const itemIndex = newItems.findIndex(item => item.weaponName === weaponName);
        newItems[itemIndex].toggleAvailability();

        setWeapons(newItems);

        let selectedAmount = 0;
        newItems.forEach((weapon) => {
            if (!weapon.isAvailable) {
                selectedAmount += 1;
            }
        });

        setRemaining(selectedAmount);
    };

    function reset() {
        let resetItems = [...weapons];
        resetItems.forEach((weapon) => {
            weapon.isAvailable = true;
        });
        sortByName(resetItems);
        setWeapons(resetItems);
        setRemaining(0)
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

    function wantedFunc(weaponName: string) {
        let copy = [...weapons];
        copy.forEach((weapon) => {
            if (weapon.weaponName == weaponName) {
                weapon.wanted = !weapon.wanted;
            }
        });
        setWeapons(copy);
    }

    const background = `url("/assets/backgrounds/${backgroundImage}")`;

    // Sort the weapons prior to their initial display
    sortByName(weapons);

    return (
        <div className={isActive ? "tab-pane weapon-page active" : "weapon-page tab-pane"} role="tabpanel" id={pageId}
            style={
                {
                    backgroundImage: background
                } 
            }
        >
            <section className="d-flex flex-column">
                <section className="controls d-flex flex-column justify-content-center align-items-center">
                    <button className="my-2 px-5 py-3 w-50" onClick={() => reset()}>Reset</button>
                    <h3 className="text-center text-white">{remaining}/{weapons.length}</h3>
                </section>
                <div className="d-flex flex-row flex-wrap justify-content-evenly">
                    {
                        weapons.map((weapon: Weapon, index) =>
                            <WeaponButton
                                key={index}
                                weapon={weapon}
                                updateFunc={updateWeapons}
                                wantedFunc={wantedFunc}
                            />
                        )
                    }
                </div>
            </section>
        </div>
    );
}


export default WeaponPage;