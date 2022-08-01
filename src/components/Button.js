import React from 'react'

function Button() {
    return (
        <>
            <div className="search-container w-fit m-auto">
                <div className="inner h-28">
                    <input className='outline-none' type="text" placeholder='Search for Something ...' />
                    <button className="w-40 h-9 my-4 rounded-md bg-[#1fe8b6] text-black">SEARCH</button>
                </div>
                <div className="flex gap-3">
                    <div className="button-container relative rounded my-4 w-44 h-44 "></div>
                    <div className="button-container relative rounded my-4 w-44 h-44 "></div>
                    <div className="button-container relative rounded my-4 w-44 h-44 "></div>
                    <div className="button-container relative rounded my-4 w-44 h-44 "></div>
                    <div className="button-container relative rounded my-4 w-44 h-44 "></div>
                    <div className="button-container relative rounded my-4 w-44 h-44 "></div>
                </div>
            </div>
        </>
    )
}

export default Button