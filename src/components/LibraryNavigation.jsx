import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import LibraryNavigationCategory from './LibraryNavigationCategory';
import LibraryNavigationAlbumCard from './LibraryNavigationAlbumCard';
import axios from 'axios';
import LibraryNavigationSkeleton from './LibraryNavigationSkeleton';

function LibraryNavigation() {

    const [albumsData, setAlbumsData] = useState([])
    const [albumIds, setAlbumIds] = useState('6nszkbMpzC8m8Z7v2U2Yjq,6PvZnd9Q2ymDo3gpoM5I37,26rTTXIEtEeSTan28AiLaV,5wBErX7aRc72byoh2KIHl6,0t69hftoCPq776cXlSpqFl,5OZ44LaqZbpP3m9B3oT8br,69g3CtOVg98TPOwqmI2K7Q,5KpXxX7OUDXRs25qLyN8NA')

    const getAlbums = async() => {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/albums/',
            params: {
              ids: albumIds
            },
            headers: {
              'X-RapidAPI-Key': '5779cd9435msh21bee9835236da8p1896b3jsn652af5a80a5b',
              'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setAlbumsData(response.data.albums)
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(()=>{
        getAlbums()  
    }, [])

  return (
    <div style={{height: '84%'}} className="container-fluid lightBlackContainer mt-2 p-3">
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn hasNavigationMenu d-flex align-items-center ps-0">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="hasNavigationMenuIcon" width="25" height="25">
                    <path
                        d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                        fill="#b3b3b3"></path>
                </svg>
                <p className="my-0 ms-2">Your Library</p>
            </button>
            <div className="d-flex align-items-center">
                <button className="btn hasNavigationMenu d-flex align-items-center ps-0">
                    <Icon className='hasNavigationMenuIcon' icon="ic:baseline-plus" />
                </button>
                <button className="btn hasNavigationMenu d-flex align-items-center ps-1 pe-0">
                    <Icon className='hasNavigationMenuIcon' icon="ri:arrow-right-line" />
                </button>
            </div>
        </div>
        <div style={{position: 'relative'}} className="d-flex align-items-center">
            <div id="libraryCategories" className="libraryCategoryContainer d-flex align-items-center justify-content-between mt-3">
                <LibraryNavigationCategory name="Playlists"/>
                <LibraryNavigationCategory marginLeft="8" name="Artists"/>
                <LibraryNavigationCategory marginLeft="8" name="Albums"/>
                <LibraryNavigationCategory opacity="70%" marginLeft="8" name="Podcasts & Shows"/>
            </div>
            <button className="btn libraryCategoryMoreButton p-1 mb-1"><Icon className='hasNavigationMenuIcon' icon="iconoir:nav-arrow-right" /></button>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
            <button className="btn hasNavigationMenu d-flex align-items-center ps-1 pe-0">
                <Icon style={{fontSize: '20px', color: '#A7A7A7 !important'}} className='hasNavigationMenuIcon' icon="mingcute:search-line" />
            </button>
            <button className="btn hasNavigationMenu d-flex align-items-center ps-1 pe-0">
                <p style={{fontSize:'14px', fontWeight: 'normal', color:'#A7A7A7'}} className="my-0" >Recents</p>&nbsp;
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
                    class="Svg-sc-ytk21e-0 kgVuXA" width="15" height="15">
                    <path
                        fill='#A7A7A7'
                        d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z">
                    </path>
                </svg>

            </button>
        </div>

        <div id="albumsContainer" style={{overflowY:'scroll', height: '75%'}} className="div   mt-2">
            
            {albumsData.length > 0 ? albumsData.map(album => <LibraryNavigationAlbumCard name={album?.name} img={album?.images[0].url} artist={album?.artists[0].name}/>) : <LibraryNavigationSkeleton/>}
        </div>

    </div>
  )
}

export default LibraryNavigation