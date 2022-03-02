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
    return strg
  }

  return (
    <div className='details'>
      <div className='titlePrice'></div>
        
        {
          readMore?
          <div className='desc'>{tour.info}<div onClick={()=>setReadMore(false)}className='readMore'>&nbsp;&nbsp;read less</div></div>:
          <div className='desc'>{getShortText()}<div onClick={()=>setReadMore(true)}className='readMore'>...read more</div></div>
        }
    </div>
  )
}

export default Details