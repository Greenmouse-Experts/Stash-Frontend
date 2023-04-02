import React from 'react'
import Layout from '@/components/layouts/admin/Layout';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MangeAdminTable from '@/components/admin/settings/tables/MangeAdmin';

const index = () => {
  return (
    <Layout>
        <div>
            <div className='flex items-center'>
                <div className='text-3xl fw-600'>Manage Admin</div>
                <div className='flex text-gray-500 items-center ml-16'>
                    <p>Settings</p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    <p>Manage admin</p>
                </div>
            </div>
            <div className='mt-12 overflow-hidden rounded-md bg-white shade p-8'>
                <div className='text-end'>
                    <button className='btn-primary px-8 py-2'>Invite</button>
                </div>
                <div className='mt-7 !max-w-full overflow-hidden'>
                    <MangeAdminTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default index