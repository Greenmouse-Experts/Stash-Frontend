import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const ReviewSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-5/12">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686740626/Stash/Group_48096850_rfzcyy.png"
              alt=""
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-6/12 mt-6 lg:mt-0">
            <div>
              <p className="flex items-center">
                <FaStar className="text-3xl text-[#7879F1]" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaRegStar className="text-3xl text-[#7879F1] ml-2" />
                <span className="text-gray-500 ml-3 text-[#7879F1] mt-1 lg:text-xl">
                  4/5
                </span>
              </p>
            </div>
            <div className="mt-6 text-left">
              <p className="lg:fs-700 text-[#666D80] relative z-10">
                Stash has truly simplified my financial life. I've tried
                numerous banking apps before, but none have come close to the
                seamless experience I've had with Stash. From the moment I
                signed up, I was impressed by the clear and concise interface.
                Whether I'm spending, saving, or borrowing, Stash provides the
                tools and guidance I need to make informed decisions. It's like
                having a personal financial advisor in my pocket. I highly
                recommend Stash to anyone looking for a hassle-free banking
                solution.
              </p>
              <p className="fs-800 fw-600 mt-8">Anuoluwapo Oluwagbayela</p>
              <p className="mt-3 text-[#666D80]">Chartered Account</p>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686742415/Stash/llhktl7hw7l0wwa5hok0.png"
                alt=""
                width={100}
                height={100}
                className="w-36 h-auto absolute right-0 top-[58%]"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="lg:flex items-center justify-between">
          <div className="lg:w-5/12">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686740626/Stash/Group_48096851_o5nikt.png"
              alt=""
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-6/12 mt-6 lg:mt-0">
            <div>
              <p className="flex items-center">
                <FaStar className="text-3xl text-[#7879F1]" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <span className="text-gray-500 ml-3 text-[#7879F1] mt-1 lg:text-xl">
                  5/5
                </span>
              </p>
            </div>
            <div className="mt-6 text-left">
              <p className="lg:fs-700 text-[#666D80] relative z-10">
              I've been using Stash for over 2 years months now, and it has completely transformed the way I manage my money. With Stash, I can effortlessly spend, save, borrow, and keep track of my finances all in one place. The user experience is incredibly smooth and intuitive, making it a breeze to navigate through the app. Stash has truly simplified my financial life and given me peace of mind. I highly recommend it to anyone looking for a digital banking solution that puts convenience and control at the forefront.
              </p>
              <p className="fs-800 fw-600 mt-8">Mr. Taiwo Yakub</p>
              <p className="mt-3 text-[#666D80]">Realtor</p>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686742415/Stash/llhktl7hw7l0wwa5hok0.png"
                alt=""
                width={100}
                height={100}
                className="w-36 h-auto absolute right-0 top-[58%]"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="lg:flex pb-12 lg:pb-0 items-center justify-between">
          <div className="lg:w-5/12">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686740626/Stash/Group_48096852_df3ojr.png"
              alt=""
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-6/12 mt-6 lg:mt-0">
            <div>
              <p className="flex items-center">
                <FaStar className="text-3xl text-[#7879F1]" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaStar className="text-3xl text-[#7879F1] ml-2" />
                <FaRegStar className="text-3xl text-[#7879F1] ml-2" />
                <span className="text-gray-500 ml-3 text-[#7879F1] mt-1 lg:text-xl">
                  4/5
                </span>
              </p>
            </div>
            <div className="mt-6 text-left">
              <p className="lg:fs-700 text-[#666D80] relative z-10">
              Stash has been a game-changer for me when it comes to managing my finances. As someone who always found money management overwhelming, Stash has made it incredibly easy and accessible. I love how I can seamlessly spend, save, and even borrow money whenever I need to. The interface is clean, user-friendly, and packed with helpful features. Stash has truly made financial empowerment a reality for me, and I can't imagine going back to traditional banking. If you're looking for a digital bank that streamlines your financial life, Stash is the way to go!
              </p>
              <p className="fs-800 fw-600 mt-8">Mr. Kenneth Ugama</p>
              <p className="mt-3 text-[#666D80]">Entrepreneur</p>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686742415/Stash/llhktl7hw7l0wwa5hok0.png"
                alt=""
                width={100}
                height={100}
                className="w-36 h-auto absolute right-0 top-[58%]"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlide;
