//setting up the data layer which can be accessed by any component directly
//We need this to track the state of the wishlist

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //this is the data layer

//building a provider to wrap our app in the stateprovider to give components direct access to the data layer.
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children}
    </StateContext.Provider >
)