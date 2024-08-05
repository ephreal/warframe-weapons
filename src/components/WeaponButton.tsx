import { FC } from "react";
import Weapon from "../classes/Weapon";

interface WeaponButtonProps {
    weapon: Weapon;
    updateFunc: CallableFunction;
    wantedFunc: CallableFunction;
}

const WeaponButton: FC<WeaponButtonProps> = ({weapon, updateFunc, wantedFunc}) => {

        return (
            
            <div className={`weapon-button mb-2 px-2 ${weapon.wanted ? "weapon-button--wanted" : ""} ${weapon.isAvailable ? "" : "weapon-button--selected"}  `}
                onContextMenu={(e) => {e.preventDefault(); wantedFunc(weapon.weaponName); }}
                onClick={ () => {updateFunc(weapon.weaponName)} }>
                <img src={weapon.weaponImage} width="100px" draggable="false" alt={weapon.weaponName} 
                    style={
                        weapon.isAvailable ? {} : {opacity: "0.5"}
                    }
                />
                <p className={`weapon-button--image ${weapon.isAvailable ? "text-gold" : "text-grey"}`}>
                    {weapon.weaponName}
                </p>
            </div>
        );
}

export default WeaponButton;