import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SighupPage: React.FC = () => {
  return (
    <div className="w-screen h-full pt-[6rem]">
      <Header />

      {/* Sign-up Form Section */}
      <section className="flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-hover"
              type="button">
              Sign Up
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default SighupPage;
