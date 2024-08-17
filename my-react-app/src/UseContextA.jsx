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

// useContext() = React hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//        <Child/>
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import {useContext} from 'react';
//    import {MyContext} from './UseContextA';
// 2. const value = useContext(MyContext);
