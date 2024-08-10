import UseContextB from "./UseContextB";
import { useState, createContext } from "react";

export const UserContext = createContext();

function UseContextA() {
    const [user, setUser] = useState("Cornel");

    return (
        <div className="box">
            <h1>UseContextA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <UseContextB user={user} />
            </UserContext.Provider>
        </div>
    );
}

export default UseContextA;
