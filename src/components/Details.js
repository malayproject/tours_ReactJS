import React, {useState} from 'react'

function Details({tour}) {
  const [readMore, setReadMore] = useState(false)

  function clickHandler(e) {
    setReadMore(prevState=>!prevState)
  }
  
  function getShortText() {
    let strg = ''
    // let len = tour.info.length
    for(let i = 0; i < 210; i++)  {
      strg += tour.info[i]
    }
    console.log(strg)
    return strg+'...'
  }

  return (
    <div className='details'>
      <div className='titlePrice'><div className="title">{tour.name}</div><div className="price">${tour.price}</div></div>
        
        {
          readMore?
          <div className='desc'>{tour.info}<div onClick={()=>setReadMore(false)}className='readMore'>&nbsp;&nbsp;show less</div></div>:
          <div className='desc'>{getShortText()}<div onClick={()=>setReadMore(true)}className='readMore'>&nbsp;read more</div></div>
        }
    </div>
  )
}

export default Details