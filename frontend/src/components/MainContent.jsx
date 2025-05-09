import React from "react";
import main from "../assets/main.png"; // Replace with your actual card image

const MainContent = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between mt-24 h-full px-6 md:px-20 py-4 text-white">
      {/* Left Content */}
      <div className="md:w-1/2 mb-12 md:mb-0 mt-8 ml-6">
        <h1 className="text-4xl w-[757px] md:text-7xl font-extrabold mb-6 leading-tight">
          Stay Ahead in <span className="text-cyan-400">Crypto</span>
          <br />
          <span className="text-[48px]">with AI‑Powered Insights</span>
        </h1>
        <p className="text-gray-300 mb-8 max-w-md">
          Get unbiased, personalized news on how global events impact your
          favorite cryptocurrencies.
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors px-7 py-3 rounded-full font-semibold shadow-md">
          Get Started
        </button>
      </div>

      {/* Right Card */}
      <div className=" w-[398px] h-[422px] bg-[#1F2937] rounded-xl p-4 shadow-lg mr-8">
        <img
          src={main}
          alt="Tesla News"
          className="w-[358px] h-[207px] object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl w-[358px] h-[54px] leading-[27px] font-semibold mb-2">
          Another Unexpected Loss for Tesla Company
        </h3>
        <p className="text-[16px] w-[336px] h-[53px] leading-[24px] text-gray-300">
          Tesla’s shares fell 30% this year, attributed in part to protests and
          vandalism targeting its dealerships.
        </p>
      </div>
    </section>
  );
};

export default MainContent;
