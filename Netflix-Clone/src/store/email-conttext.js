import React from "react";

const EmailContext = React.createContext({
    email: ''
});

export const EmailContextProvider = (props) => {
    <EmailContext.Provider value={{
        email: props.email
    }}>
        {props.children}
    </EmailContext.Provider>
};

export default EmailContext;