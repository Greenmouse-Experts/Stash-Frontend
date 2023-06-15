import React, { useState } from "react";
import Layout from "../../components/layouts/homepage/Layout";
import Reviews from "../../components/frontend/homepage/Reviews";
import DownloadApp from "../../components/frontend/homepage/Download";
import AboutAccordion from "../../components/frontend/faq/AboutAccord";
import SpendAccord from "../../components/frontend/faq/SpendAccord";
import SaveAccordion from "../../components/frontend/faq/SaveAccord";
import LoanAccordion from "../../components/frontend/faq/LoanAccord";

const SpendPage = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    color: "#6B5AED",
    transition: "0.6s",
  };
  return (
    <Layout>
      <div className="h-[200px] lg:h-[450px] bg-faq bg-fit"></div>
      <div className="box mt-16">
        <div className="text-center">
          <span className="px-6 lg:px-12 rounded-md py-1 fs-500 fw-500 bg-[#C6BFFF]">
            FAQs
          </span>
          <p className="mt-3 text-2xl lg:text-5xl fws-bold">
            Frequently Asked Questions
          </p>
          <p className="text-[#666D80] lg:w-5/12 mx-auto mt-3">
            These are some of the questions we have answered for many of our
            customers over the years.
          </p>
        </div>
        <div className="mt-8">
          <div className="py-6 border-y border-[#E0E0E0] w-full overflow-x-auto">
            <ul className="w-[420px] md:w-auto flex justify-center gap-x-5 lg:gap-x-12 fw-600">
              <li
              className="cursor-pointer whitespace-nowrap"
                style={open === 1 ? activeStyle : undefined}
                onClick={() => handleOpen(1)}
              >
                ABOUT STASH
              </li>
              <li
              className="cursor-pointer"
                style={open === 2 ? activeStyle : undefined}
                onClick={() => handleOpen(2)}
              >
                SPEND
              </li>
              <li
              className="cursor-pointer"
                style={open === 3 ? activeStyle : undefined}
                onClick={() => handleOpen(3)}
              >
                SAVINGS
              </li>
              <li
              className="cursor-pointer"
                style={open === 4 ? activeStyle : undefined}
                onClick={() => handleOpen(4)}
              >
                LOANS
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:w-9/12 mx-auto">
            {open === 1? <AboutAccordion/> : ""}
            {open === 2? <SpendAccord/> : ""}
            {open === 3? <SaveAccordion/> : ""}
            {open === 4? <LoanAccordion/> : ""}
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
