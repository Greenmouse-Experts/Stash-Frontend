import Image from "next/image";
import React from "react";

const Future = () => {
  return (
    <div>
      <div className="section">
        <div className="box">
          <div className="lg:grid lg:grid-cols-3 gap-x-12">
            <div className="lg:mt-3">
              <p className="fw-600 text-xl lg:text-4xl">
                The future is now! Stash, your one-stop-shop is here.
              </p>
            </div>
            <div className="col-span-2 mt-8 lg:mt-0 grid md:grid-cols-2 gap-y-8 lg:gap-12">
              <div className="bg-[#6B5AED0D] grid h-80 items-between rounded-md p-6 lg:p-8">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734430/Stash/Group_48096156_mbdsga.png"
                  alt="banner"
                  width={100}
                  height={100}
                  className="w-12"
                />
                <div className="">
                  <p className="fw-600 mb-2">Spend with ease</p>
                  <p>
                    Pay bills, buy airtime/data and enjoy free transfers
                    monthly.
                  </p>
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686735922/Stash/Frame_zrasji.png"
                    alt="banner"
                    width={80}
                    height={80}
                    className="w-8"
                  />
                  <p className="fw-500 pl-1 text-blue">Create a free account</p>
                </div>
              </div>
              <div className="bg-[#6B5AED0D] grid h-80 items-between rounded-md p-6 lg:p-8">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734430/Stash/Group_48096156_mbdsga.png"
                  alt="banner"
                  width={100}
                  height={100}
                  className="w-12"
                />
                <div className="">
                  <p className="fw-600 mb-2">Save without stress</p>
                  <p>Save for yourself. Save for others. Save anyhow.</p>
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686735922/Stash/Frame_zrasji.png"
                    alt="banner"
                    width={80}
                    height={80}
                    className="w-8"
                  />
                  <p className="fw-500 pl-1 text-blue">Create a free account</p>
                </div>
              </div>
              <div className="bg-[#6B5AED0D] grid h-80 items-between rounded-md p-6 lg:p-8">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734430/Stash/Group_48096156_mbdsga.png"
                  alt="banner"
                  width={100}
                  height={100}
                  className="w-12"
                />
                <div className="">
                  <p className="fw-600 mb-2">Quick Loans & Other Services</p>
                  <p>
                    Get loans. Create personal or business accounts. Get POS.
                  </p>
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686735922/Stash/Frame_zrasji.png"
                    alt="banner"
                    width={80}
                    height={80}
                    className="w-8"
                  />
                  <p className="fw-500 pl-1 text-blue">Create a free account</p>
                </div>
              </div>
              <div className="bg-[#6B5AED0D]  grid h-80 items-between  rounded-md p-6 lg:p-8">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734430/Stash/Group_48096156_mbdsga.png"
                  alt="banner"
                  width={100}
                  height={100}
                  className="w-12"
                />
                <div className="">
                  <p className="fw-600 mb-2">Get Rewarded Instantly</p>
                  <p>
                    Sign up today to claim your welcome bonus. Refer friends and
                    get rewarded.
                  </p>
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686735922/Stash/Frame_zrasji.png"
                    alt="banner"
                    width={80}
                    height={80}
                    className="w-8"
                  />
                  <p className="fw-500 pl-1 text-blue">Create a free account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
