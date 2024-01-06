import React from 'react'

function LibraryNavigationCategory({name, marginLeft, opacity}) {
  return (
    <button style={{marginLeft: `${marginLeft}px`, opacity: opacity}} className='btn libraryCategoryButton'>{name}</button>
  )
}

export default LibraryNavigationCategory