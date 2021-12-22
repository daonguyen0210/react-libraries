
import React, { useState, useEffect } from 'react';
import ComponentD from './ComponentD';



export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function ComponentC() {
    return (
        <div className="componentC">
            <UserContext.Provider value={'hello world'}>
                <ChannelContext.Provider value={'your dream'}>
                    <ComponentD />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentC;
