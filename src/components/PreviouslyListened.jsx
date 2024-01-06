import React from 'react'
import PreviouslyListenedCard from './PreviouslyListenedCard'
function PreviouslyListened({data}) {
  return (
    <div className='mt-3'>
        <h3 className='text-white'>Good morning</h3>
        <div className="row align-items-card mt-2">
        {/* ?.slice(0,6).map(dat =>  */}
           {data.slice(1,7).map(album=><PreviouslyListenedCard img={album?.content?.items[8]?.images[0]?.url} name={album?.content?.items[8]?.name}/>)}
        </div>
    </div>
  )
}

export default PreviouslyListened