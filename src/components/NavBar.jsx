import {appleImg, bagImg, searchImg} from '../utils';
import { navLists } from '../constant';
const NavBar = () => {
  return (
    <header className='w-full py-5 px-5 sm:py-10 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="apple icon" width={14} height={18} />

        <div  className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((device)=><div key={device} 
          className='px-5 text-sm text-gray hover:text-white cursor-pointer transition-all'
          >{device}</div>)}
        </div>
        
        <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1 '>
          <img src={searchImg} alt="search" width={18} height={18}/>
          <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar