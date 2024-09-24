import React from 'react'
import notfoundvideo from "/Video/notfound.mp4"


const NotFound = () => {
    return (
        <>
            <div>
                <div>
                    <div className='w-[100%] lg:h-[100vh]'>
                        <video
                            src={notfoundvideo}

                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
