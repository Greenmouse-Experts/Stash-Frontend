import React from "react";
import Layout from "@/components/layouts/homepage/Layout";
import Image from "next/image";
import Reviews from "@/components/frontend/homepage/Reviews";
import DownloadApp from "@/components/frontend/homepage/Download";
import Link from "next/link";
import { VscArrowCircleRight } from "react-icons/vsc";

const SpendPage = () => {
  return (
    <Layout>
      <div className="box">
        <div className="h-[150px] lg:h-[300px] grid place-content-center">
          <p className=" mx-auto text-center text-3xl lg:text-6xl fs-700 fws-bold">
            Spend with ease
          </p>
        </div>
        <div className="lg:mt-16">
          <div className="lg:w-11/12 mx-auto lg:flex gap-x-12 items-center">
            <div className="lg:w-6/12 bg-[#6B5AED0D] pt-5">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686754712/Stash/Rectangle_2_qgzyrm.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-6/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Free Transfers
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">Enjoy free transfers</p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  You can send money to anyone, pay all your bills, and recharge
                  airtime, with just a few taps on your smartphone - and always
                  at the lowest possible cost.
                </p>
              </div>
              <p className="flex">
                <Link
                  href="/"
                  className="flex items-center fs-400 text-primary"
                >
                  <span>Learn more</span>
                  <VscArrowCircleRight className="ml-2" />
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:w-11/12 mx-auto lg:flex gap-x-12 flex-row-reverse items-center pt-12 lg:pt-36">
            <div className="lg:w-6/12 bg-[#6B5AED0D] pt-5">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686754712/Stash/Rectangle_3_ots9lx.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-7/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Airtime/Data
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">
                  Buy and Schedule Airtime & Data
                </p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  Experience the convenience and flexibility of our fintech
                  app's airtime management features. Recharge with ease, stay
                  connected, and take control of your airtime like never before.
                </p>
              </div>
              <p className="flex">
                <Link
                  href="/"
                  className="flex items-center fs-400 text-primary"
                >
                  <span>Learn more</span>
                  <VscArrowCircleRight className="ml-2" />
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:w-11/12 mx-auto lg:flex gap-x-12 items-center pt-12 lg:pt-36">
            <div className="lg:w-6/12 bg-[#6B5AED0D] pt-5">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686754712/Stash/Rectangle_4_utg2nv.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-7/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Pay & Schedule Bills
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">Pay and Schedule Bills</p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  Take control of your bill payments with our scheduling
                  feature. Whether you want to plan for a future date or set up
                  recurring bill payments, our app has you covered.
                </p>
              </div>
              <p className="flex">
                <Link
                  href="/"
                  className="flex items-center fs-400 text-primary"
                >
                  <span>Learn more</span>
                  <VscArrowCircleRight className="ml-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Reviews />
      </div>
      <DownloadApp />
    </Layout>
  );
};

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SpendPage;
