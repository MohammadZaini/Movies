import { NavigationActions } from "react-navigation";
import { StackActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};

export const push = (routeName, params) => {
    navigator.dispatch(
        StackActions.push({
            routeName,
            params
        })
    );
};

