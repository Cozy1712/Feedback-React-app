import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to="/about">
            <FaQuestion size={25}/>
        </Link>
        <Link to="/contact">
            <FaAddressBook size={25}/>
        </Link>      
        
        
    </div>
  )
}

export default AboutIconLink