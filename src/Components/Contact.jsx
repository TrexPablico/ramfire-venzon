import React, { useRef } from "react";
import message from "../assets/Contact/message.png";
import email from "../assets/Contact/mail.png";
import phone from "../assets/Contact/phone.png";
import location from "../assets/Contact/location.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Handle email sending logic here
    e.target.reset();
  };

  return (
    <>
      <div className="bg-gray-200 w-full py-20 lg:mt-60 mt-20">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 self-start">
            <div className="flex items-center mb-12 gap-2">
              <span className="w-[24px] h-[2px]  bg-red-600"></span>
              <span className="text-lg text-lightText  uppercase">
                Contact Us
              </span>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col flex-wrap gap-[12rem]">
            <div className="flex-1 text-gray-600 mb-8 sm:mb-0 sm:pr-4">
              <h3 className="text-[#000f38] font-medium text-2xl flex items-center mb-5">
                Send us a Message
                <img src={message} alt="message icon" className="w-9 ml-2" />
              </h3>
              <p className="max-w-lg leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                nam inventore dignissimos libero blanditiis est unde soluta
                similique modi eaque.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat reprehenderit hic repudiandae sed recusandae facere!
              </p>
              <ul className="mt-5">
                <li className="flex items-center mb-5">
                  <img src={email} alt="email icon" className="w-6 mr-3" />
                  ramfireemail
                </li>
                <li className="flex items-center mb-5">
                  <img src={phone} alt="phone icon" className="w-6 mr-3" />
                  +63 _______________
                </li>
                <li className="flex items-center">
                  <img
                    src={location}
                    alt="location icon"
                    className="w-6 mr-3"
                  />
                  Ramfire address
                </li>
              </ul>
            </div>

            <div className="flex-1 lg:mt-[0px] sm:mt-[-80px] mx-4">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#ffffff] p-4 border-0 outline-none mb-4 rounded-md"
                />
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="example@email.com"
                  required
                  className="w-full bg-[#ffffff] p-4 border-0 outline-none mb-4 rounded-md"
                />
                <label className="block text-gray-700">Your Message here</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                  className="w-full bg-[#ffffff] p-4 border-0 outline-none mb-4 resize-none rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
