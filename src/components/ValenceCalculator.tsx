import React from "react";

interface ValenceCalculatorProps {
}

const ValenceCalculator: React.FC<ValenceCalculatorProps> = ({ }) => {

    const [ fusions, setFusions ] = React.useState(0);
    const [ valence, setValence ] = React.useState(0);

    function calculate(bonus: number) {
        var timesFused: number = 0;
        setValence(bonus);
        console.log(valence);
        while (bonus < 58) {
            // Multiplying by 100 after the 1.1 valence bonus increase
            // so I can truncate to two decimal places without any rounding.
            // While the lich/sister weapons only show one decimal place for
            // the valence bonus, the math doesn't seem to work out right if
            // I only track one decimal place this way.
            bonus = Math.floor(bonus * 1.1 * 100);
            bonus = bonus / 100;
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
                <p>Your Weapon Valence Bonus</p>
                <input
                    id="valenceBonusAmount"
                    onChange={(e) => {
                        var val: number = Number(e.target.value);
                        val >= 25 && val <= 60
                            ? calculate(val) : {}
                        }
                    }
                />
            </section>
            {
                valence > 0
                    ? <p>You need to fuse a minimum of {fusions} {fusions == 1 ? "weapon" : "weapons" } to reach the max valence bonus.</p>
                    : <p>Enter the valence bonus on your weapon. It will be between 25 and 60</p>
            }
        </div>
    );
};

export default ValenceCalculator;
