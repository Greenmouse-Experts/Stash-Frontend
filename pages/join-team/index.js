import React from "react";
import Layout from "../../components/layouts/homepage/Layout";
import Image from "next/image";
import Reviews from "../../components/frontend/homepage/Reviews";
import DownloadApp from "../../components/frontend/homepage/Download";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { BiTime, BiWallet } from "react-icons/bi";

const JoinTeam = () => {
  return (
    <Layout>
      <div className="box">
        <div className="h-[150px] lg:h-[300px] grid place-content-center">
          <p className=" mx-auto text-center text-3xl lg:text-6xl fs-700 fws-bold">
            Work with us
          </p>
        </div>
        <div className="lg:mt-16">
          <div className="flex gap-x-6">
          <div className="hidden lg:block lg:w-2/12 bg-gradient rounded-r-lg overflow-hidden h-[250px]">
              
            </div>
            <div className="hidden lg:block lg:w-4/12 rounded-lg overflow-hidden h-[250px]">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686832285/Stash/shutterstock_1735743149_1_mfo6kz.png"
                alt="spend"
                width={800}
                height={300}
                className="w-full h-full"
              />
            </div>
            <div className="lg:lg:w-6/12 rounded-l-lg overflow-hidden h-[250px]">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686832285/Stash/shutterstock_1008032857_1_usqk5n.png"
                alt="spend"
                width={800}
                height={300}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* blog news */}
          <div className="mt-12">
            <div className="w-full overflow-x-auto">
              <ul className="flex text-[#666D80] justify-center gap-x-6 fw-600">
                <li className="text-primary">ALL</li>
                <li>GROWTH</li>
                <li>DESIGN</li>
                <li>ENGINEERING</li>
                <li>HUMAN RESOURCE</li>
                <li>OPERATIONS</li>
                <li>FINANCE</li>
              </ul>
            </div>
            <div className="my-16 lg:my-28">
              <div className="border-y border-[#E0E0E0]">
                <div className="lg:w-10/12 mx-auto py-6">
                <div className="flex items-center justify-between">
                    <p className="fw-600 fs-700 lg:text-2xl">UI-UX Designer</p>
                    <p className="text-primary flex gap-x-2 items-center cursor-pointer">Apply<AiOutlineRight/></p>
                </div>
                <div>
                    <p className="fs-500 text-[#666D80]">We are looking for an experienced UX-UI designer to join our team in Lagos, Nigeria.</p>
                    <div className="flex gap-x-1 lg:gap-x-4 mt-4">
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <HiOutlineLocationMarker className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Hybrid</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiTime className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Full Time</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiWallet className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Competitive Pay</p>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="border-b border-[#E0E0E0]">
                <div className="lg:w-10/12 mx-auto py-6">
                <div className="flex items-center justify-between">
                    <p className="fw-600 fs-700 lg:text-2xl">Customer Success Manager</p>
                    <p className="text-primary flex gap-x-2 items-center cursor-pointer">Apply<AiOutlineRight/></p>
                </div>
                <div>
                    <p className="fs-500 text-[#666D80]">We are looking for an experienced Customer Success Manager to join our team in Lagos and in Abuja.</p>
                    <div className="flex gap-x-1 lg:gap-x-4 mt-4">
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <HiOutlineLocationMarker className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">On Site</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiTime className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Full Time</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiWallet className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Competitive Pay</p>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="border-b border-[#E0E0E0]">
                <div className="lg:w-10/12 mx-auto py-6">
                <div className="flex items-center justify-between">
                    <p className="fw-600 fs-700 lg:text-2xl">Software Developer</p>
                    <p className="text-primary flex gap-x-2 items-center cursor-pointer">Apply<AiOutlineRight/></p>
                </div>
                <div>
                    <p className="fs-500 text-[#666D80]">We are looking for an experienced JavaScript developer to join our engineering team in Lagos.</p>
                    <div className="flex gap-x-1 lg:gap-x-4 mt-4">
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <HiOutlineLocationMarker className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Hybrid</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiTime className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Full Time</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiWallet className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Competitive Pay</p>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="border-b border-[#E0E0E0]">
                <div className="lg:w-10/12 mx-auto py-6">
                <div className="flex items-center justify-between">
                    <p className="fw-600 fs-700 lg:text-2xl">Risk and Compliance Officer</p>
                    <p className="text-primary flex gap-x-2 items-center cursor-pointer">Apply<AiOutlineRight/></p>
                </div>
                <div>
                    <p className="fs-500 text-[#666D80]">We are looking for an experienced Risk and Compliance Officer to join our team in Lagos.</p>
                    <div className="flex gap-x-1 lg:gap-x-4 mt-4">
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <HiOutlineLocationMarker className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">On Site</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiTime className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Full Time</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiWallet className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Competitive Pay</p>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <div className="border-b border-[#E0E0E0]">
                <div className="lg:w-10/12 mx-auto py-6">
                <div className="flex items-center justify-between">
                    <p className="fw-600 fs-700 lg:text-2xl">Customer Support Representative</p>
                    <p className="text-primary flex gap-x-2 items-center cursor-pointer">Apply<AiOutlineRight/></p>
                </div>
                <div>
                    <p className="fs-500 text-[#666D80]">We are looking for an experienced Customer Support Representative to join our team in Lagos.</p>
                    <div className="flex gap-x-1 lg:gap-x-4 mt-4">
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <HiOutlineLocationMarker className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">On Site</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiTime className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Full Time</p>
                        </div>
                        <div className="bg-[#E8EAED] flex items-center gap-x-2 px-2 lg:px-4 py-1 rounded">
                            <BiWallet className="text-[#666D80]"/>
                            <p className="text-[#666D80] fs-300">Competitive Pay</p>
                        </div>
                    </div>
                </div>
                </div>
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
export default JoinTeam;
