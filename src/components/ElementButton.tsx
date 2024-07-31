import React from "react";
import { Element } from "../classes/Element";

interface ElementButton {
    element: Element;
    onElementImageClick: (element: string) => void;
}

const ElementButton: React.FC<ElementButton> = ({ element, onElementImageClick }) => {
    return (
        <button className="element-button" onClick={() => onElementImageClick(element.name)}>
            <img src={element.image} alt={element.name} />
        </button>
    );
};

export default ElementButton;
