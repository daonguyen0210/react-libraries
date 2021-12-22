import React, { useState, useEffect, useContext } from 'react';
import { UserContext, ChannelContext } from './ComponentC';


function ComponentF() { 

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            the user is {user} and the channel is {channel}
        </div>
    )
}

export default ComponentF;
