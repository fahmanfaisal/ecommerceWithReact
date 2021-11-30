import React from 'react'
import BlockHeading from '../Components/BlockHeading'
import ImageCarousel from '../Components/ImageCarousel'
import MegaMenu from '../Components/MegaMenu'

function MainBody() {
    return (
        <div>    
            <MegaMenu/>
        
        <div className="container mx-auto">
            <div>
                <ImageCarousel />
            </div> 
            
            <div>
                <BlockHeading/> 
            </div>  
        </div>

        </div>
    )
}

export default MainBody
