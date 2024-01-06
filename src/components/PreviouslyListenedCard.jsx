import React from 'react'
import { Icon } from '@iconify/react'

function PreviouslyListenedCard({img, name}) {
   
  return (
    <div style={{height: '80px', cursor: 'pointer', position:'relative'}} className="col-md-4 previouslyListenedCard d-flex align-items-center p-2">
         <div style={{height:'100%'}}>
            <img style={{borderRadius: '5px', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}} src={img} height={'100%'} width={'60px'} />
        </div>
        <div style={{background: '#292929', height:'100%',borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}} className='p-2 d-flex align-items-center w-100'>
            <p style={{fontWeight: '500'}} className="my-0 ms-2 text-white">{name}</p>
        </div>
        <button className="btn previousPlayComponent p-1">
                <Icon style={{color:'black', fontSize: '20px'}} className='hasNavigationMenuIcon' icon="mdi:play" /></button>
    </div>
  )
}

export default PreviouslyListenedCard