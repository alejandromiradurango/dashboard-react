import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCar } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
    >

    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu, setActiveMenu} = useStateContext();

  return (
    <div className='flex justify-between md:mx-6 p-2 relative'>
      <NavButton title="Menu" customFunc={() => setActiveMenu((prev) => !prev)} color="blue" icon={<AiOutlineMenu />}/>
    </div>
  )
}

export default Navbar