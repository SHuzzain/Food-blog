import React from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";

function HeaderNav() {
  return (
    <header className="z-20 top-0 sticky bg-white py-5 md::px-20 px-5 w-full">
      <div className=" flex items-center justify-between">
        <section className="flex items-center gap-10">
          <h1 className="font-logo font-bold text-3xl">LOGO</h1>
          <div className="flex items-center gap-4 max-md:hidden">
            <ul className="font-semibold font-playfair flex items-center gap-10 text-lg">
              <li className="header-text-hover">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="header-text-hover">
                <Link>Recipes</Link>
              </li>
              <li className="header-text-hover">
                <Link>Features</Link>
              </li>
              <li className="header-text-hover">
                <Link>About us</Link>
              </li>
              <li className="header-text-hover max-lg:hidden">
                <Link>Store</Link>
              </li>
              <li className="header-text-hover max-lg:hidden">
                <Link>Contact us</Link>
              </li>
            </ul>
            <span className=" lg:hidden bg-[#f2efe9] group w-7 h-7 grid place-items-center rounded-full">
              <EllipsisVerticalIcon className="w-5 stroke-2 group-hover:text-green-400 transition-colors duration-200" />
            </span>
          </div>
        </section>
        <section className="flex items-center gap-6 ">
          <div className="flex items-center gap-6">
            <MagnifyingGlassIcon className="w-6" />
            <ShoppingBagIcon className="w-6" />

            <Bars3Icon className="w-7" />
          </div>
          <div className="flex items-center gap-2 [&>i]:header-icon max-xl:hidden">
            <i className="fa fa-facebook text-base text-[#3b59a2]" />
            <i className="fa fa-twitter text-base text-[#55ACEE]" />
            <i className="fa fa-instagram text-base text-fuchsia-600" />
          </div>
        </section>
      </div>
    </header>
  );
}

export default HeaderNav;
