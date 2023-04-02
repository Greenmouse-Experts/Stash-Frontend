import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='w-full px-4 py-3'>
      <div className='flex w-full  items-center justify-between'>
        <div>
          <div className='flex items-center p-2 lg:w-72 border rounded-lg'>
            <AiOutlineSearch className='text-xl mr-2'/>
            <input 
              className='w-full outline-none'
              placeholder='Search for data, user, docs'
            />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='relative'>
            <BsBell className='text-2xl'/>
            <p className='w-3 h-3 circle bg-red-600 absolute -top-1 right-0'></p>
          </div>
          <div className='ml-16 flex items-center'>
            <Link href='/admin/profile'>
              <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679581107/Stash/PHOTO-2022-10-21-09-00-15_1_z2kh53.png' alt='logo' width={300} height={300} className='w-12 circle'/>
            </Link>
            <div className='flex items-center ml-4'>
              <div>
                <p>Timi</p>
                <p className='text-gray-600 mb-1 fs-500'>CEO</p>
              </div>
              <RiArrowDropDownLine className='text-2xl'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header