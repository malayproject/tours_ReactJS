import React, {useEffect, useState} from 'react'
import Loading from './Loading'
import OurTours from './OurTours'
import axios from 'axios'

function Main() {
    const [states, setStates] = useState({loading:true, tours:[]})
    const [flag, setFlag] = useState(true)
    function buttonClickHandler(tourId)  {
        setStates(prevStates=>({...prevStates, tours: prevStates.tours.filter(tour=>tour.id !== tourId)}))
    }
    useEffect(()=>{
        axios.get('https://course-api.com/react-tours-project')
            .then(res=>{
                console.log(res)
                setStates(prevStates=>({loading:false, tours:res.data}))
            })
            .catch(err=>{
                console.log(err)
            }) 
    }, [flag])

    return (
        <main className='main'>
            {!states.loading && (states.tours.length ? <div className='heading'>Our Tours</div> : <div className='noTours'><div className='heading'>No Tours Left</div><button onClick={()=>setFlag(!flag)}>refresh</button></div>
                
            )}
            {states.loading ? <Loading /> : <OurTours tours={states.tours} buttonClickHandler={buttonClickHandler}/>}
        </main>
    )
}

export default Main