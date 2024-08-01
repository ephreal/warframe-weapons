import React from "react";
import { Element } from "../classes/Element";

interface ElementButton {
    element: Element;
    onElementImageClick: (element: string) => void;
    currentElement: string;
}

const ElementButton: React.FC<ElementButton> = ({ element, onElementImageClick, currentElement }) => {
    return (
        <div className={`element-button p-1 ${currentElement == element.name ? "element-button--selected" : ""}`} onClick={() => onElementImageClick(element.name)}>
            <img src={element.image} alt={element.name} width="50px"/>
        </div>
    );
};

export default ElementButton;
