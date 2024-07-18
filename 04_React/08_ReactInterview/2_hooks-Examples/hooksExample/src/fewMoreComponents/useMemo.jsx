import React, { useState, useMemo } from 'react';

const UseMemoConcept = () => {
    const [value, setValue] = useState(0);

    const computeResult = (val) => {
        console.log('Computing result for value:', val);
        let futureTime = Date.now() + 1000;
        while (Date.now() < futureTime) {
            // Intentional delay to simulate an expensive computation
        }

        return val * val; // Square the value
    };

    // Use useMemo to avoid recalculating the result on every render
    // unless the value has changed
    const cachedResult = useMemo(() => {
        return computeResult(value);
    }, [value]);

    // Handle change in input field and convert the input string to a number
    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };

    return (
        <>
            <div>
                <label>Value: </label>
                <input type="number" value={value} onChange={handleChange} />
            </div>
            <div>Memoized Value: {cachedResult}</div>
        </>
    );
}

export default UseMemoConcept;
