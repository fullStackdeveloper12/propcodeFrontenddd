import React from 'react'
import contactvideo from "/Video/contact.mp4"
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import Builder from '../../components/Builder.jsx';

const Disclaimer = () => {
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
                <h1 className='font-bold text-center absolute top-[65%] left-[50%] text-white lg:text-6xl text-3xl transform -translate-x-[50%] -translate-y-[50%] tracking-[3px]'>
                    DISCLAIMER
                </h1>
                <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
                    <BreadCrumb />
                </div>

            </div>


            <div className="lg:p-10 p-4">
                <div className="lg:p-10 border border-black p-4">
                    <p className=' mt-4 text-[#555555] lg:text-base'>
                        Propcodes.com is a technological platform designed to facilitate connections between brokers, builders, owners, and potential buyers or renters. Propcodes.com does not participate in any real estate transactions nor acts as a real estate agent. The platform serves solely as a medium to display property listings provided by users.</p>


                    <p className='lg:mt-8 mt-4 text-[#555555] lg:text-base'> All users are advised to verify any information provided on this website, including but not limited to property details, pricing, and compliance with applicable real estate regulations independently. Property information can be verified through the Real Estate Regulatory Authority (RERA) website of the respective state where the property is located. Propcodes.com does not verify the RERA compliance of any projects listed on the platform and expressly disclaims any liability for non-compliance with RERA or any other regulations.</p>


                    <p className='lg:mt-8 mt-4 text-[#555555] lg:text-base'>Propcodes.com is not involved in any transaction executed between users and does not have the means to ascertain the execution or legality of a transaction. As such, Propcodes.com shall not be responsible or liable to resolve any disputes between parties involved in real estate transactions initiated through our platform.</p>


                    <p className='lg:mt-8 mt-4 text-[#555555] lg:text-base'>Use of Propcodes.com signifies your agreement to this disclaimer and confirms that Propcodes.com shall not be liable under RERA or any other laws applicable to real estate transactions. All users are encouraged to exercise due diligence and discretion in all transactions and interactions facilitated by our platform.</p>


                </div>
            </div>


            <Builder />
        </>
    )
}

export default Disclaimer
