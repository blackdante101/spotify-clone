import React from 'react'

function LibraryNavigationAlbumCard({img, name, artist}) {
  return (
    <div className="d-flex mt-3 align-items-center">
        <div>
            <img style={{borderRadius: '5px'}} src={img} height={'50px'} width={'50px'} />
        </div>
        <div className='ms-3'>
            <p style={{fontWeight: '500'}} className="my-0 text-white">{name}</p>
            <p style={{color: '#b3b3b3', fontSize: '14px'}} className='my-0'>Album . {artist}</p>
        </div>
    </div>
  )
}

export default LibraryNavigationAlbumCard

// https://open.spotify.com/album/5KpXxX7OUDXRs25qLyN8NA?si=k0gekEYhTlqwhzZtf7WxRw

//0t69hftoCPq776cXlSpqFl,5OZ44LaqZbpP3m9B3oT8br,69g3CtOVg98TPOwqmI2K7Q,5KpXxX7OUDXRs25qLyN8NA