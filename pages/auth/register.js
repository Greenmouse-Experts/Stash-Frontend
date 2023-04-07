"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLockOutline } from 'react-icons/md'
import { BsChatRightDots, BsTelephonePlus } from 'react-icons/bs'
import { FaRegEye, FaRegEyeSlash, FaRegUser } from 'react-icons/fa'

const Register = () => {

    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

  return (
    <div>
        <div className="bg-secondary min-h-screen font-primary" >
            <div className="flex lg:py-16 text-sm min-h-screen items-center justify-center">
                <div className="lg:w-5/12 rounded w-11/12">
                    <Link href='/'>
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679578815/Stash/Group_48096158_1_c9v8u8.png' alt='logo' width={300} height={300} className='w-36 lg:w-48 mb-5 mx-auto'/>
                    </Link>
                    <div className='shadow bg-white p-8 rounded-lg'>
                      <div className='mt-4'>
                          <p className='fw-600 text-blac text-center lg:text-2xl '>Create a Secure Stash Account</p>
                          <p className='mt-2 fs-500 text-gray-500 text-center mb-12'>Create a secure account on Stash</p>
                          <form>
                              <div>
                                  <label className='text-primary fw-500'>Your Full Name</label>
                                  <div className='bg-input p-2 mt-2 flex items-center rounded fs-600'>
                                      <FaRegUser className='text-xl lg:text-xl mx-2 text-input'/>
                                      <input type='text' placeholder='Enter your full name' className='p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none'/>
                                  </div>
                              </div>
                              <div className='mt-4'>
                                <label className='text-primary fw-500'>Your Email Address</label>
                                <div className='bg-input p-2 mt-2 flex items-center rounded fs-600'>
                                    <AiOutlineMail className='text-xl lg:text-2xl mx-2 text-input mt-1'/>
                                    <input type='email' placeholder='Enter your email address' className='p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none'/>
                                </div>
                              </div>
                              <div className='mt-4'>
                                <label className='text-primary fw-500'>Your Phone Number</label>
                                <div className='bg-input p-2 mt-2 flex items-center rounded fs-600'>
                                    <BsTelephonePlus className='text-xl lg:text-xl mx-2 text-input mt-1'/>
                                    <input type='text' placeholder='Enter Phone Number' className='p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none'/>
                                </div>
                              </div>
                              <div className='mt-4'>
                                <label className='text-primary fw-500'>Your Pin</label>
                                  <div className='bg-input p-2 mt-2 flex items-center rounded fs-600'>
                                      <MdLockOutline className='text-xl lg:text-2xl mt-1 mx-2 text-input '/>
                                      <input 
                                          type={passwordType} 
                                          placeholder='Enter your PIN' 
                                          className='p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none'/>
                                      <div onClick={togglePassword} className="px-3">
                                          {passwordType === "password" ? <FaRegEyeSlash className="text-xl text-input" /> : <FaRegEye className="text-xl text-input" />}
                                      </div>
                                  </div>
                              </div>
                              <div className='mt-4'>
                                <label className='text-primary fw-500'>Phone Number of Referee (optional)</label>
                                <div className='bg-input p-2 mt-2 flex items-center rounded fs-600'>
                                    <BsTelephonePlus className='text-xl lg:text-xl mx-2 text-input mt-1'/>
                                    <input type='text' placeholder='Enter phone number of referee' className='p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none'/>
                                </div>
                              </div>
                              <div className='mt-4'>
                                <label className='text-primary fw-500'>How did you hear about us? (optional)</label>
                                <div className='bg-input p-2 mt-2 flex items-center rounded fs-600'>
                                    <BsChatRightDots className='text-xl lg:text-xl mx-2 text-input mt-1'/>
                                    <select className='p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none'>
                                      <option>Facebook</option>
                                      <option>Twitter</option>
                                    </select>
                                </div>
                              </div>
                              <div className='mt-12'>
                                  <Link href='/auth/verify'>
                                    <button className='py-3 lg:text-lg w-full btn-primary'>
                                        Create Stash Account
                                    </button>
                                  </Link>
                              </div>
                          </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register