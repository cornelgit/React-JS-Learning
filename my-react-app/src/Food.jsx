function Food() {
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    ); // JS code within return statemennt requires curly bracers, otherwise no
}

export default Food;
