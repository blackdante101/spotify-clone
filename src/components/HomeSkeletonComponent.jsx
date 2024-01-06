import React from 'react'

function HomeSkeletonComponent() {
  return (
    <>
        <div className='mt-3'>
            <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}} className="col-md-4 skeleton">
            </div>
        </div>
        <div className="row mt-3">
            {[1,2,3,4,5,6].map(d=>(
            <div style={{height: '80px', cursor: 'pointer', position:'relative'}}
                className="col-md-4 previouslyListenedCard d-flex align-items-center p-2">
                <div style={{height:'100%'}}>
                    <div className='skeleton'
                        style={{borderRadius: '5px',background:'#b3b3b3', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px', height:'100%', width:'60px'}}>
                    </div>
                </div>
                <div style={{background: '#292929', height:'100%',borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}}
                    className='p-2 d-flex align-items-center w-100'>
                    <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}}
                        className="col-md-10 skeleton"></div>
                </div>
            </div>
            ))}
        </div>
        <div className='mt-5'>
            <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}} className="col-md-3 skeleton">
            </div>
            <div className="d-flex justify-content-between mt-3">
                {
                    [1,2,3,4,5].map(d=>(
                        <div style={{height: '260px'}}
                            className="recommendationCardItem d-flex justify-content-center p-3">
                            <div className='w-100'>
                                <div style={{background:'#b3b3b3', borderRadius: '10px', height: '160px'}}
                                    className="col-md-12 skeleton"></div>
                                <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}}
                                    className="col-md-9 skeleton mt-3">
                                </div>
                                <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}}
                                    className="col-md-6 skeleton mt-2">
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
        <div className='mt-5'>
            <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}} className="col-md-3 skeleton">
            </div>
            <div className="d-flex justify-content-between mt-3">
                {
                    [1,2,3,4,5].map(d=>(
                        <div style={{height: '260px'}}
                            className="recommendationCardItem d-flex justify-content-center p-3">
                            <div className='w-100'>
                                <div style={{background:'#b3b3b3', borderRadius: '10px', height: '160px'}}
                                    className="col-md-12 skeleton"></div>
                                <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}}
                                    className="col-md-9 skeleton mt-3">
                                </div>
                                <div style={{background:'#b3b3b3', borderRadius: '10px', height: '20px'}}
                                    className="col-md-6 skeleton mt-2">
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default HomeSkeletonComponent