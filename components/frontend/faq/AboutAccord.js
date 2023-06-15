import React,{ Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const AboutAccordion = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="bg-gradient p-4 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">What is Stash App?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">What are the benefits for Stash?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">How can I start saving or investing with Stash?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">Can I withdraw the money in my virtual wallet?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">Can I get my referral bonus without having an active savings plan?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">When does referral bonus mature?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">Can I have more than one savings or investment plan at a time on Stash?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8}>
        <AccordionHeader onClick={() => handleOpen(8)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">Is StashBox regulated by Government?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9}>
        <AccordionHeader onClick={() => handleOpen(9)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">Why do I have to link my card to Stash?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10}>
        <AccordionHeader onClick={() => handleOpen(10)} className="bg-gradient p-4 mt-3 text-white rounded">
          <div className="flex  gap-x-1 lg:gap-x-6 items-center">
            <p>Q:</p>
          <p className="fs-600">How long does it take to withdraw?</p>
          </div>
        </AccordionHeader>
        <AccordionBody className='bg-[#F7F8F9] p-2 lg:p-5'>
          <p>Stash is a mobile app that enables you save, invest and earn effortlessly. It promotes savings culture and financial literacy.The app also enables users save or invest.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default AboutAccordion