import React from 'react'
import BlockHeading from '../Components/BlockHeading'
import Card from '../Components/Card'
import ImageCarousel from '../Components/ImageCarousel'
import MegaMenu from '../Components/MegaMenu'

function MainBody() {
    return (
        <div>    
            <MegaMenu/>
        
        <div className="container mx-auto">
            <div className="px-6">
                <ImageCarousel />
            </div> 
            
            <div>
                <BlockHeading/> 
            </div>

            <div>

            </div> 

        </div>

        <Card/>
        <Card/>

        </div>
    )
}

export default MainBody
