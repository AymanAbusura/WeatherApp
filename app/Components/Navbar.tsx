"use client";

import Image from "next/image";
import logo from '../assets/weather.png'
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

function Navbar() {
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      <div className="left flex justify-center w-full sm:w-auto">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          priority
          className="w-12 h-auto"
        />
        <p className="flex items-center gap-2">&nbsp; Weather App</p>
      </div>

      <div className="search-container flex flex-col sm:flex-row shrink-0 w-full sm:w-fit gap-2">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
