import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const ProductPage: React.FC = () => {
  return (
    <div className="w-screen h-full pt-[6rem]">
      <Header />

      {/* Product Description */}
      <section className="p-8 ">
        <h2 className="text-3xl font-bold text-center mb-4">Product Name</h2>
        <p aria-hidden="true" className="text-center mb-8">
          Product Description goes here.
        </p>

        {/* Product Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Assets/bucket_img_1.png"
            alt="Product Image"
            className="max-w-lg"
            width={100}
            height={100}
          />
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Product Features</h2>
          <ul className="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            {/* Add more features here */}
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p aria-hidden="true" className="text-lg">
            Starting from $X.XX
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded mt-4 hover:bg-hover">
            Buy Now
          </button>
        </div>

        {/* Additional Information Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Additional Information</h2>
          <p aria-hidden="true" className="text-lg">
            More information about the product goes here.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p aria-hidden="true" className="text-lg">
            Start using our product today and see the difference!
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded mt-4 hover:bg-hover">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
