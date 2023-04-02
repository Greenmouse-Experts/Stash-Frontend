import Image from 'next/image'
import React from 'react'

const Future = () => {
  return (
    <div>
        <div className='section'>
            <div className='box'>
                <div className='grid grid-cols-3 gap-x-12'>
                    <div className='lg:mt-3'>
                        <p className='fw-600 text-5xl'>The future of banking is digital</p>
                        <p className='mt-6'>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
                        <div className='mt-7 text-white'>
                            <button className='px-6 py-3 fw-600 bg-black rounded-lg'>Start Saving</button>
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 gap-12'>
                        <div className='bg-light grid h-80 items-between rounded-md lg:p-8'>
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679648240/Stash/piggy_df88262015.png_h955za.png' alt='banner' width={800} height={800} className='w-12'/>
                            <div className=''>
                                <p className='fw-600 mb-2'>Automated Savings</p>
                                <p>Build a dedicated savings faster on your terms automatically or manually.</p>
                            </div>
                            <div className=' flex items-center'>
                                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679649406/Stash/Frame_mczmtf.png' alt='banner' width={800} height={800} className='w-8'/>
                                <p className='fw-500 pl-1'>Piggybank</p>
                            </div>
                        </div>
                        <div className='bg-light grid h-80 items-between rounded-md lg:p-8'>
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679648240/Stash/safelock_4e737ba7d3.png_jtbnbz.png' alt='banner' width={800} height={800} className='w-12'/>
                            <div className=''>
                                <p className='fw-600 mb-2'>Fixed Savings</p>
                                <p>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
                            </div>
                            <div className=' flex items-center'>
                                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679649450/Stash/Frame_ywwfdj.png' alt='banner' width={800} height={800} className='w-8'/>
                                <p className='fw-500 pl-1'>Safelock</p>
                            </div>
                        </div>
                        <div className='bg-light grid h-80 items-between rounded-md lg:p-8'>
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679648240/Stash/target_6c049f3410.png_vrwj1y.png' alt='banner' width={800} height={800} className='w-12'/>
                            <div className=''>
                                <p className='fw-600 mb-2'>Goal-oriented Savings</p>
                                <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                            </div>
                            <div className=' flex items-center'>
                                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679649469/Stash/Frame_pxmz5l.png' alt='banner' width={800} height={800} className='w-8'/>
                                <p className='fw-500 pl-1'>Target Savings</p>
                            </div>
                        </div>
                        <div className='bg-light  grid h-80 items-between  rounded-md lg:p-8'>
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679648240/Stash/flex_d090f8bce2.png_qxxr3h.png' alt='banner' width={800} height={800} className='w-12'/>
                            <div className=''>
                                <p className='fw-600 mb-2'>Flexible Savings</p>
                                <p>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
                            </div>
                            <div className=' flex items-center'>
                                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679649343/Stash/Frame_yr6xcu.png' alt='banner' width={800} height={800} className='w-8'/>
                                <p className='fw-500 pl-1'>Flex Naira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Future