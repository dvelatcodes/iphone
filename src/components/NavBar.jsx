import {appleImg, bagImg, searchImg} from '../utils'
const NavBar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple icon" width={14} height={18} />

        <div>
          {['Phones', 'Macbooks', 'Tablets'].map((device)=><div key={device}>{device}</div>)}
        </div>
        
        <div>
          <img src={searchImg} alt="search" width={18} height={18}/>
          <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar