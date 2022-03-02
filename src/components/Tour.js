import React from 'react'
import Details from './Details'

function Tour({tour, buttonClickHandler}) {

  return (
    <div className='tour'>
      {/* {console.log(`tour is${tour.info}`)} */}
        <img src={tour.image} className='image'></img>
        <Details tour={tour}/>
        <button onClick={()=>buttonClickHandler(tour.id)}>Not Interested</button> 
    </div>
  )
}

export default Tour