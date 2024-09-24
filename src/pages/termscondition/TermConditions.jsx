import React from 'react';
import contactvideo from "/Video/contact.mp4"
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import Builder from '../../components/Builder.jsx';

const TermConditions = () => {
    return (
        <>
            <div className='w-[100%] lg:h-[50vh] h-60 relative'>
                <video
                    src={contactvideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <h1 className='font-bold text-center absolute top-[65%] left-[50%] text-white lg:text-6xl text-3xl transform -translate-x-[50%] -translate-y-[50%] tracking-[3px]'>
                    TERMS & CONDITIONS
                </h1>
                <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
                    <BreadCrumb />
                </div>
            </div>

            <div className="p-6 lg:p-16">
                <div className="lg:p-10 border border-black p-4 space-y-6">
                    <h1 className="text-4xl font-bold text-center text-[#002a68] mb-6">Terms and Conditions</h1>
                    <p className="text-gray-600 text-lg mb-4">
                        Welcome to Propcodes.com! These terms and conditions outline the rules and regulations for the use of Propcodes's Website, located at www.propcodes.com.
                    </p>
                    <p className="text-gray-600 text-lg mb-6">
                        By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Propcodes.com if you do not agree to all of the terms and conditions stated on this page.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">1. Definitions</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>"Platform" refers to the Propcodes.com website and any associated services provided by Propcodes.com.</li>
                        <li>"User" includes brokers, builders, and owners who use the Platform to post properties and access services.</li>
                        <li>"Services" refers to all advertising, marketing, and lead generation services provided by Propcodes.com through the Platform or third-party applications.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">2. Use of Platform</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>Users must register an account to access and utilize the Services provided by Propcodes.com. Each User is responsible for maintaining the confidentiality of their account and password.</li>
                        <li>The Platform allows Users to post property listings, access leads, and use the marketing tools provided. Users must ensure that all content uploaded to the Platform complies with applicable laws and is accurate and up-to-date.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">3. Provision of Services</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>Propcodes.com provides lead generation services through direct marketing and third-party applications. The quantity and quality of leads are not guaranteed, and may vary based on market conditions and other external factors.</li>
                        <li>Propcodes.com reserves the right to modify, suspend, or discontinue any aspect of the Services at any time without notice.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">4. Refund Policy</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        We stand behind the quality of our services and strive for customer satisfaction. If, for any reason, you are not satisfied with your purchase, you may request a refund under the following conditions:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>Refund requests must be made within 3 days of the purchase date.</li>
                        <li>To initiate a refund, please contact our support team with proof of purchase.</li>
                        <li>After 3 days from the date of purchase, no refunds will be issued.</li>
                        <li>All refunds will be processed within 7 business days of approval.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">5. User Responsibilities</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>Users are responsible for the content they post, including the accuracy of property details and compliance with real estate advertising laws.</li>
                        <li>Users agree to use the Platform and Services ethically and legally, refraining from any form of deceptive practices.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">6. Intellectual Property</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>All content included on the Platform, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Platform, is the property of Propcodes.com or its suppliers and protected by copyright and other intellectual property laws.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">7. Disclaimer of Warranties</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>The Platform and its Services are provided "as is". Propcodes.com makes no warranty that the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">8. Limitation of Liability</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>Propcodes.com will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of or inability to use the Platform or Services, even if Propcodes.com has been advised of the possibility of such damages.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">9. Indemnification</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>You agree to defend, indemnify, and hold harmless Propcodes.com, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney’s fees and costs, arising out of or in any way connected with your access to or use of the Platform and Services.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">10. Amendments</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>Propcodes.com reserves the right to amend these Terms and Conditions at any time. All amendments to these Terms will be posted on the Platform and effective immediately upon posting.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">11. Governing Law</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Propcodes.com operates, without regard to its conflict of law provisions.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#002a68] mb-4">12. Contact Us</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                        <li>If you have any questions about these Terms and Conditions, please contact us at support@propcodes.com.</li>
                    </ul>
                </div>
            </div>

            <Builder />

        </>
    );
};

export default TermConditions;
