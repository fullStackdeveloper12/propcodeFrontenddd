import React from 'react'
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import contactvideo from "/Video/contact.mp4"
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import Builder from '../../components/Builder.jsx';



const Faqs = () => {


  const faqs = [
    {
      question: "What is the purpose of Propcodes.com?",
      answer:
        "Propcodes.com is designed to connect real estate professionals, such as brokers, builders, and owners, with potential clients and facilitate the posting of property listings. It offers packages to brokers, builders, and owners to post their properties and get verified leads.",
    },
    {
      question: "How can I create an account on Propcodes.com?",
      answer:
        "Click the ‘Register’ button on our homepage, fill out the registration form, and follow the instructions to set up your account.",
    },
    {
      question: "Are there any fees associated with creating an account on Propcodes.com?",
      answer:
        "Creating an account is free, but accessing certain premium features will require a membership.",
    },
    {
      question: "Can I list both residential and commercial properties?",
      answer:
        "Yes, our platform supports listings for a wide range of property types including both residential and commercial properties.",
    },
    {
      question: "What steps are involved in listing a property on Propcodes.com?",
      answer:
        "Log in to your account, navigate to 'Dashboard', and use the 'Add Property' option to submit details about your property.",
    },
    {
      question: "What information is required to list a property?",
      answer:
        "You'll need to provide details such as the property type, location, price, property features, and photographs.",
    },
    {
      question: "How can I edit or remove my property listing?",
      answer:
        "Go to 'My Properties' in your dashboard, select the property you want to edit or remove, and choose the appropriate option to edit details or remove the listing.",
    },
    {
      question: "Is there a limit to how many properties I can list?",
      answer:
        "You can list as many properties as your membership states.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "Use the 'Forgot Password?' link on the login page to reset your password via the email associated with your account.",
    },
    {
      question: "How do I update my account details?",
      answer:
        "You can update your information through the 'Account Settings' section after logging into your account.",
    },
    {
      question: "Can I temporarily deactivate my account?",
      answer:
        "Yes, please contact our customer service for assistance with temporarily deactivating your account.",
    },
    {
      question: "What premium services does Propcodes.com offer?",
      answer:
        "We offer services like featured listings, advanced search placement, and targeted advertisements for a fee.",
    },
    {
      question: "How do I subscribe to premium services?",
      answer:
        "You can subscribe through your account dashboard under the 'Membership' section.",
    },
    {
      question: "What is your refund policy for premium services?",
      answer:
        "Refunds are considered within 3 days of the transaction. Please refer to our refund policy for detailed terms.",
    },
    {
      question: "How is my personal information protected on Propcodes.com?",
      answer:
        "We use industry-standard security measures to protect your data and comply with applicable data protection laws.",
    },
    {
      question: "Who can access my contact information on the platform?",
      answer:
        "No user will have access to your contact information. You will get verified leads from our platform.",
    },
    {
      question: "Who do I contact if I'm experiencing issues with the site?",
      answer:
        "You can reach our support team via the contact information provided on the 'Contact Us' page.",
    },
    {
      question: "How can I provide feedback or suggest improvements?",
      answer:
        "Please use the feedback form available on our website or directly contact our customer service.",
    },
    {
      question: "How can I ensure my listings comply with real estate regulations?",
      answer:
        "We recommend consulting with a legal expert in real estate laws or checking guidelines provided on our platform.",
    },
    {
      question: "Where can I find the terms of service and privacy policy for Propcodes.com?",
      answer:
        "These documents are accessible at the bottom of every page on our website under the 'Terms of Service' and 'Privacy Policy' links.",
    },
  ];


  const items = faqs.map((faq, index) => ({
    key: index + 1,
    label: (
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#002a68]">
          {index + 1}. {faq.question}
        </span>
      </div>
    ),
    children: <p className='text-sm text-[#555555] lg:text-base'>{faq.answer}</p>,
  }));

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
          FAQS
        </h1>
        <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
          <BreadCrumb />
        </div>

      </div>


      {/* FAQ Section */}
      <div id="faqs" className="my-8 lg:p-10 p-4">
        <div className=" lg:p-10 p-4">
          <Collapse
            items={items}
            expandIconPosition="end"
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              isActive ? <UpOutlined /> : <DownOutlined />
            }
          />
        </div>
      </div>


      <Builder />
    </>
  )
}

export default Faqs
