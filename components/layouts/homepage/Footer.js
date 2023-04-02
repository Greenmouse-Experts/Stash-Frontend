import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='pt-16'>
        <div className='box'>
          <div className='grid grid-cols-6 gap-x-12'>
            <div>
              <Link href='/'>
                  <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500697/Stash/Group_48096160_vvslzo.png' alt='logo' width={300} height={300} className='w-36 lg:w-44'/>
              </Link>
            </div>
            <div>
              <p className='fw-500 text-blac mb-5 mt-2'>Features</p>
              <ul>
                <li className='fs-400 text-gray-500'><Link href='/'>Stash account</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Payments</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Cards</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Investments</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Credit report</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Loans</Link></li>
              </ul>
            </div>
            <div>
              <p className='fw-500 text-blac mb-5 mt-2'>Learn more</p>
              <ul>
                <li className='fs-400 text-gray-500'><Link href='/'>Personal loans</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Get loans fast</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Loans in Nigeria</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Salad loan</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>SME loans</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Stash app</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Loans for business</Link></li>
              </ul>
            </div>
            <div>
              <p className='fw-500 text-blac mb-5 mt-2'>Company</p>
              <ul>
                <li className='fs-400 text-gray-500'><Link href='/'>About Us</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Media</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Careers</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Blog</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Customers</Link></li>
              </ul>
            </div>
            <div>
              <p className='fw-500 text-blac mb-5 mt-2'>Help</p>
              <ul>
                <li className='fs-400 text-gray-500'><Link href='/'>FAQs</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Knowledge base</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Contact</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Community</Link></li>
              </ul>
            </div>
            <div>
              <p className='fw-500 text-blac mb-5 mt-2'>Legal</p>
              <ul>
                <li className='fs-400 text-gray-500'><Link href='/'>Privacy policy</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Terms & Conditions</Link></li>
                <li className='fs-400 text-gray-500 mt-3'><Link href='/'>Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className='mt-12 flex items-center justify-between'>
            <div className='mt-6 flex'>
                <div className='w-24 lg:w-28 h-6 lg:h-8 overflow-hidden'>
                    <Link href='/' >
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500698/Stash/play-store.png_nlioky.png' alt='banner' width={200} height={100} className='w-full h-full rounded'/>
                    </Link>
                </div>
                <div className='w-24 lg:w-28 h-6 ml-6 lg:h-8 overflow-hidden'>
                    <Link href='/' >
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679500698/Stash/app-store.png_mrozlu.png' alt='banner' width={200} height={100} className='w-full h-full rounded'/>
                    </Link>
                </div>
            </div>
            <div>
              <ul className='flex'>
                <li className=''><Link href='/'><Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f10239cf68e_008-facebook.svg_hiqtxl.png' alt='banner' width={100} height={100} className='w-6'/></Link></li>
                <li className=' ml-3'><Link href='/'><Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5fe49c9cf68c_001-twitter.svg_arydlo.png' alt='banner' width={100} height={100} className='w-6'/></Link></li>
                <li className=' ml-3'><Link href='/'><Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659089/Stash/6194b7fcf08b5fa9e79cf68d_011-instagram.svg_nk4wcu.png' alt='banner' width={100} height={100} className='w-6'/></Link></li>
                <li className=' ml-3'><Link href='/'><Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f79329cf68f_007-youtube.svg_wyxecr.png' alt='banner' width={100} height={100} className='w-6'/></Link></li>
                <li className=' ml-3'><Link href='/'><Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f76879cf692_010-linkedin.svg_ezevd0.png' alt='banner' width={100} height={100} className='w-6'/></Link></li>
                <li className=' ml-3'><Link href='/'><Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679659088/Stash/6194b7fcf08b5f19d39cf68b_006-tumblr.svg_ecn9fj.png' alt='banner' width={100} height={100} className='w-6'/></Link></li>
              </ul>
            </div>
          </div>
          <div className='mt-12 mb-6'>
            <p className='lg:w-11/12 mx-auto text-center text-gray-500 fs-300'>©2023 Stash is a financial service provided by Stash Fintech Ltd (RC 1642222), licensed and regulated by the Central Bank of Nigeria (CBN). We empower individuals with credit, simple payments solutions, high-yield investment opportunities, and easy-to-use tools for personal financial management. Registered address: Plot 642C Akin Adesola St. Lagos 101233 Nigeria 🇳🇬</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer