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
            <div className="d-flex flex-row justify-content-around w-100">
                <img className="progenitorCard-image" src={progenitor.image} alt={progenitor.name} />
            </div>
            <footer className="d-flex flex-row">
                <h4 className="text-centered">{progenitor.name}</h4>
                <img
                    src={progenitor.elementImage}
                    alt={progenitor.element}
                    width="30px"
                />
            </footer>
        </div>
    );
};

export default ProgenitorCard;
