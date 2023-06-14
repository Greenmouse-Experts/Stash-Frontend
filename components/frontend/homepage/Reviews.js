import React from 'react'
import ReviewSlide from './ReviewSlide'

const Reviews = () => {
  return (
    <div>
        <div className='section'>
            <div className='box lg:py-12'>
                <div className='text-center'>
                <span className='px-6 lg:px-12 rounded py-2 fs-500 fw-500 bg-[#6B5AED33]'>TESTIMONIALS</span>
                    <p className='text-center mt-4 fw-600 text-3xl'>Here is what our clients are saying about us</p>
                    <p className='text-center mt-4 lg:w-4/12 mx-auto text-[#666D80]'>Don’t just take our word for it. Here are a few of many testimonials from our clients.</p>
                    <div className='mt-12 w-10/12 mx-auto'>
                        <ReviewSlide/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews