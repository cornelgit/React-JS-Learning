import { useState, useEffect } from "react";

// Example 1
/*
function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        // OPTIONAL BUT HELPFUL - perform clean-up code such as removing an event listener
        // return () => {};
    }, [count, color]);

    function addCount() {
        setCount((c) => c + 1);
    }

    function subtractCount() {
        setCount((c) => c - 1);
    }

    function changeColor() {
        setColor((c) => (c === "green" ? "red" : "green"));
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default UseEffectHook;
*/

// Example 2 - window width and height
function UseEffectHook() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENDER ADDED");

        // OPTIONAL BUT HELPFUL - perform clean-up code such as removing an event listener
        // return () => {};
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENDER REMOVED");
        };
    }, []);

    useEffect(() => {
        //You can have multiple useEffect hooks in your code
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default UseEffectHook;

// useEffect() = React Hook that allows React to DO SOME CODE WHEN (pick one)
//               This component re-renders
//               This component mounts
//               The state of a value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount (when a component is created and appended to the DOM)
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts
