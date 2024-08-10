import { useContext } from "react";
import { UserContext } from "./UseContextA";

function UseContextD() {
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>UseContextD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default UseContextD;
