import React from "react";
import FooterPosts from "./FooterPosts";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

function Footer() {
  const footerRec = ["Dinner", "Vegan", "Healthy", "Recipes", "Food"];
  const footerNav = ["Home", "About Us", "All Posts", "Shop", "Contact Us"];

  return (
    <div className="bg-[#1a1a1a]">
      <FooterPosts />
      <footer className="container max-w-100 mx-auto p-5 pt-0">
        <div className="text-white flex flex-wrap md:flex-row flex-col gap-4 justify-between">
          <section>
            <h1 className="font-logo font-bold text-3xl">LOGO</h1>
          </section>
          <section>
            <table>
              <tbody>
                {footerRec.map((value, index) => (
                  <tr
                    className="text-[#afb8bb] first:[&>tr]:pt-0 text-[17px] font-playfair font-semibold"
                    key={index}
                  >
                    <td className="pr-32 py-2">
                      <span className="cursor-pointer hover:text-green-400">
                        {value}
                      </span>
                    </td>
                    <td className="">
                      <span className="cursor-pointer hover:text-green-400">
                        {footerNav[index]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="flex items-start gap-2 [&>i]:footer-icon ">
            <i className="fa fa-facebook text-base mediaIcon-translate" />
            <i className="fa fa-twitter text-base mediaIcon-translate" />
            <i className="fa fa-instagram text-base mediaIcon-translate" />
            <i className="fa fa-youtube text-base mediaIcon-translate" />
            <i className="fa fa-tumblr text-base mediaIcon-translate" />
          </section>
        </div>
        <section className="w-full h-[2px] bg-[#363636] mt-20 mb-8" />
        <section className="flex flex-wrap gap-y-8 justify-between items-center text-[#afb8bb] mb-8">
          <div>
            <p className="font-lora font-medium text-sm">
              <span className="mr-1">&#169;</span>
              CopyRight 2023 - <span className="text-white">ThemeREX.</span> All
              Right Reserved.
            </p>
          </div>
          <ul className="flex items-center md:gap-8 gap-3 font-lora font-semibold ">
            <li className="hover:text-green-400 transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-green-400 transition-colors duration-200 cursor-pointer">
              User Agreement
            </li>
            <li className="hover:text-green-400 transition-colors duration-200 cursor-pointer">
              Provide Feedback
            </li>
            <li>
              <ArrowLongRightIcon className="w-5 text-green-400" />
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
