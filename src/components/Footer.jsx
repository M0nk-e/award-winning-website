import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const socialLinks = [
  { href: "https://twitter.com/gulfeye", icon: <FaTwitter /> },
  { href: "https://instagram.com/gulfeye", icon: <FaInstagram /> },
  { href: "https://wa.me/966123456789", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-blue-500 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©GulfEye Marketing Agency 2024. All rights reserved
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <BsTelephone />
            <a href="tel:+966123456789" className="text-sm">+966 12 345 6789</a>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <a href="mailto:support@gulfeye.com" className="text-sm">support@gulfeye.com</a>
          </div>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
