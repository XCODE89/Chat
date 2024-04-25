import React, {createContext, useState} from "react";

export const UserContext = createContext({})

const ContextProvider = ({children}) => {

    const [userInfo, setUserInfo] = useState({
    })

    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider