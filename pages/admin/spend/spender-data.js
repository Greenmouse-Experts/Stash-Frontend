import SpendersDataTable from '@/components/admin/Spend/tables/SpenderData';
import Layout from '@/components/layouts/admin/Layout'
import Link from 'next/link';
import React from 'react'
import { BsDownload, BsFilter } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SpendersDataPage = () => {
  return (
    <Layout>
        <div>
            <div className='flex lg:pt-6 mb-12 items-end'>
                <div className='text-3xl fw-600'>Spenders Data</div>
                <div className='flex text-gray-500 items-center lg:ml-7'>
                    <p className='fs-700'><Link href='/admin/save'>Spend</Link></p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    <p className='text-primary fw-500'>Spenders Data</p>
                </div>
            </div>
            <div className='bg-white p-5 rounded shade'>
                <div className='flex justify-end py-5'>
                    <div className='flex'>
                        <div className='flex border border-gray-300 rounded px-3 py-1 items-center fw-500'>
                            <p>Export</p>
                            <BsDownload className='ml-2'/>
                        </div>
                        <div className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>
                            Filter <BsFilter className='ml-1'/>
                        </div>
                    </div>
                </div>
                <SpendersDataTable/>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SpendersDataPage