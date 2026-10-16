import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

const NavLinks = [
  {title : "Home" , link : "/"},
  {title : "About" , link : "/about"},
  {title : "Accessories" , link : "/accessories"},
  {title : "Blog" , link : "/blog"},
  {title : "Contact" , link : "/contact"}
]

function BtmHeader() {
  const [categories, setcategories] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(body => setcategories(body))

  }, [])

  const [isOpen , SetisOpen] = useState(false)

  return (
    <div className='btm_header'>
      <div className="container">
        <nav className="nav">


          <div className="category_nav">

            <div className="category_btn" onClick={() => SetisOpen(!isOpen)} >
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div className={`category_nav_list ${isOpen? "active" : ""}`} >
              {
                categories.map(category => (
                  <Link key={category.slug} to={category.slug}>{category.name}</Link>
                ))
              }
            </div>
          </div>

          <div className="nav_links">
             {
              NavLinks.map(item => (
                <li key={item.title } ><NavLink  to={item.link}>{item.title}</NavLink></li>
              ))
             }
          </div>
        </nav>
        <div className="sign_regs_icons">
          <Link to='/'><PiSignInBold /></Link>
          <Link to='/'><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  )
}

export default BtmHeader;
