import React from 'react'
import Layout from '@/components/layouts/admin/Layout';
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import TopSavers from '@/components/admin/save/tables/TopSavers';
import SavingChart from '@/components/admin/save/charts/Saving';
import WithdrawalChart from '@/components/admin/save/charts/Withdrawal';
import MaturedSavingsChart from '@/components/admin/save/charts/MaturedSavings';
import ImmaturedSavingsChart from '@/components/admin/save/charts/ImmaturedSavings';
import TotalInterestChart from '@/components/admin/save/charts/TotalInterest';
import TotalWithdrawalChart from '@/components/admin/save/charts/TotalWithdrawal';
import WithholdingTaxChart from '@/components/admin/save/charts/WithholdingTax';
import FailedWithdrawalChart from '@/components/admin/save/charts/FailedWithdrawal';
import CardExpiryTable from '@/components/admin/save/tables/CardExpiry';
import NairaDollarChart from '@/components/admin/save/charts/NairaDollar';
import SaversDataTable from '@/components/admin/save/tables/SaversData';
import WithdrawalDataTable from '@/components/admin/save/tables/WithdrawalsData';
import { RiArrowDropDownLine } from 'react-icons/ri';

const SavePage = () => {
  return (
    <Layout>
        <div className='w-full'>
            <div className='text-3xl fw-600'>Save</div>
            <div className='lg:flex mt-12'>
                <div className='w-5/12 lg:pr-4'>
                    <div className='p-8 lg:pb-12 bg-white shade rounded-md'>
                        <p className='text-xl fw-500'>Change Interest Rate</p>
                        <div className='mt-10 flex'>
                            <div className='border-r pr-4 w-6/12 border-gray-400'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019319/Stash/Types_of_savings_jwvwmb.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Goal Savings</p>
                                    <p className='fs-400 mt-2'>14%</p>
                                </div>
                            </div>
                            <div className='pl-4 w-6/12'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019305/Stash/Types_of_savings_ik23q7.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Wallet Savings</p>
                                    <p className='fs-400 mt-2'>14%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 flex'>
                            <div className='border-r pr-4 w-6/12 border-gray-400'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019348/Stash/Types_of_savings_z6pvel.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Fixed Savings</p>
                                    <p className='fs-400 mt-2'>14% to 22%</p>
                                </div>
                            </div>
                            <div className='pl-4 w-6/12'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019374/Stash/Types_of_savings_ed8nme.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Save as you spend</p>
                                    <p className='fs-400 mt-2'>14% <span className='text-gray-400'>(SAYS)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 flex'>
                            <div className='border-r pr-4 w-6/12 border-gray-400'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019395/Stash/Types_of_savings_xcbi1i.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>US Dollar Savings</p>
                                    <p className='fs-400 mt-2'>14%</p>
                                </div>
                            </div>
                            <div className='pl-4 w-6/12'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019374/Stash/Types_of_savings_ed8nme.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Save as you earn</p>
                                    <p className='fs-400 mt-2'>14% <span className='text-gray-400'>(SAYE)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-7/12 lg:pl-4 '>
                    <div className='p-6 pt-8 bg-white shade rounded-md'>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl fw-600'>Top Savers</p>
                            <div className='flex items-center'>
                                <p className='fs-700 text-primary fw-500 mr-6'>See All</p>
                                <p className='px-2 border border-gray-300 flex items-center fs-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                            </div>
                        </div>
                        <div>
                            <TopSavers/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Savings</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8'>
                        <SavingChart/>
                    </div>
                </div>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Withdrawals</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8'>
                        <WithdrawalChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 pl-0 bg-white shade rounded-md'>
                    <div className='pl-8 flex items-center justify-between'>
                        <p className='text-xl fw-600'>Matured Savings</p>
                        <p className='px-2 border border-gray-300 flex fw-500 items-center fs-500'>Monthly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8 pl-2'>
                        <MaturedSavingsChart/>
                    </div>
                </div>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Immature Savings</p>
                        <p className='px-2 border border-gray-300 flex fw-500 items-center fs-500'>Yearly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8'>
                        <ImmaturedSavingsChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 pl-0 bg-white shade rounded-md'>
                    <div className='flex lg:pl-8 items-center justify-between'>
                        <p className='text-xl fw-600'>Total Interest</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>Monthly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8 pl-2'>
                        <TotalInterestChart/>
                    </div>
                </div>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Maturing Savings</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>Monthly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8'>
                        <TotalWithdrawalChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Total Withdrawal</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>Monthly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8'>
                        <TotalWithdrawalChart/>
                    </div>
                </div>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Withholding Tax</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>Monthly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8'>
                        <WithholdingTaxChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 pl-0 bg-white shade rounded-md'>
                    <div className='flex lg:pl-8 items-center justify-between'>
                        <p className='text-xl fw-600'>Failed Withdrawals</p>
                        <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>Monthly <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                    </div>
                    <div className='mt-8 pl-2'>
                        <FailedWithdrawalChart/>
                    </div>
                </div>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Cards Expiry Dates</p>
                        <p className='px-2 fs-700 text-primary fw-500'>See all</p>
                    </div>
                    <div className='mt-8'>
                        <CardExpiryTable/>
                    </div>
                </div>
            </div>
            <div className='mt-12 rounded-md bg-white shade p-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl fw-600'>Naira and Dollars</p>
                    <p className='px-2 border border-gray-300 flex items-center fs-500 fw-500'>All time <RiArrowDropDownLine className='ml-2 text-xl'/></p>
                </div>
                <div className='mt-4 mx-auto w-6/12 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <p className='w-6 h-2 bg-secondary mt-1'></p>
                        <p className='px-4'>NGN</p>
                        <p className='fw-600 fs-700'>1,000,000 (300)</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='w-6 h-2 bg-secondary mt-1'></p>
                        <p className='px-4'>USD</p>
                        <p className='fw-600 fs-700'>1,000,000 (300)</p>
                    </div>
                </div>
                <div className='mt-7'>
                    <NairaDollarChart/>
                </div>
            </div>
            <div className='mt-12 rounded-md bg-white shade p-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl fw-600'>Savers Data</p>
                    <div className='flex items-center'>
                        <p className='text-primary fw-600'>See all</p>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className='mt-7'>
                    <SaversDataTable/>
                </div>
            </div>
            <div className='mt-12 overflow-hidden rounded-md bg-white shade p-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl fw-600'>Withdrawal Data</p>
                    <div className='flex items-center'>
                        <p className='text-primary fw-600'>See all</p>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className='mt-7 !max-w-full overflow-hidden'>
                    <WithdrawalDataTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SavePage