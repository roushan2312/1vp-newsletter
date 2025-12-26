import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo/udyogi_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-16 px-4 sm:px-8 mt-10 mb-auto w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Left Section - About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Udyogi Bharat is your go-to destination for stories that shape India's industrial future. We simplify marketing and elevate voices across the ecosystem.
          </p>
          <p className="text-sm text-gray-400">
            Mail: <br />
            <a
              href="mailto:udyogibharat@1vp.in"  className="hover:text-white"
            >udyogibharat@1vp.in</a>
          </p>
          <p className="text-sm text-gray-400">
            Contact us: <br />
            <a 
              href="tel:+916230687883"  className="hover:text-white"
            >+91 6230687883</a>
          </p>
        </div>

        {/* Center Section - Logo and Social Icons */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={logo}
            alt="Udyogi Bharat Logo"
            className="w-70 h-70 object-contain"
          />
          <h2 className="text-2xl font-bold">Udyogi Bharat</h2>
          <p className="text-sm text-gray-400">
            Marketing made simple & effective.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="mailto:udyogibharat@1vp.in"
              className="hover:text-indigo-400"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
            {/* <a
              href="https://www.instagram.com/industries_times_official?igsh=c2hyeHhjZW1ncXUz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a> */}
            <a
              href="https://www.linkedin.com/company/udyogibharat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a> */}
            <a
              href="https://www.youtube.com/@IndustriesTimes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>

        {/* Right Section - Quick Links */}
        <div className="lg:px-36 space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/stories" className="hover:text-white">
                Top Stories
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white">
                Event Highlights
              </a>
            </li>
            <li>
              <a href="/podcasts" className="hover:text-white">
                Podcasts
              </a>
            </li>
            <li>
              <a href="/newsletter" className="hover:text-white">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Industries Times. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
