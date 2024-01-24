import React from 'react'
import '../styles/header.css'
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_lignt from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'
import { useNavigate } from 'react-router-dom'
function Header({theme,setTheme}) {
  const navigate=useNavigate()

const handleTheme=()=>{
    if(theme=='light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }

}
console.log(theme);
  return (
    <div className={`navbar`}>
      <div className="container">
          {/* <img src="" alt="" className="logo" /> */}
          {
            theme=='light' ?
            <i onClick={()=>navigate('/')}  class="fa-solid fa-address-book fa-5x text-dark"></i>
            :
            <i onClick={()=>navigate('/')}  class="fa-solid fa-address-book fa-5x text-white"></i>


          }
          
            
          
        <ul>
            <li onClick={()=>navigate('/home')}> Home</li>
            <li onClick={()=>navigate('/add')}>Add Contact</li>
            <li>Features</li>
            <li onClick={handleTheme}>Change Theme</li>
        </ul>

        <div className="search-box">
            <input type="text" name="" placeholder='Search' id="" />
            <img src={theme=='light'?search_icon_lignt:search_icon_dark} alt="" />
        </div>
        <img onClick={handleTheme} src={theme=='light'?toggle_light:toggle_dark} alt="" className="toggle-icon" />
        
      </div>
      
    </div>
  )
}

export default Header
