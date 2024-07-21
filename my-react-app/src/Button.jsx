function Button() {
    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         ++count;
    //         console.log(`${name} you clicked me ${count} time(s)`);
    //     } else {
    //         console.log(`${name} stop clicking me`);
    //     }
    // };

    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking me!`);
    // };

    const handleClick = (e) => {
        e.target.textContent = "OUCH!";
    };

    return (
        <button
            onClick={(e) => handleClick(e)}
            //onDoubleClick={(e) => handleClick(e)}
        >
            Click me :)
        </button>
    ); // pass function is as callback (use arrow or function expression) or else it gets called right away
}

export default Button;
