import Link from 'next/link'
import React from 'react'
import { VscArrowCircleRight } from 'react-icons/vsc'

const Features = () => {
  return (
    <div>
        <div className='section'>
            <div className='box'>
                <div className='lg:w-11/12 mx-auto lg:flex items-center'>
                    <div className='lg:w-6/12 lg:pr-12'>
                        <div className='h-96 w-full bg-light'></div>
                    </div>
                    <div className='lg:w-6/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-3 py-2 fs-300 fw-500 bg-milk'>Fast Payments</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Enjoy seamless payments, at little or no cost</p>
                            <p className='text-gray-500 mt-5 lg:w-10/12'>You can send money to anyone, pay all your bills, and recharge airtime, with just a few taps on your smartphone - and always at the lowest possible cost.</p>
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
                    <div className='lg:w-6/12 lg:pr-12'>
                        <div className='h-96 w-full bg-light'></div>
                    </div>
                    <div className='lg:w-6/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-3 py-2 fs-300 fw-500 bg-milk'>Fast Payments</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Enjoy seamless payments, at little or no cost</p>
                            <p className='text-gray-500 mt-5 lg:w-10/12'>You can send money to anyone, pay all your bills, and recharge airtime, with just a few taps on your smartphone - and always at the lowest possible cost.</p>
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
                    <div className='lg:w-6/12 lg:pr-12'>
                        <div className='h-96 w-full bg-light'></div>
                    </div>
                    <div className='lg:w-6/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-3 py-2 fs-300 fw-500 bg-milk'>Fast Payments</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Enjoy seamless payments, at little or no cost</p>
                            <p className='text-gray-500 mt-5 lg:w-10/12'>You can send money to anyone, pay all your bills, and recharge airtime, with just a few taps on your smartphone - and always at the lowest possible cost.</p>
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
                    <div className='lg:w-6/12 lg:pr-12'>
                        <div className='h-96 w-full bg-light'></div>
                    </div>
                    <div className='lg:w-6/12 mt-6 lg:mt-0 lg:pl-6'>
                        <span className='px-3 py-2 fs-300 fw-500 bg-milk'>Fast Payments</span>
                        <div className='my-8'>
                            <p className='text-4xl fw-600'>Enjoy seamless payments, at little or no cost</p>
                            <p className='text-gray-500 mt-5 lg:w-10/12'>You can send money to anyone, pay all your bills, and recharge airtime, with just a few taps on your smartphone - and always at the lowest possible cost.</p>
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