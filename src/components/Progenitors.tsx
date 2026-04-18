import { useState } from "react";
import ProgenitorCard from "./ProgenitorCard";
import { Progenitor } from "../classes/Progenitor";
import { progenitorList } from "../static/progenitors";
import { elements } from "../static/elements";
import ElementButton from "./ElementButton";

const Progenitors = () => {
    const [progenitors, setProgenitors] = useState<Progenitor[]>([...progenitorList]);
    const [currentElement, setElement] = useState("Cold");

    const handleElementImageClick = (element: string) => {
        setElement(element);

        // Create a new array with new Progenitor instances
        const updatedProgenitors = progenitors.map((progenitor) => {
            // Create a new instance of Progenitor with the same data
            const updatedProgenitor = new Progenitor(progenitor.name, progenitor.element);

            // Return the new instance
            return updatedProgenitor;
        });

        console.log(updatedProgenitors === progenitors);

        setProgenitors(updatedProgenitors);
    };


    return (
        <div className="tab-pane progenitor-tab flex-column pt-2 h-100" role="tabpanel" id="progenitors">
            <div className="d-flex flex-row flex-wrap justify-content-center elements-bar">
                {
                    elements.map((element, index) => (
                        <ElementButton
                            key={index}
                            element={element}
                            currentElement={currentElement}
                            onElementImageClick={handleElementImageClick}
                        />
                    ))
                }
            </div>
            <div className="progenitor-cards flex-grow-1 d-flex flex-wrap justify-content-center mt-3">
                {progenitors.map((progenitor, index) => (
                    <ProgenitorCard
                        key={index}
                        progenitor={progenitor}
                        currentElement={currentElement}
                    />
                ))}
            </div>
        </div>
    );
};

export default Progenitors;
