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
        <div className="tab-pane" role="tabpanel" id="progenitors">
            <div className="d-flex flex-row flex-wrap justify-content-center my-2 elements-bar">
                {
                    elements.map((element, index) => (
                        <ElementButton
                            key={index}
                            element={element}
                            onElementImageClick={handleElementImageClick}
                        />
                    ))
                }
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-around">
                {progenitors.map((progenitor, index) => (
                    <ProgenitorCard
                        key={index}
                        progenitor={progenitor}
                        onElementImageClick={handleElementImageClick}
                        currentElement={currentElement}
                    />
                ))}
            </div>
        </div>
    );
};

export default Progenitors;
