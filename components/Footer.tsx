"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-48">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Description */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 12 20ZM13 12H11V16H13V12ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11Z"
                fill="currentColor"
              />
            </svg>
            <span className="ml-2 text-xl font-bold">ZOVAQ</span>
          </div>
          <p className="mt-4 text-gray-400">
            A data-driven influencer marketing platform. Always there for you.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400"
              aria-label="Instagram"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.19 0 3.584.012 4.849.07 1.17.056 1.98.24 2.437.414a3.93 3.93 0 011.437.937 3.93 3.93 0 01.937 1.437c.175.456.359 1.266.414 2.437.058 1.265.07 1.659.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.24 1.98-.414 2.437a3.93 3.93 0 01-.937 1.437 3.93 3.93 0 01-1.437.937c-.456.175-1.266.359-2.437.414-1.265.058-1.659.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.98-.24-2.437-.414a3.93 3.93 0 01-1.437-.937 3.93 3.93 0 01-.937-1.437c-.175-.456-.359-1.266-.414-2.437C2.175 15.584 2.163 15.19 2.163 12s.012-3.584.07-4.849c.056-1.17.24-1.98.414-2.437a3.93 3.93 0 01.937-1.437 3.93 3.93 0 011.437-.937c.456-.175 1.266-.359 2.437-.414C8.416 2.175 8.81 2.163 12 2.163zm0 3.838a5.999 5.999 0 100 11.998 5.999 5.999 0 000-11.998zm0 9.9a3.901 3.901 0 110-7.802 3.901 3.901 0 010 7.802zm6.406-10.839a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400"
              aria-label="Twitter"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.824.775a4.93 4.93 0 002.163-2.723 9.834 9.834 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.943 13.943 0 011.671 3.15a4.918 4.918 0 001.524 6.564 4.9 4.9 0 01-2.229-.616c-.053 2.281 1.581 4.415 3.949 4.89a4.93 4.93 0 01-2.224.084 4.918 4.918 0 004.604 3.417 9.868 9.868 0 01-6.102 2.102c-.393 0-.779-.024-1.163-.07a13.93 13.93 0 007.548 2.209c7.547 0 11.675-6.258 11.675-11.675 0-.178-.004-.356-.012-.532a8.348 8.348 0 002.048-2.127z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400"
              aria-label="LinkedIn"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3C3.878 3 3 3.878 3 4.98c0 1.102.878 1.979 1.98 1.979S6.96 6.082 6.96 4.979C6.96 3.878 6.082 3 4.979 3zM3 21h3.957V8H3v13zM9.47 8h3.797v1.684h.053c.528-.996 1.818-2.047 3.742-2.047 4.014 0 4.943 2.64 4.943 6.07V21h-3.956v-6.222c0-1.485-.029-3.393-2.067-3.393-2.069 0-2.384 1.616-2.384 3.287V21H9.47V8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">FAQ's</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Settings</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Terms and privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 md:mt-0">
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-bold mb-2">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg focus:outline-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>© 2025 ZOVAQ. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
