import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DownloadApp = () => {
  return (
    <div className='bg-secondary'>
        <div className='h-01 grid place-content-center'>
            <div className='text-center'>
                <p className='fw-600 text-2xl lg:text-4xl text-white px-2'>A digital bank made just for you</p>
                <p className='text-gray-100 lg:w-8/12 mx-auto mt-6 text-center px-2'>Open a new Stash account from your phone or computer and follow the simple on-screen steps to register for an account in minutes.</p>
                <div className='mt-10 overflow-hidden flex justify-center'>
                    <div className='w-24 lg:w-40 h-7 lg:h-12 overflow-hidden'>
                        <Link href='/' >
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679657494/Stash/Group_9863_lth9fk.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                        </Link>
                    </div>
                    <div className='w-24 lg:w-40 h-7 ml-4 lg:h-12 overflow-hidden'>
                        <Link href='/' >
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679657494/Stash/Group_9862_fiuf5m.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                        </Link>
                    </div>
                    <div className='w-24 lg:w-40 h-7 ml-4 lg:h-12 overflow-hidden'>
                        <Link href='/' >
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679657494/Stash/div_xzz9uy.png' alt='banner' width={800} height={800} className='w-full h-full rounded'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp