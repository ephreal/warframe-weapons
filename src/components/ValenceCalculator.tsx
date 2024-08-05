import React from "react";

interface ValenceCalculatorProps {
}

const ValenceCalculator: React.FC<ValenceCalculatorProps> = ({ }) => {

    const [fusions, setFusions] = React.useState(0);

    function calculate(bonus) {
        var timesFused = fusions;
        while (bonus < 58) {
            bonus = bonus * 1.1;
            timesFused = timesFused + 1;
        }
        setFusions(timesFused);
    }

    return (
        <div className={`valence-calculator d-flex flex-column justify-content-centered mb-2 px-2 mx-1 text-gold`}>
            <header>
                <h1>Valence Calculator</h1>
            </header>
            <section>
                <p>Weapon Valence Bonus</p>
                <input type="number" />
            </section>
        </div>
    );
};

export default ValenceCalculator;
