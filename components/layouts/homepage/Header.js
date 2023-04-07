import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='py-4'>
      <div className='box'>
        <div className='flex justify-between items-center'>
          <div className='w-3/12'>
            <Link href='/'>
                <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679573442/Stash/Group_48096160_2_sax9kt.png' alt='logo' width={300} height={300} className='w-36 lg:w-44'/>
            </Link>
          </div>
          <div className='hidden lg:block w-5/12'>
            <ul className='flex justify-center items-center'>
              <li className='flex items-center fw-500'>
                <p>Features</p> <span className='ml-1 mt-1'><RiArrowDropDownLine className='text-2xl'/></span>
              </li>
              <li className='flex px-12 lg:px-16 items-center fw-500'>
                <p>Company</p> <span className='ml-1 mt-1'><RiArrowDropDownLine className='text-2xl'/></span>
              </li>
              <li className='flex items-center fw-500'>
                <p>Support</p> <span className='ml-1 mt-1'><RiArrowDropDownLine className='text-2xl'/></span>
              </li>
            </ul>
          </div>
          <div className='w-4/12 hidden lg:flex justify-end'>
            <Link href='/auth'>
              <button className='hover:shadow-md px-6 py-3 fw-500 lg:mr-3'>Sign In</button>
            </Link>
            <Link href='/auth/register'>
              <button className='btn-primary px-7 py-3'>Create a free account</button>
            </Link>
          </div>
          <div className='lg:hidden'>
              <HiMenuAlt2 className='text-xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header