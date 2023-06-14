import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div>
      <div className="pt-16">
        <div className="box">
          <div className="grid  lg:grid-cols-4 gap-y-8 gap-x-3">
            <div>
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500697/Stash/Group_48096160_vvslzo.png"
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-36 lg:w-44"
                />
              </Link>
              <div className="mt-4 flex items-top gap-x-2">
                <BiPhoneCall className="text-xl mt-2 text-primary"/>
                <div>
                  <p className="fs-500">+234 701 1113 422</p>
                  <p className="fs-500">+234 802 1111 820</p>
                </div>
              </div>
              <div className="flex  items-center gap-x-2">
                <AiOutlineMail className="text-primary"/>
                <p>support@stashng.com</p>
              </div>
              <div className="flex items-top mt-3 gap-x-2">
                <SlLocationPin className="text-xl mt-1 text-primary"/>
                <div>
                  <p className="fs-500">Plot 750, Aminu Kano Crescent, Wuse 2, Abuja.</p>
                  <p className="fs-500">1a, Hughes Avenue, Yaba, Lagos.</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="fw-600 text-blac mb-5 mt-2">Features</p>
                <ul>
                  <li className="">
                    <Link href="/spend">Spend</Link>
                  </li>
                  <li className=" mt-3">
                    <Link href="/save">Save</Link>
                  </li>
                  <li className=" mt-3">
                    <Link href="/loans">Loan</Link>
                  </li>
                  <li className=" mt-3">
                    <Link href="/">Business</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fw-600 text-black mb-5 mt-2">Company</p>
                <ul>
                  <li className="">
                    <Link href="/about">About us</Link>
                  </li>
                  <li className=" mt-3">
                    <Link href="/">Join Our Team</Link>
                  </li>
                  <li className=" mt-3">
                    <Link href="/">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4 lg:mt-0">
                <p className="fw-600 text-black mb-5 mt-2">Support</p>
                <ul>
                  <li className="">
                    <Link href="/">FAQs</Link>
                  </li>
                  <li className=" mt-3">
                    <Link href="/">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="fw-600 text-black mb-5 mt-2">
                Subscribe to Our Newletter
              </p>
              <div>
                <form>
                  <div>
                    <input
                      type="email"
                      className="w-full border border-gray-600 rounded p-2  bg-input"
                    />
                  </div>
                  <div className="mt-4">
                    <button className="btn-primary w-full py-2 fw-600">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:flex items-center justify-between">
            <div className="mt-8 lg:mt-0">
              <ul className="flex">
                <li className="">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f10239cf68e_008-facebook.svg_hiqtxl.png"
                      alt="banner"
                      width={100}
                      height={100}
                      className="w-6"
                    />
                  </Link>
                </li>
                <li className=" ml-3">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5fe49c9cf68c_001-twitter.svg_arydlo.png"
                      alt="banner"
                      width={100}
                      height={100}
                      className="w-6"
                    />
                  </Link>
                </li>
                <li className=" ml-3">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659089/Stash/6194b7fcf08b5fa9e79cf68d_011-instagram.svg_nk4wcu.png"
                      alt="banner"
                      width={100}
                      height={100}
                      className="w-6"
                    />
                  </Link>
                </li>
                <li className=" ml-3">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f79329cf68f_007-youtube.svg_wyxecr.png"
                      alt="banner"
                      width={100}
                      height={100}
                      className="w-6"
                    />
                  </Link>
                </li>
                <li className=" ml-3">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f76879cf692_010-linkedin.svg_ezevd0.png"
                      alt="banner"
                      width={100}
                      height={100}
                      className="w-6"
                    />
                  </Link>
                </li>
                <li className=" ml-3">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f19d39cf68b_006-tumblr.svg_ecn9fj.png"
                      alt="banner"
                      width={100}
                      height={100}
                      className="w-6"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pb-6">
            <p className="text-gray-500 fs-500">
              If you desire additional information regarding the Stash entity
              from which you obtain services, we kindly request that you contact
              us through the in-app chat feature within the Stash application.
              Stash Fintech Ltd (RC1467750), a provider of digital banking
              services and its registered address is located at Plot 750, Aminu
              Kano Crescent, Wuse 2, Abuja, Nigeria and 1a, Hughes Avenue, Yaba,
              Lagos. It is important to note that deposits made with Stash
              Fintech Ltd are insured by the Nigerian Deposit Insurance
              Corporation (NDIC).
            </p>
          </div>
        </div>
        <hr className="mx-6" />
        <div className="box ">
        <div className="py-6 lg:flex justify-between itmes-center gap-y-4">
          <p className="text-gray-500 fs-400">© 2023 Stash Fintech Ltd. All rights reserved.</p>
          <ul className="flex gap-x-3">
            <li className="fs-400 text-gray-500">
              <Link href="/">Privacy policy</Link>
            </li>
            <li className="fs-400 text-gray-500 ">
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li className="fs-400 text-gray-500 ">
              <Link href="/">Cookies</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
