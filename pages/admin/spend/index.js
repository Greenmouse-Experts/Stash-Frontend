import React from 'react'
import Layout from '@/components/layouts/admin/Layout';
import TotalSpendChart from '@/components/admin/Spend/Charts/TotalSpend';
import { RiArrowDropDownLine } from 'react-icons/ri';
import SuccessfulCatChart from '@/components/admin/Spend/Charts/SuccessfulCat';
import TopSpendTable from '@/components/admin/Spend/tables/TopSpend';
import SpendCatChart from '@/components/admin/Spend/Charts/SpendCat';
import SpendersDataTable from '@/components/admin/Spend/tables/SpenderData';
import { BsFilter } from 'react-icons/bs';

const SpendPage = () => {
  return (
    <Layout>
        <div>
            <div className='text-3xl fw-600'>Spend</div>
            <div className='lg:flex mt-12'>
                <div className='w-4/12 lg:pr-4'>
                    <div className=''>
                        <div className='p-8 pl-0 bg-white shade rounded-md'>
                            <div className='pl-8 flex items-center justify-between'>
                                <p className='text-xl fw-600'>Total Spend</p>
                                <p className='px-2 border border-gray-200 rounded flex fw-500 items-center fs-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                            </div>
                            <div className='mt-8 pl-2'>
                                <TotalSpendChart/>
                            </div>
                        </div>
                        <div className='p-8 pl-0 mt-6 bg-white shade rounded-md'>
                            <div className='pl-8 flex items-center justify-between'>
                                <p className='text-xl fw-600'>Successful Categories</p>
                                <p className='px-2 border border-gray-200 rounded flex fw-500 items-center fs-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                            </div>
                            <div className='mt-8 pl-2'>
                                <SuccessfulCatChart/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-8/12 lg:pl-4 '>
                    <div className='p-6 pt-8 bg-white shade rounded-md'>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl fw-600'>Top Spenders</p>
                            <div className='flex items-center'>
                                <p className='fs-700 text-primary fw-500 mr-6'>See All</p>
                                <p className='px-2 border border-gray-300 flex items-center fs-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                            </div>
                        </div>
                        <div>
                            <TopSpendTable/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12 bg-white shade rounded-md p-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl fw-600 text-gray-500'>Spend Categories</p>
                    <div className='flex items-center'>
                        <p className='px-2 border border-gray-300 flex items-center fs-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                </div>
                <div className='mt-7'>
                    <SpendCatChart/>
                </div>
            </div>
            <div className='mt-12 rounded-md bg-white shade p-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl fw-600'>Spenders Data</p>
                    <div className='flex items-center'>
                        <p className='text-primary fw-600'>See all</p>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className='mt-7'>
                    <SpendersDataTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SpendPage