"use client"
import CustomerLoan from '@/components/admin/customers/features/CustomerLoan';
import CustomerSave from '@/components/admin/customers/features/CustomerSave';
import CustomerSpend from '@/components/admin/customers/features/CustomerSpend';
import ProfileInfo from '@/components/admin/customers/features/ProfileInfo';
import Layout from '@/components/layouts/admin/Layout';
import Image from 'next/image'
import React, {useState} from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const CustomerDetails = () => {

    const [open, setOpen] = useState(1);
  
    const handleOpen = (value) => {
        setOpen(open === value ? value : value);
    };
    const activeStyle = {
        borderBottom: "4px solid #6B5AED",
        color: "black",
        transition: "0.6s"
    }
  
    return (
      <Layout>
        <div>
            <div className='md:flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680003695/Stash/profile_rl7x7s.jpg' alt='banner' width={200} height={100} className='w-28 h-28 circle'/>
                    <div className='ml-6'>
                    <p className='text-2xl fw-500'>Paul Ogunleye</p>
                    <p>Tier 1</p>
                    </div>
                </div>
                <div className='flex mt-6 md:mt-0 items-center'>
                    <div className='fw-500 flex items-center border rounded border-gray-300 px-3 py-2'>
                        <p className='fs-700'>Restrict</p>
                        <RiArrowDropDownLine className='ml-3 text-2xl'/>
                    </div>
                    <div className='fw-500 flex items-center ml-6 border rounded border-gray-300 px-3 py-2'>
                        <p className='fs-700'>Flag</p>
                        <RiArrowDropDownLine className='ml-3 text-2xl'/>
                    </div>
                </div>
            </div>
            <div className='grid gap-y-12 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-10 mt-12'>
            <div className='p-8 bg-white bord-b border-purple-700 rounded-t-lg'>
                <p className='fw-500 text-gray-500'>Total Spend</p>
                <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                <p className='ml-8 fw-600 text-gray-500'>(70)</p>
            </div>
            <div className='p-8 bg-white bord-b border-orange-300 rounded-t-lg'>
                <p className='fw-500 text-gray-500'>Total Wallet</p>
                <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                <p className='ml-8 fw-600 text-gray-500'>(70)</p>
            </div>
            <div className='p-8 bg-white bord-b border-green-500 rounded-t-lg'>
                <p className='fw-500 text-gray-500'>Total Savings</p>
                <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                <p className='ml-8 fw-600 text-gray-500'>(70)</p>
            </div>
            <div className='p-8 bg-white bord-b border-red-600 rounded-t-lg'>
                <p className='fw-500 text-gray-500'>Total Loans</p>
                <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                <p className='ml-8 fw-600 text-gray-500'>(70)</p>
            </div>
            </div>
            <div className='mt-12 lg:mt-16'>
                <div className='w-full oveflow-x-auto'>
                    <ul className="flex w-full oveflow-x-auto text-gray-400 fs-500">
                        <li
                            className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                            style={(open === 1 ? activeStyle : undefined)}
                            onClick={() => handleOpen(1)}
                        >
                        <span className=''>Save</span>
                        </li>
                        <li
                            className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                            style={(open === 2 ? activeStyle : undefined)}
                            onClick={() => handleOpen(2)}
                        >
                            <span className=''>Spend</span>
                        </li>
                        <li
                            className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                            style={(open === 3 ? activeStyle : undefined)}
                            onClick={() => handleOpen(3)}
                        >
                            <span className=''>Loans</span>
                        </li>
                        <li
                            className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                            style={(open === 4 ? activeStyle : undefined)}
                            onClick={() => handleOpen(4)}
                        >
                            <span className=''>Profile Info</span>
                        </li>
                    </ul>
                </div>
                <div className='bg-white min-h-96 p-8 rounded shade'>
                    {
                        open === 1 ? <CustomerSave/> : ""
                    }
                    {
                        open === 2 ? <CustomerSpend/> : ""
                    }
                    {
                        open === 3 ? <CustomerLoan/> : ""
                    }
                    {
                        open === 4 ? <ProfileInfo/> : ""
                    }
                </div>
            </div>
        </div>
      </Layout>
    )
  }
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default CustomerDetails