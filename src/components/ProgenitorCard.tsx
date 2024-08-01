import React from "react";
import { Progenitor } from "../classes/Progenitor";

interface ProgenitorCardProps {
    progenitor: Progenitor;
    currentElement: string;
}

const ProgenitorCard: React.FC<ProgenitorCardProps> = ({ progenitor, currentElement }) => {
    var visible = (progenitor.element === currentElement);
    return (
        <div className={`progenitorCard d-flex flex-column justify-content-centered mb-2 px-2 mx-1 text-gold ${!visible ? 'd-none' : ''}`}>
            <header className="progenitorCard--header">
                <h4 className="text-centered">{progenitor.name}</h4>
                <img
                    src={progenitor.elementImage}
                    alt={progenitor.element}
                    width="30px"
                />
            </header>
            <div className="d-flex flex-row justify-content-around w-100">
                <img src={progenitor.image} alt={progenitor.name} width="75px" />
            </div>
        </div>
    );
};

export default ProgenitorCard;
