import PropTypes from "prop-types";

function List(props) {
    // const fruits = [
    //     { id: 1, name: "apple", calories: 95 },
    //     { id: 2, name: "orange", calories: 45 },
    //     { id: 3, name: "banana", calories: 105 },
    //     { id: 4, name: "coconut", calories: 159 },
    //     { id: 5, name: "pineapple", calories: 37 },
    // ];
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); // SORT BY CALORIES - NUMERIC ORDER
    //fruits.sort((a, b) => b.calories - a.calories); // SORT BY CALORIES - REVERSE NUMERIC ORDER

    //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map((item) => (
        <li key={item.id}>
            {item.name}: &nbsp;<b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
        })
    ),
};

List.defaultProps = {
    category: "Category",
    items: [],
};

export default List;

/*
// Code in App.jsx
//----------------------------------------------------------------------------------
import List from "./List.jsx";

function App() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 },
    ];

    const vegetables = [
        { id: 6, name: "potatoes", calories: 110 },
        { id: 7, name: "celery", calories: 15 },
        { id: 8, name: "carrots", calories: 25 },
        { id: 9, name: "corn", calories: 63 },
        { id: 10, name: "broccoli", calories: 50 },
    ];

    //{fruits.length > 0 && <List items={fruits} category="Fruits" />} //Short-circuit ternary operator

    return (
        <>
            {fruits.length > 0 ? (
                <List items={fruits} category="Fruits" />
            ) : null}
            {vegetables.length > 0 ? (
                <List items={vegetables} category="Vegetables" />
            ) : null}
        </>
    );
}

export default App;
//----------------------------------------------------------------------------------
*/
