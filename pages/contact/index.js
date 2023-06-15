import React from "react";
import Layout from "../../components/layouts/homepage/Layout";
import DownloadApp from "../../components/frontend/homepage/Download";
import ContactForm from "../../components/frontend/contact/ContactForm";

const SpendPage = () => {
  return (
    <Layout>
      <div className="h-[200px] lg:h-[450px] bg-contact bg-fit"></div>
      <div className="box my-16">
        <div className="lg:w-11/12 grid lg:grid-cols-2 items-center gap-x-24 gap-y-12 mx-auto">
            <div>
                <div>
                    <p className="fw-600 text-2xl">Let&apos;s Talk</p>
                    <p className="mt-6 fs-500">Please feel free to utilize our contact form to establish communication, and rest assured that we will promptly respond to address any concerns or inquiries you may have.</p>
                </div>
                <div className="mt-5 lg:mt-10">
                    <p className="fw-600 text-2xl">Send Email</p>
                    <p className="mt-6">support@stashng.com</p>
                </div>
            </div>
        <div>
            <ContactForm/>
        </div>
        </div>
      </div>
      <DownloadApp />
    </Layout>
  );
};

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SpendPage;