import React from 'react';

// setting the default value is 'vscode'
const UserContext = React.createContext("vscode");


const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export { UserProvider, UserConsumer}
export default UserContext