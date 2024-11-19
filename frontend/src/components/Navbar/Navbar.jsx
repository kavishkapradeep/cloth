import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'

const Navbar = () => {

    const[menu,setMenu] =useState("home");
    const navigate =useNavigate();
    //sidebar setup
    const [isOpen,setIsOpen] = useState(false);
    

  return (
    <div className='navbar'>
        <Link to='/' ><img src={assets.logo} alt=""  className='logo' /></Link>
                        
        <ul className={`navbar-menu ${isOpen?"active":""}`}>         
            <li onClick={()=>{setMenu("home")}}><Link to='/'  >HOME</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("collection")}}> <Link to='/collection' >COLLECTION</Link>{menu==="collection"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link to='/about' >ABOUT</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link to='/contact' >CONTACT</Link>{menu==="contact"?<hr/>:<></>}</li>                   
        </ul>
        
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-profile">
                <Link><img src={assets.profile_icon} alt="" /></Link>
                <ul className="navbar-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><p>Orders</p></li>
                    <hr />
                    <li><p>LogOut</p></li>
                </ul>
            </div>
            <div className="navbar-search-icon">
                <Link><img src={assets.cart_icon} alt="" /></Link>
                <div className="dot"><p className='cart'>2</p></div>
            </div>
            <div className="navbar-sidebar">
                <img src={assets.menu_icon} alt="" onClick={()=>setIsOpen(!isOpen)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar