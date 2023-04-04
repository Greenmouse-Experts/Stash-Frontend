import React from 'react'
import Layout from '@/components/layouts/admin/Layout';
import LoanStatusChart from '@/components/admin/loan/charts/LoanStatus';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ReqAppChart from '@/components/admin/loan/charts/ReqApp';
import LoanFeesChart from '@/components/admin/loan/charts/LoanFees';
import LoanInterestChart from '@/components/admin/loan/charts/LoanInterest';
import { BsFilter } from 'react-icons/bs';
import LoanInsuranceTable from '@/components/admin/loan/tables/LoanInsurance';
import LoanRepayTable from '@/components/admin/loan/tables/LoanRepay';
import Link from 'next/link';

const LoanPage = () => {
  return (
    <Layout>
        <div>
            <div>
                <div className='text-3xl fw-600'>SALAD Loans</div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Status</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanStatusChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Request and Approval</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <ReqAppChart/>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Fees</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanFeesChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Interest</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <LoanInterestChart/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <div className='text-3xl fw-600'>KOLLECT Loans</div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Status</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanStatusChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Request and Approval</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>Yearly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <ReqAppChart/>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Fees</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanFeesChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Interest</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <LoanInterestChart/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12 w-full p-8 bg-white shade rounded-md'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl text-gray-500 fw-600'>Loan Insurance</p>
                    <div className='flex items-center'>
                        <Link href='/loans' className='text-primary fw-600'>See all</Link>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className=''>
                    <LoanInsuranceTable/>
                </div>
            </div>
            <div className='mt-12 w-full p-8 bg-white shade rounded-md'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl text-gray-500 fw-600'>Loan Repayment</p>
                    <div className='flex items-center'>
                        <Link href='/loans' className='text-primary fw-600'>See all</Link>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className=''>
                    <LoanRepayTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default LoanPage