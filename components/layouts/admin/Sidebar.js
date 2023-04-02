"use client"
import Image from 'next/image';
import Link from 'next/link';
import { BsBank, BsGear } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineCreditCard } from 'react-icons/hi'
import { Sidebar, SubMenu , Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FaRegUser } from 'react-icons/fa';
import { FiLifeBuoy } from 'react-icons/fi';
import { TfiShiftLeft } from 'react-icons/tfi';

export default function SidebarLayout() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
      <div className='left-0 fixed h-screen bg-secondary'>
        <Sidebar 
            customBreakPoint="960px"
            className='h-screen w-64 fs-700 fw-500 text-white '
            backgroundColor='linear-gradient(90deg, #6B5AED 0%, #8D7EFF 100%)'
            >
            <div className='pb-5'>
                <Link href='/'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679578815/Stash/Group_48096158_1_c9v8u8.png' alt='logo' width={300} height={300} className='w-36 mb-5 ml-6 pt-5 '/>
                </Link>
            </div>
            <Menu
                transitionDuration={600}
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                      if (level === 0)
                        return {
                          color: disabled ? '#ffff' : '#fff',
                          backgroundColor: active ? '#eecef9' : undefined,
                          "&:hover": {
                            backgroundColor: "#6151DD !important",
                            color: "white !important",
                            borderRadius: "10px !important",
                            fontWeight: "bold !important"
                          },
                        };
                    },
                  }}
                >
                <MenuItem
                    component={<Link href="/admin" />}
                    icon={<MdOutlineDashboard />}
                    > 
                    Dashboard
                </MenuItem>
                <MenuItem
                    component={<Link href="/admin/save" />}
                    icon={<BsBank />}
                    > 
                    Save
                </MenuItem>
                <MenuItem
                    component={<Link href="/admin/spend" />}
                    icon={<HiOutlineCreditCard/>}
                    > 
                    Spend
                </MenuItem>
                <MenuItem
                    component={<Link href="/admin/loans" />}
                    icon={<BsBank />}
                    > 
                    Loans
                </MenuItem>
                <MenuItem
                    component={<Link href="/admin/customers" />}
                    icon={<FaRegUser/>}
                    > 
                    Customers
                </MenuItem>
                <MenuItem
                    component={<Link href="/admin/complaints" />}
                    icon={<FiLifeBuoy />}
                    > 
                    Complaints
                </MenuItem>
                <SubMenu
                    label='Settings'
                    icon={<BsGear />}
                    >
                    <MenuItem
                        component={<Link href="/admin/settings" />}
                        > 
                        Manage admin
                    </MenuItem>
                    <MenuItem
                        component={<Link href="/admin/settings/customers" />}
                        > 
                        Manage user
                    </MenuItem>
                </SubMenu>
                <MenuItem
                    className='mt-12'
                    component={<Link href="/save" />}
                    icon={<TfiShiftLeft />}
                    > 
                    Logout
                </MenuItem>
            </Menu>
        </Sidebar>
      </div>
  );
}