import React from 'react'

function LibraryNavigationSkeleton() {
  return (
    <>
          {[1,2,3,4,5,6].map(d=>(
          <div style={{height: '80px', cursor: 'pointer', position:'relative'}}
            className="col-md-12 previouslyListenedCard d-flex align-items-center p-2">
            <div style={{height:'100%'}}>
              <div className='skeleton'
                style={{borderRadius: '5px',background:'#b3b3b3', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px', height:'100%', width:'60px'}}>
              </div>
            </div>

            <div style={{background: '', height:'100%',borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}}
              className='p-2 w-100'>
              <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}} className="col-md-10 skeleton">
              </div>
              <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}} className="col-md-6 mt-2 skeleton">
              </div>
            </div>
          </div>
      ))}
    </>
  )
}

export default LibraryNavigationSkeleton