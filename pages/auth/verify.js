"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLockOutline } from 'react-icons/md'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const VerifyUser = () => {

  return (
    <div>
        <div className="lg:bg-secondary min-h-screen font-primary" >
            <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
                <div className="lg:w-4/12 rounded shadow bg-white w-11/12 p-6 pb-8">
                    <div className='mt-4'>
                        <p className='fw-500 text-center lg:text-2xl '>Verify Phone Number</p>
                        <p className='text-center mt-2'>We have just sent you a 6-digit code to +2340803724880.</p>
                        <p className='text-center mb-12'>Enter the code to verify phone number.</p>
                        <form>
                            <div className='w-9/12 mx-auto grid grid-cols-5 justify-between'>
                                <input type='text' className='w-10 h-10 border border-gray-500 rounded'/>
                                <input type='text' className='w-10 h-10 border border-gray-500 rounded'/>
                                <input type='text' className='w-10 h-10 border border-gray-500 rounded'/>
                                <input type='text' className='w-10 h-10 border border-gray-500 rounded'/>
                                <input type='text' className='w-10 h-10 border border-gray-500 rounded'/>
                            </div>
                            <div className='mt-12'>
                                <button className='py-3 lg:text-lg w-full btn-primary'>
                                   Verify Phone Number
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerifyUser