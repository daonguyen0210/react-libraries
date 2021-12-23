import React from 'react'

function ErrOne({heroo}) {
    if (heroo === 'Joker') {
        throw new Error('not a hero');
    }
    return (
        <div>
            {heroo}
        </div>
    )
}

export default ErrOne
