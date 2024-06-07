import React, { useState } from "react";
import Logo from "../images/logoo.svg";
export default function Nav({
  activeSection,
  setActiveSection,
  scrollToHero,
  scrollToStats,
  scrollToPictures,
  scrollToReviews,
  scrollToFaq,
  scrollToContact,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="w-12" alt="Logo" loading="lazy" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Pennwoods Co.
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`md:block ${isOpen ? "block" : "hidden"} w-full md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHero();
                  setActiveSection("hero");
                }}
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "hero" ? "text-orange-500" : "text-white"
                } hover:text-orange-500`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToStats();
                  setActiveSection("stats");
                }}
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "stats" ? "text-orange-500" : "text-white"
                } hover:text-orange-500`}
                aria-current="page"
              >
                Stats
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPictures();
                  setActiveSection("pictures");
                }}
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "pictures"
                    ? "text-orange-500"
                    : "text-white"
                } hover:text-orange-500`}
                aria-current="page"
              >
                Pictures
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToReviews();
                  setActiveSection("reviews");
                }}
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "reviews" ? "text-orange-500" : "text-white"
                } hover:text-orange-500`}
                aria-current="page"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToFaq();
                  setActiveSection("faq");
                }}
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "faq" ? "text-orange-500" : "text-white"
                } hover:text-orange-500`}
                aria-current="page"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                  setActiveSection("contact");
                }}
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "contact" ? "text-orange-500" : "text-white"
                } hover:text-orange-500`}
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
