import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div>
        <div className='section'>
            <div className='box'>
                <div className='lg:w-11/12 mx-auto lg:flex items-center flex-row-reverse'>
                    <div className='lg:w-6/12'>
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500703/Stash/Stash_gxndry.png' alt='banner' width={800} height={800} className='w-10/12 '/>
                    </div>
                    <div className='lg:w-6/12 lg:mb-16'>
                        <p className='lg:text-7xl text-2xl fw-700'>Digital Banking with you in mind</p>
                        <p className='mt-7 fw-500 xl:w-10/12'>Stash is a digital banking app that helps users  spend, save, borrow and manage money effortlessly.</p>
                        <div className='mt-6 flex'>
                            <div className='w-24 lg:w-36 h-7 lg:h-10 overflow-hidden'>
                                <Link href='/' >
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500698/Stash/play-store.png_nlioky.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                                </Link>
                            </div>
                            <div className='w-24 lg:w-36 h-7 ml-6 lg:h-10 overflow-hidden'>
                                <Link href='/' >
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500698/Stash/app-store.png_mrozlu.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                                </Link>
                            </div>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <div className='w-28  h-6 overflow-hidden'>
                                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500697/Stash/Group_48096176_y5ocrz.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                            </div>
                            <div className='w-28 h-4 mt-1  ml-5 overflow-hidden'>
                                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679566714/Stash/Group_48096175_dn3kd1.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner