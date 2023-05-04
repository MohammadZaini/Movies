import React, {useEffect, useContext} from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResloveAuthScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[]);

    return null;
};

export default ResloveAuthScreen;