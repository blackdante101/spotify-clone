import React from 'react'
import { Icon } from '@iconify/react'
import album1 from '../assets/img/album1.jpg'

function RecommendationCard({name, img, description, type, artists}) {
  return (
    <div style={{height: '300px'}} className="recommendationCardItem d-flex justify-content-center align-items-center p-3">
        <div>
            <img src={img}/>
            <h6 className='text-white mt-2'>{name?.substring(0, 15)}{name?.length>15 ? '..': ''}</h6>
            <p style={{color: '#b3b3b3', fontSize: '14px'}}>{type == 'playlist' ? description?.substring(0, 52): artists[0].name} {description?.length > 52 ? '..' : ''}</p>
        </div>
        <button className="btn cardPlayComponent p-1">
                <Icon style={{color:'black', fontSize: '30px'}} className='hasNavigationMenuIcon' icon="mdi:play" /></button>
    </div>
  )
}

export default RecommendationCard