import React from 'react'

function Rotating3DimgCube() {
  return (
    <>
        <div className="wrapper my-8 w-fit m-auto">
            <div className="cube relative">
                <div className="side absolute back"><img src="/assets/images/1.jpg" alt="" /></div>
                <div className="side absolute left"><img src="/assets/images/2.jpg" alt="" /></div>
                <div className="side absolute right"><img src="/assets/images/3.jpg" alt="" /></div>
                <div className="side absolute top"><img src="/assets/images/4.jpg" alt="" /></div>
                <div className="side absolute bottom"><img src="/assets/images/5.jpg" alt="" /></div>
                <div className="side absolute front"><img src="/assets/images/6.jpg" alt="" /></div>
            </div>
        </div>
    </>
  )
}

export default Rotating3DimgCube