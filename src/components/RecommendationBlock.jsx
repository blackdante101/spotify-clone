import React from 'react'
import album1 from '../assets/img/album1.jpg'
import RecommendationCard from './RecommendationCard'
function RecommendationBlock({title, data}) {
  return (
    <div className='mt-3'>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className='text-white'>{title}</h3>
            <p style={{color: '#b3b3b3', fontSize: '14px', fontWeight: '500'}} className="my-0">Show all</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
           {data.slice(0, 5).map(album=> <RecommendationCard name={album.name} type={album.type} artists={album?.artists} img={album.images[0].url} description={album.description}/>)}
           
        </div>
    </div>
  )
}

export default RecommendationBlock