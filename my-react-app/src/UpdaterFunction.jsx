// updater fuction = A function passed as an argument to setState() usually
//                   ex. setYear(year + 1) -> Even better -> setYear(arrow function)
//                   Allows for safe updates based no the previous state (not current state).
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater functions.

import { useState } from "react";

function MyUpdaterFunction() {
    const [count, setCount] = useState(0);

    function increment() {
        // this won't increment by 3 as one would expect
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // in reality
        // we're doing this
        // setCount(0 + 1);
        // setCount(0 + 1);
        // setCount(0 + 1);
        // we're setting count to be one 3 separate times annd then updating

        // HOW TO DO IT WITH AN UPDATER FUNCTION
        // This takes the PENDING state to calculate the NEXT state.
        // React puts your updater functionn in a queue (waiting in line DS).
        // During the next render, it will call them in the same order.
        setCount((c) => c + 1); // naming convention: first letter of state variable or prevVarName
        setCount((c) => c + 1);
        setCount((c) => c + 1);
    }

    function decrement() {
        setCount((c) => c - 1);
        setCount((c) => c - 1);
        setCount((c) => c - 1);
    }

    function reset() {
        setCount(0); // If we wanna use an updater function we could - {c => c = 0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default MyUpdaterFunction;
