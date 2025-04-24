import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Get In Touch
          </p>

          <AnimatedTitle
            title="Let's Cr<b>e</b>ate <br /> Something <br /> Am<b>a</b>zing T<b>o</b>gether"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] mb-10"
          />

          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent border border-blue-50/20 rounded p-3 text-blue-50 placeholder-blue-50/50 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent border border-blue-50/20 rounded p-3 text-blue-50 placeholder-blue-50/50 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full bg-transparent border border-blue-50/20 rounded p-3 text-blue-50 placeholder-blue-50/50 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <Button title="Send Message" containerClass="mx-auto cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
