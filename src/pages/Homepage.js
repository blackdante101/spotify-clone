import React from 'react'
import { Icon } from '@iconify/react'

function Homepage() {
  return (
    <div style={{background: '#000'}} className="col-md-9 pt-2">
        <div style={{height: '100%'}} className="container-fluid lightBlackContainer p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button className="btn homeArrows p-1"><Icon className='hasNavigationMenuIcon' icon="iconoir:nav-arrow-left" /></button>
                  <button className="btn homeArrows p-1 ms-2"><Icon className='hasNavigationMenuIcon' icon="iconoir:nav-arrow-right" /></button>
                </div>
                <div className="d-flex align-items-center">
                    <button id="installAppBtn" className="btn px-3 d-flex align-items-center"><Icon style={{fontSize: '18px', color: 'white'}} className='hasNavigationMenuIcon' icon="streamline:download-circle" />&nbsp; Install App</button>
                    <button id="installAppBtn" className="btn ms-2 px-3 d-flex align-items-center"><Icon style={{fontSize: '18px', color: 'white'}} className='hasNavigationMenuIcon' icon="octicon:bell-24" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage