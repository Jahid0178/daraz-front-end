import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-slate-800 text-white mt-10">
      <div className="container mx-auto">
        {/* Important Link in Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-4 px-2 py-10">
          <div>
            <div>
              <h2 className="font-semibold">Customer Care</h2>
              <Link className="inline-block text-xs hover:underline" to="#">
                Help Center
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                How to buy
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Return & Refunds
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Contact Us
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-semibold">Daraz</h2>
              <Link className="inline-block text-xs hover:underline" to="#">
                About Daraz
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Digital Payments
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Career
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Daraz Blog
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Amar Daraz
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                dMart
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Privacy Policy
              </Link>
              <br />
              <Link className="inline-block text-xs hover:underline" to="#">
                Daraz App
              </Link>
            </div>
          </div>
          {/* <div>Footer3</div>
          <div>Footer4</div> */}
        </div>
      </div>
    </div>
  );
};
