import React from "react";
import Layout from "../../components/layouts/homepage/Layout";
import Reviews from "../../components/frontend/homepage/Reviews";
import DownloadApp from "../../components/frontend/homepage/Download";

const SpendPage = () => {
  return (
    <Layout>
      <div className="h-[200px] lg:h-[450px] bg-faq bg-fit"></div>
      <div className="box mt-16">
        <div className="text-center">
          <span className="px-6 lg:px-12 rounded-md py-1 fs-500 fw-500 bg-[#C6BFFF]">
            FAQs
          </span>
          <p className="mt-3 text-2xl lg:text-5xl fws-bold">Frequently Asked Questions</p>
          <p className="text-[#666D80] w-5/12 mx-auto mt-3">These are some of the questions we have answered for many of our customers over the years.</p>
        </div>
        <div className="mt-8">
            <div className="py-6 border-y border-[#E0E0E0]">
                <ul className="flex justify-center gap-x-12 fw-600">
                    <li className="text-primary">ABOUT STASH</li>
                    <li>SPEND</li>
                    <li>SAVINGS</li>
                    <li>LOANS</li>
                </ul>
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
