"use client";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-[#FFF3E3] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <a href="/" className="text-black flex items-center">
                <Image
                  width={50}
                  height={50}
                  src={"/Meubel House_Logos-05.jpg"}
                  alt="Logo"
                />
                <span className="ml-3 font-bold text-2xl lg:text-3xl">
                  Furniro
                </span>
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {["Home", "Shop", "Blog", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="text-black hover:bg-[#e9c87c] hover:text-white px-4 py-2 rounded-md text-sm font-semibold"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <AiOutlineSearch className="icon" />
              <AiOutlineHeart className="icon" />
              <AiOutlineShoppingCart className="icon" />
              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-2xl"
                onClick={toggleNavbar}
              >
                {isClick ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div className="md:hidden bg-[#FFF3E3] border-t border-gray-300">
            <div className="flex flex-col px-4 py-3 space-y-3">
              {["Home", "Shop", "Blog", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="text-black hover:bg-[#e9c87c] hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Styling */}
      <style jsx>{`
        .icon {
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: background-color 0.3s, color 0.3s;
          border-radius: 50%;
        }
        .icon:hover {
          background-color: #e9c87c;
          color: white;
        }
      `}</style>
    </>
  );
}
