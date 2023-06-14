import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscArrowCircleRight } from 'react-icons/vsc'

const Features = () => {
  return (
    <div>
        <div className='section'>
            <div className='box'>
                <div className='lg:w-11/12 mx-auto lg:flex items-center'>
                    <div className='lg:w-5/12 lg:pr-12'>
                        <div className='w-full'>
                            <Image
                            src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734431/Stash/Group_48096618_yul9wa.png'
                            alt='spend'
                            width={600}
                            height={800}
                            className='lg:w-10/12 mx-auto'
                            />
                        </div>
                    </div>
                    <div className='lg:w-7/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#6B5AED33]'>Spend Effortlessly</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Buy airtime, Buy data, Pay Bills and Schedule Bills effortlessly</p>
                            <p className='text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12'>With Stash, take control of your airtime purchases like never before. Our Schedule Airtime feature empowers you to plan ahead by scheduling airtime for a future date or on a recurring basis.</p>
                        </div>
                        <p className='flex'>
                            <Link href='/' className='flex items-center fs-400 text-primary'>
                                <span>Learn more</span>
                                <VscArrowCircleRight className='ml-2'/>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto lg:flex flex-row-reverse items-center pt-12 lg:pt-36'>
                    <div className='lg:w-5/12 lg:pr-12'>
                        <div className='w-full'>
                            <Image
                            src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734431/Stash/Group_48096782_w7p6ny.png'
                            alt='spend'
                            width={600}
                            height={800}
                            className='lg:w-11/12 mx-auto'
                            />
                        </div>
                    </div>
                    <div className='lg:w-7/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#6B5AED33]'>Save with Ease</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Achieve your financial goals through savings</p>
                            <p className='text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12'>Start saving for the life you envision. Our goal savings feature empowers you to save towards your aspirations, whether it's education, travel, medical expenses, or any other purpose that matters to you. </p>
                        </div>
                        <p className='flex'>
                            <Link href='/' className='flex items-center fs-400 text-primary'>
                                <span>Learn more</span>
                                <VscArrowCircleRight className='ml-2'/>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto lg:flex items-center pt-12 lg:pt-36'>
                    <div className='lg:w-5/12 lg:pr-12'>
                        <div className='w-full'>
                            <Image
                            src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734431/Stash/Group_48096825_zrirpf.png'
                            alt='spend'
                            width={600}
                            height={800}
                            className='lg:w-10/12 mx-auto'
                            />
                        </div>
                    </div>
                    <div className='lg:w-7/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#6B5AED33]'>Get Loans Instantly</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Get salary advance loans at the lowest possible interest rate</p>
                            <p className='text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12'>You can send money to anyone, pay all your bills, and recharge airtime, with just a few taps on your smartphone - and always at the lowest possible cost.</p>
                        </div>
                        <p className='flex'>
                            <Link href='/' className='flex items-center fs-400 text-primary'>
                                <span>Learn more</span>
                                <VscArrowCircleRight className='ml-2'/>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto lg:flex flex-row-reverse items-center pt-12 lg:pt-36'>
                    <div className='lg:w-5/12 lg:pr-12'>
                        <div className='w-full'>
                            <Image
                            src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686734431/Stash/Group_48096620_urm7fw.png'
                            alt='spend'
                            width={600}
                            height={800}
                            className='lg:w-11/12 mx-auto'
                            />
                        </div>
                    </div>
                    <div className='lg:w-7/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-6 lg:px-12 rounded-md py-2 fs-500 fw-500 bg-[#6B5AED33]'>Get Reward Constantly</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Collect Your Rewards more than once on Stash app</p>
                            <p className='text-[#6B778C] lg:fs-700 mt-5 lg:w-10/12'>Join us now to seize your exclusive welcome bonus. Invite your friends and unlock generous rewards as our way of saying thanks.</p>
                        </div>
                        <p className='flex'>
                            <Link href='/' className='flex items-center fs-400 text-primary'>
                                <span>Learn more</span>
                                <VscArrowCircleRight className='ml-2'/>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features