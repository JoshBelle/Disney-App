import logo from '../assets/images/logo.svg'
import { HiHome, HiMagnifyingGlass , HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useState } from 'react';


const Header = () => {
  const [toggle, setToggle] = useState(false)

  const menu = [
        {
            name: 'HOME',
            icon: HiHome,
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus,
        },
        {
            name: 'ORIGINALS',
            icon: HiStar,
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle,
        },
        {
            name: 'SERIES',
            icon: HiTv,
        },
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
            <div className='hidden md:flex gap-8'>
                {menu.map((item) => <HeaderItem name={item.name} Icon={item.icon}/>)}
            </div>
            <div className='flex md:hidden gap-6'>
                {menu.map((item, index) => index<3&&<HeaderItem name={''} Icon={item.icon}/>)}
                <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    {toggle && <div className='absolute mt-3 bg-[#121212] p-3 border-[1px] border-gray-700 px-5 py-4'>
                    {menu.map((item, index) => index>2&&<HeaderItem name={item.name} Icon={item.icon}/>)}
                    </div>}
                </div>
            </div>
        </div>
        <img src='https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-stylish-hairstyle-glasses_1142-40217.jpg?t=st=1708006166~exp=1708009766~hmac=88ad7d8d96b6b090c4377e0c8f83730ffbf29df94642b2707a12e117769d92b6&w=740' className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header
