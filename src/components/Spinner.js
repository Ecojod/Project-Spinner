import React from 'react'
export default function Spinner() {
    return (
        <>
            <section className="main">
                <div className="spinner flex justify-center h-80 w-80 items-center overflow-hidden relative">
                    <h1 className='text-3xl w-fit'>Loading</h1>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-red"></div>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-blue"></div>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-green"></div>
                </div>
                <div className="spinner-2">
                    <h1 className='text-3xl w-fit'>Loading</h1>
                </div>
            </section>
        </>
    )
}
