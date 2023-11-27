import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoHomeFill } from 'react-icons/go'
import { FaUser, FaClipboardList } from 'react-icons/fa'
import { GrDocumentConfig } from "react-icons/gr"
import './styles.sass'

const Navbar = () => {
  const [activeClass, setActiveClass] = useState(0)

  const handleLinkClick = ( index ) => {
    setActiveClass(index)
  }

  return (
    <nav className='navbar'>
      <Link 
        className={`navbar__option ${activeClass === 0 ? 'active' : ''}`}
        onClick={() => handleLinkClick(0)}
        to='/'
      >
        <GoHomeFill />
      </Link>
      <Link 
        className={`navbar__option ${activeClass === 1 ? 'active' : ''}`}
        onClick={() => handleLinkClick(1)}
        to='/basic-module'
      >
        <GrDocumentConfig />
      </Link>
      <Link 
        className={`navbar__option ${activeClass === 2 ? 'active' : ''}`}
        onClick={() => handleLinkClick(2)}
        to='/todo-list'
      >
        <FaClipboardList />
      </Link>
      <Link 
        className={`navbar__option ${activeClass === 3 ? 'active' : ''}`}
        onClick={() => handleLinkClick(3)}
        to='/edit-account'
      >
        <FaUser />
      </Link>
    </nav>
  )
}

export default Navbar
