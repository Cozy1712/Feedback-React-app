import React from 'react'
import { FaAddressCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ContactPageLink() {
  return (
    <div className='about-link'>
        <Link to="/contact">
            <FaAddressCard size={25}/>
        </Link>
         
    </div>
  )
}

export default ContactPageLink