import React from 'react'

function BlockHeading() {
    return (
        <div>
           <div className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold pl-4 uppercase">Mobile</h2>
                <div>
                    <span><hr className="ml-4 w-28  md:w-36 h-1 mt-1 rounded" style={{backgroundColor: '#11a0db'}}></hr></span>
                    <hr className="ml-4 "></hr>
                </div>
            </div> 
        </div>
    )
}

export default BlockHeading
