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

        setProgenitors(updatedProgenitors); // Update state with new array
    };


    return (
        <div className="tab-pane progenitor-tab pt-2" role="tabpanel" id="progenitors">
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
            <div className="d-flex flex-row flex-wrap justify-content-around mt-5">
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
