import React from "react";
import { Progenitor } from "../classes/Progenitor";

interface ProgenitorCardProps {
    progenitor: Progenitor;
    onElementImageClick: (element: string) => void;
    currentElement: string;
}

const ProgenitorCard: React.FC<ProgenitorCardProps> = ({ progenitor, onElementImageClick, currentElement }) => {
    var visible = (progenitor.element === currentElement);
    return (
        <div className={`progenitorCard d-flex flex-column justify-content-centered my-1 ${!visible ? 'd-none' : ''}`}>
            <h4 className="text-centered">{progenitor.name}</h4>
            <div className="d-flex flex-row justify-content-around w-100">
                <img src={progenitor.image} alt={progenitor.name} width="50px" />
                <img
                    src={progenitor.elementImage}
                    alt={progenitor.element}
                    width="50px"
                    onClick={() => onElementImageClick(progenitor.element)}
                />
            </div>
        </div>
    );
};

export default ProgenitorCard;
