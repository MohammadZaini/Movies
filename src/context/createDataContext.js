import React, {useReducer} from "react";

export default (reducer, actions, initalValues) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initalValues)

        const boundActions = {}

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{state, ...boundActions}} >
                {children}
            </Context.Provider>
        )
    };

    return {Context,  Provider}

};