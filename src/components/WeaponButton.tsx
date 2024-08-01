import { FC } from "react";
import Weapon from "../classes/Weapon";

interface WeaponButtonProps {
    weapon: Weapon;
    updateFunc: CallableFunction;
}

const WeaponButton: FC<WeaponButtonProps> = ({weapon, updateFunc}) => {
        return (
            <div className="weapon-button mb-2 px-2" style={weapon.isChecked ? {opacity: "0.5"} : {}} onClick={ () => {updateFunc(weapon.weaponName)} }>
                {weapon.weaponName}
                <img src={weapon.weaponImage} width="100px" draggable="false" alt={weapon.weaponName} />
            </div>
        );
}

export default WeaponButton;