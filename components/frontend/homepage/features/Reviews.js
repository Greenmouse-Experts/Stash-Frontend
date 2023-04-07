import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { VscArrowCircleRight } from 'react-icons/vsc'

const Reviews = () => {
  return (
    <div>
        <div className='section'>
            <div className='box lg:py-12'>
                <div>
                    <p className='text-center fw-600 text-3xl'>Trusted by over 2 million customers</p>
                    <div className='mt-8'>
                        <p className='flex items-center justify-center'>
                            <FaStar className='text-xl text-purple-700'/>
                            <FaStar className='text-xl text-purple-700 ml-2'/>
                            <FaStar className='text-xl text-purple-700 ml-2'/>
                            <FaStar className='text-xl text-purple-700 ml-2'/>
                            <FaStarHalfAlt className='text-xl text-purple-700 ml-2'/>
                            <span className='text-gray-500 ml-3'>+4.4</span>
                        </p>
                        <p className='lg:w-5/12 text-center fw-500 text-gray-600 mx-auto mt-2'>Score based on over 78,000 reviews on Google Play Store and App Store</p>
                    </div>
                    {/* slide reviews */}
                    <div className='w-full overflow-hidden'>
                        <div className='w-150'>
                            <div className='w-full mt-16 flex gap-x-12'>
                                <div className='w-96 h-80 rounded-lg bg-white p-8 grid content-between'>
                                    <div>
                                        <p className='text-gray-500 fs-500'>I had an awesome experience with carbon, very reliable n trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680003695/Stash/profile_rl7x7s.jpg' alt='banner' width={400} height={400} className='w-16 h-16 rounded-lg'/>
                                        <p className='fw-500 fs-500 ml-3'>Gbenga John Osukoya</p>
                                    </div>
                                </div>
                                <div className='w-96 h-80 rounded-lg bg-white p-8 grid content-between'>
                                    <div>
                                        <p className='text-gray-500 fs-500'>I had an awesome experience with carbon, very reliable n trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680003695/Stash/profile_rl7x7s.jpg' alt='banner' width={400} height={400} className='w-16 h-16 rounded-lg'/>
                                        <p className='fw-500 fs-500 ml-3'>Gbenga John Osukoya</p>
                                    </div>
                                </div>
                                <div className='w-96 h-80 hidden rounded-lg bg-white p-8 lg:grid content-between'>
                                    <div>
                                        <p className='text-gray-500 fs-500'>I had an awesome experience with carbon, very reliable n trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680003695/Stash/profile_rl7x7s.jpg' alt='banner' width={400} height={400} className='w-16 h-16 rounded-lg'/>
                                        <p className='fw-500 fs-500 ml-3'>Gbenga John Osukoya</p>
                                    </div>
                                </div>
                                <div className='w-96 h-80 hidden rounded-lg bg-white p-8 lg:grid content-between'>
                                    <div>
                                        <p className='text-gray-500 fs-500'>I had an awesome experience with carbon, very reliable n trustworthy, infact d instalmental repayment is d tip of d iceberg. I hereby recommend this LOAN APP among apps...CARBON to all prospective borrower, u will never be disappointed.</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680003695/Stash/profile_rl7x7s.jpg' alt='banner' width={400} height={400} className='w-16 h-16 rounded-lg'/>
                                        <p className='fw-500 fs-500 ml-3'>Gbenga John Osukoya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-16'>
                            <p className='flex justify-center'>
                                <Link href='/' className='flex items-center fs-400 text-primary'>
                                    <span>Read more user stories</span>
                                    <VscArrowCircleRight className='ml-2'/>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews