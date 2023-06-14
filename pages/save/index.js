import React from "react";
import Layout from "@/components/layouts/homepage/Layout";
import Image from "next/image";
import Reviews from "@/components/frontend/homepage/Reviews";
import DownloadApp from "@/components/frontend/homepage/Download";
import Link from "next/link";
import { VscArrowCircleRight } from "react-icons/vsc";

const SavePage = () => {
  return (
    <Layout>
      <div className="box">
        <div className="h-[150px] lg:h-[300px] grid place-content-center">
          <p className=" mx-auto text-center text-3xl lg:text-6xl fs-700 fws-bold">
            Save and invest with Stash
          </p>
        </div>
        <div className="lg:mt-16">
          <div className="lg:w-11/12 mx-auto lg:flex gap-x-12 items-center">
            <div className="lg:w-6/12 bg-[#6B5AED0D] pt-5">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686755636/Stash/Rectangle_5_tomwry.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-6/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Goal Savings
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">
                  Set a savings goal
                </p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  Whether it&apos;s education, travel, house rent, medical expenses,
                  wedding, business, charity, or any other purpose, our app
                  allows you to save for what matters most to you.
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
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686755636/Stash/Rectangle_6_bqtmap.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-7/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Fixed Savings
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">Fixed Savings</p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  Whether it&apos;s saving N5 million for 3 months or N100,000 for 2
                  months, you can set your savings goals and watch your money
                  grow.
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
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686755636/Stash/Rectangle_7_n1rvkf.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-7/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Save as you Spend
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">Save as you Spend</p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  Save As You Spend (SAYS) is a powerful feature that enables
                  you to save a percentage of your transactions on Stash, while
                  seamlessly managing your expenses.
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
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686755636/Stash/Rectangle_8_akzu4m.png"
                  alt="spend"
                  width={300}
                  height={800}
                  className="w-6/12 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-7/12 mt-6 lg:mt-0 lg:pl-6">
              <span className="px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#C6BFFF]">
                Save for Others
              </span>
              <div className="my-8">
                <p className="text-2xl lg:text-4xl fw-600">
                  Save for Others Effortlessly
                </p>
                <p className="text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12">
                  Savings for Others is a unique feature that allows you to open
                  savings accounts for your loved ones on Stash, even if they
                  don&apos;t have smartphones or aren&apos;t willing to download the app
                  themselves.
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
export default SavePage;
