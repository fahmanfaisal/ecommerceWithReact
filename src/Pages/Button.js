import React from 'react'

export function Button({title,handleAction}) {
    

    return (
        <div className="mt-4">
            <button onClick={handleAction} className="uppercase login-btn w-full transition ease-in duration-300">{title}</button>
        </div>
    )
}

export default Button
