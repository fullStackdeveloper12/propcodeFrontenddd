import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import contactvideo from "/Video/contact.mp4"

const SingleAboutUs = () => {
    return (
        <>
            <div className='w-[100%] lg:h-[50vh] h-60  relative'>
                <video
                    src={contactvideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <h1 className='font-bold absolute top-[65%] left-[50%] text-white lg:text-6xl text-3xl transform -translate-x-[50%] -translate-y-[50%] tracking-[3px]'>
                    ABOUT US
                </h1>
                <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
                    <BreadCrumb />
                </div>
            </div>


            <>
                <div className=" lg:w-[80%] w-[90%] mx-auto flex lg:flex-row  flex-col-reverse lg:gap-3 gap-6 my-32">
                    <div className="lg:w-[60%] lg:p-12 p-6 ">
                        <h1 className="lg:text-6xl text-3xl mb-4">About Our CEO</h1>
                        <p className="text-justify ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco.
                        </p>
                    </div>
                    <div className="lg:w-[40%]">
                        <img src="https://media.istockphoto.com/id/2025050583/photo/diverse-team-posing-in-a-bright-modern-office.jpg?s=2048x2048&w=is&k=20&c=iGXXJtdj4HbkNyhKn6xmeR1RerFLnB_NV4IOQOmdkkw=" className='w-full h-full'/>
                    </div>
                </div>
            </>
        </>
    )
}

export default SingleAboutUs
