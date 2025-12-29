import React, { useState } from "react";
import ContactUsLocations from "./ContactUsLocations";

const TakeFirstStepContactUs = () => {
      const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        franchiseModel: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
      };
return (
    <section className="bg-[#f4f4f4] md:py-20 py-10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="max-w-[800px] mx-auto text-center mb-6 md:mb-12">
          <h2 className="md:text-[48px] text-[36px] font-['Cairo'] font-bold text-[#181818] md:leading-[55px] leading-[40px] capitalize mb-4">
            Take The First Step Today
          </h2>
          <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818] leading-[26px] mb-6">
            Ready to build your future with House of Handsome? Let's make it happen.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818]">
              Call us at:{" "}
              <a href="tel:8774182541" className="font-bold text-[#d82028]">
                877-418-2541
              </a>
            </p>
            <div className="text-gray-400">|</div>
            <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818]">
              Or fill out our quick form below
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-6">
          {/* Contact Form */}
          <div className="bg-white flex-1 rounded-2xl md:p-8 p-6 shadow-sm">
            <h3 className="md:text-[32px] text-[24px] font-['Cairo'] font-bold text-[#d82028] mb-6">
              Contact Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['Urbanist'] text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d82028] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['Urbanist'] text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d82028] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['Urbanist'] text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d82028] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] text-black mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Send your message..."
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['Urbanist'] text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d82028] transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className=" bg-[#d82028] hover:bg-[#b81820] text-white font-['Urbanist'] text-[16px] py-3 px-6 rounded-lg transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Opening Hours & Locations */}
          <ContactUsLocations classname={"bg-[#d82028] rounded-2xl md:p-8 p-6 text-white md:max-w-[400px]  text-center"}/>
        </div>
      </div>
    </section>
  );
};

export default TakeFirstStepContactUs;
