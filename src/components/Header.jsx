// import propTypes 
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text,bgColor, textColor}) {
  const headerstyles = {
   backgroundColor:  bgColor,
   color: textColor,

  }
  return (
    <header style={headerstyles}>
        <div className="container">
          
          <Link to = '/' style={{textDecoration:"none", color:"darkgreen"}}>
          <h2>{text}</h2>
          </Link> 
        </div>
    </header>
  )
}

//-----defaultProps--
 Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'skyblue',
  textColor: 'darkgreen'
 }  

 //---------propTypes script----
 Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor:PropTypes.string,
 }

export default Header 