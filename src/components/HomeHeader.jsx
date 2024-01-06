import React from 'react'
import { Icon } from '@iconify/react'
import profileImg from "../assets/img/profile.jpg"

function HomeHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <button className="btn homeArrows p-1">
                <Icon className='hasNavigationMenuIcon' icon="iconoir:nav-arrow-left" /></button>
            <button className="btn homeArrows p-1 ms-2">
                <Icon className='hasNavigationMenuIcon' icon="iconoir:nav-arrow-right" /></button>
        </div>
        <div className="d-flex align-items-center">
            <button id="installAppBtn" className="btn px-3 d-flex align-items-center">
                <Icon style={{fontSize: '18px', color: 'white'}} className='hasNavigationMenuIcon'
                    icon="streamline:download-circle" />&nbsp; Install App</button>
            <button id="installAppBtn" className="btn ms-2 d-flex align-items-center p-2">
                <Icon style={{fontSize: '18px', color: 'white'}} className='hasNavigationMenuIcon'
                    icon="octicon:bell-24" /></button>
            <button id="installAppBtn" className="btn ms-2 d-flex align-items-center p-1"><img src={profileImg}
                    style={{height: '30px', borderRadius: '100%'}} /></button>
        </div>
    </div>
  )
}

export default HomeHeader