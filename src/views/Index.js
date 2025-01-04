/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap justify-center">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0 text-center">
              <Link
                  className="md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-3xl font-bold p-2 px-0"
                  to="/"
                  style={{ margin: "15px" }}
                  >
                  Swift<span style={{color: "#006A4E"}}>Aza</span>
              </Link>

              {/* <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                SwiftAza is your one-stop platform for all things cryptocurrency. 
                Stay updated with the latest news, trends, and market analysis. 
                Join our community and start your crypto journey today.
              </p>
              <div className="mt-12">
                <a
                  href="/auth/register"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get Started
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}