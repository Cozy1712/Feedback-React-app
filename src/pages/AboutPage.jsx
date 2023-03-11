import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
       <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p> version: 1.0.0</p>
        <p><Link to = '/contact' style={{textDecoration:"none"}}>Contact Us </Link></p>
        <p>
          <Link to = '/' style={{textDecoration:"none"}}>Back to home </Link>
        </p>
       </div>
    </Card>
  )

}

export default AboutPage