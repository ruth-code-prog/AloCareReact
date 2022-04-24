import React from "react";

import { Link } from "react-router-dom";

export default function PageErrorMessage({
  title = "Ethan Shop",
  body = "via Play Store",
}) {
  return (
    <section className="mt-28">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.itenshop"
                className="bg-blue-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
              >
                Download Gratis
              </a>
            </div>
            <p className="text-lg mb-12">{body}</p>
            <Link
              to="/"
              className="text-gray-900 bg-blue-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
