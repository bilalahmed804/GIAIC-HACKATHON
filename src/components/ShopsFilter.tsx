"use client";
import Image from "next/image";
import { useState } from "react";
import Statistic from "./Statistic";
import Link from "next/link";

export default function ShopPage() {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all'); // Filter state

  const totalItems = 32; // Example total items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Array of unique image paths
  const images = [
    "/image 2.png",
    "/image 100.png",
    "/image 101.png",
    "/Rectangle 24.png",
    "/Rectangle 25.png",
    "/Rectangle 26.png",
    "/Rectangle 36.png",
    "/Rectangle 37.png",
    "/Rectangle 38.png",
    "/Rectangle 39.png",
    "/Rectangle 40.png",
    "/Rectangle 41.png",
    "/Rectangle 41.png",
    "/Rectangle 43.png",
    "/Rectangle 43.png",
    "/Rectangle 45.png",
    "/scandinavian-interior-mockup-wall-decal-background 1.jpg",
    "/Grifo.png",
    "/lolito.png",
    "/Mask Group.png",
    "/Mugg.png",
    "/pingk.png",
    "/potty.png",
    "/Respi.png",
    "/Grifo.png",
    "/lolito.png",
    "/Mask Group.png",
    "/Mugg.png",
    "/pingk.png",
    "/potty.png",
    "/Respi.png",
  ];

  // Create products with unique images
  const products = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `Rp ${(index + 1) * 1000},000`, // Replace with a consistent formula
    image: images[index % images.length], // Assign unique image path
    isHot: index % 4 === 0,
    isSale: index % 5 === 0,
  }));

  // Filter products based on selected filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'hot') return product.isHot;
    if (filter === 'sale') return product.isSale;
    return true; // Return all products if no filter is applied
  });

  // Pagination logic
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg mb-6">
        <div
          className="h-40 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: "url('/Rectangle 1.png')" }}
        >
           <div className="flex items-center justify-center h-full bg-black bg-opacity-20 rounded-t-lg">
            <div>
        <Image
        className="ml-5"
        width={50}
        height={50}
        src={"/Meubel House_Logos-05.jpg"}
        alt="Logo"
        />
          <h1 className="text-4xl text-white font-bold">Shop</h1>
        </div>
        </div>
        </div>
        <div className="p-4">
          <nav className="text-gray-500">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>{" "}
            / <span>Shop</span>
          </nav>
        </div>
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            className={`bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 ${filter === 'all' ? 'bg-gray-300' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 ${filter === 'hot' ? 'bg-gray-300' : ''}`}
            onClick={() => setFilter('hot')}
          >
            Hot
          </button>
          <button
            className={`bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 ${filter === 'sale' ? 'bg-gray-300' : ''}`}
            onClick={() => setFilter('sale')}
          >
            Sale
          </button>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Show
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border-gray-300 rounded-lg"
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="h-40 bg-gray-200">
              <Image
                src={product.image}
                width={285}
                height={301}
                className="w-full h-full object-cover"
                alt={product.name}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
            </div>
            {/* Badges */}
            {product.isHot && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Hot
              </span>
            )}
            {product.isSale && (
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 flex items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-4 ">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-[#f6dea8]"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Statistic/>
    </div>
  );
}
