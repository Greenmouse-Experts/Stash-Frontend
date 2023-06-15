import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <div>
                <label className='text-[#282828] fs-500'>Your Full Name</label>
                <input type='text' className='border-0 bg-[#F7F7F7] w-full p-2 mt-2 rounded'/>
            </div>
            <div className='mt-4'>
                <label className='text-[#282828] fs-500'>Your Valid Email</label>
                <input type='email' className='border-0 bg-[#F7F7F7] w-full p-2 mt-2 rounded'/>
            </div>
            <div className='mt-4'>
                <label className='text-[#282828] fs-500'>Phone Number</label>
                <input type='tel' className='border-0 bg-[#F7F7F7] w-full p-2 mt-2 rounded'/>
            </div>
            <div className='mt-4'>
                <label className='text-[#282828] fs-500'>How did you hear about us?</label>
                <select className='border-0 bg-[#F7F7F7] w-full p-2 mt-2 rounded'>
                    <option></option>
                    <option>Facebook</option>
                    <option>Google</option>
                    <option>Referral</option>
                </select>
            </div>
            <div className='mt-4'>
                <label className='text-[#282828] fs-500'>Message</label>
                <textarea type='text' className='border-0 bg-[#F7F7F7] w-full p-2 mt-2 rounded h-24'/>
            </div>
            <div className='mt-8'>
                <button className='btn-primary w-full py-2 lg:py-3'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm