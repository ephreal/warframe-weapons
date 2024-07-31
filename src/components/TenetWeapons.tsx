import React from "react";

import Weapon from "../classes/Weapon";
import WeaponButton from "./WeaponButton";
import {tenet} from "../static/weapons";

function TenetWeapons() {

  const [tenetWeapons, setTenetWeapons] = React.useState([...tenet]);

    function handleCheck(updater: CallableFunction, itemList: Array<Weapon>, itemToCheck: Weapon) {
        // Create a new array from the current state so as not to directly mutate it
        let newItems = [...itemList];

        // Find the item and toggle the isChecked property
        const itemIndex = newItems.findIndex(item => item.weaponName === itemToCheck.weaponName);
        newItems[itemIndex].toggleAvailability();

        updater(newItems);
    };

    function handleReset(weaponList: Array<Weapon>, stateFunc: CallableFunction) {
        /*
         * weaponList: An array of Weapons.
         * stateFunc: The React function used to update the state of the weaponList.
         */
        // Create a new array from the current state so as not to directly mutate it
        var newItems = [...weaponList];
        newItems.forEach((weapon) => {
          weapon.isChecked = false;
        });
        sortByName(newItems);

        stateFunc(newItems);
    };

    function resetTenetWeapons() {
		handleReset(tenetWeapons, setTenetWeapons);
    }

    function sortByName(weaponList: Array<Weapon>) {
      weaponList.sort( (a, b) => {
        if (a.weaponName < b.weaponName) {
          return -1;
        }
        else {
          return 1;
        }
      })
    }
	sortByName(tenetWeapons);

    return (
        <div className="tab-pane" role="tabpanel" id="tenet">
            <section className="d-flex flex-column">
                <button className="my-2 px-5 py-3" onClick={resetTenetWeapons}>Reset</button>
                <div className="d-flex flex-row flex-wrap justify-content-evenly">
                    {
                        tenetWeapons.map((weapon: Weapon) =>
                            WeaponButton(weapon, tenetWeapons, setTenetWeapons, handleCheck)
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default TenetWeapons;