import React from 'react'
import { Icon } from '@iconify/react';
import LibraryNavigation from './LibraryNavigation';
import PlayerFooter from './PlayerFooter';

function Navigation(props) {
  return (
    <div className="container-fluid p-0">
      <div style={{height: '90vh'}} className="d-flex">
        <div style={{backgroundColor: "#000"}} className="col-md-3 p-2">
            <div style={{height: '16%'}} className="container-fluid lightBlackContainer p-3">
                <div className="d-flex align-items-center hasNavigationMenu active text-white">
                    <Icon className='hasNavigationMenuIcon' icon="teenyicons:home-solid" />
                    <p className='ms-4 my-0'>Home</p>
                </div>
                <div className="d-flex align-items-center hasNavigationMenu mt-4 text-white">
                    <Icon className='hasNavigationMenuIcon' icon="mingcute:search-line" />
                    <p className='ms-4 my-0'>Search</p>
                </div>
            </div>
            <LibraryNavigation/>
        </div>
        {props.children}
      </div>
        <PlayerFooter/>
    </div>
  )
}

export default Navigation