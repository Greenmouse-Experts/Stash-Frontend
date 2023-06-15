import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Header = () => {
  const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);
  const [support, setSupport] = useState(false)
  return (
    <div className="py-4">
      <div className="box">
        <div className="flex justify-between items-center">
          <div className="w-3/12">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500697/Stash/Group_48096160_vvslzo.png"
                alt="logo"
                width={300}
                height={300}
                className="w-36 lg:w-44"
              />
            </Link>
          </div>
          <div className="hidden lg:block w-5/12">
            <ul className="flex justify-center items-center">
              <li className="relative">
                <div
                  className="flex items-center fw-500"
                  onClick={() => setFeature(!feature)}
                  onMouseEnter={() => setFeature(true)}
                  onMouseLeave={() => setFeature(false)}
                >
                  <p>Features</p>{" "}
                  <span className="ml-1 mt-1">
                    {
                      feature? <RiArrowDropUpLine className="text-2xl" /> : <RiArrowDropDownLine className="text-2xl" />
                    }
                  </span>
                </div>
                {feature && (
                  <div className="absolute dropin bg-white shadow-xl top-5 px-3 py-4 w-[300px]" onMouseEnter={() => setFeature(true)}
                  onMouseLeave={() => setFeature(false)}>
                    <ul>
                      <li>
                        <Link href='/save' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686818470/Stash/icons8-bank-68_qsocwy.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Save</p>
                            <p className="fs-300 text-gray-600">Save for yourself. Save for others. Save anyhow.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/spend' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686818471/Stash/icons8-card-wallet-94_nulye1.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Spend</p>
                            <p className="fs-300 text-gray-600">Pay bills, buy airtime/data and enjoy free transfers monthly.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/loans' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686818470/Stash/icons8-loan-64_pwwskg.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Loan</p>
                            <p className="fs-300 text-gray-500">Pay bills, buy airtime/data and enjoy free transfers monthly.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/save' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686818471/Stash/business_vlhlzu.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Business</p>
                            <p className="fs-300 text-gray-600">Pay bills, buy airtime/data and enjoy free transfers monthly.</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative flex px-12 lg:px-16 items-center fw-500">
                <div  className="flex items-center fw-500"
                  onClick={() => setCompany(!company)}
                  onMouseEnter={() => setCompany(true)}
                  onMouseLeave={() => setCompany(false)}>
                <p>Company</p>{" "}
                <span className="ml-1 mt-1">
                {
                      company? <RiArrowDropUpLine className="text-2xl" /> : <RiArrowDropDownLine className="text-2xl" />
                    }
                </span>
                </div>
                {company && (
                  <div className="absolute dropin bg-white shadow-xl top-5 px-3 py-4 w-[300px]" onMouseEnter={() => setCompany(true)}
                  onMouseLeave={() => setCompany(false)}>
                    <ul>
                      <li className="relative">
                        <Link href='/about' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686820558/Stash/icons8-about-94_rs8eoh.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">About Us</p>
                            <p className="fs-300 text-gray-600">We build innovative banking solutions for personal and business needs.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/spend' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686820558/Stash/icons8-team-48_cydbyc.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Join Our Team</p>
                            <p className="fs-300 text-gray-600">Work with us. We will be glad to welcome you into the fold.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/loans' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686820558/Stash/icons8-blog-64_epnvq7.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Blog</p>
                            <p className="fs-300 text-gray-500">Stay Updated with our informing blog news.</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative flex items-center fw-500">
                <div className="flex items-center fw-500"
                  onClick={() => setSupport(!support)}
                  onMouseEnter={() => setSupport(true)}
                  onMouseLeave={() => setSupport(false)}>
                <p>Support</p>{" "}
                <span className="ml-1 mt-1">
                {
                      support? <RiArrowDropUpLine className="text-2xl" /> : <RiArrowDropDownLine className="text-2xl" />
                    }
                </span>
                </div>
                {support && (
                  <div className="absolute dropin bg-white shadow-xl top-5 px-3 py-4 w-[300px]" onMouseEnter={() => setSupport(true)}
                  onMouseLeave={() => setSupport(false)}>
                    <ul>
                      <li className="relative">
                        <Link href='/faq' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686820558/Stash/icons8-about-94_rs8eoh.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">FAQs</p>
                            <p className="fs-300 text-gray-600">View questions we have answered for many of our customers.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href='/contact' className="block flex gap-x-2 border-b  hover:bg-light p-2">
                          <Image
                            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686820558/Stash/icons8-team-48_cydbyc.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-10 h-10"
                          />
                          <div>
                            <p className="fw-500 fs-500">Contact Us</p>
                            <p className="fs-300 text-gray-600">Please feel free to utilize our contact form to establish communication.</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="w-4/12 hidden lg:flex justify-end">
            <Link href="/auth">
              <button className="hover:shadow-md px-6 py-3 fw-500 lg:mr-3">
                Sign In
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="btn-primary px-7 py-3">
                Create a free account
              </button>
            </Link>
          </div>
          <div className="lg:hidden">
            <HiMenuAlt2 className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
