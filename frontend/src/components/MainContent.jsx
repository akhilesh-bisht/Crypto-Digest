import React from "react";
import main from "../assets/main.png";

const MainContent = () => {
  return (
    <section className=" text-white px-4 py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Stay Ahead in <span className="text-cyan-400">Crypto</span>
            <br />
            <span className="block text-xl sm:text-2xl md:text-4xl font-medium mt-2">
              with AI‑Powered Insights
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto md:mx-0 mb-6">
            Get unbiased, personalized news on how global events impact your
            favorite cryptocurrencies.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors px-6 py-3 rounded-full font-semibold shadow-md">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full sm:w-4/5 md:w-[400px] bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full pb-[56.25%]">
            <img
              src={main}
              alt="Tesla News"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Another Unexpected Loss for Tesla Company
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Tesla's shares fell 30% this year, attributed in part to protests
              and vandalism targeting its dealerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
