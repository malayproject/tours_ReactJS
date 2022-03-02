import React, {useState} from 'react'
import Tour from './Tour'

    function OurTours({tours, buttonClickHandler}) {

    // console.log(tours.data)

    return (
        <div className='tours'>
            {tours.map(tour=>{
                return(
                    <div key={tour.id}>
                        <Tour tour={tour} buttonClickHandler={buttonClickHandler}/>
                    </div>
                )
            })}
        </div>
    )
}

export default OurTours