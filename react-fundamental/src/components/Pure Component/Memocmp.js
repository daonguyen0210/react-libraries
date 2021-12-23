import React from 'react'

function Memocmp({name}) {
    console.log('rendering memo');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memocmp)
