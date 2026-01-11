import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border border-black/15 px-4 md:px-10 py-4 flex justify-between items-center">
      <h1 className="text-lg md:text-xl font-bold text-yellow-500">
        videobelajar
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span className="hidden sm:block">Kategori</span>
        <img
          src="/fot-2.jpeg"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;