import { useState } from "react";
import Weapon from "../classes/Weapon";

export default function WeaponButton (weapon: Weapon, weaponList: Array<Weapon>, stateFunc: CallableFunction, callback: CallableFunction) {

    const [isChecked, setIsChecked] = useState(weapon.isChecked);

    function toggle() {
        callback(stateFunc, weaponList, weapon);
        setIsChecked(weapon.isChecked);
    }
        return (
            <div className="weapon-button mb-2 px-2" style={weapon.isChecked ? {opacity: "0.5"} : {}} onClick={ () => {toggle()} }>
                {weapon.weaponName}
                <img src={weapon.weaponImage} width="100px" draggable="false" alt={weapon.weaponName} />
                <input
                    className="weapon-button--checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => callback(stateFunc, weaponList, weapon)}/>
            </div>
        );
}