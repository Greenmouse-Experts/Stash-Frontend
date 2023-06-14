import React from "react";
import Layout from "@/components/layouts/homepage/Layout";
import Image from "next/image";
import Reviews from "@/components/frontend/homepage/Reviews";
import DownloadApp from "@/components/frontend/homepage/Download";
import Link from "next/link";
import { VscArrowCircleRight } from "react-icons/vsc";

const LoanPage = () => {
  return (
    <Layout>
      <div className="box">
        <div className="h-[150px] lg:h-[300px] grid place-content-center">
          <p className=" mx-auto text-center text-3xl lg:text-6xl fs-700 fws-bold">
            Get loans freely
          </p>
        </div>
        <div className="lg:mt-16">
          <div className="lg:w-11/12 mx-auto lg:flex gap-x-12 items-center">
            <div className="lg:w-6/12 bg-[#6B5AED0D] pt-5">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686756987/Stash/Rectangle_10_jjsjhg.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-6/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                SALAD Loans
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">Get SALAD Loans as an Employee</p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                Get up to N2m Salad loans up to 18 months. Salad is available to salaried employees at lowest rates. Loans are instant and digital.
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
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686756987/Stash/Rectangle_9_dxecgy.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-7/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                kollect Loan
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">
                Get Collect Loans for your Business
                </p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                Kollect Loans provide you with constant access to funds, catering specifically to restaurants, food businesses and supermarkets anywhere in Nigeria.
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
export default LoanPage;
