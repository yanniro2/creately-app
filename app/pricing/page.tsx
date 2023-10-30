import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PricingPage: React.FC = () => {
  return (
    <div className="w-full h-full pt-[6rem]">
      <Header />
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Pricing Plans for Creately
        </h2>
        <p className="text-center mb-8">Choose a plan that works for you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
            <p className="mb-4">Perfect for small teams</p>
            <h4 className="text-2xl font-bold mb-4">$9.99/month</h4>
            <ul className="mb-4">
              <li>Unlimited Projects</li>
              <li>Limited Collaboration</li>
              <li>Basic Support</li>
            </ul>
            <button className="btn btn-1">Choose Plan</button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
            <p className="mb-4">For growing teams</p>
            <h4 className="text-2xl font-bold mb-4">$19.99/month</h4>
            <ul className="mb-4">
              <li>Unlimited Projects</li>
              <li>Advanced Collaboration</li>
              <li>Premium Support</li>
            </ul>
            <button className="btn btn-1">Choose Plan</button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
            <p className="mb-4">Best for large teams</p>
            <h4 className="text-2xl font-bold mb-4">$49.99/month</h4>
            <ul className="mb-4">
              <li>Unlimited Projects</li>
              <li>Enterprise Collaboration</li>
              <li>Premium 24/7 Support</li>
            </ul>
            <button className="btn btn-1">Choose Plan</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
