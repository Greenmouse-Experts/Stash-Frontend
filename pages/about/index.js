import React from "react";
import Layout from "../../components/layouts/homepage/Layout";
import Image from "next/image";
import Reviews from "../../components/frontend/homepage/Reviews";
import DownloadApp from "../../components/frontend/homepage/Download";

const AboutPage = () => {
  return (
    <Layout>
      <div className="box">
        <div className="h-[300px] grid place-content-center">
          <p className="w-7/12 mx-auto text-center lg:text-6xl fs-700 fws-bold">
            Revolutionizing digital banking experience
          </p>
        </div>
        <div className="mt-8 lg:mt-16">
          <div className="lg:w-10/12 mx-auto lg:flex items-center">
            <div className="lg:w-6/12">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686753739/Stash/shutterstock_1757465174_1_1_di89i9.png"
                alt="image"
                width={500}
                height={500}
                className="lg:w-10/12 mx-auto"
              />
            </div>
            <div className="lg:w-6/12">
              <div>
                <p className="fws-bold fs-700 lg:text-xl mb-5">Our Vision</p>
                <p>To be the leading all-in-one digital bank.</p>
              </div>
              <div className="mt-12">
                <p className="fws-bold fs-700 lg:text-xl mb-5">Our Mission</p>
                <p>
                  To provide seamless financial service through smooth user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <p className="lg:text-5xl lg:mt-8 text-center fs-700 fws-bold">
            Who we are
          </p>
          <p className="mt-6 text-center lg:w-6/12 mx-auto">
            We build innovative banking solutions for personal and business
            needs. Stash helps individual and businesses spend, save, pay and
            get loans.
          </p>
          <div className="mt-8">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686753740/Stash/IMG_20210322_131932_1_1_yfugqx.png"
              alt="image"
              width={1200}
              height={800}
              className="w-11/12 mx-auto h-auto"
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex lg:w-10/12 mx-auto items-center justify-between">
            <div className="w-6/12">
              <p className="fws-bold lg:text-3xl">Our Core Values</p>
              <ul className="mt-4 list-disc list-inside">
                <li>Our Culture</li>
                <li className="mt-2">Partnerships</li>
                <li className="mt-2">Product Integrity</li>
                <li className="mt-2">People Focus</li>
                <li className="mt-2">Customer Centic</li>
              </ul>
              <p className="mt-3">
                “ We assure you a cutting edge customer experience at Stash”{" "}
              </p>
              <p className="mt-6 fws-bold">Paul Oseghale</p>
              <p className="mt-1">Product Manager</p>
            </div>
            <div className="w-6/12">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686753739/Stash/My_Profile_Photo_1_1_lchorb.png"
                alt="image"
                width={500}
                height={500}
                className="w-10/12"
              />
            </div>
          </div>
        </div>
        <Reviews/>
      </div>
      <DownloadApp/>
    </Layout>
  );
};

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default AboutPage;
