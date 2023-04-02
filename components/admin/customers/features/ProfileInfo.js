import Image from 'next/image'
import React from 'react'

const ProfileInfo = () => {
  return (
    <div>
        <div className='py-16 border-b lg:flex '>
            <div className='w-3/12'>
                <p className='fw-600 text-2xl'>Personal Data</p>
                <p>Tier 1</p>
            </div>
            <div className='w-9/12 grid grid-cols-2 gap-x-16'>
                <div>
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>First name</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            placeholder='Emmanuel'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Middle name</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            placeholder='Emmanuel'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Phone</label>
                        <div className='w-full  flex items-center p-3 rounded border mt-2 border-gray-400'>
                            <input 
                                type='text' 
                                className=' w-full'
                                placeholder='0900000000'
                                />
                            <p className='fw-600 text-green-500'>verified</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Gender</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Male'
                            />
                    </div>
                </div>
                <div>  
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Last name</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Jonah'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Email</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='greenmouse@gmail.com'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Date of Birth</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='14 -May -1980'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Date of Registration</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='30 - January - 2023'
                            />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-16 border-b lg:flex '>
            <div className='w-3/12'>
                <p className='fw-600 text-2xl'>Contact Address</p>
                <p>Tier 1</p>
            </div>
            <div className='w-9/12 grid grid-cols-2 gap-x-16'>
                <div>
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Residential address</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Plot 412, street, maitama'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>State of Residence</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Abuja'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Country</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Nigeria'
                            />
                    </div>
                </div>
                <div>  
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Local Government Area</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='AMAC'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Landmark</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Near Oando Stand'
                            />
                    </div>
                    <div className='mt-8 text-end'>
                       <button className='px-4 py-1 text-primary border border-indigo-300 rounded'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-16 border-b lg:flex '>
            <div className='w-3/12'>
                <p className='fw-600 text-2xl'>Stash Wallet</p>
            </div>
            <div className='w-9/12 grid grid-cols-2 gap-x-16'>
                <div>
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Stash Wallet Number</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            placeholder='3897837813017'
                            />
                    </div>
                </div>
                <div>  
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Stash Tag</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='@emmaJ'
                            />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-16 border-b lg:flex '>
            <div className='w-3/12'>
                <p className='fw-600 text-2xl'>KYC Status</p>
                <p>Tier 2</p>
            </div>
            <div className='w-9/12 grid grid-cols-2 gap-x-16'>
                <div>
                    <div className=''>
                        <label className='fw-500 lg:fs-700 text-gray-500'>BVN</label>
                        <div className='w-full  flex items-center p-3 rounded border mt-2 border-gray-400'>
                            <input 
                                type='text' 
                                className=' w-full'
                                placeholder='383838992'
                                />
                            <p className='fw-600 text-green-500'>verified</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Account Name</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            placeholder='Emmanuel Jonah'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Card Type</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Mastercard'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Facial Recognition</label>
                        <div className='w-full  flex items-center p-3 rounded border mt-2 border-gray-400'>
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679581107/Stash/PHOTO-2022-10-21-09-00-15_1_z2kh53.png' alt='banner' width={200} height={100} className='w-10 mr-3 circle'/>
                            <input 
                                type='text' 
                                className=' w-full'
                                value='Facial Recognition'
                                />
                            <p className='fw-600 text-green-500'>verified</p>
                        </div>
                    </div>
                </div>
                <div>  
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Bank</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Zenith Bank'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Account Number</label>
                        <input 
                            type='number' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='11727829220'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Card Number</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='4326 *** *** 2869'
                            />
                    </div>
                </div>
            </div>
        </div>
        <div className='py-16 border-b lg:flex '>
            <div className='w-3/12'>
                <p className='fw-600 text-2xl'>KYC Status</p>
                <p>Tier 3</p>
            </div>
            <div className='w-9/12 grid grid-cols-2 gap-x-16'>
                <div>
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Identity Verification</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            placeholder='NIN'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Next of Kin</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            placeholder='Emmanuel Atikulu'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Email address</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='josephatikulu@gmail.com'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Contact address</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='2, Metalbox , ikeja , Lagos'
                            />
                    </div>
                </div>
                <div>  
                    <div>
                        <label className='fw-500 lg:fs-700 text-gray-500'>ID Number</label>
                        <input 
                            type='text' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='223444829'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Relationship</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='Father'
                            />
                    </div>
                    <div className='mt-8'>
                        <label className='fw-500 lg:fs-700 text-gray-500'>Phone no</label>
                        <input 
                            type='email' 
                            className='p-3 rounded border mt-2 border-gray-400 w-full'
                            value='09000000000'
                            />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-16 text-center'>
            <button className='bg-red-500 px-36 py-5 rounded-md text-white fw-600'>Deactivate Customer</button>
        </div>
    </div>
  )
}

export default ProfileInfo