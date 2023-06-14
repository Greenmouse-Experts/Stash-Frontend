import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <div className="bg-secondary">
      <div className="box py-12">
        <div className="lg:flex  flex-row-reverse items-center">
        <div className="lg:w-3/12 ">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686744092/Stash/Rectangle_1_ncum0o.png"
              alt="mobile"
              width={200}
              height={400}
              className="lg:w-74 mx-auto"
            />
          </div>
          <div className="mt-6 lg:mt-0 lg:w-9/12 lg:pr-12">
            <p className="fw-600 text-2xl lg:text-5xl text-white px-2">
              Experience premium banking experience with Stash.
            </p>
            <p className="text-gray-100 lg:w-8/12 mt-6 lg:fs-700 px-2">
              Join over 100,000 happy Stash users today. Download StashBox app
              to enjoy free transfers and free withdrawals, Earn N500 when you
              refer your friends to Stash and more.
            </p>
            <div className="mt-10 overflow-hidden flex justify-left">
              <div className="w-24 lg:w-40 h-7 lg:h-12 overflow-hidden">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679657494/Stash/Group_9863_lth9fk.png"
                    alt="banner"
                    width={800}
                    height={800}
                    className="w-full h-full rounded"
                  />
                </Link>
              </div>
              <div className="w-24 lg:w-40 h-7 ml-4 lg:h-12 overflow-hidden">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679657494/Stash/Group_9862_fiuf5m.png"
                    alt="banner"
                    width={800}
                    height={800}
                    className="w-full h-full rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
