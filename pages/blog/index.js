import React from "react";
import Layout from "../../components/layouts/homepage/Layout";
import Image from "next/image";
import Reviews from "../../components/frontend/homepage/Reviews";
import DownloadApp from "../../components/frontend/homepage/Download";
import Link from "next/link";
import { VscArrowCircleRight } from "react-icons/vsc";

const BlogPage = () => {
  return (
    <Layout>
      <div className="box">
        <div className="h-[150px] lg:h-[300px] grid place-content-center">
          <p className=" mx-auto text-center text-3xl lg:text-6xl fs-700 fws-bold">
            Stay Updated
          </p>
        </div>
        <div className="lg:mt-16">
          <div className="flex gap-x-6">
            <div className="hidden lg:block lg:w-4/12 rounded-r-lg overflow-hidden h-[250px]">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686832285/Stash/IMG_20210322_133031_1_e0imxp.png"
                alt="spend"
                width={800}
                height={300}
                className="w-full h-full"
              />
            </div>
            <div className="lg:lg:w-6/12 rounded-lg overflow-hidden h-[250px]">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686832285/Stash/IMG_20210322_131715_1_ehu4g6.png"
                alt="spend"
                width={800}
                height={300}
                className="w-full h-full"
              />
            </div>
            <div className="hidden lg:block lg:w-2/12 rounded-l-lg overflow-hidden h-[250px]">
              <div className="w-[200%] h-full">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686832285/Stash/shutterstock_1735743149_1_mfo6kz.png"
                  alt="spend"
                  width={800}
                  height={300}
                  className="!w-full h-full"
                />
              </div>
            </div>
          </div>
          {/* blog news */}
          <div className="mt-12">
            <div className="w-full overflow-x-auto">
              <ul className="flex justify-center gap-x-6 fw-600">
                <li className="text-primary">ALL</li>
                <li>NEWS</li>
                <li>UPDATES</li>
                <li>ROUNDUPS</li>
                <li>INTERVIEWS</li>
              </ul>
            </div>
            <div className="my-16 lg:my-36 lg:w-10/12 mx-auto">
              <div className="lg:flex gap-x-16">
                <div className="lg:w-6/12">
                  <div className="flex justify-between pr-5">
                    <p className="fs-400">NEWS</p>
                    <p className="fs-400">January 2, 2023</p>
                  </div>
                  <div className="mt-4">
                    <p className="fw-600 fs-700 lg:text-2xl">
                      Stash launches new banking app with unique digital banking
                      experience in Nigeria
                    </p>
                    <p className="text-[#666D80] mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <p className="fw-800 fs-500 text-primary underline">
                      Read More
                    </p>
                    <p className="fs-300 text-[#666D80]">4 mins read</p>
                  </div>
                </div>
                <div className="lg:w-6/12 bg-light"></div>
              </div>
              <div className="lg:flex gap-x-16 mt-12 lg:mt-24">
                <div className="lg:w-6/12">
                  <div className="flex justify-between pr-5">
                    <p className="fs-400">NEWS</p>
                    <p className="fs-400">January 2, 2023</p>
                  </div>
                  <div className="mt-4">
                    <p className="fw-600 fs-700 lg:text-2xl">
                      Stash launches new banking app with unique digital banking
                      experience in Nigeria
                    </p>
                    <p className="text-[#666D80] mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <p className="fw-800 fs-500 text-primary underline">
                      Read More
                    </p>
                    <p className="fs-300 text-[#666D80]">4 mins read</p>
                  </div>
                </div>
                <div className="lg:w-6/12 bg-light"></div>
              </div>
              <div className="lg:flex gap-x-16 mt-12 lg:mt-24">
                <div className="lg:w-6/12">
                  <div className="flex justify-between pr-5">
                    <p className="fs-400">NEWS</p>
                    <p className="fs-400">January 2, 2023</p>
                  </div>
                  <div className="mt-4">
                    <p className="fw-600 fs-700 lg:text-2xl">
                      Stash launches new banking app with unique digital banking
                      experience in Nigeria
                    </p>
                    <p className="text-[#666D80] mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <p className="fw-800 fs-500 text-primary underline">
                      Read More
                    </p>
                    <p className="fs-300 text-[#666D80]">4 mins read</p>
                  </div>
                </div>
                <div className="lg:w-6/12 bg-light"></div>
              </div>
              <div className="lg:flex gap-x-16 mt-12 lg:mt-24">
                <div className="lg:w-6/12">
                  <div className="flex justify-between pr-5">
                    <p className="fs-400">NEWS</p>
                    <p className="fs-400">January 2, 2023</p>
                  </div>
                  <div className="mt-4">
                    <p className="fw-600 fs-700 lg:text-2xl">
                      Stash launches new banking app with unique digital banking
                      experience in Nigeria
                    </p>
                    <p className="text-[#666D80] mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <p className="fw-800 fs-500 text-primary underline">
                      Read More
                    </p>
                    <p className="fs-300 text-[#666D80]">4 mins read</p>
                  </div>
                </div>
                <div className="lg:w-6/12 bg-light"></div>
              </div>
              <div className="lg:flex gap-x-16 mt-12 lg:mt-24">
                <div className="lg:w-6/12">
                  <div className="flex justify-between pr-5">
                    <p className="fs-400">NEWS</p>
                    <p className="fs-400">January 2, 2023</p>
                  </div>
                  <div className="mt-4">
                    <p className="fw-600 fs-700 lg:text-2xl">
                      Stash launches new banking app with unique digital banking
                      experience in Nigeria
                    </p>
                    <p className="text-[#666D80] mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <p className="fw-800 fs-500 text-primary underline">
                      Read More
                    </p>
                    <p className="fs-300 text-[#666D80]">4 mins read</p>
                  </div>
                </div>
                <div className="lg:w-6/12 bg-light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadApp />
    </Layout>
  );
};

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default BlogPage;
