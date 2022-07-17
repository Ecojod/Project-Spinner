import React from 'react'
export default function Spinner() {
    return (
        <>
            <section className="main w-fit mx-auto">
                <div className="spinner flex justify-center h-80 w-80 items-center overflow-hidden relative mb-9">
                    <h1 className='text-3xl w-fit'>Tushar</h1>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-red"></div>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-blue"></div>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-green"></div>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-black"></div>
                    <div className="spinner-sector absolute w-full h-full spinner-sector-maroon"></div>
                </div>
            </section>
        </>
    )
}
